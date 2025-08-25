"use client";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ScrollView>
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ScrollView delay={0.1}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  At Deluve, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Contact us through our website forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a quote for our services</li>
                  <li>Apply for employment opportunities</li>
                  <li>Engage with our social media accounts</li>
                </ul>
                <p className="text-muted-foreground">
                  This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>
              </section>
            </ScrollView>

            <ScrollView delay={0.2}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and administrative messages</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>
              </section>
            </ScrollView>

            <ScrollView delay={0.3}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>
            </ScrollView>

            <ScrollView delay={0.4}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>
            </ScrollView>

            <ScrollView delay={0.5}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. For more information, please see our{" "}
                  <Link href="/cookies" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </section>
            </ScrollView>

            <ScrollView delay={0.6}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to rectify or update your personal information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>
            </ScrollView>

            <ScrollView delay={0.7}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>
            </ScrollView>

            <ScrollView delay={0.8}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. International Data Transfers
                </h2>
                <p className="text-muted-foreground mb-4">
                  Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
              </section>
            </ScrollView>

            <ScrollView delay={0.9}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </ScrollView>

            <ScrollView delay={1.0}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-2">
                    <strong>Email:</strong>{" "}
                    <a 
                      href="mailto:deluve.solutions@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      deluve.solutions@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong>Phone:</strong>{" "}
                    <a 
                      href="tel:+258841234567" 
                      className="text-primary hover:underline"
                    >
                      +258 84 123 4567
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Address:</strong> Maputo, Mozambique
                  </p>
                </div>
              </section>
            </ScrollView>
          </div>

          {/* Back to Home */}
          <ScrollView delay={1.1}>
            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center text-primary hover:underline"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </ScrollView>
        </div>
      </ScrollView>
    </div>
  );
}

