"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" />
            </svg>
        )
    },
    {
        title: "Backend & Database",
        skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST API", "PostgreSQL", "Supabase", "Redis"],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        )
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Linux", "Postman"],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        )
    }
];

function SkillCategory({ title, skills, icon }: { title: string; skills: string[]; icon: React.ReactNode }) {
    return (
        <div className="glass-card" style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ color: "var(--accent-cyan)", display: "flex", alignItems: "center" }}>{icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>{title}</h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skills.map((skill) => (
                    <span key={skill} className="tech-badge" style={{ padding: "0.3rem 0.75rem", fontSize: "0.75rem" }}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutSection() {
    const sectionRef = useScrollReveal();
    return (
        <section id="about" className="section" ref={sectionRef}>
            <div className="container" style={{ maxWidth: "1100px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "clamp(2rem, 8vw, 4rem)",
                    }}
                    className="md:grid-cols-2"
                >
                    {/* About text */}
                    <div className="reveal">
                        <p className="section-heading">About Me</p>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 6vw, 2.5rem)" }}>
                            Passionate <span className="gradient-text">Builder</span>
                        </h2>
                        <p className="section-description" style={{ marginBottom: "1.25rem", fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
                            I&apos;m a developer, cybersecurity researcher, and data analyst with a love for crafting beautiful,
                            high-performance web applications. I specialize in the React ecosystem and python
                            and enjoy working across the entire stack — from designing intuitive UIs
                            to architecting robust backends.
                        </p>
                        <p className="section-description" style={{ fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
                            When I&apos;m not coding, you&apos;ll find me exploring new tech, contributing
                            to open-source, or tinkering with creative side projects. I believe
                            great software is built at the intersection of design and engineering.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="reveal reveal-delay-2">
                        <p
                            className="section-heading"
                            style={{ marginBottom: "2rem" }}
                        >
                            Tech Stack & Skills
                        </p>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: "1.25rem",
                        }} className="sm:grid-cols-2 lg:grid-cols-1">
                            {skillCategories.map((category) => (
                                <SkillCategory
                                    key={category.title}
                                    title={category.title}
                                    skills={category.skills}
                                    icon={category.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

