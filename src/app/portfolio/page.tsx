"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Bolt, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";
import Image from "next/image";

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Enterprise ERP Suite",
    description:
      "Streamlined complex enterprise operations by integrating finance, HR, and supply chain into a single, unified platform.",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    image: "/images/portfolio/eco.jpg",
  },
  {
    id: 2,
    title: "EventSnap",
    description:
      "Captured real-time event engagement with a frictionless QR-code photo-sharing experience for guests.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Cloudinary"],
    image: "/images/portfolio/eventsnap.png",
  },
  {
    id: 3,
    title: "CVFlow",
    description:
      "Empowered job seekers to land interviews by using AI to instantly generate ATS-optimized, standout resumes.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "OpenAI API"],
    image: "/images/portfolio/cvflow.png",
  },
  {
    id: 4,
    title: "Appointment Booking Platform",
    description:
      "Eliminated scheduling friction for service providers with real-time booking, automated reminders, and seamless calendar sync.",
    category: "Web",
    technologies: ["Next.js", "Node.js", "Stripe"],
    image: "/images/portfolio/appointment.jpg",
  },
];

const CATEGORIES = ["All", "Web", "Mobile", "E-commerce", "SaaS", "Branding"];

const PROJECT_FOCUS = [
  { icon: Bolt, title: "Systems", detail: "Business operations" },
  { icon: Layers3, title: "Platforms", detail: "Digital experiences" },
  { icon: Sparkles, title: "Products", detail: "Everyday workflows" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = PORTFOLIO_PROJECTS.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory,
  );

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
              Selected work
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Our Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              A look at how we turn complex challenges into scalable,
              high-impact digital products.
            </p>
          </motion.div>

          <div className="mt-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-[2rem] border border-border/80 bg-card p-6 shadow-sm md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                What we build
              </p>
              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Digital products designed around real-world challenges.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                From simplifying enterprise operations to making event sharing
                and appointment booking effortless, each project starts with a
                problem worth solving.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                The work
              </span>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Selected projects.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Explore the products and platforms we have shaped to solve
              specific business and user needs.
            </p>
          </div>

          <ScrollView delay={0.1}>
            <div className="mb-10 flex flex-wrap gap-3">
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isSelected
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "border-border/80 bg-card text-muted-foreground hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-700"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </ScrollView>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-950/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 384px, (min-width: 768px) 45vw, calc(100vw - 3rem)"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-tight transition-colors group-hover:text-blue-700">
                        {project.title}
                      </h3>
                      <Badge className="shrink-0 border border-blue-500/20 bg-blue-500/10 text-blue-700 hover:bg-blue-500/15">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                          className="border-border/80 bg-muted/40 text-xs font-normal text-muted-foreground"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-border/80 bg-card px-6 py-16 text-center">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("All")}
                className="mt-5 border-blue-500/20 text-blue-700 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-800"
              >
                View all projects
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-blue-500/15 bg-blue-500/[0.03] py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Project focus
              </span>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Built to solve what matters.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Different products, one shared focus: making essential business
                and user experiences work better.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:w-[58%]">
              {PROJECT_FOCUS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-4 text-base font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
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
                  Ready to build something exceptional?
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                  Let&apos;s discuss how our expertise can solve your unique
                  challenges. Partner with a team dedicated to your measurable
                  success.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 px-5 text-white hover:bg-blue-500"
                >
                  <Link href="/get-quote">
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-500/20 px-5 text-blue-700 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-800"
                >
                  <Link href="/services#process">See Our Process</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
