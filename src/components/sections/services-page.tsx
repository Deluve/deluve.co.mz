"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Bolt,
  ChartNoAxesCombined,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

const servicePillars = [
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "Web and mobile products built for speed, reliability, and delight from day one.",
    accent: "Build",
  },
  {
    icon: Layers3,
    title: "Experience Design",
    description:
      "Interfaces and journeys that feel clear, premium, and built around real user behavior.",
    accent: "Design",
  },
  {
    icon: Bolt,
    title: "Automation Systems",
    description:
      "Operational workflows that remove friction and free teams to focus on growth.",
    accent: "Scale",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data & Insights",
    description:
      "Measurement layers and dashboards that turn signals into sharper decisions.",
    accent: "Measure",
  },
];

const process = [
  {
    step: "01",
    title: "Diagnose",
    description: "We map your goals, bottlenecks, and constraints to uncover the angle that creates leverage.",
  },
  {
    step: "02",
    title: "Design",
    description: "We shape the system, message, and experience so the solution is clear and scalable.",
  },
  {
    step: "03",
    title: "Build",
    description: "We engineer and launch thoughtful digital experiences with a strong product mindset.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "We keep improving performance, growth, and usability after launch.",
  },
];

export default function ServicesPageContent() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-background via-background to-slate-950/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.08),transparent_35%)]" />

        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Deluve services
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              We turn ideas into digital systems people actually want to use.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              From the first strategy question to the final launch, we build digital experiences that combine clarity, momentum, and measurable business value.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-[2rem] border border-border/80 bg-card p-6 shadow-sm md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                What we solve
              </p>
              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Strategy, design, and technology working as one.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                We help companies move faster, look sharper, and operate more intelligently by building the systems behind growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="rounded-[2rem] border border-blue-500/20 bg-blue-500/5 p-6 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Delivery model
              </p>
              <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span>Discovery</span>
                  <span className="font-medium text-foreground">Focused</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span>Execution</span>
                  <span className="font-medium text-foreground">Lean</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Support</span>
                  <span className="font-medium text-foreground">Continuous</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Service pillars
              </span>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Built for ambitious teams.
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-7 text-muted-foreground md:block">
              Every engagement is shaped around your business goals, your users, and the systems that help you scale without friction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="group rounded-[1.75rem] border border-border/80 bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700 ring-1 ring-blue-500/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {item.accent}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/80 bg-slate-950 py-20 text-white md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              How we work
            </span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              A clear process that keeps momentum high.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold text-blue-300">{item.step}</p>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-border/80 bg-card p-8 md:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                  Ready when you are
                </span>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Need a digital partner with focus and follow-through?
                </h2>
              </div>

              <a
                href="/get-quote"
                className="inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
