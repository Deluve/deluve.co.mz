import type { Metadata } from "next";
import ServicesPageContent from "@/components/sections/services-page";
import FAQSection from "@/components/sections/home/faq";
import ContactSection from "@/components/contact";

export const metadata: Metadata = {
  title: "Services | Deluve",
  description:
    "Explore Deluve services: product engineering, design systems, automation, and data-driven digital growth.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageContent />
      <FAQSection />
      <ContactSection />
    </>
  );
}
