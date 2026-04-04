"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    //githubUrl: string;
    liveUrl?: string;
    liveUrlLabel?: string;
    image: string;
    index: number;
}

export default function ProjectCard({
    title,
    description,
    techStack,
    //githubUrl,
    liveUrl,
    liveUrlLabel,
    image,
    index,
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
    const [imageError, setImageError] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Disable tilt on mobile/touch
        if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) return;

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
                height: "100%"
            }}
        >
            <div
                className="glass-card"
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: "transform 0.15s ease-out, border-color 0.4s ease, box-shadow 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
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
                <div className="project-image-wrapper" style={{ margin: "12px 12px 0", position: "relative" }}>
                    {image && !imageError ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={() => setImageError(true)}
                            style={{
                                objectFit: "cover",
                                borderRadius: "12px",
                                background: `linear-gradient(135deg, rgba(0,240,255,0.15), rgba(168,85,247,0.15))`
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #1f2937, #111827)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "rgba(255, 255, 255, 0.4)",
                                flexDirection: "column",
                                gap: "0.5rem"
                            }}
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span style={{ fontSize: "0.8rem" }}>Image Unavailable</span>
                        </div>
                    )}
                    <div className="project-overlay">
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="glow-btn" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                                <span>{liveUrlLabel || "Live Demo"}</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Content - optimized for mobile */}
                <div style={{ padding: "clamp(1rem, 4vw, 1.5rem)", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.25rem)", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                        {title}
                    </h3>
                    <p style={{ fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                        {description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="tech-badge"
                                style={{
                                    padding: "0.3rem 0.6rem",
                                    fontSize: "clamp(0.65rem, 2vw, 0.75rem)"
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
