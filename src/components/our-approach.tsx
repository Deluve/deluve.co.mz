"use client";

import { Handshake, Lightbulb, ListChecks } from "lucide-react";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";

const approachPoints = [
  {
    icon: Handshake,
    title: "Direct collaboration",
    description:
      "Work directly with the person responsible for your project, from the first conversation to delivery.",
  },
  {
    icon: Lightbulb,
    title: "Specialist expertise",
    description:
      "Bring in the skills your project needs, based on its goals, scope, and technical requirements.",
  },
  {
    icon: ListChecks,
    title: "Clear ownership",
    description:
      "Know who is responsible, what happens next, and how progress is shared.",
  },
];

export default function OurApproachSection() {
  return (
    <section
      className="bg-blue-500/[0.02] py-12 md:py-16"
      id="approach"
    >
      <div className="mx-auto max-w-6xl px-6">
        <span className="-ml-6 -mt-3.5 block w-max rounded-t-lg border border-blue-500/20 bg-blue-500/[0.02] px-6 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
          How we work
        </span>

        <ScrollView>
          <div className="mt-8 gap-8 md:mt-12 md:grid md:grid-cols-2 md:items-end md:gap-12">
            <div>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Clear communication. The right expertise. No guesswork.
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
                We tailor each engagement to the project, with a clear point of
                contact, relevant specialist skills, and regular progress
                updates.
              </p>
            </div>
          </div>
        </ScrollView>

        <div className="mt-8 md:mt-10">
          <ScrollView stagger delay={0.02}>
            <div className="grid items-stretch gap-4 md:grid-cols-3 md:gap-5">
              {approachPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.article
                    key={point.title}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="flex h-full flex-col rounded-xl border border-blue-500/20 bg-card/70 p-6 transition-colors hover:border-blue-400/40 md:p-7"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-sm font-semibold text-blue-400">
                        _0{index + 1}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{point.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
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
