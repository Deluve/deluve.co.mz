import {
  Bolt,
  ChartNoAxesCombined,
  Code2,
  Layers3,
} from "lucide-react";

export const servicePillars = [
  {
    icon: Code2,
    id: "product-engineering",
    title: "Digital Product Development",
    description:
      "We build dependable digital products that address real business needs.",
    details:
      "From discovery and prototyping to development and launch, we deliver custom web and mobile applications, APIs, and integrations.",
    accent: "Build",
    tags: ["Web Applications", "Mobile Apps", "APIs & Integrations"],
  },
  {
    icon: Layers3,
    id: "experience-design",
    title: "Digital Experience Design",
    description:
      "We make digital services easier to understand, use, and scale.",
    details:
      "Our work spans user research, UX/UI design, design systems, and brand experiences—grounded in user needs and business goals.",
    accent: "Design",
    tags: ["User Research", "UX/UI", "Design Systems"],
  },
  {
    icon: Bolt,
    id: "automation-systems",
    title: "Business Automation",
    description:
      "We help organizations reduce manual work and improve operational efficiency.",
    details:
      "We automate repeatable processes and connect business systems through workflow automation, RPA, and cloud solutions.",
    accent: "Optimize",
    tags: ["Workflow Automation", "RPA", "Cloud & DevOps"],
  },
  {
    icon: ChartNoAxesCombined,
    id: "data-insights",
    title: "Data & Business Intelligence",
    description:
      "We make business performance easier to measure and understand.",
    details:
      "We develop dashboards, reporting, and analytics that help teams monitor key metrics, identify trends, and make informed decisions.",
    accent: "Measure",
    tags: ["Business Intelligence", "Dashboards", "Analytics"],
  },
];
