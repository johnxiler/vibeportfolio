"use client";

import AnimatedBackground from "../../components/AnimatedBackground";
import Navbar from "../../components/Navbar";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import Link from "next/link";

export default function CyberFixGallery() {
    const galleryRef = useScrollReveal();

    // Actual image paths in /public/projects/cyberimages/
    const images = [
        "/projects/cyberfix.webp",
        "/projects/cyberimages/cyberfix01.webp",
        "/projects/cyberimages/cyberfix02.webp",
    ];

    return (
        <>
            <AnimatedBackground />
            <Navbar />

            <section className="section" style={{ paddingTop: "8rem", minHeight: "100vh" }}>
                <div
                    ref={galleryRef}
                    className="container"
                    style={{ maxWidth: "1100px" }}
                >
                    <div className="reveal" style={{ marginBottom: "3rem" }}>
                        <Link
                            href="/projects"
                            className="outline-btn"
                            style={{
                                padding: "0.5rem 1.25rem",
                                fontSize: "0.85rem",
                                marginBottom: "2rem",
                                display: "inline-flex"
                            }}
                        >
                            ← Back to Portfolio
                        </Link>

                        <p className="section-heading">Project Showcase</p>
                        <h1 className="section-title">
                            CyberFix <span className="gradient-text">Gallery</span>
                        </h1>
                        <p className="section-description">
                            A deep dive into the CyberFix script - a terminal-based tool designed to automate common technical support tasks and system optimizations.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "6rem",
                            marginTop: "4rem"
                        }}
                    >
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`reveal reveal-delay-${(index % 3) + 1}`}
                                style={{
                                    width: "100%",
                                    maxWidth: "900px",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    border: "1px solid rgba(0, 240, 255, 0.2)",
                                    background: "var(--bg-card)",
                                    boxShadow: "0 30px 100px rgba(0, 240, 255, 0.1), 0 20px 50px rgba(0,0,0,0.5)",
                                    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.02)";
                                    e.currentTarget.style.borderColor = "var(--accent-cyan)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.borderColor = "rgba(0, 240, 255, 0.2)";
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`CyberFix Screenshot ${index + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div
                        className="reveal reveal-delay-3"
                        style={{
                            marginTop: "6rem",
                            textAlign: "center",
                            paddingBottom: "4rem"
                        }}
                    >
                    </div>
                </div>
            </section>
        </>
    );
}
