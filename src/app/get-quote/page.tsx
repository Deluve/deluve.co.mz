"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { ScrollView } from "@/components/scroll-view"
import { CheckCircle, ArrowLeft, Clock, Users, DollarSign, FileText, Building2, Mail, Phone, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GetQuotePage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    website: "",

    // Project Details
    projectType: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",

    // Additional Requirements
    hasExistingWebsite: "",
    competitorWebsites: "",
    targetAudience: "",
    goals: "",

    // Communication Preferences
    preferredContact: "",
    urgency: "",
    hearAboutUs: "",

    // Agreement
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.company.trim()) newErrors.company = "Company name is required"
    if (!formData.projectType) newErrors.projectType = "Project type is required"
    if (!formData.description.trim()) newErrors.description = "Project description is required"
    if (formData.description.length < 50) newErrors.description = "Please provide more details (minimum 50 characters)"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 2500))

      // Here you would typically send the data to your backend
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
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center px-6">
        <Card className="max-w-lg w-full border-border hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-foreground">Quote Request Received!</h1>
              <p className="text-muted-foreground mb-4">
                Thank you for your interest in our services. We've received your project details and will review them
                carefully.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <strong>What's next?</strong>
                  <br />
                  Our team will analyze your requirements and get back to you within 24 hours with a detailed proposal and
                  next steps.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Homepage
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-border text-muted-foreground hover:bg-muted hover:text-foreground bg-transparent"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 pt-20">
            <ScrollView>
              <Badge variant="secondary" className="mb-4 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20">
                Get Started
              </Badge>
            </ScrollView>
            <ScrollView delay={0.1}>
              <h1 className="text-balance text-4xl font-semibold lg:text-5xl mb-6">
                Get Your Project
                <span className="text-blue-400"> Quote</span>
              </h1>
            </ScrollView>
            <ScrollView delay={0.2}>
              <p className="text-xl text-muted-foreground mb-4 text-balance max-w-3xl mx-auto">
                Transform your vision into reality with our expert development team
              </p>
            </ScrollView>
            <ScrollView delay={0.3}>
              <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
                Fill out this comprehensive form to help us understand your project requirements. The more details you
                provide, the more accurate and tailored our proposal will be.
              </p>
            </ScrollView>

            {/* Trust Indicators */}
            <ScrollView delay={0.4}>
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-500" />
                  </div>
                  <span>24h Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <span>500+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-blue-500" />
                  </div>
                  <span>Free Consultation</span>
                </div>
              </div>
            </ScrollView>
          </div>

          {/* Form */}
          <ScrollView delay={0.5}>
            <Card className="border-border hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Project Quote Request</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Personal Information Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <Users className="w-4 h-4 text-blue-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Business Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="position" className="text-foreground font-medium">
                          Your Position
                        </Label>
                        <Input
                          id="position"
                          type="text"
                          value={formData.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                          className="mt-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="CEO, CTO, Marketing Manager..."
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-foreground font-medium">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="mt-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="Your Company Inc."
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                      </div>

                      <div>
                        <Label htmlFor="website" className="text-foreground font-medium">
                          Current Website
                        </Label>
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          className="mt-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <Building2 className="w-4 h-4 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Project Details</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="projectType" className="text-foreground font-medium">
                          Primary Project Type *
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleInputChange("projectType", value)}
                          required
                        >
                          <SelectTrigger className="mt-2 bg-muted/50 border-border text-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                            <SelectValue placeholder="Select your main project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border-border text-popover-foreground">
                            <SelectItem value="website">Business Website</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                            <SelectItem value="webapp">Web Application</SelectItem>
                            <SelectItem value="mobile">Mobile App (iOS/Android)</SelectItem>
                            <SelectItem value="saas">SaaS Platform</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="maintenance">Ongoing Maintenance</SelectItem>
                            <SelectItem value="consulting">Technical Consulting</SelectItem>
                            <SelectItem value="other">Other (Please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                      </div>

                      <div>
                        <Label className="text-foreground font-medium">Additional Services Needed</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
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
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={service}
                                checked={formData.services.includes(service)}
                                onCheckedChange={() => handleServiceToggle(service)}
                                className="border-border data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                              />
                              <Label htmlFor={service} className="text-sm text-muted-foreground cursor-pointer">
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="budget" className="text-foreground font-medium">
                            Project Budget Range
                          </Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="mt-2 bg-muted/50 border-border text-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover border-border text-popover-foreground">
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
                          <Label htmlFor="timeline" className="text-foreground font-medium">
                            Desired Timeline
                          </Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleInputChange("timeline", value)}
                          >
                            <SelectTrigger className="mt-2 bg-muted/50 border-border text-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover border-border text-popover-foreground">
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
                    </div>
                  </div>

                  {/* Project Description Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
                        <FileText className="w-4 h-4 text-purple-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Project Requirements</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="description" className="text-foreground font-medium">
                          Project Description *
                        </Label>
                        <Textarea
                          id="description"
                          required
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          placeholder="Please describe your project in detail. Include features you need, your target audience, business goals, and any specific requirements or preferences you have..."
                          className="mt-2 min-h-[150px] bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                        />
                        <div className="flex justify-between items-center mt-2">
                          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                          <p className="text-xs text-muted-foreground ml-auto">{formData.description.length}/500 characters</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="targetAudience" className="text-foreground font-medium">
                            Target Audience
                          </Label>
                          <Textarea
                            id="targetAudience"
                            value={formData.targetAudience}
                            onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                            placeholder="Who is your target audience? Demographics, interests, behavior..."
                            className="mt-2 min-h-[100px] bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          />
                        </div>

                        <div>
                          <Label htmlFor="goals" className="text-foreground font-medium">
                            Business Goals
                          </Label>
                          <Textarea
                            id="goals"
                            value={formData.goals}
                            onChange={(e) => handleInputChange("goals", e.target.value)}
                            placeholder="What do you want to achieve with this project? Increase sales, brand awareness, user engagement..."
                            className="mt-2 min-h-[100px] bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="competitorWebsites" className="text-foreground font-medium">
                          Competitor/Inspiration Websites
                        </Label>
                        <Textarea
                          id="competitorWebsites"
                          value={formData.competitorWebsites}
                          onChange={(e) => handleInputChange("competitorWebsites", e.target.value)}
                          placeholder="Share URLs of websites you like or consider as competitors. What do you like about them?"
                          className="mt-2 min-h-[80px] bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-orange-500/30">
                        <Mail className="w-4 h-4 text-orange-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Additional Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferredContact" className="text-foreground font-medium">
                          Preferred Contact Method
                        </Label>
                        <Select
                          value={formData.preferredContact}
                          onValueChange={(value) => handleInputChange("preferredContact", value)}
                        >
                          <SelectTrigger className="mt-2 bg-muted/50 border-border text-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                            <SelectValue placeholder="How should we contact you?" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border-border text-popover-foreground">
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="video">Video Call</SelectItem>
                            <SelectItem value="meeting">In-person Meeting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="hearAboutUs" className="text-foreground font-medium">
                          How did you hear about us?
                        </Label>
                        <Select
                          value={formData.hearAboutUs}
                          onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                        >
                          <SelectTrigger className="mt-2 bg-muted/50 border-border text-foreground focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border-border text-popover-foreground">
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

                  {/* Terms and Submit Section */}
                  <div className="border-t border-border pt-8">
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked: boolean | "indeterminate") => handleInputChange("agreeToTerms", checked)}
                          className="mt-1 border-border data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                        />
                        <Label htmlFor="agreeToTerms" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to the{" "}
                          <Link href="/terms" className="text-blue-500 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-blue-500 hover:underline">
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
                          onCheckedChange={(checked: boolean | "indeterminate") => handleInputChange("subscribeNewsletter", checked)}
                          className="mt-1 border-border data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <Label htmlFor="subscribeNewsletter" className="text-sm text-muted-foreground cursor-pointer">
                          Subscribe to our newsletter for web development tips and company updates
                        </Label>
                      </div>
                    </div>

                    {errors.submit && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                        <p className="text-red-500 text-sm">{errors.submit}</p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-12 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400 disabled:cursor-not-allowed min-w-[200px] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4 mr-2" />
                            Get My Quote
                          </>
                        )}
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        className="px-8 py-4 text-lg border-border text-muted-foreground hover:bg-muted hover:text-foreground bg-transparent transition-all duration-300"
                        asChild
                      >
                        <Link href="/contact">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Instead
                        </Link>
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                      Questions? Contact us at{" "}
                      <a href="mailto:hello@deluve.co.mz" className="text-blue-500 hover:underline">
                        hello@deluve.co.mz
                      </a>{" "}
                      or call{" "}
                      <a href="tel:+258841234567" className="text-blue-500 hover:underline">
                        +258 84 123 4567
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollView>
        </div>
      </div>
    </div>
  )
}
