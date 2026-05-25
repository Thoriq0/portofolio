"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 240, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 240, damping: 28, mass: 0.5 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: Event) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest("a, button, input, textarea, [data-cursor='spotlight']")
      ) {
        setHovered(true);
      }
    };

    const out = (event: Event) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest("a, button, input, textarea, [data-cursor='spotlight']")
      ) {
        setHovered(false);
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [springX, springY, x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <motion.div
        className="absolute size-3 rounded-full bg-cyan-200/90 shadow-[0_0_40px_rgba(125,211,252,0.6)]"
        style={{
          translateX: springX,
          translateY: springY,
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.div
        className="absolute size-20 rounded-full border border-cyan-300/25 bg-cyan-300/6 backdrop-blur-sm"
        animate={{ scale: hovered ? 1.25 : 1, opacity: hovered ? 0.9 : 0.55 }}
        style={{
          translateX: springX,
          translateY: springY,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      />
    </div>
  );
}
