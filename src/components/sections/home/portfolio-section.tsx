import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollView } from "@/components/scroll-view";

export default function PortfolioSection() {
  return (
    <section
      className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background"
      id="portfolio"
    >
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
              Discover our latest work and see how we&apos;ve helped businesses 
              transform their digital presence with innovative solutions and 
              cutting-edge technology.
            </p>
          </ScrollView>
        </div>

        {/* Portfolio Grid */}
        <ScrollView delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
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
  );
}
