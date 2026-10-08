"use client"
import { Users, Target, Award, Globe, Heart, Lightbulb, Handshake, TrendingUp } from "lucide-react"
import { ScrollView } from "@/components/scroll-view"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import TeamSection from "@/components/team"
import { motion } from "motion/react"

const companyValues = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "Every project is developed with dedication and love for technology and innovation.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our goal is always to deliver solutions that exceed our clients' expectations.",
  },
  {
    icon: Lightbulb,
    title: "Constant Innovation",
    description: "We are always seeking the latest technologies and methodologies in the market.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "We build lasting relationships based on trust and transparency.",
  },
]

const timeline = [
  {
    year: "2021",
    title: "Deluve Foundation",
    description: "We started our journey with the goal of transforming ideas into innovative digital solutions.",
  },
  {
    year: "2022",
    title: "First Major Projects",
    description: "We developed our first large-scale projects, establishing our reputation in the market.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    description: "We grew our team with professionals specialized in different areas of technology.",
  },
  {
    year: "2024",
    title: "Market Recognition",
    description: "We achieved over 50 delivered projects and recognition as a reference in digital development.",
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-500/[0.05] via-background to-background overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.1] via-transparent to-blue-600/[0.05] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollView>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">Deluve</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We are a company passionate about technology and innovation, dedicated to transforming ideas into
                  digital solutions that make a difference in the business world.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Specialized Team</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                    <Globe className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Premium Quality</span>
                  </div>
                </div>
              </div>
            </ScrollView>
            <ScrollView delay={0.1}>
              <div className="group overflow-hidden">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
                    <Image
                      className="relative rounded-2xl object-cover aspect-[4/3] w-full shadow-2xl grayscale transition-all duration-500 hover:grayscale-0 group-hover:rounded-xl border border-blue-500/20"
                      src="/images/team-work.jpg"
                      alt="Deluve team working together"
                      height="600"
                      width="800"
                    />
                  </div>
                </motion.div>
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
                      <Target className="h-6 w-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To transform ideas into innovative digital solutions, helping companies of all sizes achieve their
                    goals through technology. Our commitment is to deliver excellence in every project, exceeding
                    expectations and creating real value for our clients.
                  </p>
                </CardContent>
              </Card>
            </ScrollView>
            <ScrollView delay={0.1}>
              <Card className="h-full border-blue-500/20 hover:border-blue-400/30 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as the leading reference in developing innovative digital solutions, contributing
                    to the digital transformation of companies and sustainable business growth through cutting-edge
                    technology.
                  </p>
                </CardContent>
              </Card>
            </ScrollView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-blue-500/[0.03] to-background overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-blue-600/[0.03] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our company and define our organizational culture.
              </p>
            </div>
          </ScrollView>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <ScrollView key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-blue-500/20 hover:border-blue-400/30 hover:bg-blue-500/[0.02]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20">
                      <value.icon className="h-6 w-6 text-blue-400" />
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
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground">Discover the key milestones of our history and evolution.</p>
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

      {/* Team Section */}
      <TeamSection />

      {/* CTA */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-blue-500/[0.05] to-background overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-blue-600/[0.05] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your idea into reality?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us and discover how we can help your company reach new heights through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500/20 hover:border-blue-400/30">
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-blue-500/20 hover:border-blue-400/30 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300">
                <Link href="/#services">Our Services</Link>
              </Button>
            </div>
          </ScrollView>
        </div>
      </section>
    </div>
  )
}
