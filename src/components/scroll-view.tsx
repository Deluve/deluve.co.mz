"use client";

import { UseInViewOptions } from "motion/react";

// Scroll-triggered animations were removed: these wrappers now render content as-is.
// Props are kept so existing call sites keep working.
export function ScrollView({
  children,
}: {
  children: React.ReactNode;
  stagger?: boolean;
  delay?: number;
  viewMargin?: UseInViewOptions["margin"];
}) {
  return <div>{children}</div>;
}

export function ScrollViewStaggerWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
