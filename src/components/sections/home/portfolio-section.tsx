"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  ArrowUpRight,
  CreditCard,
  ShoppingCart,
  BarChart3,
  Database,
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
    tag: "CRM",
    accent: "blue",
    title: "Custom CRM Platform",
    description:
      "End-to-end customer relationship management with pipeline automation and analytics.",
    fullDescription:
      "A fully custom CRM built for a sales-driven organization. Features include automated lead scoring, pipeline management with drag-and-drop stages, 360° customer profiles, and real-time analytics dashboards. The platform integrates with email, calendars, and third-party tools for a seamless workflow.",
    status: "Live",
    metrics: ["5x lead conversion", "360° customer view"],
    icon: Database,
    image: PORTFOLIO_CONTENT[0].img,
  },
  {
    tag: "POS",
    accent: "blue",
    title: "Cloud-Based POS",
    description:
      "Modern point-of-sale with real-time inventory sync and multi-location support.",
    fullDescription:
      "A cloud-native POS system designed for retail chains operating across 50+ locations. It features real-time inventory synchronization, offline-first architecture for uninterrupted sales, multi-currency support, and advanced reporting. The system handles thousands of transactions daily with 99.9% uptime.",
    status: "Live",
    metrics: ["99.9% uptime", "50+ locations"],
    icon: ShoppingCart,
    image: PORTFOLIO_CONTENT[3].img,
  },
  {
    tag: "Payments",
    accent: "blue",
    title: "Payment Gateway",
    description:
      "Unified payment processing with smart routing, fraud detection and reconciliation.",
    fullDescription:
      "A PCI-compliant payment gateway that unifies multiple payment methods - cards, mobile money, and bank transfers - into a single API. Features include intelligent transaction routing for optimal success rates, real-time fraud detection with ML models, and automated reconciliation across all channels.",
    status: "Live",
    metrics: ["3x transactions", "PCI compliant"],
    icon: CreditCard,
    image: PORTFOLIO_CONTENT[1].img,
  },
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
    image: PORTFOLIO_CONTENT[2].img,
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-primary/8 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-4">
              {cases.map((item, i) => {
                const ItemIcon = item.icon;
                const isActive = selected === i;
                const itemAccent = accentStyles[item.accent as keyof typeof accentStyles];

                return (
                  <motion.button
                    key={item.title}
                    onClick={() => setSelected(i)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.45 }}
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
                      alt={active.title}
                      fill
                      className="object-cover"
                      priority={selected === 0}
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-12 flex justify-center"
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
