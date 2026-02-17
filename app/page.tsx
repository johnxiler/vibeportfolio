"use client";

import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import { useScrollReveal } from "./hooks/useScrollReveal";
import HeroSection from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

/* ═══════════════ Main Page ═══════════════ */
export default function Home() {
  const projectsRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <ProjectsSection sectionRef={projectsRef} />
      <AboutSection sectionRef={aboutRef} />
      <ContactSection sectionRef={contactRef} />
    </>
  );
}
