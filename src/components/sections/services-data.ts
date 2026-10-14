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
    title: "Product Engineering",
    description:
      "Web and mobile products built for speed, reliability, and delight from day one.",
    details:
      "Custom web and mobile apps, APIs, and integrations—from concept through launch.",
    accent: "Build",
    tags: ["Web Apps", "Mobile", "APIs & Integrations"],
  },
  {
    icon: Layers3,
    id: "experience-design",
    title: "Experience Design",
    description:
      "Interfaces and journeys that feel clear, premium, and built around real user behavior.",
    details:
      "Research-led journeys, polished interfaces, reusable design systems, and consistent branding.",
    accent: "Design",
    tags: ["UI/UX", "Design Systems", "Brand"],
  },
  {
    icon: Bolt,
    id: "automation-systems",
    title: "Automation Systems",
    description:
      "Operational workflows that remove friction and free teams to focus on growth.",
    details:
      "RPA and connected workflows to streamline repeatable tasks and reduce manual work.",
    accent: "Scale",
    tags: ["RPA", "Workflows", "Cloud & DevOps"],
  },
  {
    icon: ChartNoAxesCombined,
    id: "data-insights",
    title: "Data & Insights",
    description:
      "Measurement layers and dashboards that turn signals into sharper decisions.",
    details:
      "Dashboards and analytics to track performance and guide better business decisions.",
    accent: "Measure",
    tags: ["BI", "Dashboards", "Analytics"],
  },
];
