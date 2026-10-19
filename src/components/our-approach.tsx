"use client";

import { Handshake, Lightbulb, ListChecks } from "lucide-react";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";

const approachPoints = [
  {
    icon: Handshake,
    title: "Direct collaboration",
    description:
      "Work directly with the person responsible for your project, with clear communication from start to finish.",
  },
  {
    icon: Lightbulb,
    title: "Specialist expertise",
    description:
      "Bring in the right skills for each project, based on its goals and requirements.",
  },
  {
    icon: ListChecks,
    title: "Clear ownership",
    description:
      "Know who is responsible, what happens next, and how progress is communicated.",
  },
];

export default function OurApproachSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-blue-500/[0.02] to-background py-16 md:py-32"
      id="approach"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-blue-600/[0.02] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl border-t border-blue-500/20 px-6">
        <span className="-ml-6 -mt-3.5 block w-max rounded-t-lg border border-blue-500/20 bg-background px-6 text-caption text-blue-400">
          Our approach
        </span>

        <ScrollView>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                The right expertise for every project
              </h2>
            </div>
            <div className="mt-6 sm:mt-0">
              <p className="text-muted-foreground">
                We bring together the skills each project needs, working with
                trusted specialists when needed. You&apos;ll have a clear point
                of contact and know who is responsible at every stage.
              </p>
            </div>
          </div>
        </ScrollView>

        <div className="mt-12 md:mt-24">
          <ScrollView stagger delay={0.02}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {approachPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.article
                    key={point.title}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="rounded-xl border border-blue-500/20 bg-card/70 p-6 transition-colors hover:border-blue-400/40"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-sm font-semibold text-blue-400">
                        _0{index + 1}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold">{point.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
}
