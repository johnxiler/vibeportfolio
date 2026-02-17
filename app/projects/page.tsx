"use client";

import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProjectsSection from "../components/ProjectsSection";

export default function ProjectsPage() {
    const projectsRef = useScrollReveal();
    return (
        <>
            <AnimatedBackground />
            <Navbar />
            <div style={{ paddingTop: "8rem" }}>
                <ProjectsSection sectionRef={projectsRef} />
            </div>
        </>
    );
}
