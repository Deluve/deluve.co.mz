"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { servicePillars } from "@/content/services";

const process = [
  {
    step: "01",
    title: "Diagnose",
    description: "We clarify your goals and identify the biggest opportunities.",
  },
  {
    step: "02",
    title: "Design",
    description: "We shape a clear, scalable solution around your needs.",
  },
  {
    step: "03",
    title: "Build",
    description: "We build, test, and launch your digital solution.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "We refine performance and usability after launch.",
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
              Strategy, design, and technology that create measurable business value.
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
                We help teams move faster and operate smarter.
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
              We help growing teams build better products, simplify operations and make smarter decisions.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {servicePillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  id={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="group scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-slate-950 hover:bg-slate-950 md:p-7"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-4xl font-bold leading-none tracking-tight text-muted-foreground/15 transition-colors duration-300 group-hover:text-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-xs font-semibold text-foreground transition-colors duration-300 group-hover:text-slate-200">
                    {item.tags.join(" · ")}
                  </p>
                  <p className="mb-2 text-sm font-medium leading-relaxed text-foreground transition-colors duration-300 group-hover:text-slate-200">
                    {item.description}
                  </p>
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-slate-300">
                    {item.details}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-border/80 bg-slate-950 py-20 text-white md:py-24">
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
