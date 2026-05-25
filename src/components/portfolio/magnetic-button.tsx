"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  strength = 22,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      className={cn("inline-flex", className)}
      animate={reduceMotion ? { x: 0, y: 0 } : offset}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      onMouseMove={(event) => {
        if (reduceMotion) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);

        setOffset({
          x: (x / rect.width) * strength,
          y: (y / rect.height) * strength,
        });
      }}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
