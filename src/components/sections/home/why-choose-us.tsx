import Image from "next/image"
import { CheckCircle, Users, TrendingUp, Award, Search, Code, Rocket } from "lucide-react"
import { ScrollView } from "@/components/scroll-view"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function WhyChooseUsAndProcess() {
  const reasons = [
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "Quality Guaranteed",
      description: "Quality standards that keep every deliverable sharp and consistent.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Expert Design Team",
      description: "A compact team that moves quickly and stays close to the work.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      title: "Efficient Solutions",
      description: "Lean delivery, fewer handoffs, and a strong bias toward momentum.",
    },
  ]

  const steps = [
    {
      number: "01",
      icon: <Search className="h-6 w-6 text-blue-500" />,
      title: "Discovery & Strategy",
      description: "Market research, validation and strategic planning for your business",
    },
    {
      number: "02",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: "Custom Development",
      description: "Tailored solutions built to your unique business needs",
    },
    {
      number: "03",
      icon: <Rocket className="h-6 w-6 text-blue-500" />,
      title: "Launch & Testing",
      description: "Market deployment, user testing and product refinement",
    },
    {
      number: "04",
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      title: "Growth & Scale",
      description: "Performance optimization, scaling and ongoing evolution",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background" id="why-choose-us">
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
                Transformative Solutions, delivered with a simple process.
              </h2>
            </ScrollView>
            <ScrollView delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
                We keep the work lean: a focused team, clear communication, and a delivery style that avoids noise.
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
                    src="/images/get_together.jpg"
                    alt="Team celebrating a project milestone"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/45 to-transparent" />
                </div>
                <div className="absolute left-5 top-5 max-w-xs rounded-2xl border border-white/10 bg-background/85 p-4 backdrop-blur-md md:left-6 md:top-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                    Team momentum
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    A bigger visual presence helps the section feel closer to a studio story than a list of claims.
                  </p>
                </div>
              </div>
            </ScrollView>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-10">
          <div className="mb-10">
            <ScrollView delay={0.05}>
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                How we work
              </h3>
            </ScrollView>
            <ScrollView delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Four steps, but presented as a clean sequence instead of four separate cards.
              </p>
            </ScrollView>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {steps.map((step, index) => (
              <ScrollView key={index} delay={index * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card px-5 py-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-blue-500/10">
                    {step.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-sm font-semibold text-blue-500">{step.number}</span>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </ScrollView>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollView delay={0.3}>
          <div className="text-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
              Start Your Journey
            </Button>
          </div>
        </ScrollView>
      </div>
    </section>
  )
} 