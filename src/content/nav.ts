import { servicePillars } from "./services";

// `key` maps to a translation in language-context (nav.<key>).
export type NavLink = {
  key: string;
  href: string;
  children?: { key: string; href: string; icon: (typeof servicePillars)[number]["icon"] }[];
};

export const NAV_LINKS: NavLink[] = [
  {
    key: "services",
    href: "/services",
    children: servicePillars.map((service) => ({
      key: `service.${service.id}`,
      href: `/services#${service.id}`,
      icon: service.icon,
    })),
  },
  { key: "cases", href: "/portfolio" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/#contact" },
];

export const NAV_CTA = { key: "cta", href: "/get-quote" };
