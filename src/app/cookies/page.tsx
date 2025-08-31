"use client";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Effective as of: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This Cookie Policy explains how Deluve Solutions uses cookies and similar technologies to recognize you when you visit our website and how we use them to enhance your experience.
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
                      "What are Cookies?",
                      "How We Use Cookies",
                      "Types of Cookies We Use",
                      "Third-Party Cookies",
                      "Managing Your Cookie Preferences",
                      "Cookie Retention Periods",
                      "Updates to This Policy",
                      "Contact Us"
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
                      1. What are Cookies?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
                    </p>
                    <p className="text-muted-foreground">
                      We use both persistent and session cookies to provide you with a better experience on our website.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.3}>
                  <section id="section-2" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      2. How We Use Cookies
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We use cookies for several purposes, including:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                        <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground mt-6">
                      By using our website, you consent to the use of cookies in accordance with this policy.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.4}>
                  <section id="section-3" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      3. Types of Cookies We Use
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                          <li>Setting your privacy preferences</li>
                          <li>Logging in or filling in forms</li>
                          <li>Remembering your language preferences</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Performance Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                        </p>
                        <p className="text-muted-foreground">
                          All information these cookies collect is aggregated and therefore anonymous.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Functionality Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                        </p>
                        <p className="text-muted-foreground">
                          If you do not allow these cookies, then some or all of these services may not function properly.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          We use analytics cookies to understand how visitors interact with our website. This helps us improve our website and provide better user experiences.
                        </p>
                        <p className="text-muted-foreground">
                          These cookies collect information about how you use our website, including which pages you visit most often and if you get error messages from web pages.
                        </p>
                      </div>
                    </div>
                  </section>
                </ScrollView>

                <ScrollView delay={0.5}>
                  <section id="section-4" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      4. Third-Party Cookies
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Third-Party Services We Use:</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                        <li><strong>Google Fonts:</strong> For typography and font loading</li>
                        <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
                        <li><strong>Payment Processors:</strong> For secure payment processing (if applicable)</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground mt-6">
                      These third-party services have their own privacy policies and cookie policies. We encourage you to review their policies to understand how they use cookies and your data.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.6}>
                  <section id="section-5" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      5. Managing Your Cookie Preferences
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      You have several options for managing cookies:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Browser Settings</h3>
                      <p className="text-muted-foreground mb-3">
                        Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                      </p>
                      <p className="text-muted-foreground">
                        To learn more about how to manage cookies in your browser, visit the help section of your browser.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 mt-4">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Consent</h3>
                      <p className="text-muted-foreground">
                        When you first visit our website, you will be presented with a cookie consent banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by contacting us.
                      </p>
                    </div>
                  </section>
                </ScrollView>

                <ScrollView delay={0.7}>
                  <section id="section-6" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      6. Cookie Retention Periods
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      The length of time a cookie remains on your device depends on its type:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                        <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                        <li><strong>Analytics Cookies:</strong> Typically retained for 2 years</li>
                        <li><strong>Marketing Cookies:</strong> Usually retained for 1-2 years</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground mt-6">
                      We regularly review and update our cookie retention periods to ensure they align with our data protection obligations and business needs.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.8}>
                  <section id="section-7" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      7. Updates to This Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      When we make changes to this policy, we will update the "Effective as of" date at the top of this page and notify you of any material changes.
                    </p>
                    <p className="text-muted-foreground">
                      We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.9}>
                  <section id="section-8" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      8. Contact Us
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="bg-gradient-to-b from-blue-500/[0.05] to-blue-500/[0.02] p-6 rounded-lg space-y-3 border border-blue-500/20">
                      <p className="text-muted-foreground">
                        <strong>Email:</strong>{" "}
                        <a 
                          href="mailto:digital@deluve.io" 
                          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                        >
                          digital@deluve.io
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
                    <p className="text-muted-foreground mt-6">
                      You can also contact us if you would like to exercise your rights regarding your personal data, including the right to access, correct, or delete your information.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.0}>
                  <div className="bg-gradient-to-b from-blue-500/[0.03] to-background p-6 rounded-lg mb-12 border border-blue-500/20">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
                    <p className="text-muted-foreground">
                      Under applicable data protection laws, you have the right to access, correct, or delete your personal data. You also have the right to object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided above.
                    </p>
                  </div>
                </ScrollView>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <ScrollView delay={1.1}>
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
