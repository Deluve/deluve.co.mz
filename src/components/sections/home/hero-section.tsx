"use client"

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import LogoCloud from "@/components/sections/home/logo-cloud";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {


  return (
    <div className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.2] via-transparent to-blue-600/[0.15] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">






      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <AnimatedGroup variants={transitionVariants}>
              <Link
                href="#link"
                className="hover:bg-blue-500/10 bg-blue-500/5 group mx-auto flex w-fit items-center gap-4 rounded-full border border-blue-500/20 p-1 pl-4 shadow-md shadow-blue-500/10 transition-colors duration-300"
              >
                <span className="text-white text-sm relative">
                  Startup Innovation Studio
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/60 via-blue-300/80 to-blue-400/60 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                </span>
                <span className="block h-4 w-0.5 border-l bg-blue-400/30"></span>

                <div className="bg-blue-500/10 group-hover:bg-blue-500/20 size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3 text-blue-300" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3 text-blue-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedGroup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Streamline
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Your
              </span>
              <br />
              <span
                className={cn(
                  "relative bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-blue-400",
                  pacifico.className,
                )}
              >
                Digital Journey
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-full opacity-60"></div>
              </span>

            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8 mt-18"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Transform your ideas into <span className="text-blue-400 font-semibold">powerful digital experiences</span> with <span className="text-blue-400 font-semibold">60% faster delivery</span> and cutting-edge automation solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div
                key={1}
                className="bg-blue-500/10 rounded-[calc(var(--radius-xl)+0.125rem)] border border-blue-500/20 p-0.5"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-5 text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-blue-400/30 backdrop-blur-sm transition-all duration-300 group/btn relative overflow-hidden"
                >
                  <Link href="#portfolio" className="relative z-10 flex items-center gap-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <svg
                      className="size-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"
                      />
                    </svg>
                    <span className="text-nowrap">Boost Efficiency</span>
                  </Link>
                </Button>
              </div>

            </AnimatedGroup>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.85,
              },
            },
          },
          ...transitionVariants,
        }}
                 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4"
      >
        <div className="relative">
          <LogoCloud />
        </div>
      </AnimatedGroup>
    </div>
  );
}
