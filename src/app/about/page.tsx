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
    <div className="min-h-screen bg-background pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollView>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  About <span className="text-primary">Deluve</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We are a company passionate about technology and innovation, dedicated to transforming ideas into
                  digital solutions that make a difference in the business world.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Specialized Team</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Premium Quality</span>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                    <Image
                      className="relative rounded-2xl object-cover aspect-[4/3] w-full shadow-2xl grayscale transition-all duration-500 hover:grayscale-0 group-hover:rounded-xl"
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
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-primary" />
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
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
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
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6">
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
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
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-card border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-primary">{item.year}</span>
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
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your idea into reality?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us and discover how we can help your company reach new heights through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#services">Our Services</Link>
              </Button>
            </div>
          </ScrollView>
        </div>
      </section>
    </div>
  )
}
