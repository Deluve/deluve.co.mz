import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | Deluve",
  description:
    "See how Deluve helps organizations build digital products, automate operations and grow with technology.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
