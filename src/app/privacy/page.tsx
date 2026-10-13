"use client";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Effective as of: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your privacy is extremely important to us. This notice explains our online information practices and the choices you can make about the way your information is collected and used.
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
                      "Scope of this Privacy Policy",
                      "What Information do we Collect?",
                      "Why do we Need your Personal Data?",
                      "Your Rights",
                      "Where will Data be Transferred to?",
                      "How Long will Data be Stored?",
                      "Do we Collect Information from Children?",
                      "What do we do with the information we Collect?",
                      "When do we Disclose Information to Third Parties?",
                      "Could my Information be Transferred to other Countries?",
                      "What Choices do I have?",
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
                      1. Scope of this Privacy Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      This Privacy Policy relates to information collected by Deluve Solutions through your use of our website, services, features, and when you otherwise interact with us (collectively referred to as the &quot;Deluve Services&quot;).
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>If you do not agree to our use of your personal data in line with this policy, please do not use the Deluve Services.</strong>
                    </p>
                    <p className="text-muted-foreground">
                      This Privacy Policy is incorporated into and governed by our Terms of Use. Any capitalized words we use in this Privacy Policy that we haven&apos;t defined here will have the same meaning that they&apos;re given in our Terms of Use.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.3}>
                  <section id="section-2" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      2. What Information do we Collect?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Depending on your use of the Deluve Services, we collect two types of information: <strong>personally identifiable information</strong> and <strong>non-personally identifiable information</strong>.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Personally Identifiable Information</h3>
                        <p className="text-muted-foreground mb-3">
                          Personally identifiable information identifies you or can be used to identify or contact you. Examples include:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                          <li>Name, email address, and phone number</li>
                          <li>Company name and job title</li>
                          <li>Billing and payment information</li>
                          <li>IP address and device information</li>
                          <li>Any other information you provide to us</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Non-Personally Identifiable Information</h3>
                        <p className="text-muted-foreground mb-3">
                          Non-personally identifiable information cannot be used to identify or contact you, including:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                          <li>Demographic information (age, profession, industry)</li>
                          <li>Browser types and domain names</li>
                          <li>Statistical data about service usage</li>
                          <li>Device and connection information</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </ScrollView>

                <ScrollView delay={0.4}>
                  <section id="section-3" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      3. Why do we Need your Personal Data?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We do not sell any data, including your personal data. We will only collect and process your personal data in accordance with applicable data protection and privacy laws.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      We need to collect and process certain personal data to provide you with access to Deluve Services. This consent provides us with the legal basis we require under applicable law to process your data.
                    </p>

                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Information we collect automatically:</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li><strong>Your use of the Services:</strong> Features you use, interactions with our platform, search terms, and collaboration patterns</li>
                        <li><strong>Device and Connection Information:</strong> Computer, phone, tablet information, operating system, browser type, IP address</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> To enhance your experience and provide personalized content</li>
                      </ul>
                    </div>
                  </section>
                </ScrollView>

                <ScrollView delay={0.5}>
                  <section id="section-4" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      4. Your Rights
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Depending on your location, you have certain rights regarding your personal information:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li><strong>Access:</strong> Request a copy of your personal information</li>
                        <li><strong>Rectification:</strong> Update or correct your personal information</li>
                        <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                        <li><strong>Restriction:</strong> Limit how we process your information</li>
                        <li><strong>Portability:</strong> Receive your data in a structured format</li>
                        <li><strong>Objection:</strong> Object to certain types of processing</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      To exercise these rights, please contact us using the information provided in the Contact Us section.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.6}>
                  <section id="section-5" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      5. Where will Data be Transferred to?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                    </p>
                    <p className="text-muted-foreground">
                      We primarily store and process data in Mozambique and may use cloud services that may transfer data to other countries. All such transfers are conducted in compliance with applicable data protection regulations.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.7}>
                  <section id="section-6" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      6. How Long will Data be Stored?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <p className="text-muted-foreground">
                      When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable legal requirements.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.8}>
                  <section id="section-7" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      7. Do we Collect Information from Children?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Our Services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.
                    </p>
                    <p className="text-muted-foreground">
                      If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={0.9}>
                  <section id="section-8" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      8. What do we do with the information we Collect?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect to:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Send you technical notices, updates, and administrative messages</li>
                        <li>Communicate with you about products, services, and events</li>
                        <li>Monitor and analyze trends, usage, and activities</li>
                        <li>Detect, investigate, and prevent fraudulent transactions</li>
                        <li>Personalize your experience and provide relevant content</li>
                      </ul>
                    </div>
                  </section>
                </ScrollView>

                <ScrollView delay={1.0}>
                  <section id="section-9" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      9. When do we Disclose Information to Third Parties?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li><strong>With your explicit consent</strong></li>
                        <li><strong>To comply with legal obligations</strong> or respond to lawful requests</li>
                        <li><strong>To protect our rights, property, or safety</strong> and that of our users</li>
                        <li><strong>In connection with a business transfer</strong> or merger</li>
                        <li><strong>With service providers</strong> who assist us in operating our services</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      Any third parties with whom we share information are required to maintain the confidentiality and security of your personal information.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.1}>
                  <section id="section-10" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      10. Could my Information be Transferred to other Countries?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Yes, your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                    </p>
                    <p className="text-muted-foreground">
                      We primarily operate in Mozambique but may use cloud services and third-party providers located in other countries. All international transfers are conducted in accordance with applicable data protection regulations and include appropriate safeguards.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.2}>
                  <section id="section-11" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      11. What Choices do I have?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      You have several choices regarding the collection, use, and sharing of your information:
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                        <li><strong>Marketing Communications:</strong> You can opt out of marketing emails by clicking the unsubscribe link or contacting us</li>
                        <li><strong>Cookies:</strong> You can control cookie settings through your browser preferences</li>
                        <li><strong>Account Information:</strong> You can update or correct your information through your account settings</li>
                        <li><strong>Data Deletion:</strong> You can request deletion of your account and associated data</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      <strong>Do Not Track:</strong> We take no action in response to Do Not Track requests from your browser.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.3}>
                  <section id="section-12" className="mb-12 p-6 rounded-lg border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      12. Contact Us
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                    <p className="text-muted-foreground mt-6">
                      <strong>Subject to the next paragraph, we ask that you not send or disclose to us any sensitive personal data</strong> (e.g., social security numbers, information related to racial or ethnic origin, political opinions, religion or other beliefs, health, biometrics or genetic characteristics, criminal background or trade union membership) on or through the Deluve Services or otherwise.
                    </p>
                  </section>
                </ScrollView>

                <ScrollView delay={1.4}>
                  <div className="bg-gradient-to-b from-blue-500/[0.03] to-background p-6 rounded-lg mb-12 border border-blue-500/20">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground mb-4">
                      We may revise this Privacy Policy from time to time. We will not make changes that result in significant additional uses or disclosures of your personally identifiable information without notifying you of such changes via email.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>By using the Deluve Services, you signify your acceptance of this Privacy Policy.</strong> If you do not agree to this Privacy Policy, you should not use the Deluve Services. Continued use of the Deluve Services following the posting of changes to this Privacy Policy will mean that you accept those changes.
                    </p>
                  </div>
                </ScrollView>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <ScrollView delay={1.5}>
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

