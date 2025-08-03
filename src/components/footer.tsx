"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { FOOTER_LINKS } from "@/content/footer";

export default function FooterSection() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <ScrollView>
            <div className="lg:col-span-1">
              <Link
                href="/"
                aria-label="go home"
                className="inline-block mb-6"
              >
                <Logo />
              </Link>
                             <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">
                 Transforming ideas into exceptional digital experiences. 
                 Experts in web development, creative design and innovative 
                 technological solutions for your business.
               </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:contato@deluve.co.mz"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contato@deluve.co.mz
                </Link>
                <Link
                  href="tel:+258841234567"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +258 84 123 4567
                </Link>
              </div>
            </div>
          </ScrollView>

          {/* Quick Links */}
          <ScrollView delay={0.1}>
            <div>
                             <h3 className="font-semibold text-foreground mb-6">Navigation</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.map((link, index) => (
                  <li key={link.title}>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm duration-200"
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollView>

          {/* Services */}
          <ScrollView delay={0.15}>
            <div>
                             <h3 className="font-semibold text-foreground mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#web-development"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm duration-200"
                  >
                                         Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#mobile-apps"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm duration-200"
                  >
                                         Mobile Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#ui-ux-design"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm duration-200"
                  >
                                         AI & Chatbots
                  </Link>
                </li>
                <li>
                  <Link
                    href="#digital-marketing"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm duration-200"
                  >
                                         Business Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#consulting"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm duration-200"
                  >
                                         Technology Consulting
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollView>

          {/* Contact & Social */}
          <ScrollView delay={0.2}>
            <div>
                             <h3 className="font-semibold text-foreground mb-6">Connect</h3>
              <div className="space-y-4">
                <div>
                                     <p className="text-muted-foreground text-sm mb-2">Follow us on social media:</p>
                  <div className="flex gap-3">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X/Twitter"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
                    >
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
                    >
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
                    >
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50"
                    >
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                                     <p className="text-muted-foreground text-sm mb-2">Business hours:</p>
                   <p className="text-foreground text-sm">Monday - Friday: 8AM - 6PM</p>
                   <p className="text-foreground text-sm">Saturday: 9AM - 2PM</p>
                </div>
              </div>
            </div>
          </ScrollView>
        </div>

        {/* Bottom Section */}
        <ScrollView delay={0.25} viewMargin="0px 0px -20px 0px">
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                                 <span className="text-muted-foreground text-sm">
                   © {new Date().getFullYear()} Deluve. All rights reserved.
                 </span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                                     Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                                     Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                                     Cookie Policy
                </Link>
                <Link
                  href="/sitemap"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                                     Sitemap
                </Link>
              </div>
            </div>
            <div className="mt-4 text-center">
                             <p className="text-muted-foreground text-xs">
                 Made with ❤️ in Mozambique
               </p>
            </div>
          </div>
        </ScrollView>
      </div>
    </footer>
  );
}
