"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/portfolio/brand-mark";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const ids = navigation.map((item) => item.id);
  const activeId = useActiveSection(ids);
  const { scrollTo } = useSmoothScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.65, 1]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goTo = (id: string) => {
    scrollTo(`#${id}`);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        style={{ opacity }}
      >
        <div className="container-shell pt-4">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6",
              scrolled
                ? "glass-panel border-white/10"
                : "border-transparent bg-transparent",
            )}
          >
            <button
              className="flex items-center gap-3"
              onClick={() => goTo("hero")}
              type="button"
            >
              <BrandMark />
              <div className="text-left">
                <div className="text-sm font-semibold tracking-[0.04em] text-white">
                  Thoriq
                </div>
                <div className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Fullstack Developer
                </div>
              </div>
            </button>

            <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/5 p-1 md:flex">
              {navigation.map((item) => {
                const active = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors",
                      active ? "text-white" : "text-white/60 hover:text-white/85",
                    )}
                    onClick={() => goTo(item.id)}
                    type="button"
                  >
                    {active ? (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-white/10"
                        layoutId="active-nav"
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <MagneticButton>
                <Button size="lg" variant="secondary" onClick={() => goTo("contact")}>
                  Let&apos;s talk
                </Button>
              </MagneticButton>
            </div>

            <Button
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden"
              size="icon"
              variant="secondary"
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-x-4 top-20 z-40 rounded-[32px] border border-white/10 bg-slate-950/88 p-5 shadow-premium backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
          >
            <div className="space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-left text-white/80"
                  onClick={() => goTo(item.id)}
                  type="button"
                >
                  <span>{item.label}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {item.id}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
