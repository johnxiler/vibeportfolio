"use client";

export default function HeroSection() {
    return (
        <section
            className="section"
            style={{
                minHeight: "85vh",
                display: "flex",
                alignItems: "center",
                paddingTop: "clamp(6rem, 15vh, 10rem)",
                paddingBottom: "clamp(4rem, 10vh, 8rem)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient background glow for hero */}
            <div
                className="hidden md:block"
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "20%",
                    width: "clamp(200px, 50vw, 400px)",
                    height: "clamp(200px, 50vw, 400px)",
                    background: "radial-gradient(circle, var(--accent-cyan-glow) 0%, transparent 70%)",
                    opacity: 0.15,
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            <div className="container" style={{ maxWidth: "1100px", padding: "0 1.25rem" }}>
                <div style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
                    {/* Status badge */}
                    <div className="hero-badge" style={{ marginBottom: "1.5rem" }}>
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.4rem 1rem",
                                borderRadius: "9999px",
                                background: "rgba(0, 240, 255, 0.04)",
                                border: "1px solid rgba(0, 240, 255, 0.1)",
                                color: "var(--accent-cyan)",
                                fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
                                fontWeight: 500,
                                letterSpacing: "0.01em",
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#34d399",
                                    boxShadow: "0 0 10px rgba(52, 211, 153, 0.4)",
                                    animation: "glowPulse 2s ease-in-out infinite",
                                }}
                            />
                            Open for New Collaborations
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="hero-title"
                        style={{
                            fontSize: "clamp(2.2rem, 9vw, 5rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: "-0.04em",
                            marginBottom: "1rem",
                        }}
                    >
                        Building Digital{" "}
                        <span className="gradient-text">Masterpieces</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="hero-subtitle"
                        style={{
                            fontSize: "clamp(1rem, 4vw, 1.75rem)",
                            fontWeight: 500,
                            color: "var(--text-primary)",
                            lineHeight: 1.3,
                            marginBottom: "1.25rem",
                            opacity: 0.9,
                        }}
                    >
                        John Relix — Full-Stack Engineer | Cybersecurity Researcher
                    </p>

                    {/* Tagline */}
                    <p
                        className="reveal reveal-delay-3"
                        style={{
                            fontSize: "clamp(0.95rem, 3vw, 1.15rem)",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                            maxWidth: "600px",
                            marginBottom: "2rem",
                        }}
                    >
                        Specializing in building exceptional digital experiences that are
                        fast, accessible, and breathtakingly designed.
                    </p>

                    {/* CTAs */}
                    <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="/projects" className="glow-btn" style={{ padding: "0.8rem 1.75rem", fontSize: "0.9rem" }}>
                            <span>Explore Projects</span>
                            <span style={{ marginLeft: "4px" }}>→</span>
                        </a>
                        <a href="/contact" className="outline-btn" style={{ padding: "0.8rem 1.75rem", fontSize: "0.9rem" }}>
                            Get in touch
                        </a>
                    </div>
                </div>

                {/* Floating geometric accent on the right */}
                <div
                    style={{
                        position: "absolute",
                        right: "5%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "300px",
                        height: "300px",
                        opacity: 0.06,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                    className="hidden lg:block"
                >
                    <svg viewBox="0 0 300 300" fill="none" stroke="var(--accent-cyan)" strokeWidth="0.5">
                        <circle cx="150" cy="150" r="120" />
                        <circle cx="150" cy="150" r="90" />
                        <circle cx="150" cy="150" r="60" />
                        <line x1="150" y1="0" x2="150" y2="300" />
                        <line x1="0" y1="150" x2="300" y2="150" />
                        <line x1="30" y1="30" x2="270" y2="270" />
                        <line x1="270" y1="30" x2="30" y2="270" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
