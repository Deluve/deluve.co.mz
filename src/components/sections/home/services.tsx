import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Smartphone, Bot, Zap, Globe, Shield } from "lucide-react";
import Link from "next/link";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  url: string;
}

const services: Service[] = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    title: "Custom Software Development",
    description: "We create cutting-edge websites and web applications that engage users and drive results.",
    features: ["User Engagement", "Growth Optimization", "Scalable Solutions", "Performance Boost"],
    popular: true,
    url: "#",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-500" />,
    title: "Mobile Solutions",
    description: "Custom mobile applications that work seamlessly across all platforms and devices.",
    features: ["Cross-Platform Reach", "User Experience", "Market Expansion", "Customer Retention"],
    url: "#",
  },
  {
    icon: <Bot className="h-8 w-8 text-blue-500" />,
    title: "AI & Chatbots",
    description: "Smart AI solutions and chatbots that streamline processes and enhance user experiences.",
    features: ["Process Automation", "24/7 Support", "Cost Reduction", "Customer Satisfaction"],
    url: "#",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    title: "Business Automation",
    description: "Comprehensive CRM and ERP systems that give you complete control over your business.",
    features: ["Process Optimization", "Data Insights", "Workflow Efficiency", "Cost Savings"],
    url: "#",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    title: "Infrastructure Support",
    description: "Comprehensive infrastructure support and maintenance to ensure your systems run smoothly.",
    features: ["24/7 Monitoring", "System Maintenance", "Performance Boost", "Technical Support"],
    url: "#",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets and customer data.",
    features: ["Data Protection", "Threat Detection", "Compliance", "24/7 Monitoring"],
    url: "#",
  },
];

export default function ServicesSection2() {
  return (
    <section className="py-12  md:py-20 bg-gradient-to-b from-muted/20 to-background" id="portfolio">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <ScrollView>
            <Badge variant="secondary" className="mb-4 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20">
              Our Core Services
            </Badge>
          </ScrollView>
          <ScrollView delay={0.1}>
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-6">
              Comprehensive
              <span className="text-blue-400"> Digital Solutions</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We deliver cutting-edge solutions that transform businesses and enhance user experiences.
            </p>
          </ScrollView>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollView key={index} delay={index * 0.1}>
              <Card
                className="group relative overflow-hidden border-border hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer min-h-[400px]"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-blue-500 text-white animate-pulse">
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <div className="transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-balance transition-colors duration-300 group-hover:text-blue-500">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-pretty leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-1.5">
                      {service.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="secondary"
                          className="text-xs bg-muted hover:bg-muted/80 transition-all duration-300 group-hover:bg-blue-500/10 group-hover:text-blue-500 group-hover:scale-105 w-full h-8 flex items-center justify-center text-center"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Link href={service.url}>
                      <Button
                        className="w-full group/btn bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group-hover:bg-blue-500 group-hover:scale-105"
                        size="sm"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </ScrollView>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollView delay={0.3}>
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto bg-card border-border hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 group">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4 text-balance transition-colors duration-300 group-hover:text-blue-500">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty transition-colors duration-300 group-hover:text-foreground/80">
                  Let&apos;s discuss how we can help you achieve your digital goals and create 
                  innovative solutions that drive real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/get-quote">
                    <Button
                      size="lg"
                      className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
