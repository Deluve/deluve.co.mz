import { NextResponse } from "next/server"
import { lookup } from "node:dns/promises"
import { isIP } from "node:net"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const projectTypes = {
  website: "Business Website",
  ecommerce: "E-commerce Platform",
  webapp: "Web Application",
  mobile: "Mobile App (iOS/Android)",
  saas: "SaaS Platform",
  redesign: "Website Redesign",
  maintenance: "Ongoing Maintenance",
  consulting: "Technical Consulting",
  other: "Other",
} as const

const budgets = {
  "300k-900k-mzn": "MZN 300,000 – 900,000 (approx.)",
  "900k-1.8m-mzn": "MZN 900,000 – 1,800,000 (approx.)",
  "1.8m-3m-mzn": "MZN 1,800,000 – 3,000,000 (approx.)",
  "3m-6m-mzn": "MZN 3,000,000 – 6,000,000 (approx.)",
  "6m+-mzn": "MZN 6,000,000+ (approx.)",
  discuss: "Prefer to discuss",
} as const

const timelines = {
  asap: "ASAP (Rush project)",
  "1-2months": "1-2 months",
  "2-4months": "2-4 months",
  "4-6months": "4-6 months",
  "6months+": "6+ months",
  flexible: "Flexible timeline",
} as const

const contactMethods = {
  email: "Email",
  phone: "Phone Call",
  video: "Video Call",
  meeting: "In-person Meeting",
} as const

const referralSources = {
  google: "Google Search",
  referral: "Referral",
  social: "Social Media",
  linkedin: "LinkedIn",
  portfolio: "Portfolio/Website",
  event: "Event/Conference",
  other: "Other",
} as const

const availableServices = [
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
]

type QuoteRequest = {
  name: string
  email: string
  phone: string
  company: string
  position: string
  website: string
  projectType: keyof typeof projectTypes
  services: string[]
  budget: string
  timeline: string
  description: string
  competitorWebsites: string
  targetAudience: string
  goals: string
  preferredContact: string
  hearAboutUs: string
  agreeToTerms: boolean
  subscribeNewsletter: boolean
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isOptionalChoice<T extends Record<string, string>>(
  options: T,
  value: string,
): value is keyof T & string {
  return value === "" || Object.hasOwn(options, value)
}

function isQuoteRequest(value: unknown): value is QuoteRequest {
  if (!isRecord(value)) return false

  const stringFields = [
    "name",
    "email",
    "phone",
    "company",
    "position",
    "website",
    "projectType",
    "budget",
    "timeline",
    "description",
    "competitorWebsites",
    "targetAudience",
    "goals",
    "preferredContact",
    "hearAboutUs",
  ] as const

  if (stringFields.some((field) => typeof value[field] !== "string")) return false
  if (!Array.isArray(value.services) || !value.services.every((service) => typeof service === "string")) return false
  if (typeof value.agreeToTerms !== "boolean" || typeof value.subscribeNewsletter !== "boolean") return false

  const data = value as unknown as QuoteRequest
  return (
    data.name.trim().length > 0 &&
    data.name.length <= 200 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    data.email.length <= 254 &&
    data.company.trim().length > 0 &&
    data.company.length <= 200 &&
    data.phone.length <= 100 &&
    data.position.length <= 200 &&
    data.website.length <= 2048 &&
    (data.website === "" || isHttpUrl(data.website)) &&
    Object.hasOwn(projectTypes, data.projectType) &&
    data.services.length <= availableServices.length &&
    data.services.every((service) => availableServices.includes(service)) &&
    isOptionalChoice(budgets, data.budget) &&
    isOptionalChoice(timelines, data.timeline) &&
    data.description.trim().length >= 50 &&
    data.description.length <= 500 &&
    data.competitorWebsites.length <= 2000 &&
    data.targetAudience.length <= 2000 &&
    data.goals.length <= 2000 &&
    isOptionalChoice(contactMethods, data.preferredContact) &&
    isOptionalChoice(referralSources, data.hearAboutUs) &&
    data.agreeToTerms
  )
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

function displayChoice<T extends Record<string, string>>(options: T, value: string) {
  return value ? options[value as keyof T] : "Not specified"
}

function formatQuoteRequest(data: QuoteRequest) {
  return [
    "New quote request",
    "",
    "CONTACT",
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Company: ${data.company.trim()}`,
    `Position: ${data.position || "Not provided"}`,
    `Website: ${data.website || "Not provided"}`,
    "",
    "PROJECT",
    `Type: ${projectTypes[data.projectType]}`,
    `Additional services: ${data.services.length ? data.services.join(", ") : "None selected"}`,
    `Budget: ${displayChoice(budgets, data.budget)}`,
    `Timeline: ${displayChoice(timelines, data.timeline)}`,
    "",
    "PROJECT DESCRIPTION",
    data.description.trim(),
    "",
    "ADDITIONAL CONTEXT",
    `Target audience: ${data.targetAudience || "Not provided"}`,
    `Business goals: ${data.goals || "Not provided"}`,
    `Competitor/inspiration websites: ${data.competitorWebsites || "Not provided"}`,
    `Preferred contact: ${displayChoice(contactMethods, data.preferredContact)}`,
    `How they heard about us: ${displayChoice(referralSources, data.hearAboutUs)}`,
    `Newsletter requested: ${data.subscribeNewsletter ? "Yes" : "No"}`,
  ].join("\n")
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!isQuoteRequest(body)) {
    return NextResponse.json(
      { error: "Please check the required fields and try again." },
      { status: 400 },
    )
  }

  const host = process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io"
  const port = Number(process.env.SMTP_PORT)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.QUOTE_FROM_EMAIL
  const to = process.env.QUOTE_TO_EMAIL 

  if (!user || !pass || !Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Quote request email is not configured: SMTP_USER and SMTP_PASS are required, and SMTP_PORT must be valid.")
    return NextResponse.json(
      { error: "Quote requests are temporarily unavailable. Please email digital@deluve.co directly." },
      { status: 503 },
    )
  }

  try {
    const smtpAddress = isIP(host) ? host : (await lookup(host, { family: 4 })).address
    const transporter = nodemailer.createTransport({
      host: smtpAddress,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: isIP(host) ? undefined : { servername: host },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    })

    await transporter.sendMail({
      from: { name: "Deluve", address: from },
      to,
      replyTo: body.email.trim(),
      subject: "New quote request",
      text: formatQuoteRequest(body),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send quote request via SMTP:", error)
    return NextResponse.json(
      { error: "We couldn't send your quote request right now. Please try again or email digital@deluve.co." },
      { status: 502 },
    )
  }
}
