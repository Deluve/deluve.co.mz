"use client";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/", description: "Welcome to Deluve Solutions" },
        { name: "About", href: "/about", description: "Learn about our company and mission" },
        { name: "Portfolio", href: "/portfolio", description: "View our latest projects and work" },
        { name: "Get Quote", href: "/get-quote", description: "Request a quote for your project" },
        { name: "Full Version", href: "/full-version", description: "Experience our complete website" },
      ]
    },
    {
      title: "Legal & Policy",
      links: [
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your privacy" },
        { name: "Terms of Service", href: "/terms", description: "Terms and conditions of use" },
        { name: "Cookie Policy", href: "/cookies", description: "How we use cookies" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/#services", description: "Custom website development" },
        { name: "Digital Marketing", href: "/#services", description: "Online marketing solutions" },
        { name: "UI/UX Design", href: "/#services", description: "User interface and experience design" },
        { name: "Consulting", href: "/#services", description: "Digital strategy consulting" },
        { name: "Maintenance", href: "/#services", description: "Website maintenance and support" },
      ]
    },
    {
      title: "Portfolio Categories",
      links: [
        { name: "Websites", href: "/portfolio", description: "Custom website projects" },
        { name: "Mobile Apps", href: "/portfolio", description: "Mobile application development" },
        { name: "E-commerce", href: "/portfolio", description: "Online store solutions" },
        { name: "Branding", href: "/portfolio", description: "Brand identity and design" },
        { name: "Digital Marketing", href: "/portfolio", description: "Marketing campaigns and strategies" },
      ]
    }
  ];

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
              Sitemap
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Complete overview of all pages and sections on our website
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through our website structure to find exactly what you're looking for. This sitemap provides a comprehensive view of all available pages and content.
            </p>
          </motion.div>

          {/* Sitemap Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {siteStructure.map((section, sectionIndex) => (
              <ScrollView key={section.title} delay={0.1 + sectionIndex * 0.1}>
                <div className="bg-gradient-to-b from-blue-500/[0.02] to-background p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/30 transition-colors">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div
                        key={link.name}
                        className="group p-4 rounded-lg bg-background/50 border border-blue-500/10 hover:border-blue-400/20 hover:bg-blue-500/5 transition-all duration-300"
                      >
                        <Link
                          href={link.href}
                          className="block"
                        >
                          <h3 className="text-lg font-medium text-foreground group-hover:text-blue-400 transition-colors mb-2">
                            {link.name}
                          </h3>
                          <p className="text-sm text-muted-foreground group-hover:text-blue-300/80 transition-colors">
                            {link.description}
                          </p>
                          <div className="mt-2 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs">Visit page</span>
                            <svg
                              className="w-3 h-3 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollView>
            ))}
          </div>

          {/* Additional Information */}
          <ScrollView delay={0.6}>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-blue-500/[0.03] to-background p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Navigation</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    ← Back to Home
                  </Link>
                  <Link href="/about" className="block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    About Us
                  </Link>
                  <Link href="/portfolio" className="block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    Our Work
                  </Link>
                  <Link href="/get-quote" className="block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-b from-blue-500/[0.03] to-background p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a 
                      href="mailto:deluve.solutions@gmail.com" 
                      className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      deluve.solutions@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a 
                      href="tel:+258841234567" 
                      className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      +258 84 123 4567
                    </a>
                  </p>
                  <p><strong>Location:</strong> Maputo, Mozambique</p>
                </div>
              </div>

              <div className="bg-gradient-to-b from-blue-500/[0.03] to-background p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Legal Pages</h3>
                <div className="space-y-2">
                  <Link href="/privacy" className="block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </ScrollView>

          {/* Search Functionality */}
          <ScrollView delay={0.7}>
            <div className="mt-16 bg-gradient-to-b from-blue-500/[0.02] to-background p-8 rounded-lg border border-blue-500/20">
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                If you can't find the information you need in our sitemap, feel free to contact us directly. We're here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
                >
                  Get a Quote
                </Link>
                <Link
                  href="mailto:deluve.solutions@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollView>

          {/* Back to Home */}
          <ScrollView delay={0.8}>
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
