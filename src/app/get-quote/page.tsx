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
import { useLanguage } from "@/contexts/language-context"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GetQuotePage() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    website: "",
    projectType: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
    competitorWebsites: "",
    targetAudience: "",
    goals: "",
    preferredContact: "",
    hearAboutUs: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const totalSteps = 4

  const steps = [
    { number: 1, title: "Contact Information" },
    { number: 2, title: "Project Details" },
    { number: 3, title: "Additional Information" },
    { number: 4, title: "Review & Submit" },
  ]

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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

    if (step === 4) {
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
      await new Promise((resolve) => setTimeout(resolve, 2500))
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
      setErrors({ submit: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-6">
        <Card className="max-w-md w-full border-slate-200 hover:border-blue-300 transition-colors shadow-2xl bg-card">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-400/20">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-3 text-foreground">Quote Request Received!</h1>
            <p className="text-muted-foreground mb-6 text-sm">
              Thank you for your interest. We&apos;ll review your project details and get back to you within 24 hours.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-400/20">
                <Link href="/">Back to Homepage</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-slate-200 hover:border-blue-300 hover:bg-blue-500/10 text-blue-700 hover:text-blue-800">
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
              <Label htmlFor="name" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                Business Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <Label htmlFor="position" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  Your Position
                </Label>
                <Input
                  id="position"
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange("position", e.target.value)}
                  className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                  placeholder="CEO, CTO, Manager..."
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                Company Name *
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                placeholder="Your Company Inc."
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>

            <div>
              <Label htmlFor="website" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                Current Website
              </Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="projectType" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                Primary Project Type *
              </Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10">
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

            <div>
              <Label className="text-slate-700 dark:text-slate-300 font-medium mb-3 block">
                Additional Services Needed
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                  <div
                    key={service}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.services.includes(service)
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md shadow-blue-500/20"
                        : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <Label htmlFor={service} className="text-sm cursor-pointer" onClick={() => handleServiceToggle(service)}>
                        {service}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="budget" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  Project Budget Range
                </Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                    <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k+">$100,000+</SelectItem>
                    <SelectItem value="discuss">Prefer to discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  Desired Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10">
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
              <Label htmlFor="description" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                Project Description *
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Please describe your project in detail..."
                className="min-h-[150px] bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
              />
              <div className="flex justify-between items-center mt-2">
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                <p className="text-xs text-slate-500 ml-auto">{formData.description.length}/500 characters</p>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="targetAudience" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  Target Audience
                </Label>
                <Textarea
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                  placeholder="Who is your target audience?"
                  className="min-h-[100px] bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                />
              </div>

              <div>
                <Label htmlFor="goals" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  Business Goals
                </Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  placeholder="What do you want to achieve?"
                  className="min-h-[100px] bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="competitorWebsites" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                Competitor/Inspiration Websites
              </Label>
              <Textarea
                id="competitorWebsites"
                value={formData.competitorWebsites}
                onChange={(e) => handleInputChange("competitorWebsites", e.target.value)}
                placeholder="Share URLs of websites you like..."
                className="min-h-[80px] bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="preferredContact" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  Preferred Contact Method
                </Label>
                <Select
                  value={formData.preferredContact}
                  onValueChange={(value) => handleInputChange("preferredContact", value)}
                >
                  <SelectTrigger className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10">
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

              <div>
                <Label htmlFor="hearAboutUs" className="text-slate-700 dark:text-slate-300 font-medium mb-2 block">
                  How did you hear about us?
                </Label>
                <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                  <SelectTrigger className="bg-background/50 backdrop-blur-sm border-blue-500/10 focus:border-blue-400/20 focus:ring-blue-400/10">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="portfolio">Portfolio/Website</SelectItem>
                    <SelectItem value="event">Event/Conference</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 space-y-4 border border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Contact Information</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {formData.name} • {formData.email}
                  <br />
                  {formData.company}
                </p>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Project Details</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Type: {formData.projectType || "Not specified"}
                  <br />
                  Budget: {formData.budget || "Not specified"}
                  <br />
                  Timeline: {formData.timeline || "Not specified"}
                </p>
              </div>

              {formData.services.length > 0 && (
                <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Additional Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.services.map((service) => (
                      <Badge key={service} variant="secondary" className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700">
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
                <Label htmlFor="agreeToTerms" className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
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
                  onCheckedChange={(checked: boolean | "indeterminate") => handleInputChange("subscribeNewsletter", checked === true)}
                />
                <Label htmlFor="subscribeNewsletter" className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                  Subscribe to our newsletter for updates
                </Label>
              </div>
            </div>

            {errors.submit && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-600 dark:text-red-400 text-sm">{errors.submit}</p>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-blue-600/[0.03] blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get Your Project <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your vision into reality with our expert development team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Steps */}
            <div className="lg:col-span-4">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-blue-500/10 hover:border-blue-400/20 transition-colors p-6 sticky top-6">
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div key={step.number} className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                          step.number < currentStep
                            ? "bg-blue-600 text-white"
                            : step.number === currentStep
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                        }`}
                      >
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-sm font-medium ${
                            step.number <= currentStep
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-blue-500/10">
                  <h3 className="font-semibold text-foreground mb-4">About Your Quote</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out this form to help us understand your project requirements. The more details you provide, the more accurate our proposal will be.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="lg:col-span-8">
              <Card className="border-blue-500/10 hover:border-blue-400/20 transition-colors shadow-xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {steps[currentStep - 1].title}
                    </h2>
                    <p className="text-muted-foreground">
                      {currentStep === 1 && "Please enter your contact information"}
                      {currentStep === 2 && "Tell us about your project requirements"}
                      {currentStep === 3 && "Share additional details about your needs"}
                      {currentStep === 4 && "Review your information and submit"}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {renderStepContent()}

                    <div className="flex justify-between mt-10 pt-8 border-t border-blue-500/10">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                        disabled={currentStep === 1}
                        className="border-blue-500/10 hover:border-blue-400/20 hover:bg-blue-500/5 text-blue-400 hover:text-blue-300"
                      >
                        Back
                      </Button>

                      {currentStep < totalSteps ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Quote Request
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>

                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Questions? Contact us at{" "}
                    <a href="mailto:digital@deluve.io" className="text-blue-600 hover:underline">
                      digital@deluve.io
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+258841234567" className="text-blue-600 hover:underline">
                      +258 84 123 4567
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}