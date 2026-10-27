import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Search,
  PenTool,
  Rocket,
  LineChart,
  Briefcase,
  Users,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicePillars } from "@/content/services";

const process = [
  {
    icon: Search,
    title: "Diagnose",
    description: "We clarify your goals, map the current state and identify the biggest opportunities.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We shape a clear, scalable solution and validate it with you before building.",
  },
  {
    icon: Rocket,
    title: "Build",
    description: "We develop in short iterations, test continuously and launch with confidence.",
  },
  {
    icon: LineChart,
    title: "Optimize",
    description: "We measure results, refine performance and keep improving after launch.",
  },
];

const engagementModels = [
  {
    icon: Briefcase,
    title: "Project-based",
    description: "A defined scope, timeline and budget. Ideal for new products or a specific system.",
    bestFor: "New products & launches",
  },
  {
    icon: Users,
    title: "Dedicated team",
    description: "An extension of your team, working on your roadmap with flexible capacity.",
    bestFor: "Ongoing development",
    featured: true,
  },
  {
    icon: MessagesSquare,
    title: "Advisory",
    description: "Senior guidance on architecture, technology choices and digital planning.",
    bestFor: "Decisions & planning",
  },
];

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.25em] ${dark ? "text-blue-300" : "text-blue-700"}`}
    >
      {children}
    </span>
  );
}

export default function ServicesPageContent() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/70 pb-16 pt-32 md:pb-20 md:pt-40">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.12)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        <div aria-hidden className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur">
              <span className="size-1.5 rounded-full bg-blue-600" />
              Our services
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Technology that moves your business forward.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              From product design to automation, data and strategy — we help organizations build better
              software, simplify operations and make smarter decisions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/get-quote">
                  Start a Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">See success stories</Link>
              </Button>
            </div>
          </div>

          {/* Quick links to each service */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {servicePillars.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-card/80 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-950/5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-left text-sm font-medium leading-snug">{service.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Four ways we create value.
            </h2>
          </div>

          <div className="mx-auto max-w-6xl space-y-6">
            {servicePillars.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="grid overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm lg:grid-cols-[1.15fr_0.85fr]"
                >
                  <div className="p-7 md:p-10">
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">
                        0{index + 1} · {service.accent}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">{service.title}</h3>
                    <p className="mt-3 text-base font-medium text-foreground/80">{service.description}</p>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                      {service.details}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/get-quote"
                      className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Discuss your project
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  <div className="border-t border-border/80 bg-slate-50/80 p-7 md:p-10 lg:border-l lg:border-t-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      What you get
                    </p>
                    <ul className="mt-5 space-y-3">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-border/60 bg-white p-3.5 text-sm font-medium"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div aria-hidden className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel dark>How we work</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              A clear process, from first call to launch.
            </h2>
          </div>

          <ol className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* Connecting line on large screens */}
            <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative flex size-12 items-center justify-center rounded-full border border-white/15 bg-slate-900 text-blue-300 ring-8 ring-slate-950">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm text-slate-500">Step 0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>Ways to work together</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Flexible engagement models.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Choose the format that fits your stage, budget and team.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {engagementModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className={
                    model.featured
                      ? "relative flex flex-col rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-600/20"
                      : "flex flex-col rounded-3xl border border-border/80 bg-card p-8"
                  }
                >
                  {model.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium">
                      Most popular
                    </span>
                  )}
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl ${
                      model.featured ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{model.title}</h3>
                  <p className={`mt-3 flex-1 text-sm leading-7 ${model.featured ? "text-blue-100" : "text-muted-foreground"}`}>
                    {model.description}
                  </p>
                  <p
                    className={`mt-6 border-t pt-4 text-xs font-medium ${
                      model.featured ? "border-white/20 text-blue-100" : "border-border text-muted-foreground"
                    }`}
                  >
                    Best for: <span className={model.featured ? "text-white" : "text-foreground"}>{model.bestFor}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
