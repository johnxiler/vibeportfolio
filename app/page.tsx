"use client";

import ProjectCard from "./components/ProjectCard";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import projects from "./data/projects";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

/* ═══════════════ Skill Data ═══════════════ */
const skills = [
  { name: "TypeScript / JavaScript", level: 92 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "Python", level: 78 },
  { name: "PostgreSQL / Supabase", level: 82 },
  { name: "CSS / Tailwind / UI Design", level: 88 },
  { name: "DevOps / Docker / CI-CD", level: 72 },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/johnxiler",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johnrelixpascua",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:johnrelixp@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,7 12,13 2,7" />
      </svg>
    ),
  },
];

/* ═══════════════ SkillBar component ═══════ */
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

/* ═══════════════ Main Page ═══════════════ */
export default function Home() {
  const projectsRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <>
      <AnimatedBackground />
      <Navbar />

      {/* ══════════ HERO SECTION ══════════ */}
      <section
        className="section"
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "10rem",
          paddingBottom: "8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient background glow for hero */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, var(--accent-cyan-glow) 0%, transparent 70%)",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
            {/* Status badge */}
            <div className="hero-badge" style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  background: "rgba(0, 240, 255, 0.04)",
                  border: "1px solid rgba(0, 240, 255, 0.1)",
                  color: "var(--accent-cyan)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
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
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                marginBottom: "1.5rem",
              }}
            >
              Building Digital{" "}
              <span className="gradient-text">Masterpieces</span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-subtitle"
              style={{
                fontSize: "clamp(1.1rem, 2.8vw, 1.75rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1.4,
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
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "600px",
                marginBottom: "2.5rem",
              }}
            >
              Specializing in building exceptional digital experiences that are
              fast, accessible, and breathtakingly designed.
            </p>

            {/* CTAs */}
            <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
              <a href="#projects" className="glow-btn">
                <span>Explore Projects</span>
                <span style={{ marginLeft: "4px" }}>→</span>
              </a>
              <a href="#contact" className="outline-btn">
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

      {/* ══════════ PROJECTS SECTION ══════════ */}
      <section id="projects" className="section" ref={projectsRef}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <p className="section-heading">Portfolio</p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-description">
              A selection of personal projects that showcase my passion for building
              innovative solutions and exploring new technologies.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                image={project.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT / SKILLS SECTION ══════════ */}
      <section id="about" className="section" ref={aboutRef}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
            }}
            className="md:grid-cols-2"
          >
            {/* About text */}
            <div className="reveal">
              <p className="section-heading">About Me</p>
              <h2 className="section-title">
                Passionate <span className="gradient-text">Builder</span>
              </h2>
              <p className="section-description" style={{ marginBottom: "1.5rem" }}>
                I&apos;m a full-stack developer with a love for crafting beautiful,
                high-performance web applications. I specialize in the React ecosystem
                and enjoy working across the entire stack — from designing intuitive UIs
                to architecting robust backends.
              </p>
              <p className="section-description">
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

      {/* ══════════ CONTACT / FOOTER ══════════ */}
      <section id="contact" className="section" ref={contactRef}>
        <div className="container" style={{ textAlign: "center", maxWidth: "1100px" }}>
          <div className="reveal">
            <p className="section-heading" style={{ textAlign: "center" }}>Contact</p>
            <h2 className="section-title" style={{ textAlign: "center", maxWidth: "none" }}>
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p
              className="section-description"
              style={{ margin: "0 auto 3rem", textAlign: "center" }}
            >
              Have a project in mind or just want to say hi?
              Feel free to reach out — I&apos;m always excited to collaborate on new ideas.
            </p>

            <a href="mailto:johnrelixp@gmail.com" className="glow-btn" style={{ fontSize: "1rem", padding: "1.1rem 3rem" }}>
              <span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "0.5rem" }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,7 12,13 2,7" />
                </svg>
                Say Hello
              </span>
            </a>
          </div>

          {/* Social links */}
          <div
            className="reveal reveal-delay-2"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "4rem",
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Footer divider & copyright */}
          <div
            className="reveal reveal-delay-3"
            style={{
              marginTop: "5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--glass-border)",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", opacity: 0.7 }}>
              © {new Date().getFullYear()} John Relix. Built with Next.js & ❤️
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
