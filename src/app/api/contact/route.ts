import { NextResponse } from "next/server"
import { lookup } from "node:dns/promises"
import { isIP } from "node:net"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

type ContactMessage = {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

function isContactMessage(value: unknown): value is ContactMessage {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false

  const data = value as Record<string, unknown>
  return (
    typeof data.firstName === "string" &&
    data.firstName.trim().length > 0 &&
    data.firstName.length <= 100 &&
    typeof data.lastName === "string" &&
    data.lastName.trim().length > 0 &&
    data.lastName.length <= 100 &&
    typeof data.email === "string" &&
    data.email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.company === "string" &&
    data.company.trim().length > 0 &&
    data.company.length <= 200 &&
    typeof data.message === "string" &&
    data.message.trim().length >= 10 &&
    data.message.length <= 5000
  )
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!isContactMessage(body)) {
    return NextResponse.json(
      { error: "Please enter your name, a valid email, company, and a message of at least 10 characters." },
      { status: 400 },
    )
  }

  const host = process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io"
  const port = Number(process.env.SMTP_PORT)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.QUOTE_FROM_EMAIL
  const to = process.env.QUOTE_TO_EMAIL

  if (!user || !pass || !from || !to || !Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Contact email is not configured: SMTP credentials, sender, recipient, and a valid port are required.")
    return NextResponse.json(
      { error: "Messages are temporarily unavailable. Please email digital@deluve.co directly." },
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
      subject: "New contact message",
      text: [
        `Name: ${body.firstName.trim()} ${body.lastName.trim()}`,
        `Email: ${body.email.trim()}`,
        `Company: ${body.company.trim()}`,
        "",
        "Message:",
        body.message.trim(),
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send contact message via SMTP:", error)
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again or email digital@deluve.co." },
      { status: 502 },
    )
  }
}
