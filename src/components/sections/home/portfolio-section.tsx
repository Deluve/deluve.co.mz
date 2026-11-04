"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { blurProps } from "@/content/image-blur";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ShoppingCart,
  BarChart3,
  Database,
  CalendarCheck,
  FileText,
  QrCode,
} from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

const accentStyles = {
  blue: {
    cardTint: "from-blue-500/20 via-blue-500/10 to-transparent",
    badgeBg: "bg-blue-500/12",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-700",
    iconBg: "bg-blue-500/15",
    iconText: "text-blue-700",
    ring: "focus-visible:ring-blue-500",
    activeBorder: "border-blue-500/40",
    previewBg: "from-blue-500/16 to-blue-500/6",
  },
} as const;

const cases = [
  {
    tag: "ERP",
    accent: "blue",
    title: "Enterprise ERP Suite",
    description:
      "Integrated enterprise resource planning for finance, HR and supply chain management.",
    fullDescription:
      "A comprehensive ERP suite that consolidates finance, human resources, procurement, and supply chain operations into a single platform. It delivers real-time reporting, automated workflows, and role-based access control, resulting in a 40% reduction in operational costs.",
    status: "Live",
    metrics: ["40% cost reduction", "Real-time reports"],
    icon: BarChart3,
    image: PORTFOLIO_CONTENT[0].img,
  },
  {
    tag: "Web",
    accent: "blue",
    title: "EventSnap",
    description:
      "Instant photo-sharing app for events where guests scan a QR Code to upload photos in real time.",
    fullDescription:
      "EventSnap is an instant photo-sharing app for events where guests scan a QR Code to upload photos in real timeâ€”no app or login needed. Built with a frictionless experience in mind, it lets organizers display a live gallery of guest photos, keeping everyone engaged throughout the event without any onboarding barriers.",
    status: "Live",
    metrics: ["Zero-friction uploads", "Real-time gallery"],
    icon: QrCode,
    image: PORTFOLIO_CONTENT[1].img,
  },
  {
    tag: "AI",
    accent: "blue",
    title: "CVFlow",
    description:
      "AI-powered platform that transforms your skills and experience into ATS-friendly, professionally styled resumes.",
    fullDescription:
      "An AI-powered smart platform that effortlessly transforms your skills and experience into ATS-friendly, professionally styled resumes in minutes. Users simply input their background and the platform generates polished, recruiter-ready documents optimized to pass applicant tracking systemsâ€”no design skills required.",
    status: "Live",
    metrics: ["ATS-optimized", "Resumes in minutes"],
    icon: FileText,
    image: PORTFOLIO_CONTENT[2].img,
  },
  {
    tag: "Booking",
    accent: "blue",
    title: "Appointment Booking Platform",
    description:
      "Seamless appointment scheduling with real-time booking, rescheduling and calendar sync.",
    fullDescription:
      "A seamless appointment scheduling platform that lets clients book, reschedule, and manage appointments in real time, with automated reminders and calendar sync. Businesses get a clean dashboard to manage availability, reduce no-shows with smart notifications, and handle payments directly through integrated Stripe checkout.",
    status: "Live",
    metrics: ["Automated reminders", "Calendar sync"],
    icon: CalendarCheck,
    image: PORTFOLIO_CONTENT[3].img,
  },
];

export default function PortfolioSection() {
  const [selected, setSelected] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const active = cases[selected];
  const Icon = active.icon;
  const activeAccent = accentStyles[active.accent as keyof typeof accentStyles];

  return (
    <section id="cases" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-primary/8 blur-3xl"
        />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          className="mx-auto mb-16 w-full max-w-7xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            #Projects
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.1] text-foreground md:text-5xl">
            Successful Cases<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A look at selected product builds, digital platforms, and business systems shaped for measurable outcomes.
          </p>
        </motion.div>

        <MobileCasesCarousel />

        <div className="mx-auto hidden w-full max-w-7xl lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4">
              {cases.map((item, i) => {
                const ItemIcon = item.icon;
                const isActive = selected === i;
                const itemAccent = accentStyles[item.accent as keyof typeof accentStyles];

                return (
                  <motion.button
                    key={item.title}
                    onClick={() => setSelected(i)}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${itemAccent.ring} ${
                      isActive
                        ? `bg-card ${itemAccent.activeBorder} shadow-lg shadow-black/5`
                        : "border-border bg-card hover:border-foreground/20"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${itemAccent.cardTint} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                    <div className="relative z-10">
                      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${itemAccent.iconBg} transition-all duration-300 group-hover:scale-105`}>
                        <ItemIcon className={`h-5 w-5 ${itemAccent.iconText}`} />
                      </div>
                      <h3 className={`mb-1.5 text-sm font-semibold transition-colors ${isActive ? itemAccent.badgeText : "text-foreground"}`}>
                        {item.title}
                      </h3>
                      <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full animate-pulse ${itemAccent.badgeBg}`} />
                        <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${itemAccent.badgeText}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              ref={previewRef}
              key={selected}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:col-span-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${activeAccent.previewBg} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${activeAccent.badgeBg} ${activeAccent.badgeBorder} ${activeAccent.badgeText}`}>
                    {active.tag}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase ${activeAccent.badgeText}`}>
                    <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${activeAccent.badgeBg}`} />
                    {active.status}
                  </span>
                </div>

                <h3 className="mb-6 text-3xl font-bold leading-[1.1] text-foreground md:text-4xl">
                  {active.title}
                </h3>

                <div className={`mb-6 overflow-hidden rounded-2xl border ${activeAccent.badgeBorder} bg-gradient-to-br ${activeAccent.previewBg}`}>
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} className="relative aspect-video w-full">
                    <Image
                      src={active.image}
                      {...blurProps(active.image)}
                      alt={active.title}
                      fill
                      sizes="(min-width: 1280px) 800px, (min-width: 1024px) 62vw, calc(100vw - 3rem)"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-sm border border-border">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${activeAccent.iconBg}`}>
                        <Icon className={`h-5 w-5 ${activeAccent.iconText}`} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Case Study</p>
                        <p className="text-sm font-semibold text-foreground">{active.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {active.fullDescription}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 border-t border-border pt-6">
                {active.metrics.map((metric) => (
                  <motion.span
                    key={metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`rounded-lg border px-3 py-2 text-xs font-semibold ${activeAccent.badgeBg} ${activeAccent.badgeBorder} ${activeAccent.badgeText}`}
                  >
                    {metric}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="mx-auto mt-12 flex w-full max-w-7xl justify-center"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800"
          >
            Explore All Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Cases rendered three times so the carousel can loop: the user always sits in
// the middle copy, and we silently jump back there after landing on a clone.
const LOOP_COUNT = cases.length;
const loopCases = [...cases, ...cases, ...cases];

function MobileCasesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rawIndexRef = useRef(LOOP_COUNT);
  const [rawIndex, setRawIndex] = useState(LOOP_COUNT);
  const current = rawIndex % LOOP_COUNT;

  const getCards = () =>
    trackRef.current ? (Array.from(trackRef.current.children) as HTMLElement[]) : [];

  // Instantly move the scroll position from one card to another (no animation)
  const jumpTo = useCallback((from: number, to: number) => {
    const track = trackRef.current;
    const cards = getCards();
    if (!track || !cards[from] || !cards[to]) return;
    track.scrollTo({
      left: track.scrollLeft + (cards[to].offsetLeft - cards[from].offsetLeft),
      behavior: "instant" as ScrollBehavior,
    });
    rawIndexRef.current = to;
    setRawIndex(to);
  }, []);

  // Start on the middle copy
  useEffect(() => {
    jumpTo(0, LOOP_COUNT);
  }, [jumpTo]);

  // Track which card is in view while the user swipes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = getCards();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target as HTMLElement);
            rawIndexRef.current = index;
            setRawIndex(index);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // When scrolling settles on a clone, jump back to the middle copy
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const raw = rawIndexRef.current;
        if (raw < LOOP_COUNT || raw >= LOOP_COUNT * 2) {
          jumpTo(raw, (raw % LOOP_COUNT) + LOOP_COUNT);
        }
      }, 150);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      track.removeEventListener("scroll", onScroll);
    };
  }, [jumpTo]);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, loopCases.length - 1));
    getCards()[clamped]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  return (
    <div className="lg:hidden">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span className="text-foreground">{String(current + 1).padStart(2, "0")}</span>
          {" / "}
          {String(cases.length).padStart(2, "0")}
          <span className="ml-3 normal-case tracking-normal">Swipe to explore</span>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => goTo(rawIndexRef.current - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors active:bg-foreground/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => goTo(rawIndexRef.current + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors active:bg-foreground/10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bleeds to the screen edges, matching the site-container padding */}
      <div
        ref={trackRef}
        className="-mx-[clamp(1.5rem,4vw,4.5rem)] flex snap-x snap-mandatory scroll-px-[clamp(1.5rem,4vw,4.5rem)] gap-4 overflow-x-auto px-[clamp(1.5rem,4vw,4.5rem)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopCases.map((item, i) => {
          const ItemIcon = item.icon;
          const accent = accentStyles[item.accent as keyof typeof accentStyles];
          const isClone = i < LOOP_COUNT || i >= LOOP_COUNT * 2;

          return (
            <article
              key={`${item.title}-${i}`}
              aria-hidden={isClone}
              className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:w-[70%]"
            >
              <div className={`relative aspect-video w-full bg-gradient-to-br ${accent.previewBg}`}>
                <Image
                  src={item.image}
                  {...blurProps(item.image)}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 70vw, 85vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <span className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm ${accent.badgeBg} ${accent.badgeBorder} ${accent.badgeText}`}>
                  {item.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent.iconBg}`}>
                    <ItemIcon className={`h-4 w-4 ${accent.iconText}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-foreground">{item.title}</h3>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${accent.badgeText}`}>
                      <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${accent.badgeBg}`} />
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                  {item.fullDescription}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className={`rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold ${accent.badgeBg} ${accent.badgeBorder} ${accent.badgeText}`}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {cases.map((item, i) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to ${item.title}`}
            onClick={() => goTo(rawIndexRef.current - current + i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? "w-6 bg-primary" : "w-2 bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
