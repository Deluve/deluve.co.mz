"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, ArrowRight } from "lucide-react"
import { ScrollView } from "./scroll-view"

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setFeedback(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result: { error?: string } = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "We couldn't send your message. Please try again.")
      }

      form.reset()
      setFeedback({ type: "success", message: "Thanks for your message. We'll get back to you within 24 hours." })
    } catch (error) {
      console.error("Contact form submission error:", error)
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "We couldn't send your message. Please try again.",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollView>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Build Your{" "}
              <span className="text-blue-400">Next Success?</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Let&apos;s discuss your vision and turn it into a successful business. Get in touch with our team today.
            </p>
          </ScrollView>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <ScrollView delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-first-name" className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input
                      id="contact-first-name"
                      name="firstName"
                      autoComplete="given-name"
                      maxLength={100}
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input
                      id="contact-last-name"
                      name="lastName"
                      autoComplete="family-name"
                      maxLength={100}
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    maxLength={200}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    minLength={10}
                    maxLength={5000}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 min-h-[120px]"
                    placeholder="Tell us about your startup idea, goals, and timeline..."
                  />
                </div>

                {feedback && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={feedback.type === "success" ? "text-sm text-green-600" : "text-sm text-red-600"}
                  >
                    {feedback.message}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 group shadow-lg shadow-blue-500/25"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  {!isSending && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </div>
          </ScrollView>

          {/* Contact Info */}
          <ScrollView delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We&apos;re here to help you build the next big thing.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">digital@deluve.co</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Avenida Julius Nyerere, Maputo, Mozambique</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="text-foreground font-semibold mb-4">Response Time</h4>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours. For urgent inquiries, please email us directly.
                </p>
              </div>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  )
}
