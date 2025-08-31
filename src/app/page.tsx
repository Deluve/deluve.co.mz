import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import ServicesSection2 from "@/components/sections/home/services";
import StatsSection from "@/components/sections/home/stats";
import WhyChooseUsAndProcess from "@/components/sections/home/why-choose-us";
import Testimonials from "@/components/testimonials";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUsAndProcess />

      <ServicesSection2 />
      <PortfolioSection />
      <AboutUsSection />
     
      <StatsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
