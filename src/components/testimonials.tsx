"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "@/components/scroll-view";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Operations Manager",
    company: "TechFlow",
    initials: "MS",
    quote:
      "Deluve helped us simplify operations and cut manual work dramatically. Their process was clear, fast, and focused on measurable results.",
    rating: 5,
    featured: true,
  },
  {
    name: "Carlos Mendes",
    role: "Marketing Director",
    company: "InnovateCo",
    initials: "CM",
    quote:
      "The new website gave us a more professional presence and improved conversion from day one. The quality of the execution stood out.",
    rating: 5,
  },
  {
    name: "Ana Silva",
    role: "Founder",
    company: "StartupHub",
    initials: "AS",
    quote:
      "Their team understood our goals quickly and delivered a solution that felt tailored to our business, not just another template.",
    rating: 5,
  },
  {
    name: "João Costa",
    role: "CTO",
    company: "DigitalSolutions",
    initials: "JC",
    quote:
      "The automation work reduced repetitive tasks and gave our team better visibility into key operations. Strong technical execution.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-background py-10 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ScrollView>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Testimonials
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-balance text-foreground md:text-5xl lg:text-6xl">
                Trusted by teams that need <span className="text-blue-700">results</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:mt-6">
                Deluve works with growing companies and established organizations that need dependable execution, clean communication, and measurable outcomes.
              </p>
            </ScrollView>

            <ScrollView delay={0.15}>
              <div className="mt-6 rounded-2xl border border-blue-500/15 bg-blue-500/5 p-5 shadow-sm md:mt-8 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 md:h-12 md:w-12">
                    <Quote className="h-5 w-5 text-blue-700 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Average client rating</p>
                    <div className="mt-1 flex items-center gap-1 text-blue-700">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Consistent delivery, responsive communication, and solutions built around business goals.
                </p>
              </div>
            </ScrollView>
          </div>

          <div className="lg:col-span-8">
            <div className="md:hidden">
              <div className="grid gap-3 pb-2">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <ScrollView key={testimonial.name} delay={index * 0.05}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      className="w-full"
                    >
                      <Card
                        className={`group relative overflow-hidden border border-slate-200 bg-card shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 ${
                          testimonial.featured ? "bg-blue-50/40" : ""
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <CardContent className={testimonial.featured ? "p-5" : "p-4"}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10 shrink-0 border border-blue-500/15">
                                <AvatarFallback className="bg-blue-500/10 text-xs font-semibold text-blue-700">
                                  {testimonial.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {testimonial.role} · {testimonial.company}
                                </p>
                              </div>
                            </div>
                            <Quote className="h-5 w-5 shrink-0 text-blue-700/40" />
                          </div>

                          <div className="mt-3 flex items-center gap-1 text-blue-700">
                            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                              <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                            ))}
                          </div>

                          <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {testimonial.quote}
                          </blockquote>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollView>
                ))}
              </div>
            </div>

            <div className="hidden md:grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <ScrollView key={testimonial.name} delay={index * 0.08}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className={testimonial.featured ? "md:col-span-2" : ""}
                  >
                    <Card
                      className={`group relative overflow-hidden border border-slate-200 bg-card shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 ${
                        testimonial.featured ? "bg-blue-50/40" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <CardContent className={testimonial.featured ? "p-8 md:p-10" : "p-6"}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border border-blue-500/15">
                              <AvatarFallback className="bg-blue-500/10 text-sm font-semibold text-blue-700">
                                {testimonial.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {testimonial.role} · {testimonial.company}
                              </p>
                            </div>
                          </div>
                          <Quote className="h-6 w-6 text-blue-700/40" />
                        </div>

                        <div className="mt-5 flex items-center gap-1 text-blue-700">
                          {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 fill-current" />
                          ))}
                        </div>

                        <blockquote
                          className={`mt-5 leading-relaxed text-muted-foreground ${
                            testimonial.featured ? "text-lg md:text-xl" : "text-sm"
                          }`}
                        >
                          {testimonial.quote}
                        </blockquote>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
