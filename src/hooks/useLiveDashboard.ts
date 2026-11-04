"use client";

import { useEffect, useState } from "react";

/**
 * Deterministic "live" data for the hero dashboard mock.
 *
 * Orders arrive through the day following a business-hours curve (Maputo time),
 * with a seeded random spread per day. Because everything is derived from the
 * clock, every visitor sees the same numbers, and they keep growing in real time.
 */

const DAY_MS = 86_400_000;
const MAPUTO_OFFSET_MS = 2 * 3_600_000; // CAT, UTC+2, no DST
const MINUTES_SAVED_PER_ORDER = 1.4;
const SYNC_INTERVAL_MS = 20_000;
const TICK_MS = 500;

// Workflow step completion times after an order arrives (ms)
const STEP_DELAYS = [0, 1_200, 2_600];

// mulberry32-style hash -> [0, 1)
function rand(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4_294_967_296;
}

// Relative order volume by minute of day: morning and afternoon peaks
const MINUTE_WEIGHTS = (() => {
  const weights = new Float64Array(1440);
  let total = 0;
  for (let m = 0; m < 1440; m++) {
    const h = m / 60;
    const w =
      0.08 +
      Math.exp(-((h - 10.5) ** 2) / (2 * 1.6 ** 2)) +
      0.85 * Math.exp(-((h - 15) ** 2) / (2 * 1.8 ** 2));
    weights[m] = w;
    total += w;
  }
  for (let m = 0; m < 1440; m++) weights[m] /= total;
  return weights;
})();

function dayVolume(day: number) {
  const weekday = (day + 4) % 7; // 1970-01-01 was a Thursday; 0 = Sunday
  const factor = weekday === 6 ? 0.6 : weekday === 0 ? 0.45 : 1;
  return Math.round((1150 + rand(day) * 450) * factor);
}

// Sorted arrival times (ms since local midnight) for every order of a day
const arrivalsCache = new Map<number, Float64Array>();

function arrivalsFor(day: number) {
  const cached = arrivalsCache.get(day);
  if (cached) return cached;

  const volume = dayVolume(day);
  const list: number[] = [];
  for (let m = 0; m < 1440; m++) {
    const expected = volume * MINUTE_WEIGHTS[m];
    const seed = day * 1440 + m;
    // Stochastic rounding keeps the daily total on target
    const count = Math.floor(expected + rand(seed));
    const seconds: number[] = [];
    for (let i = 0; i < count; i++) seconds.push(rand(seed * 31 + i + 7) * 60_000);
    seconds.sort((a, b) => a - b);
    for (const s of seconds) list.push(m * 60_000 + s);
  }

  const arrivals = Float64Array.from(list);
  arrivalsCache.set(day, arrivals);
  if (arrivalsCache.size > 16) arrivalsCache.delete(arrivalsCache.keys().next().value!);
  return arrivals;
}

// Number of arrivals at or before `offset`
function countUntil(arrivals: Float64Array, offset: number) {
  let lo = 0;
  let hi = arrivals.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arrivals[mid] <= offset) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

export type StepStatus = "done" | "running";

export interface LiveDashboard {
  now: number;
  ordersToday: number;
  trendPct: number;
  hoursSavedWeek: number;
  week: { day: number; value: number; isToday: boolean; heightPct: number }[];
  orderId: string;
  steps: StepStatus[];
  syncSecondsAgo: number;
  syncing: boolean;
}

export function computeDashboard(now: number): LiveDashboard {
  const local = now + MAPUTO_OFFSET_MS;
  const day = Math.floor(local / DAY_MS);
  const offset = local - day * DAY_MS;

  const today = arrivalsFor(day);
  const ordersToday = countUntil(today, offset);

  // Same time yesterday, for the trend badge
  const yesterdaySoFar = countUntil(arrivalsFor(day - 1), offset);
  const trendPct =
    yesterdaySoFar >= 25
      ? Math.round((ordersToday / yesterdaySoFar - 1) * 100)
      : Math.round((dayVolume(day) / dayVolume(day - 1) - 1) * 100);

  // Week starts on Monday
  const weekday = (day + 4) % 7;
  const daysSinceMonday = (weekday + 6) % 7;
  let weekOrders = ordersToday;
  for (let d = day - daysSinceMonday; d < day; d++) weekOrders += arrivalsFor(d).length;
  const hoursSavedWeek = (weekOrders * MINUTES_SAVED_PER_ORDER) / 60;

  // Last 7 days, today still filling up
  const days = Array.from({ length: 7 }, (_, i) => day - 6 + i);
  const max = Math.max(...days.map((d) => arrivalsFor(d).length));
  const week = days.map((d) => {
    const value = d === day ? ordersToday : arrivalsFor(d).length;
    return { day: d, value, isToday: d === day, heightPct: Math.max(4, (value / max) * 100) };
  });

  // Workflow follows the most recent order
  let lastArrival: number;
  let lastNumber: number;
  if (ordersToday > 0) {
    lastArrival = day * DAY_MS + today[ordersToday - 1];
    lastNumber = ordersToday;
  } else {
    const prev = arrivalsFor(day - 1);
    lastArrival = (day - 1) * DAY_MS + prev[prev.length - 1];
    lastNumber = prev.length;
  }
  const sinceOrder = local - lastArrival;
  const steps = STEP_DELAYS.map((delay): StepStatus => (sinceOrder >= delay ? "done" : "running"));
  const orderId = `#${String(day % 1000).padStart(3, "0")}-${String(lastNumber).padStart(4, "0")}`;

  const sinceSync = now % SYNC_INTERVAL_MS;

  return {
    now,
    ordersToday,
    trendPct,
    hoursSavedWeek,
    week,
    orderId,
    steps,
    syncSecondsAgo: Math.floor(sinceSync / 1000),
    syncing: sinceSync < 1_500,
  };
}

/** Ticking dashboard data, aligned to the server clock when available. */
export function useLiveDashboard() {
  const [data, setData] = useState<LiveDashboard | null>(null);

  useEffect(() => {
    let offset = 0;
    let cancelled = false;

    const tick = () => setData(computeDashboard(Date.now() + offset));
    tick();
    const interval = setInterval(tick, TICK_MS);

    // Read the server time from the response Date header
    const started = Date.now();
    fetch(window.location.pathname, { method: "HEAD", cache: "no-store" })
      .then((res) => {
        const header = res.headers.get("date");
        if (!header || cancelled) return;
        const serverTime = new Date(header).getTime();
        if (Number.isNaN(serverTime)) return;
        const latency = (Date.now() - started) / 2;
        const drift = serverTime + latency - Date.now();
        // The header only has 1s precision, so ignore tiny differences
        if (Math.abs(drift) < 2_000) return;
        offset = drift;
        tick();
      })
      .catch(() => {
        // Fall back to the visitor's clock
      });

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return data;
}
