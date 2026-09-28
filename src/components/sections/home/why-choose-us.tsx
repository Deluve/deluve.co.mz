import { CheckCircle, Users, TrendingUp, Award, Search, Code, Rocket } from "lucide-react"
import { ScrollView } from "@/components/scroll-view"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function WhyChooseUsAndProcess() {
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Quality Guaranteed",
      description: "100% client satisfaction with every project delivered",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Expert Design Team",
      description: "Skilled designers and developers focused on your success",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: "Efficient Solutions",
      description: "60% faster delivery with cutting-edge automation",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
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
        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <ScrollView>
            <Badge variant="secondary" className="mb-4 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20">
              Why Deluve 
            </Badge> 
          </ScrollView>
          <ScrollView delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-6">
              Transformative
              <span className="text-blue-400"> Solutions</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We transform innovative ideas into thriving businesses with proven methodologies and expert execution.
            </p>
          </ScrollView>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <ScrollView key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-6 rounded-xl border bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </ScrollView>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="relative mb-20">
          <div className="w-full border-t border-muted-foreground/20"></div>
        </div>

        {/* Our Process Section */}
        <div className="text-center mb-16">
          <ScrollView delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-6">
              Streamlined
              <span className="text-blue-400"> Methodology</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A proven 4-step methodology that transforms concepts into scalable, successful businesses.
            </p>
          </ScrollView>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <ScrollView key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollView>
          ))}
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