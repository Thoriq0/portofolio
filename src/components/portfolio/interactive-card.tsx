"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function InteractiveCard({
  children,
  className,
}: InteractiveCardProps) {
  const reduceMotion = useReducedMotion();
  const rotateXInput = useMotionValue(0);
  const rotateYInput = useMotionValue(0);
  const rotateX = useTransform(rotateXInput, [-60, 60], [7, -7]);
  const rotateY = useTransform(rotateYInput, [-60, 60], [-7, 7]);

  return (
    <motion.div
      className={cn("spotlight-border rounded-[28px]", className)}
      style={
        reduceMotion
          ? undefined
          : ({
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            } as CSSProperties)
      }
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      onMouseMove={(event) => {
        if (reduceMotion) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);

        rotateYInput.set(offsetX);
        rotateXInput.set(offsetY);
        event.currentTarget.style.setProperty(
          "--spotlight-x",
          `${((event.clientX - rect.left) / rect.width) * 100}%`,
        );
        event.currentTarget.style.setProperty(
          "--spotlight-y",
          `${((event.clientY - rect.top) / rect.height) * 100}%`,
        );
      }}
      onMouseLeave={() => {
        rotateXInput.set(0);
        rotateYInput.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
