"use client"
import Image from "next/image"
import { Users, TrendingUp, Zap, Award } from "lucide-react"
import { ScrollView } from "@/components/scroll-view"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <ScrollView>
            <Badge variant="secondary" className="mb-4 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20">
              Est. 2023
            </Badge>
          </ScrollView>
          <ScrollView delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-6">
              Building Tomorrow&apos;s
              <span className="text-blue-400"> Success Stories</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We transform ideas into successful companies through strategic expertise and technology.
            </p>
          </ScrollView>
        </div>

        {/* Visual Story */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <ScrollView delay={0.05}>
            <div className="max-w-xl">
              <Badge variant="secondary" className="mb-4 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20">
                Studio snapshot
              </Badge>
              <h3 className="text-3xl font-semibold text-foreground md:text-4xl">
                We shape digital products with a visual point of view.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Strong interfaces need more than clean spacing. We mix product thinking, design craft, and credible imagery so the brand feels established before a user even scrolls.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: "30+" },
                  { label: "Launches", value: "12" },
                  { label: "Retention", value: "92%" },
                  { label: "Markets", value: "4" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-blue-500/15 bg-blue-500/5 p-4">
                    <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollView>

          <ScrollView delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <Image
                  src="/images/portfolio/eco.jpg"
                  alt="Digital product showcase"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                  <Image
                    src="/images/portfolio/art.jpg"
                    alt="Creative agency workspace"
                    width={900}
                    height={700}
                    className="h-48 w-full object-cover md:h-56"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-500/10 via-background to-background p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Visual direction</p>
                  <p className="mt-3 text-lg font-medium text-foreground">
                    Editorial imagery, clean grids, and high-contrast details keep the brand feeling premium.
                  </p>
                </div>
              </div>
            </div>
          </ScrollView>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollView delay={0.1}>
              <div className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-xl mb-2">Strategic Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We don&apos;t just build products—we architect sustainable business models that scale and dominate
                      markets.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollView>

            <ScrollView delay={0.2}>
              <div className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-xl mb-2">Execution Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From concept to market leadership, we deliver with precision, speed, and unwavering quality
                      standards.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollView>

            <ScrollView delay={0.3}>
              <div className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-xl mb-2">Partnership Commitment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your success defines our success. We&apos;re invested partners, not just service providers.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollView>
          </div>
        </div>

        {/* Foundation Values */}
        <div className="border-t border-border pt-16">
          <ScrollView>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Foundation</h3>
              <p className="text-muted-foreground text-lg">The principles that drive exceptional outcomes</p>
            </div>
          </ScrollView>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", desc: "Uncompromising quality in every deliverable" },
              { title: "Innovation", desc: "Pioneering solutions that create competitive advantages" },
              { title: "Integrity", desc: "Transparent partnerships built on trust" },
              { title: "Impact", desc: "Measurable results that transform businesses" },
            ].map((value, index) => (
              <ScrollView key={value.title} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-blue-600 mx-auto mb-6 rounded-full group-hover:scale-110 transition-transform"></div>
                  <h4 className="text-foreground font-semibold text-lg mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
