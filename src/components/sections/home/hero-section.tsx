"use client";

import Link from "next/link";
import { ArrowRight, Check, LayoutDashboard, RefreshCw, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

// Illustrative bar heights (%) for the mock chart.
const BARS = [38, 52, 45, 68, 60, 82, 74];

export default function HeroSection() {
  const { t } = useLanguage();
  const days = t("hero.mock.days").split(",");

  return (
    <section className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-40">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.12)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]"
      />
      <div aria-hidden className="absolute -right-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:gap-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-blue-600" />
              {t("hero.badge")}
            </span>

            <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-balance text-slate-900 sm:mt-7 sm:text-5xl lg:text-6xl">
              {t("hero.title")} <span className="text-blue-700">{t("hero.titleAccent")}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:mt-6 md:text-lg md:leading-8">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Button asChild size="lg" className="group h-11 px-6">
                <Link href="/get-quote">
                  {t("hero.cta")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="/portfolio">{t("hero.viewProjects")}</Link>
              </Button>
            </div>
          </div>

          {/* Product mockup (decorative) */}
          <div aria-hidden className="relative mx-auto w-full max-w-lg select-none lg:max-w-none">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-100/70 via-transparent to-transparent blur-2xl" />

            {/* App window */}
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-slate-900/10">
              <div className="flex items-center gap-2 border-b border-border bg-slate-50/80 px-4 py-3">
                <span className="size-2.5 rounded-full bg-slate-300" />
                <span className="size-2.5 rounded-full bg-slate-300" />
                <span className="size-2.5 rounded-full bg-slate-300" />
                <span className="ml-3 flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <LayoutDashboard className="size-3.5 text-blue-600" />
                  {t("hero.mock.title")}
                </span>
              </div>

              <div className="space-y-3 p-4 sm:space-y-4 sm:p-5">
                {/* KPIs */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="rounded-xl border border-border p-3 sm:p-4">
                    <p className="text-xs text-muted-foreground">{t("hero.mock.kpi1")}</p>
                    <p className="mt-1 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">1,284</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                      <TrendingUp className="size-3" /> +18%
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-3 sm:p-4">
                    <p className="text-xs text-muted-foreground">{t("hero.mock.kpi2")}</p>
                    <p className="mt-1 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">32h</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-blue-600">
                      <Zap className="size-3" /> {t("hero.mock.perWeek")}
                    </p>
                  </div>
                </div>

                {/* Chart */}
                <div className="rounded-xl border border-border p-3 sm:p-4">
                  <p className="text-xs font-medium text-slate-700">{t("hero.mock.chart")}</p>
                  <div className="mt-3 flex h-20 items-end gap-2 sm:mt-4 sm:h-28 sm:gap-2.5">
                    {BARS.map((h, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                        <div
                          className={i === BARS.length - 2 ? "w-full rounded-md bg-blue-600" : "w-full rounded-md bg-blue-100"}
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[10px] text-muted-foreground">{days[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow */}
                <div className="rounded-xl border border-border p-3 sm:p-4">
                  <p className="text-xs font-medium text-slate-700">{t("hero.mock.flow")}</p>
                  <ol className="mt-3 flex flex-col gap-1.5 text-[11px] font-medium text-slate-700 sm:flex-row sm:items-center sm:gap-2">
                    {["hero.mock.step1", "hero.mock.step2", "hero.mock.step3"].map((key, i) => (
                      <li key={key} className="flex min-w-0 flex-1 items-center gap-2">
                        <span className="flex min-w-0 flex-1 items-center gap-1.5 rounded-lg bg-slate-50 px-2 py-2">
                          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check className="size-2.5" strokeWidth={3} />
                          </span>
                          <span className="truncate">{t(key)}</span>
                        </span>
                        {i < 2 && <span className="hidden h-px w-2 shrink-0 bg-slate-300 sm:block" />}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-6 left-3 flex items-center gap-3 rounded-xl border border-border bg-white px-3.5 py-2.5 sm:-left-8 sm:px-4 sm:py-3 shadow-xl shadow-slate-900/10">
              <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <RefreshCw className="size-4" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-slate-900">{t("hero.mock.toast")}</span>
                <span className="block text-[11px] text-muted-foreground">{t("hero.mock.now")}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
