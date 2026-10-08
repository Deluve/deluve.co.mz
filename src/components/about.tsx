"use client"
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
              We transform visions into scalable realities through strategic expertise and technology.
            </p>
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
                      We don&apos;t just build products—we architect sustainable business models designed to scale efficiently and lead the market.
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
                      From concept to launch, we deliver with precision, speed, and uncompromising quality standards.
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

      </div>
    </section>
  )
}
