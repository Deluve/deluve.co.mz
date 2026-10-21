import { 
   Code2,
   Bolt, 
   ChartNoAxesCombined,
   Compass
   } from "lucide-react";



export const servicePillars = [
  {
    icon: Code2,
    id: "product-development",
    title: "Product Design & Development",
    description:
      "We design and build dependable digital products from concept to launch.",
    details:
      "We cover the full product lifecycle—from user research and UX/UI design to custom web and mobile applications, APIs, and scalable integrations.",
    accent: "Build",
    tags: ["Product Design", "Web & Mobile Apps", "APIs & Integrations"],
  },
  {
    icon: Bolt,
    id: "automation-systems",
    title: "Business Automation",
    description:
      "We help organizations reduce manual work and improve operational efficiency.",
    details:
      "We automate repeatable processes and connect business systems through workflow automation, cloud solutions, and system integration.",
    accent: "Optimize",
    tags: ["Workflow Automation", "System Integration", "Cloud Solutions"],
  },
  {
    icon: ChartNoAxesCombined,
    id: "data-insights",
    title: "Data & Business Intelligence",
    description:
      "We make business performance easier to measure and understand.",
    details:
      "We build dashboards and analytics tools that help teams monitor key metrics, identify trends, and make data-driven decisions.",
    accent: "Measure",
    tags: ["Business Intelligence", "Dashboards", "Data Analytics"],
  },
  {
    icon: Compass,
    id: "digital-advisory",
    title: "Digital Strategy & Advisory",
    description:
      "We help businesses navigate technology choices and plan their digital growth.",
    details:
      "We partner with leaders to define technology roadmaps, evaluate system architecture, select the right tech stacks, and structure digital projects.",
    accent: "Guide",
    tags: ["Tech Roadmap", "Architecture Assessment", "Digital Strategy"],
  },
];