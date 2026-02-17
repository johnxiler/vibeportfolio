"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
    { name: "TypeScript / JavaScript", level: 92 },
    { name: "React / Next.js", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Python", level: 78 },
    { name: "PostgreSQL / Supabase", level: 82 },
    { name: "CSS / Tailwind / UI Design", level: 88 },
    { name: "DevOps / Docker / CI-CD", level: 72 },
];

function SkillBar({ name, level }: { name: string; level: number }) {
    const barRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = barRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setActive(true); },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={barRef} style={{ marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-primary)" }}>{name}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--accent-cyan)" }}>{level}%</span>
            </div>
            <div className="skill-bar-track">
                <div
                    className={`skill-bar-fill ${active ? "active" : ""}`}
                    style={{ width: active ? `${level}%` : "0%" }}
                />
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
                            I&apos;m a full-stack developer with a love for crafting beautiful,
                            high-performance web applications. I specialize in the React ecosystem
                            and enjoy working across the entire stack — from designing intuitive UIs
                            to architecting robust backends.
                        </p>
                        <p className="section-description" style={{ fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
                            When I&apos;m not coding, you&apos;ll find me exploring new tech, contributing
                            to open-source, or tinkering with creative side projects. I believe
                            great software is built at the intersection of design and engineering.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="reveal reveal-delay-2">
                        <p
                            className="section-heading"
                            style={{ marginBottom: "2rem" }}
                        >
                            Tech Stack & Skills
                        </p>
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
