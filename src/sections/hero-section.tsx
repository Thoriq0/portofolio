"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Box,
  Database,
  LayoutTemplate,
  TerminalSquare,
} from "lucide-react";
import { useMemo } from "react";

import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { Reveal } from "@/components/portfolio/reveal";
import { Button } from "@/components/ui/button";
import { heroStats } from "@/data/portfolio";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";

const floatingCards = [
  { icon: LayoutTemplate, label: "Modern frontend systems", className: "left-[4%] top-28" },
  { icon: Database, label: "Business-critical logic", className: "right-[4%] top-36" },
  { icon: Box, label: "ERP, WMS, POS, HRIS", className: "left-[14%] bottom-24" },
  { icon: TerminalSquare, label: "Production fixes and features", className: "right-[12%] bottom-20" },
];

export function HeroSection() {
  const { scrollTo } = useSmoothScroll();
  const reduceMotion = useReducedMotion();
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(35);
  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(125,211,252,0.16), transparent 22%), radial-gradient(circle at 70% 24%, rgba(167,139,250,0.14), transparent 24%)`;
  const subtitle = useMemo(
    () =>
      "I work across ERP, WMS, POS, and HRIS applications: fixing issues in existing systems, building new features, and keeping production workflows stable when business requirements move fast.",
    [],
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        spotlightX.set(((event.clientX - rect.left) / rect.width) * 100);
        spotlightY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
    >
      <div className="hero-orb left-[8%] top-[18%] size-72 bg-cyan-400/12" />
      <div className="hero-orb right-[10%] top-[12%] size-80 bg-violet-500/10" />
      <div className="hero-orb bottom-[8%] left-[34%] size-72 bg-sky-500/12" />
      <motion.div
        className="absolute inset-0 opacity-90"
        style={{ background: spotlightBackground }}
      />

      <div className="container-shell relative">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal className="mx-auto inline-flex">
            <div className="section-label">
              Fullstack developer
            </div>
          </Reveal>

          <motion.div
            className="mt-8 space-y-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.15 },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl"
            >
              Building scalable web applications for real business workflows.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-balance text-lg leading-8 text-white/60 sm:text-xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
            >
              <MagneticButton>
                <Button size="lg" onClick={() => scrollTo("#featured-projects")}>
                  View Projects
                  <ArrowRight />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollTo("#contact")}
                >
                  Contact Me
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <Reveal className="mt-16">
            <div className="grid gap-4 md:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-panel rounded-[28px] border border-white/10 px-6 py-5 text-left"
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, index % 2 === 0 ? -10 : -16, 0] }
                  }
                  transition={{
                    duration: 6 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-xs uppercase tracking-[0.26em] text-white/40">
                    {stat.label}
                  </div>
                  <div className="mt-3 text-lg font-medium text-white">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden xl:block">
          {floatingCards.map(({ icon: Icon, label, className }, index) => (
            <motion.div
              key={label}
              className={`absolute ${className} glass-panel rounded-2xl border border-white/10 px-4 py-3`}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, index % 2 === 0 ? -12 : -18, 0],
                      rotate: [0, index % 2 === 0 ? -2 : 2, 0],
                    }
              }
              transition={{
                duration: 7 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3 text-sm text-white/72">
                <Icon className="size-4 text-cyan-200" />
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
