// Detailed case studies for the /portfolio page.
// `service` must match an id in services.ts; `image` is optional (a placeholder is shown when missing).
export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  service: "product-development" | "automation-systems" | "data-insights" | "digital-advisory";
  sector: string;
  technologies: string[];
  image?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "enterprise-erp",
    title: "Enterprise ERP Suite",
    summary: "One platform for finance, HR and supply chain.",
    challenge:
      "Operations were spread across disconnected tools, making reporting slow and data hard to trust.",
    solution:
      "We built an integrated ERP that brings finance, HR and supply chain into a single real-time system.",
    service: "automation-systems",
    sector: "Enterprise",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/images/portfolio/erp.jpg",
  },
  {
    id: "eventsnap",
    title: "EventSnap",
    summary: "Real-time photo sharing for events, no app required.",
    challenge:
      "Event organizers needed a simple way to collect guests' photos without asking them to install an app or sign up.",
    solution:
      "Guests scan a QR code and upload photos instantly to a shared live gallery, managed by the organizer.",
    service: "product-development",
    sector: "Events",
    technologies: ["Next.js", "TypeScript", "Cloudinary"],
    image: "/images/portfolio/eventsnap.png",
  },
  {
    id: "cvflow",
    title: "CVFlow",
    summary: "AI-generated, ATS-ready resumes in minutes.",
    challenge:
      "Job seekers struggled to write resumes that pass automated screening systems and stand out to recruiters.",
    solution:
      "An AI-powered platform that turns skills and experience into professionally styled, ATS-optimized resumes.",
    service: "product-development",
    sector: "HR Tech",
    technologies: ["Next.js", "TypeScript", "OpenAI API"],
    image: "/images/portfolio/cvflow.png",
  },
  {
    id: "appointment-booking",
    title: "Appointment Booking Platform",
    summary: "Scheduling without the back-and-forth.",
    challenge:
      "Service providers lost time and clients to manual scheduling, no-shows and double bookings.",
    solution:
      "Real-time booking with rescheduling, automated reminders and calendar sync, built for busy teams.",
    service: "product-development",
    sector: "Services",
    technologies: ["Next.js", "Node.js", "Stripe"],
    image: "/images/portfolio/myturn.png",

  },
];

export const PORTFOLIO_CONTENT = [
  {
    name: "Enterprise ERP Suite",
    description:
      "Integrated enterprise resource planning platform consolidating finance, HR and supply chain into a single real-time system.",
    img: "/images/portfolio/erp.jpg",
    url: "#",
  },
  {
    name: "EventSnap",
    description:
      "Instant photo-sharing app for events where guests scan a QR Code to upload photos in real time—no app or login needed.",
    img: "/images/portfolio/eventsnap.png",
    url: "#",
  },
  {
    name: "CVFlow",
    description:
      "AI-powered platform that transforms your skills and experience into ATS-friendly, professionally styled resumes in minutes.",
    img: "/images/portfolio/cvflow.png",
    url: "#",
  },
  {
    name: "Appointment Booking Platform",
    description:
      "Seamless appointment scheduling platform with real-time booking, rescheduling, automated reminders and calendar sync.",
    img: "/images/portfolio/myturn.png",
    url: "#",
  },
];