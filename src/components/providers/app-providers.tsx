"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </LazyMotion>
    </MotionConfig>
  );
}
