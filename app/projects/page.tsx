"use client";

import AnimatedBackground from "../components/AnimatedBackground";
import ProjectsSection from "../components/ProjectsSection";

export default function ProjectsPage() {
    return (
        <>
            <AnimatedBackground />
            <div style={{ paddingTop: "8rem" }}>
                <ProjectsSection />
            </div>
        </>
    );
}
