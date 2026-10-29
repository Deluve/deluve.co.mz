import Image from "next/image"
import { Users, TrendingUp, Award } from "lucide-react"
import { ScrollView } from "@/components/scroll-view"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyChooseUsAndProcess() {
  const reasons = [
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "Uncompromising Quality",
      description: "Rigorous standards ensure every deliverable is sharp, consistent, and ready to perform.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Senior Expert Team",
      description: "A compact group of specialists who move fast, stay agile, and remain hands-on from start to finish.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      title: "Efficient Execution",
      description: "Lean workflows and fewer handoffs mean we focus on progress, not bureaucracy.",
    },
  ]

  return (
    <section className="py-10 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch mb-14">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <ScrollView>
              <Badge variant="secondary" className="mb-4 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20">
                Why Deluve
              </Badge>
            </ScrollView>
            <ScrollView delay={0.1}>
              <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-6">
                Big impact. Simple process.

              </h2>
            </ScrollView>
            <ScrollView delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
                We believe great work shouldn't be complicated. You get a dedicated team, transparent communication, and a streamlined process designed to keep momentum high and distractions low.

              </p>
            </ScrollView>

            <ScrollView delay={0.25}>
              <div className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-4">
                    <div className="mt-0.5 rounded-xl bg-blue-500/10 p-2 ring-1 ring-blue-500/10">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{reason.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollView>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <ScrollView delay={0.15}>
              <div className="relative min-h-[540px] overflow-hidden rounded-[2.25rem] border border-border bg-card shadow-xl">
                <div className="absolute inset-0">
                  <Image
                    src="/images/get_together.png"
                    alt="Team celebrating a project milestone"
                    fill
                    sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, calc(100vw - 3rem)"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1e293b]/18 via-[#f4f0e7]/6 to-transparent" />
                </div>
                <div className="absolute left-5 top-5 max-w-xs rounded-2xl border border-white/10 bg-background/85 p-4 backdrop-blur-md md:left-6 md:top-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                    Digital atmosphere
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Modern tools, shared knowledge, and a collaborative way of building.
                  </p>
                </div>
              </div>
            </ScrollView>
          </div>
        </div>

        {/* CTA Section */}
        <ScrollView delay={0.3}>
          <div className="mt-16 text-center">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Link href="/#contact">Book a Discovery Call</Link>
            </Button>
          </div>
        </ScrollView>
      </div>
    </section>
  )
} 