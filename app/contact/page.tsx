"use client";

import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
    const contactRef = useScrollReveal();
    return (
        <>
            <AnimatedBackground />
            <Navbar />
            <div style={{ paddingTop: "8rem" }}>
                <ContactSection sectionRef={contactRef} />
            </div>
        </>
    );
}
