import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import ServicesSection2 from "@/components/sections/home/services";
import WhyChooseUsAndProcess from "@/components/sections/home/why-choose-us";
import FAQSection from "@/components/sections/home/faq";
import Testimonials from "../components/testimonials";
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
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
