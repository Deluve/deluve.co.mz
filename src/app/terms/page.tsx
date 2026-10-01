"use client";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ScrollView>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Effective as of: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These Terms of Service govern your use of Deluve Solutions&apos; website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Left Side */}
            <ScrollView delay={0.1}>
              <div className="lg:w-80 lg:flex-shrink-0">
                <div className="bg-gradient-to-b from-blue-500/[0.02] to-background p-6 rounded-lg sticky top-8 border border-blue-500/20">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Table of Contents</h2>
                  <nav className="space-y-2">
                    {[
                      "Acceptance of Terms",
                      "Description of Services",
                      "User Accounts and Registration",
                      "Acceptable Use Policy",
                      "Intellectual Property Rights",
                      "Privacy and Data Protection",
                      "Payment Terms",
                      "Termination",
                      "Limitation of Liability",
                      "Indemnification",
                      "Governing Law",
                      "Changes to Terms",
                      "Contact Information"
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={`#section-${index + 1}`}
                        className="block text-primary hover:text-blue-400 hover:bg-blue-500/5 text-sm py-2 px-3 rounded-lg transition-all duration-300 relative group"
                      >
                        <span className="relative z-10">
                          {index + 1}. {item}
                        </span>
                        <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/40 via-blue-300/60 to-blue-400/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </ScrollView>

            {/* Content - Right Side */}
            <div className="flex-1">
              <div className="prose prose-lg max-w-none">
                <ScrollView delay={0.2}>
                  <section id="section-1" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      By accessing and using the services provided by Deluve Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p className="text-muted-foreground">
                      These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.3}>
                  <section id="section-2" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      2. Description of Services
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Deluve Solutions provides digital solutions and services including but not limited to:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Web development and design services</li>
                        <li>Digital marketing solutions</li>
                        <li>Consulting and advisory services</li>
                        <li>Software development and maintenance</li>
                        <li>Technical support and training</li>
                        <li>Content creation and management</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground mt-6">
                      We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.4}>
                  <section id="section-3" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      3. User Accounts and Registration
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      To access certain features of our services, you may be required to create an account. You are responsible for:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li>Maintaining the confidentiality of your account credentials</li>
                        <li>All activities that occur under your account</li>
                        <li>Providing accurate and complete information</li>
                        <li>Notifying us immediately of any unauthorized use</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      We reserve the right to terminate accounts that violate these terms or are inactive for extended periods.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.5}>
                  <section id="section-4" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      4. Acceptable Use Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      You agree not to use our services to:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe upon the rights of others</li>
                        <li>Transmit harmful, offensive, or inappropriate content</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Interfere with the proper functioning of our services</li>
                        <li>Use our services for commercial purposes without authorization</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      Violation of this policy may result in immediate termination of your access to our services.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.6}>
                  <section id="section-5" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      5. Intellectual Property Rights
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Deluve Solutions or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      You may not reproduce, distribute, modify, or create derivative works without our express written consent.
                    </p>
                    <p className="text-muted-foreground">
                      By submitting content to us, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute such content in connection with our services.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.7}>
                  <section id="section-6" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      6. Privacy and Data Protection
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
                    </p>
                    <p className="text-muted-foreground">
                      By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.8}>
                  <section id="section-7" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      7. Payment Terms
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      For paid services, the following terms apply:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li>All fees are due upon receipt of invoice</li>
                        <li>Payment methods accepted will be specified at the time of purchase</li>
                        <li>Late payments may result in service suspension</li>
                        <li>Refunds are subject to our refund policy</li>
                        <li>Prices are subject to change with notice</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      We reserve the right to modify our pricing structure at any time.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.9}>
                  <section id="section-8" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      8. Termination
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Upon termination, your right to use the services will cease immediately.
                    </p>
                    <p className="text-muted-foreground">
                      All provisions of these Terms of Service which by their nature should survive termination shall survive termination.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.0}>
                  <section id="section-9" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      9. Limitation of Liability
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      In no event shall Deluve Solutions be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                    <p className="text-muted-foreground">
                      Our total liability to you for any claims arising from the use of our services shall not exceed the amount paid by you, if any, for accessing our services.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.1}>
                  <section id="section-10" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      10. Indemnification
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      You agree to indemnify, defend, and hold harmless Deluve Solutions and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Your use of our services</li>
                        <li>Your violation of these Terms of Service</li>
                        <li>Your violation of any third-party rights</li>
                        <li>Any content you submit or transmit through our services</li>
                      </ul>
                    </div>
                  </section>
                </ScrollView>

                <ScrollView delay={1.2}>
                  <section id="section-11" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      11. Governing Law
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      These Terms of Service shall be governed by and construed in accordance with the laws of Mozambique, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-muted-foreground">
                      Any disputes arising from these terms or your use of our services shall be resolved in the courts of Maputo, Mozambique.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.3}>
                  <section id="section-12" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      12. Changes to Terms
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
                    </p>
                    <p className="text-muted-foreground">
                      Your continued use of our services after any changes constitutes acceptance of the new Terms of Service.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.4}>
                  <section id="section-13" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      13. Contact Information
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-gradient-to-b from-blue-500/[0.05] to-blue-500/[0.02] p-6 rounded-lg space-y-3 border border-blue-500/20">
                      <p className="text-muted-foreground">
                        <strong>Email:</strong>{" "}
                        <a 
                          href="mailto:digital@deluve.co" 
                          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                        >
                          digital@deluve.co
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Phone:</strong>{" "}
                        <a 
                          href="tel:+258841234567" 
                          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
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

                <ScrollView delay={1.5}>
                  <div className="bg-gradient-to-b from-blue-500/[0.03] to-background p-6 rounded-lg mb-12 border border-blue-500/20">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Entire Agreement</h2>
                    <p className="text-muted-foreground">
                      These Terms of Service constitute the entire agreement between you and Deluve Solutions regarding the use of our services and supersede all prior agreements and understandings.
                    </p>
                  </div>
                </ScrollView>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <ScrollView delay={1.6}>
            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 hover:bg-blue-500/5 px-4 py-2 rounded-lg transition-all duration-300 group"
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
                <span className="relative">
                  Back to Home
                  <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/40 via-blue-300/60 to-blue-400/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                </span>
              </Link>
            </div>
          </ScrollView>
        </div>
      </ScrollView>
    </div>
  );
}
