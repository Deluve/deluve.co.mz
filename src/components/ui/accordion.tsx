"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

export function Accordion({
  children,
  type,
  collapsible,
  className,
}: React.PropsWithChildren<{
  type: "single";
  collapsible?: boolean;
  className?: string;
}>) {
  const [openValue, setOpenValue] = React.useState<string | null>(null);

  const handleSetOpenValue = React.useCallback(
    (value: string | null) => {
      if (value === openValue && collapsible) {
        setOpenValue(null);
        return;
      }
      setOpenValue(value);
    },
    [collapsible, openValue]
  );

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue: handleSetOpenValue }}>
      <div className={cn("w-full", className)} data-accordion-type={type}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
  className,
}: React.PropsWithChildren<{ value: string; className?: string }>) {
  const { openValue } = useAccordionContext();
  const open = openValue === value;

  return (
    <div
      className={cn("overflow-hidden rounded-2xl border bg-card transition-all duration-300", className)}
      data-state={open ? "open" : "closed"}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement, { open, value } as never);
      })}
    </div>
  );
}

export function AccordionTrigger({
  children,
  open,
  value,
  className,
}: React.PropsWithChildren<{ open?: boolean; value?: string; className?: string }>) {
  const { setOpenValue } = useAccordionContext();

  return (
    <button
      type="button"
      onClick={() => setOpenValue(open ? null : value ?? null)}
      className={cn(
        "flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-foreground transition-colors hover:text-blue-700",
        className
      )}
      aria-expanded={open}
    >
      <span>{children}</span>
      <ChevronDown className={cn("h-5 w-5 shrink-0 text-blue-700 transition-transform duration-300", open && "rotate-180")} />
    </button>
  );
}

export function AccordionContent({
  children,
  open,
  className,
}: React.PropsWithChildren<{ open?: boolean; className?: string }>) {
  return (
    <div
      className={cn(
        "grid overflow-hidden px-5 transition-all duration-300",
        open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
      )}
    >
      <div className={cn("min-h-0 text-sm leading-relaxed text-muted-foreground", className)}>{children}</div>
    </div>
  );
}