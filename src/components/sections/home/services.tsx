"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Code, Cloud, Cog, BarChart3, Database, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications built for performance, security, and scale.",
    span: "lg:col-span-3",
    highlight: "Web • APIs • Integrations",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Migration, management, and optimization across AWS, GCP, and hybrid environments.",
    span: "lg:col-span-3",
    highlight: "AWS • GCP • Hybrid",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Automated workflows that maximize operational efficiency and cut costs.",
    span: "lg:col-span-2",
    highlight: "RPA • Workflows • Ops",
  },
  {
    icon: BarChart3,
    title: "IT Consulting",
    description: "Strategic analysis and technology roadmaps for results-driven digital transformation.",
    span: "lg:col-span-2",
    highlight: "Strategy • Architecture",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Intelligent data solutions for evidence-based decision making.",
    span: "lg:col-span-2",
    highlight: "BI • Dashboards • Insights",
  },
];

export default function ServicesSection2() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              Services
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.1] text-balance text-foreground md:text-5xl lg:text-6xl">
              What we do<span className="text-blue-700">.</span>
            </h2>
            <div className="mt-5 h-px w-32 bg-gradient-to-r from-blue-700/60 to-transparent" />
          </div>
          <div className="max-w-sm rounded-xl border border-blue-500/15 bg-blue-500/5 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">
              End-to-end solutions for every stage of your technology journey.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-16 overflow-hidden rounded-[2rem] border border-blue-500/15 bg-card shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="relative min-h-[320px] lg:col-span-3">
              <Image
                src="/images/team_collab.png"
                alt="Creative work and product delivery"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-transparent to-transparent" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/80 to-transparent" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-8 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Visual narrative
              </p>
              <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                We pair service clarity with real product imagery.
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The result feels closer to a premium startup studio than a standard agency brochure, while keeping the layout fast and focused.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => (
            <motion.button
              key={service.title}
              type="button"
              aria-label={`Explore ${service.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${service.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-blue-500/15 opacity-0 transition-opacity duration-300 group-hover:opacity-30" />

              <div className="relative z-10 mb-8 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500">
                  <service.icon size={28} aria-hidden="true" className="text-blue-700 transition-colors group-hover:text-white" />
                </div>
                <span className="font-mono text-sm font-semibold text-slate-500">
                  0{i + 1}
                </span>
              </div>

              <div className="relative z-10">
                <span className="mb-4 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                  {service.highlight}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-blue-700 transition-all group-hover:gap-3">
                  <span>Explore</span>
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
