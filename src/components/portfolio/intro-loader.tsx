"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import { BrandMark } from "@/components/portfolio/brand-mark";

type IntroLoaderProps = {
  visible: boolean;
};

export function IntroLoader({ visible }: IntroLoaderProps) {
  const label = useMemo(() => "Thoriq / Fullstack Developer", []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%),linear-gradient(180deg,#03050e_0%,#060a15_100%)] backdrop-blur-xl"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container-shell flex flex-col items-center gap-8 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.84, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="flex flex-col items-center gap-5"
            >
              <BrandMark className="size-16" />
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                  Initializing portfolio
                </p>
                <h1 className="text-3xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  {label}
                </h1>
              </div>
            </motion.div>

            <div className="w-full max-w-lg space-y-3">
              <div className="h-2 overflow-hidden rounded-full border border-white/10 bg-white/6">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/45">
                <span>Loading motion systems</span>
                <span>Ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
