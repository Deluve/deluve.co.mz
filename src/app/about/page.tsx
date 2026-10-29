import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Sparkles,
  Eye,
  ShieldCheck,
  MessagesSquare,
  Puzzle,
  ListChecks,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Deluve",
  description:
    "Founded in 2024, Deluve helps organizations design, build and automate digital products with a practical, results-first approach.",
};

const facts = [
  { value: "2024", label: "Founded" },
  { value: "4", label: "Areas of expertise" },
  { value: "Mozambique", label: "Home base" },
];

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description: "We measure success by the problem solved and the impact delivered, not by features shipped.",
  },
  {
    icon: Sparkles,
    title: "Simple by default",
    description: "Clear interfaces, clean code and no unnecessary complexity. Software people actually enjoy using.",
  },
  {
    icon: Eye,
    title: "Radical transparency",
    description: "Honest estimates, visible progress and early conversations when something needs to change.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description: "Secure, maintainable and scalable solutions that keep working long after launch.",
  },
];

const approach = [
  {
    icon: MessagesSquare,
    title: "Direct collaboration",
    description: "You work directly with the people building your product. No layers, no lost messages.",
  },
  {
    icon: Puzzle,
    title: "The right expertise",
    description: "We bring in the skills your project needs, based on its goals, scope and technical requirements.",
  },
  {
    icon: ListChecks,
    title: "Clear ownership",
    description: "You always know who is responsible, what happens next and how progress is shared.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">{children}</span>;
}

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.1)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_65%)]"
        />

        <div className="container relative mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionLabel>About Deluve</SectionLabel>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                Software that works for your business.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                Founded in 2024, Deluve helps organizations design, build and automate digital products —
                with a focused team and a practical, results-first approach.
              </p>

              <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border py-5">
                {facts.map((fact) => (
                  <div key={fact.label} className="px-4 first:pl-0">
                    <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                    <dd className="mt-1 text-lg font-semibold tracking-tight md:text-xl">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative pb-10 pl-10 lg:pb-14">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl shadow-slate-900/5">
                <Image
                  src="/images/team-work.png"
                  alt="Deluve team working together"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 hidden w-2/5 overflow-hidden rounded-2xl border-4 border-background shadow-lg sm:block">
                <div className="relative aspect-square">
                  <Image src="/images/office.png" alt="Deluve office" fill sizes="20vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story, mission & vision */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel>Our story</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Started in 2024 with one simple idea.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              <p>
                Too many organizations still depend on manual processes, disconnected tools and software
                that is hard to use. We started Deluve to change that — building digital products that
                are simple, reliable and designed around how businesses really work.
              </p>
              <p>
                Today we work across four areas: product design and development, process automation,
                data and business intelligence, and digital strategy.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-border p-8 md:p-10">
              <SectionLabel>Mission</SectionLabel>
              <p className="mt-4 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                Help organizations work better with software that is easy to use, reliable to run and
                built around real business needs.
              </p>
            </div>
            <div className="rounded-3xl border border-border p-8 md:p-10">
              <SectionLabel>Vision</SectionLabel>
              <p className="mt-4 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                Be the technology partner growing businesses trust to turn ideas into products that
                make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>Our values</SectionLabel>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">What we stand for.</h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-muted-foreground">
                The principles behind every decision we make and every product we build.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="bg-background p-7 md:p-8">
                    <Icon className="size-6 text-blue-700" strokeWidth={1.75} />
                    <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="approach" className="border-t border-border py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
              <div>
                <SectionLabel>How we work</SectionLabel>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                  Clear communication. No guesswork.
                </h2>
              </div>
              <p className="text-base leading-7 text-muted-foreground md:text-lg">
                Every engagement is tailored to the project, with one point of contact, the right
                specialist skills and regular progress updates.
              </p>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {approach.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="border-t border-foreground/80 pt-6">
                    <div className="flex items-center justify-between">
                      <Icon className="size-6 text-blue-700" strokeWidth={1.75} />
                      <span className="font-mono text-sm text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{point.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-border bg-slate-50 px-8 py-12 md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Have a challenge to solve?</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Tell us what you are working on, and we will discuss a practical next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <Button asChild size="lg" className="group">
                <Link href="/get-quote">
                  Start a Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
