import React from "react";
import { CustomCursorElement } from "@/components/custom-cursor-element";
import { InView } from "@/components/motion-primitives/in-view";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { SERVICES_LIST } from "@/content/services";
import { Code, Smartphone, Bot, Zap, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Bot: Bot,
  Zap: Zap,
};

// Visual representations for each service
const serviceVisuals = {
  Code: {
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    border: "border-emerald-200/30",
    accent: "bg-emerald-500/10",
    pattern: (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-500 rounded-full"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-teal-500 rounded-full"></div>
        <div className="absolute bottom-6 left-8 w-2 h-2 bg-cyan-500 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-emerald-400 rounded-full"></div>
      </div>
    )
  },
  Smartphone: {
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    border: "border-blue-200/30",
    accent: "bg-blue-500/10",
    pattern: (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-6 left-6 w-3 h-3 bg-blue-500 rounded-lg"></div>
        <div className="absolute top-12 right-6 w-2 h-2 bg-indigo-500 rounded-full"></div>
        <div className="absolute bottom-8 left-12 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-6 right-12 w-1 h-1 bg-blue-400 rounded-full"></div>
      </div>
    )
  },
  Bot: {
    gradient: "from-violet-500/20 via-purple-500/20 to-pink-500/20",
    border: "border-violet-200/30",
    accent: "bg-violet-500/10",
    pattern: (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-2 h-2 bg-violet-500 rounded-full"></div>
        <div className="absolute top-10 left-6 w-3 h-3 bg-purple-500 rounded-lg"></div>
        <div className="absolute bottom-8 right-8 w-2 h-2 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-violet-400 rounded-full"></div>
      </div>
    )
  },
  Zap: {
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    border: "border-amber-200/30",
    accent: "bg-amber-500/10",
    pattern: (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-6 right-6 w-2 h-2 bg-amber-500 rounded-full"></div>
        <div className="absolute top-12 left-8 w-3 h-3 bg-orange-500 rounded-lg"></div>
        <div className="absolute bottom-6 right-12 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-amber-400 rounded-full"></div>
      </div>
    )
  }
};

export default function ServicesSection2() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background" id="services">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center mb-6 md:mb-8">
          <ScrollView>
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-6">
              <span className="text-muted-foreground">Our Services</span>
            </div>
          </ScrollView>
          <ScrollView delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold lg:text-6xl mb-6">
              Discover the Ideal
              <span className="text-primary"> Solution for You</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Deluve, we specialize in digital transformation that goes beyond
              just technology implementation. We help businesses evolve their
              digital presence, optimize processes, and create meaningful
              connections with their audience.
            </p>
          </ScrollView>
        </div>

        {/* Services List */}
        <div className="space-y-8 md:space-y-12">
          {SERVICES_LIST.map((service, index) => {
            const visual = serviceVisuals[service.icon as keyof typeof serviceVisuals];
            return (
              <div
                key={service.name}
                className="group overflow-hidden border-b border-border/50 pb-8 md:pb-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                  {/* Left Column - Content */}
                  <div className="self-start lg:col-span-2 space-y-8">
                    <ScrollView>
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {React.createElement(iconMap[service.icon as keyof typeof iconMap], {
                              className: "w-5 h-5 text-primary",
                              strokeWidth: 1.5,
                            })}
                          </div>
                          <h3 className="text-2xl font-semibold lg:text-3xl">
                            {service.name}
                          </h3>
                        </div>
                      </div>
                    </ScrollView>

                    <ScrollView delay={0.1}>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </ScrollView>

                    <ScrollView delay={0.2}>
                      <div className="space-y-4">
                        <h4 className="font-medium text-foreground">Key Benefits:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.tags.map((tag, tagIndex) => (
                            <div key={tagIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollView>

                    <ScrollView delay={0.3}>
                      <Link
                        href={service.url}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group/link"
                      >
                        Learn More About {service.name}
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </ScrollView>
                  </div>

                  {/* Right Column - Visual */}
                  <div className="lg:col-span-3">
                    <CustomCursorElement
                      cursor={
                        <div className="text-primary text-lg font-medium bg-background/80 backdrop-blur px-3 py-1 rounded-full border">
                          Explore
                        </div>
                      }
                    >
                      <InView
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 20,
                            filter: "blur(14px)",
                            scale: 0.5,
                            originX: 0,
                            originY: 0,
                          },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                              delay: 0.01,
                              duration: 0.5,
                            },
                          },
                        }}
                        viewOptions={{
                          margin: "0px 0px -250px 0px",
                          once: true,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Link href={service.url}>
                          <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${visual.gradient} border ${visual.border} transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10`}>
                            {/* Decorative pattern */}
                            {visual.pattern}
                            
                            {/* Subtle geometric shapes */}
                            <div className="absolute inset-0">
                              <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/10 rounded-full"></div>
                              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-white/10 rounded-lg rotate-45"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/10 rounded-full"></div>
                            </div>
                            
                            {/* Service indicator */}
                            <div className="absolute top-6 right-6">
                              <div className={`p-2 rounded-lg ${visual.accent} backdrop-blur-sm`}>
                                {React.createElement(iconMap[service.icon as keyof typeof iconMap], {
                                  className: "w-4 h-4 text-primary",
                                  strokeWidth: 1.5,
                                })}
                              </div>
                            </div>
                            
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                        </Link>
                      </InView>
                    </CustomCursorElement>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <ScrollView delay={0.2}>
          <div className="mt-12 text-center">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you&apos;re starting your digital journey or accelerating your existing transformation, 
                we&apos;ve got you covered with comprehensive solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
