"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_CTA, type NavLink } from "@/content/nav";
import { useLanguage } from "@/contexts/language-context";
import LanguageSelector from "./language-selector";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const closeMenu = () => setMenuState(false);

  // Close the mobile menu whenever the route changes.
  React.useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full border-b border-transparent transition-colors duration-300",
          (isScrolled || menuState) &&
            "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 py-3 lg:py-4">
            <Link
              href="/"
              aria-label="home"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-80"
            >
              <Logo />
            </Link>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 text-sm lg:flex">
              {NAV_LINKS.map((item) =>
                item.children ? (
                  <ServicesDropdown key={item.key} item={item} active={isActive(item.href)} t={t} />
                ) : (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900",
                        isActive(item.href) && "text-blue-700"
                      )}
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Desktop actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSelector />
              <Button asChild size="sm" className="group">
                <Link href={NAV_CTA.href} className="flex items-center gap-2">
                  {t(`nav.${NAV_CTA.key}`)}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              aria-expanded={menuState}
              className="relative -mr-2 cursor-pointer rounded-lg p-2.5 transition-colors hover:bg-muted/50 lg:hidden"
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-300 ease-out" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-300 ease-out" />
            </button>
          </div>

          {/* Mobile menu */}
          {menuState && (
            <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto pb-6 lg:hidden">
              <ul className="space-y-1 border-t border-slate-200 pt-4 text-base">
                {NAV_LINKS.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-100",
                        isActive(item.href) && "text-blue-700"
                      )}
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                    {item.children && (
                      <ul className="mb-2 ml-3 space-y-0.5 border-l border-slate-200 pl-3">
                        {item.children.map((child) => (
                          <li key={child.key}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            >
                              <child.icon className="size-4 text-blue-600" />
                              {t(`nav.${child.key}`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3 border-t border-slate-200 pt-4">
                <Button asChild className="flex-1">
                  <Link href={NAV_CTA.href} onClick={closeMenu} className="flex items-center justify-center gap-2">
                    {t(`nav.${NAV_CTA.key}`)}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <LanguageSelector />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

function ServicesDropdown({
  item,
  active,
  t,
}: {
  item: NavLink;
  active: boolean;
  t: (key: string) => string;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLLIElement>(null);

  // Close on outside click or Escape.
  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900",
          (active || open) && "text-slate-900",
          active && "text-blue-700"
        )}
      >
        {t(`nav.${item.key}`)}
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        // pt-2 bridges the gap so hover isn't lost between trigger and panel.
        <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
            <ul className="grid grid-cols-2 gap-1">
              {item.children!.map((child) => (
                <li key={child.key}>
                  <Link
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <child.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-slate-900">
                        {t(`nav.${child.key}`)}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                        {t(`nav.${child.key}.desc`)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              {t("nav.services.all")}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </li>
  );
}
