import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CASE_STUDIES, type CaseStudy } from "@/content/portfolio";
import { servicePillars } from "@/content/services";

const serviceById = Object.fromEntries(servicePillars.map((s) => [s.id, s]));

export default function PortfolioPage() {
  const [featured, ...others] = CASE_STUDIES;

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.12)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        <div aria-hidden className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container relative mx-auto px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur">
                <span className="size-1.5 rounded-full bg-blue-600" />
                Success stories
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                Real problems. Software that solves them.
              </h1>
            </div>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">
              A selection of products and platforms we have designed and built, each starting with a
              challenge worth solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {featured && <FeaturedProject project={featured} />}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 text-center text-white md:px-16 md:py-20">
            <div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Your project could be the next success story.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
                Tell us what you want to build or improve. We will get back to you with a clear next step.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="group bg-white text-slate-950 hover:bg-slate-100">
                  <Link href="/get-quote">
                    Start a Project
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/services#process">See how we work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectVisual({ project, className, sizes }: { project: CaseStudy; className?: string; sizes: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-slate-100", className)}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        // Placeholder until a real screenshot is available.
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.18),transparent_50%)]" />
          <CalendarCheck className="relative size-16 text-white/80" strokeWidth={1.25} />
        </div>
      )}
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm backdrop-blur">
        {project.sector}
      </span>
    </div>
  );
}

function ServiceLabel({ project }: { project: CaseStudy }) {
  const service = serviceById[project.service];
  if (!service) return null;
  const Icon = service.icon;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
      <Icon className="size-3.5" />
      {service.title}
    </span>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ project }: { project: CaseStudy }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-900/5 lg:grid-cols-[1.2fr_1fr]">
      <ProjectVisual
        project={project}
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]"
      />

      <div className="flex flex-col p-7 md:p-10">
        <div className="flex items-center justify-between gap-4">
          <ServiceLabel project={project} />
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">Featured</span>
        </div>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h2>
        <p className="mt-3 text-base text-muted-foreground">{project.summary}</p>

        <dl className="mt-8 grid gap-5 border-t border-border/80 pt-6">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">The challenge</dt>
            <dd className="mt-2 text-sm leading-7 text-foreground/85">{project.challenge}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Our solution</dt>
            <dd className="mt-2 text-sm leading-7 text-foreground/85">{project.solution}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-8">
          <TechList items={project.technologies} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
      <ProjectVisual
        project={project}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="aspect-[4/3]"
      />

      <div className="flex flex-1 flex-col p-6">
        <ServiceLabel project={project} />
        <h2 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h2>
        <p className="mt-2 text-sm font-medium text-foreground/80">{project.summary}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.solution}</p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <TechList items={project.technologies} />
          <Link
            href="/get-quote"
            aria-label={`Build something like ${project.title}`}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
          >
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
