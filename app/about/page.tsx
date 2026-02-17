"use client";

import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import { useScrollReveal } from "../hooks/useScrollReveal";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
    const aboutRef = useScrollReveal();
    return (
        <>
            <AnimatedBackground />
            <Navbar />
            <div style={{ paddingTop: "8rem" }}>
                <AboutSection sectionRef={aboutRef} />
            </div>
        </>
    );
}
