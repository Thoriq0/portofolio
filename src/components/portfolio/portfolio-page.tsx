"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { CustomCursor } from "@/components/portfolio/custom-cursor";
import { IntroLoader } from "@/components/portfolio/intro-loader";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { FeaturedProjectsSection } from "@/sections/featured-projects-section";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero-section";
import { Navbar } from "@/sections/navbar";
import { TechStackSection } from "@/sections/tech-stack-section";

export function PortfolioPage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowLoader(false);
    }, 1650);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <IntroLoader visible={showLoader} />
      <CustomCursor />
      <div className="page-shell">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{
            opacity: showLoader ? 0.18 : 1,
            filter: showLoader ? "blur(10px)" : "blur(0px)",
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
          <FeaturedProjectsSection />
          <ContactSection />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
