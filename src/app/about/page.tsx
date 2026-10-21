"use client"
import { Target, Heart, Lightbulb, Handshake, TrendingUp, Sparkles, Code2, Layers3, Bolt } from "lucide-react"
import { ScrollView } from "@/components/scroll-view"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import OurApproachSection from "@/components/our-approach"
import { motion } from "motion/react"

const companyValues = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We sweat the details, test our decisions, and take responsibility for the quality of what we deliver.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We define success around the problem to solve and the difference the solution should make.",
  },
  {
    icon: Lightbulb,
    title: "Constant Innovation",
    description: "We choose technology with purpose, using the right tools to make products more useful and effective.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "We work transparently, share progress early, and treat client goals as part of the same team effort.",
  },
]

const timeline = [
  {
    year: "2021",
    title: "Deluve Foundation",
    description: "Deluve began with a clear goal: turn promising ideas into useful digital solutions.",
  },
  {
    year: "2022",
    title: "First Major Projects",
    description: "We took on larger projects and grew our experience delivering digital products.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    description: "We broadened our capabilities with people focused on different areas of technology.",
  },
  {
    year: "2024",
    title: "Deepening Our Focus",
    description: "We continued building digital solutions and strengthening our focus on business needs.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background via-background to-blue-500/[0.015] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.04),transparent_35%)]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <ScrollView>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  About Deluve
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                  We turn business challenges into digital products built to last.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                  Deluve brings strategy, design, and engineering together to
                  build useful digital products, improve everyday operations,
                  and help organizations move forward.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/80 p-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                      <Code2 className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium text-foreground">Product engineering</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/80 p-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                      <Layers3 className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium text-foreground">Experience design</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/80 p-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                      <Bolt className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium text-foreground">Operational systems</span>
                  </div>
                </div>
              </div>
            </ScrollView>
            <ScrollView delay={0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-blue-500/20 bg-transparent shadow-2xl">
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                >
                  <Image
                    className="object-cover"
                    src="/images/team-work.jpg"
                    alt="Deluve team working together"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    loading="eager"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-950/10" />
              </div>
            </ScrollView>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollView>
              <Card className="h-full border-blue-500/20 hover:border-blue-400/30 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20">
                      <Target className="h-6 w-6 text-blue-700" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We partner with organizations to understand where work is
                    getting stuck, then design and build digital products that
                    make it easier to serve customers, run operations, and
                    reach business goals.
                  </p>
                </CardContent>
              </Card>
            </ScrollView>
            <ScrollView delay={0.1}>
              <Card className="h-full border-blue-500/20 hover:border-blue-400/30 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20">
                      <TrendingUp className="h-6 w-6 text-blue-700" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A future where organizations of every size can use
                    thoughtful technology to work smarter, create better
                    experiences, and adapt with confidence.
                  </p>
                </CardContent>
              </Card>
            </ScrollView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-blue-500/[0.02] py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles behind how we make decisions, build products, and work with our clients.
              </p>
            </div>
          </ScrollView>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <ScrollView key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-blue-500/20 hover:border-blue-400/30 hover:bg-blue-500/[0.02]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20">
                      <value.icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollView>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-blue-500/[0.005] py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground">A few chapters in the growth of our work and capabilities.</p>
            </div>
          </ScrollView>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <ScrollView key={index} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/25">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-card border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-blue-400">{item.year}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollView>
            ))}
          </div>
        </div>
      </section>

      <OurApproachSection />

      {/* CTA */}
      <section className="bg-blue-500/[0.015] py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollView>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Have a challenge to solve?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-base md:text-lg">
              Tell us what you’re working on, and we’ll discuss a practical next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-500 text-white">
                <Link href="/get-quote">Start a conversation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-blue-500/20 hover:border-blue-400/30 hover:bg-blue-500/10 text-blue-700 hover:text-blue-800">
                <Link href="/portfolio">Explore our work</Link>
              </Button>
            </div>
          </ScrollView>
        </div>
      </section>
    </div>
  )
}
