"use client"
import PortfolioCard from "@/components/portfolio-card"
import { PORTFOLIO_CONTENT } from "@/content/portfolio"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollView } from "@/components/scroll-view"
import { useState, useRef, useEffect } from "react"

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const cardWidth = 320 + 24 // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, PORTFOLIO_CONTENT.length - 1))
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-12  md:py-20 bg-gradient-to-b from-muted/20 to-background" id="portfolio">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center mb-16 md:mb-24">
          <ScrollView>
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-6">
              <span className="text-muted-foreground">Our Case Studies</span>
            </div>
          </ScrollView>
          <ScrollView delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold lg:text-6xl mb-6">
              Latest
              <span className="text-blue-400"> Projects</span>
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we&apos;ve transformed businesses with innovative solutions.
            </p>
          </ScrollView>
        </div>

        {/* Portfolio Grid */}
        <ScrollView delay={0.1}>
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {PORTFOLIO_CONTENT.map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-80 snap-center">
                    <PortfolioCard card={item} />
                  </div>
                ))}
              </div>

              <div className="absolute left-0 top-0 bottom-6 w-12 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>

              <div className="flex justify-center mt-6 gap-2">
                {PORTFOLIO_CONTENT.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-blue-400" 
                        : "bg-muted-foreground/30"
                    }`}
                  ></div>
                ))}
              </div>

              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-muted/20 backdrop-blur-sm border border-muted/20">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    <div
                      className="w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground">Swipe to explore</span>
                  <div className="w-4 h-4 text-muted-foreground">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path
                        d="M8 12h8m0 0l-3-3m3 3l-3 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-20">
            {PORTFOLIO_CONTENT.map((item, index) => (
              <div key={index} className={index % 2 === 1 ? "md:mt-20" : ""}>
                <PortfolioCard card={item} />
              </div>
            ))}
          </div>
        </ScrollView>

        {/* CTA Section */}
        <ScrollView delay={0.2}>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors group"
            >
              Explore All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollView>
      </div>
    </section>
  )
}
