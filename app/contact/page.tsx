"use client";

import AnimatedBackground from "../components/AnimatedBackground";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
    return (
        <>
            <AnimatedBackground />
            <div style={{ paddingTop: "8rem" }}>
                <ContactSection />
            </div>
        </>
    );
}
