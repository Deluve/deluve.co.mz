import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { SERVICES_LIST } from "@/content/services";
import { Code, Smartphone, Bot, Zap, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Bot: Bot,
  Zap: Zap,
};

export default function ServicesSection2() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background" id="services">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <ScrollView>
            <div className="inline-flex items-center rounded-full border border-blue-500/20 px-4 py-2 text-sm mb-6 bg-blue-500/5">
              <span className="text-blue-400 font-medium">Our Expertise</span>
            </div>
          </ScrollView>
          <ScrollView delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-6">
              Comprehensive
              <span className="text-blue-400"> Digital Solutions</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver end-to-end digital transformation services that drive growth, 
              enhance efficiency, and create meaningful connections with your audience.
            </p>
          </ScrollView>
        </div>

        {/* Services Grid - 2 columns on desktop */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {SERVICES_LIST.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ScrollView key={service.name} delay={index * 0.1}>
                <div className="group relative">
                  {/* Service Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 md:p-8 h-full transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/15 transition-colors duration-300 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {service.description}
                          </p>
                        </div>
                      </div>

                                             {/* Benefits Grid - 1 column on mobile, 2 columns on desktop */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 flex-1">
                         {service.tags.map((tag, tagIndex) => (
                           <div key={tagIndex} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                             <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                             <span className="text-sm text-muted-foreground">{tag}</span>
                           </div>
                         ))}
                       </div>
                      
                                             {/* Learn More Link */}
                       <div className="mt-auto">
                         <Link
                           href={service.url}
                           className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium group/link relative"
                         >
                           <span>Learn More</span>
                           <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                           <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-white/60 via-white/80 to-white/60 rounded-full transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-out"></div>
                         </Link>
                       </div>
                    </div>
                  </div>
                </div>
              </ScrollView>
            );
          })}
        </div>

        {/* CTA Section */}
        <ScrollView delay={0.3}>
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how we can help you achieve your digital goals and create 
                innovative solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-quote"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors inline-flex items-center gap-2"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
