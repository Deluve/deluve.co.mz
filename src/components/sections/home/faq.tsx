"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of companies does Deluve serve?",
    a: "We work with early-stage startups, growing companies, and established organizations seeking technological innovation and digital transformation.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on complexity, but an MVP can be delivered in 4-8 weeks. More complex projects follow personalized roadmaps with incremental deliveries.",
  },
  {
    q: "What technologies do you use?",
    a: "We use a modern stack including AWS, GCP, React, Node.js, Python, plus platforms like Zoho, WordPress, Hikvision, and Hyper-V virtualization solutions.",
  },
  {
    q: "How does the consulting model work?",
    a: "We start with a comprehensive diagnosis, followed by a strategic plan with clear KPIs. We monitor implementation and continuously measure results.",
  },
  {
    q: "Do you offer post-implementation support?",
    a: "Yes, we offer continuous support plans with defined SLAs, proactive monitoring, and evolutionary maintenance of implemented systems.",
  },
  {
    q: "Do you offer training and knowledge transfer?",
    a: "Yes, knowledge transfer is integral to our process. We provide comprehensive training to your teams, documentation, and ongoing support to ensure your team can maintain and evolve the solutions independently.",
  },
  {
    q: "What's your approach to data security?",
    a: "Security is paramount. We implement industry-standard practices including encrypted communications, secure authentication, compliance with GDPR/CCPA, regular security audits, and adherence to ISO 27001 standards.",
  },
  {
    q: "How do you handle project communication and reporting?",
    a: "We maintain transparent communication through regular sprint reviews, weekly status reports, and dedicated project managers. You'll have visibility into progress, budget, and timelines throughout the entire engagement.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mt-4 leading-[1.1]">
                Questions<span className="text-gradient">?</span><br />
                <span className="text-muted-foreground/40">Answers.</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                Everything you need to know about working with us. Can&apos;t find the answer? Reach out directly.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    <AccordionItem
                      value={`faq-${i}`}
                      className="border-b border-border/60 px-4 py-0 rounded-lg transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-5 text-base group-hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}