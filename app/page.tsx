"use client";

import dynamic from "next/dynamic";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import HeroSection from "@/app/components/Hero";

// Dynamic imports for non-critical sections to improve JS execution time
const ProjectsSection = dynamic(() => import("@/app/components/ProjectsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const AboutSection = dynamic(() => import("@/app/components/AboutSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ContactSection = dynamic(() => import("@/app/components/ContactSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ExperienceSection = dynamic(() => import("@/app/components/ExperienceSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

/* ═══════════════ Main Page ═══════════════ */
export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
