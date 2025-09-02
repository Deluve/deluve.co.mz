"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/content/nav";
import { useLanguage } from "@/contexts/language-context";
import LanguageSelector from "./language-selector";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 ease-out lg:px-12",
            isScrolled &&
              "bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-xl shadow-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
              >
                <div className="transition-all duration-300 group-hover:drop-shadow-lg">
                  <Logo />
                </div>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 transition-all duration-300 hover:bg-muted/50 rounded-lg lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-300 ease-out" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-300 ease-out" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {NAV_LINKS.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group relative block py-2 transition-all duration-300 hover:text-blue-400"
                    >
                      <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                        {t(`nav.${item.name.toLowerCase()}`)}
                      </span>
                                               <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400/60 via-blue-300/80 to-blue-400/60 rounded-full transition-all duration-500 ease-out group-hover:w-full transform origin-left"></div>
                      <div className="absolute inset-0 bg-blue-400/5 rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background/95 backdrop-blur-xl in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {NAV_LINKS.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="group relative block py-2 transition-all duration-300 hover:text-blue-400"
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2">
                          {t(`nav.${item.name.toLowerCase()}`)}
                        </span>
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400/60 via-blue-300/80 to-blue-400/60 rounded-full transition-all duration-500 ease-out group-hover:w-full transform origin-left"></div>
                        <div className="absolute inset-0 bg-blue-400/5 rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
               
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    isScrolled && "lg:hidden"
                  )}
                >
                  <Link href="/get-quote" className="relative z-10 flex items-center gap-2">
                    <span>{t('header.contact')}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-blue-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className={cn(
                    "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg border-blue-500/20 hover:border-blue-500/40",
                    isScrolled ? "lg:inline-flex" : "hidden"
                  )}
                >
                  <Link href="/portfolio" className="relative z-10 flex items-center gap-2">
                    <span>{t('header.portfolio')}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 to-blue-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
                  </Link>
                </Button>
                
                {/* Language Selector */}
                <div className="lg:ml-2">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
