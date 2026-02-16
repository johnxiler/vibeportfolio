"use client";

import { useRef, useState } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    image: string;
    index: number;
}

export default function ProjectCard({
    title,
    description,
    techStack,
    githubUrl,
    liveUrl,
    image,
    index,
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setTilt({
            x: (y - 0.5) * -12,
            y: (x - 0.5) * 12,
        });
        setGlare({ x: x * 100, y: y * 100, opacity: 0.12 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    return (
        <div
            ref={cardRef}
            className={`reveal reveal-delay-${(index % 4) + 1}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1000px",
            }}
        >
            <div
                className="glass-card"
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: "transform 0.15s ease-out, border-color 0.4s ease, box-shadow 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Glare overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "16px",
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
                        pointerEvents: "none",
                        zIndex: 2,
                        transition: "opacity 0.3s ease",
                    }}
                />

                {/* Project Image */}
                <div className="project-image-wrapper" style={{ margin: "12px 12px 0" }}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: `linear-gradient(135deg, rgba(0,240,255,0.15), rgba(168,85,247,0.15))`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2.5rem",
                            color: "var(--accent-cyan)",
                            borderRadius: "12px",
                        }}
                    >
                        {/* Placeholder icon based on project */}
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <polyline points="8 21 16 21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                    </div>
                    <div className="project-overlay">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="outline-btn" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>Code</span>
                        </a>
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="glow-btn" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                        {title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                        {description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {techStack.map((tech) => (
                            <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
