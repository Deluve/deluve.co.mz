"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

function getBudgetPeriod(projectType: string) {
  if (projectType === "maintenance") return "month"
  if (projectType === "consulting") return "hour"
  return "project"
}

export default function GetQuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
    targetAudience: "",
    goals: "",
    preferredContact: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const totalSteps = 3

  const steps = [
    { number: 1, title: "Contact details" },
    { number: 2, title: "Project brief" },
    { number: 3, title: "Review & send" },
  ]

  const projectBudgetRanges = [
    { value: "25k-50k-mzn", label: "MZN 25,000 – 50,000" },
    { value: "50k-100k-mzn", label: "MZN 50,000 – 100,000" },
    { value: "100k-250k-mzn", label: "MZN 100,000 – 250,000" },
    { value: "250k-plus-mzn", label: "Above MZN 250,000" },
    { value: "discuss", label: "Prefer to discuss" },
  ]

  const maintenanceBudgetRanges = [
    { value: "monthly-up-to-10k-mzn", label: "Up to MZN 10,000/month" },
    { value: "monthly-10k-25k-mzn", label: "MZN 10,000 – 25,000/month" },
    { value: "monthly-25k-plus-mzn", label: "Above MZN 25,000/month" },
    { value: "monthly-discuss", label: "Prefer to discuss" },
  ]

  const consultingBudgetRanges = [
    { value: "hourly-500-750-mzn", label: "MZN 500 – 750/hour (basic services)" },
    { value: "hourly-750-1200-mzn", label: "MZN 750 – 1,200/hour" },
    { value: "hourly-1200-2500-mzn", label: "MZN 1,200 – 2,500/hour (specialized)" },
    { value: "hourly-2500-plus-mzn", label: "Above MZN 2,500/hour" },
    { value: "hourly-discuss", label: "Prefer to discuss" },
  ]

  const budgetRanges = formData.projectType === "maintenance"
    ? maintenanceBudgetRanges
    : formData.projectType === "consulting"
      ? consultingBudgetRanges
      : projectBudgetRanges

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value }
      if (
        field === "projectType" &&
        typeof value === "string" &&
        getBudgetPeriod(prev.projectType) !== getBudgetPeriod(value)
      ) {
        next.budget = ""
      }
      return next
    })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleServiceToggle = (service: string) => {
    const currentServices = formData.services
    const updatedServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service]
    handleInputChange("services", updatedServices)
  }

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
      if (!formData.company.trim()) newErrors.company = "Company name is required"
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = "Project type is required"
      if (!formData.description.trim()) newErrors.description = "Project description is required"
      if (formData.description.length < 50) newErrors.description = "Please provide more details (minimum 50 characters)"
    }

    if (step === 3) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(currentStep)) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result: { error?: string } = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your quote request. Please try again.")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
      setErrors({
        submit: error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <Card className="w-full max-w-md border-border bg-card shadow-sm">
          <CardContent className="p-8 text-center">
            <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-700">
              <CheckCircle className="size-8" />
            </div>
            <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">Quote Request Received!</h1>
            <p className="mb-6 text-sm leading-7 text-muted-foreground">
              Thank you for your interest. We&apos;ll review your project details and get back to you within 24 hours.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/">Back to Homepage</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="mb-2 block font-medium text-foreground">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="border-border bg-background focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block font-medium text-foreground">
                Business Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="border-border bg-background focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="company" className="mb-2 block font-medium text-foreground">
                Company / Organization *
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="border-border bg-background focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
                placeholder="Your company or organization"
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="mb-2 block font-medium text-foreground">
                Phone Number <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="border-border bg-background focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
                placeholder="+258 84 123 4567"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="projectType" className="mb-2 block font-medium text-foreground">
                Primary Project Type *
              </Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger className="border-border bg-background focus:border-blue-600 focus:ring-blue-600/20">
                  <SelectValue placeholder="Select your main project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Business Website</SelectItem>
                  <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                  <SelectItem value="webapp">Web Application</SelectItem>
                  <SelectItem value="mobile">Mobile App (iOS/Android)</SelectItem>
                  <SelectItem value="saas">SaaS Platform</SelectItem>
                  <SelectItem value="redesign">Website Redesign</SelectItem>
                  <SelectItem value="maintenance">Ongoing Maintenance</SelectItem>
                  <SelectItem value="consulting">Technical Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
            </div>

            <fieldset>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <legend className="text-sm font-medium text-foreground">Additional Services (optional)</legend>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">
                {[
                  "UI/UX Design",
                  "SEO Optimization",
                  "Content Management",
                  "Payment Integration",
                  "Analytics Setup",
                  "Social Media Integration",
                  "Email Marketing",
                  "Performance Optimization",
                  "Security Audit",
                  "API Development",
                  "Database Design",
                  "Cloud Hosting Setup",
                ].map((service) => (
                  <Label
                    key={service}
                    className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-sm transition-colors ${
                      formData.services.includes(service)
                        ? "border-blue-600/50 bg-blue-500/5"
                        : "border-border bg-background hover:border-blue-500/40 hover:bg-muted/40"
                    }`}
                  >
                    <Checkbox
                      id={`service-${service}`}
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <span>{service}</span>
                  </Label>
                ))}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-muted/20 p-4 sm:grid-cols-2 sm:gap-6 sm:p-5">
              <div>
                <Label htmlFor="budget" className="mb-2 block font-medium text-foreground">
                  {formData.projectType === "maintenance"
                    ? "What monthly budget do you expect? (MZN)"
                    : formData.projectType === "consulting"
                      ? "What hourly budget do you expect? (MZN)"
                      : "What budget do you expect for this project? (MZN)"}
                </Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="border-border bg-background focus:border-blue-600 focus:ring-blue-600/20">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline" className="mb-2 block font-medium text-foreground">
                  Desired Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="border-border bg-background focus:border-blue-600 focus:ring-blue-600/20">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                    <SelectItem value="1-2months">1-2 months</SelectItem>
                    <SelectItem value="2-4months">2-4 months</SelectItem>
                    <SelectItem value="4-6months">4-6 months</SelectItem>
                    <SelectItem value="6months+">6+ months</SelectItem>
                    <SelectItem value="flexible">Flexible timeline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="mb-2 block font-medium text-foreground">
                Project Description *
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                maxLength={500}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Please describe your project in detail..."
                className="min-h-[130px] border-border bg-background focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
              />
              <div className="flex justify-between items-center mt-2">
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                <p className="text-xs text-slate-500 ml-auto">{formData.description.length}/500 characters</p>
              </div>
            </div>

            <details className="group rounded-xl border border-border">
              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-foreground marker:hidden">
                Add optional project context
                <span className="float-right text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true">
                  ↓
                </span>
              </summary>
              <div className="space-y-5 border-t border-border p-4">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <Label htmlFor="targetAudience" className="mb-2 block font-medium text-foreground">
                      Target Audience
                    </Label>
                    <Textarea
                      id="targetAudience"
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                      maxLength={2000}
                      placeholder="Who is your target audience?"
                      className="min-h-[100px] border-border bg-background focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="goals" className="mb-2 block font-medium text-foreground">
                      Business Goals
                    </Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => handleInputChange("goals", e.target.value)}
                      maxLength={2000}
                      placeholder="What do you want to achieve?"
                      className="min-h-[100px] border-border bg-background focus-visible:border-blue-600 focus-visible:ring-blue-600/20"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="preferredContact" className="mb-2 block font-medium text-foreground">
                    Preferred Contact Method
                  </Label>
                  <Select
                    value={formData.preferredContact}
                    onValueChange={(value) => handleInputChange("preferredContact", value)}
                  >
                    <SelectTrigger className="border-border bg-background focus:border-blue-600 focus:ring-blue-600/20">
                      <SelectValue placeholder="How should we contact you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="video">Video Call</SelectItem>
                      <SelectItem value="meeting">In-person Meeting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </details>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4 rounded-xl border border-border bg-muted/40 p-6">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Contact Information</h3>
                <p className="text-sm text-muted-foreground">
                  {formData.name} • {formData.email}
                  <br />
                  {formData.company}
                  {formData.phone && (
                    <>
                      <br />
                      {formData.phone}
                    </>
                  )}
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="mb-2 font-semibold text-foreground">Project Details</h3>
                <p className="text-sm text-muted-foreground">
                  Type: {formData.projectType || "Not specified"}
                  <br />
                  Budget: {budgetRanges.find((range) => range.value === formData.budget)?.label || "Not specified"}
                  <br />
                  Timeline: {formData.timeline || "Not specified"}
                  {formData.preferredContact && (
                    <>
                      <br />
                      Contact preference: {formData.preferredContact}
                    </>
                  )}
                </p>
              </div>

              {formData.services.length > 0 && (
                <div className="border-t border-border pt-4">
                  <h3 className="mb-2 font-semibold text-foreground">Additional Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.services.map((service) => (
                      <Badge key={service} variant="secondary" className="border-blue-500/20 bg-blue-500/5 text-blue-700">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked: boolean | "indeterminate") => handleInputChange("agreeToTerms", checked === true)}
                />
                <Label htmlFor="agreeToTerms" className="cursor-pointer text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  *
                </Label>
              </div>
              {errors.agreeToTerms && <p className="text-red-500 text-sm ml-6">{errors.agreeToTerms}</p>}

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onCheckedChange={(checked: boolean | "indeterminate") =>
                    handleInputChange("subscribeNewsletter", checked === true)
                  }
                />
                <Label htmlFor="subscribeNewsletter" className="cursor-pointer text-sm text-muted-foreground">
                  Subscribe to our newsletter for updates
                </Label>
              </div>
            </div>

            {errors.submit && (
              <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <p className="text-sm text-destructive">{errors.submit}</p>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.1)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"
      />
      <div aria-hidden className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur">
              <Sparkles className="size-3.5" />
              Start a conversation
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s solve your next{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                digital challenge.
              </span>
            </h1>
          </div>

          <div
            className="mb-6 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5 md:mb-8 md:p-6"
            aria-label={`Form progress: step ${currentStep} of ${totalSteps}`}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-foreground">
                Step {currentStep} of {totalSteps}
              </p>
              <p className="text-xs text-muted-foreground">
                {Math.round((currentStep / totalSteps) * 100)}% complete
              </p>
            </div>
            <div
              className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-valuenow={currentStep}
              aria-valuemin={1}
              aria-valuemax={totalSteps}
              aria-valuetext={`Step ${currentStep} of ${totalSteps}`}
            >
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  aria-current={step.number === currentStep ? "step" : undefined}
                  className={`text-center text-[10px] leading-tight sm:text-xs ${
                    step.number <= currentStep
                      ? "font-medium text-blue-700"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="rounded-2xl border-border bg-card shadow-sm">
              <CardContent className="p-5 sm:p-8 lg:p-10">
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
                    {steps[currentStep - 1].title}
                  </h2>
                </div>

                <form onSubmit={handleSubmit}>
                  {renderStepContent()}

                  <div className="mt-10 flex justify-between border-t border-border pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                      disabled={currentStep === 1}
                      className="border-border text-foreground hover:bg-muted"
                    >
                      Back
                    </Button>

                    {currentStep < totalSteps ? (
                      <Button type="button" onClick={handleNext}>
                        Continue
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 size-4 animate-spin rounded-full border-b-2 border-white"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Quote Request
                            <ArrowRight className="ml-2 size-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}