"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    type: "work" | "education";
}

const experiences: Experience[] = [
    {
        id: "1",
        role: "SEO Specialist",
        company: "Freelance",
        period: "Jun 2023 - Present · 2 yrs 9 mos",
        description: "Helping retail health and personal care product websites rank on top of Google and Bing search engines.",
        highlights: [
            "Optimized websites for search engine ranking",
            "Implemented SEO best practices for retail clients",
            "Improved organic traffic through keyword research"
        ],
        type: "work"
    },
    {
        id: "2",
        role: "Landing Page Designer",
        company: "Freelance",
        period: "Jul 2018 - Present · 7 yrs 8 mos",
        description: "Helping businesses showcase their products and generate leads through high-converting landing pages.",
        highlights: [
            "Designed 50+ landing pages for various businesses",
            "Improved client conversion rates by 40%",
            "Created responsive designs with modern UI/UX"
        ],
        type: "work"
    },
    {
        id: "3",
        role: "Mobile Application Developer",
        company: "HeroApps Software Development Services",
        period: "Dec 2024 - Apr 2025 · 5 mos",
        description: "Android development internship focused on building mobile applications.",
        highlights: [
            "Learned Android development core concepts",
            "Built mobile applications using modern frameworks",
            "Collaborated with team on app development"
        ],
        type: "work"
    },
    {
        id: "4",
        role: "Website Developer",
        company: "Museo Bulawan",
        period: "Mar 2024 - May 2024 · 3 mos",
        description: "Website development internship for a museum organization.",
        highlights: [
            "Developed and maintained museum website",
            "Implemented responsive design for all devices",
            "Assisted with content management"
        ],
        type: "work"
    },
    {
        id: "5",
        role: "Admin Support Role",
        company: "DEPED-Schools Division Office of Camarines Norte",
        period: "November 2025 - December  2025 · 2 mos",
        description: "Provided technical support and system maintenance for many offices.",
        highlights: [
            "Troubleshot hardware and software issues for 50+ clients",
            "Set up and configured Windows/Linux workstations",
            "Implemented basic network security measures",
            "Educating staff on cybersecurity best practices"
        ],
        type: "work"
    }
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
    return (
        <div
            className="experience-card"
            style={{
                background: "var(--bg-card)",
                border: "1px solid var(--glass-border)",
                borderRadius: "16px",
                padding: "clamp(1.25rem, 4vw, 2rem)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                minHeight: "320px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Gradient accent on hover */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "100%",
                    background: experience.type === "work" 
                        ? "linear-gradient(180deg, var(--accent-cyan), var(--accent-violet))"
                        : "linear-gradient(180deg, var(--accent-violet), var(--accent-pink))",
                    opacity: 0.8,
                }}
            />

            {/* Period badge */}
            <div
                style={{
                    display: "inline-block",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "9999px",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--accent-cyan)",
                    marginBottom: "1rem",
                }}
            >
                {experience.period}
            </div>

            {/* Role & Company */}
            <h3
                style={{
                    fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.35rem",
                }}
            >
                {experience.role}
            </h3>
            <p
                style={{
                    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                    color: experience.type === "work" ? "var(--accent-cyan)" : "var(--accent-violet)",
                    marginBottom: "0.75rem",
                    fontWeight: 500,
                }}
            >
                {experience.company}
            </p>

            {/* Description */}
            <p
                style={{
                    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                }}
            >
                {experience.description}
            </p>

            {/* Highlights */}
            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                {experience.highlights.map((highlight, i) => (
                    <li
                        key={i}
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                            fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                            color: "var(--text-secondary)",
                        }}
                    >
                        <span
                            style={{
                                color: "var(--accent-cyan)",
                                fontWeight: 600,
                                marginTop: "0.2rem",
                            }}
                        >
                            ▹
                        </span>
                        {highlight}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ExperienceSection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="experience" className="section" ref={sectionRef}>
            <div className="container" style={{ maxWidth: "1100px" }}>
                <div className="reveal" style={{ marginBottom: "3.5rem" }}>
                    <p className="section-heading">Journey</p>
                    <h2 className="section-title">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-description">
                        A timeline of my professional journey, internships, and the skills I&apos;ve developed along the way.
                    </p>
                </div>

                {/* Work Experience & Internships */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1.5rem",
                        alignItems: "stretch",
                    }}
                >
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="reveal"
                            style={{
                                animationDelay: `${index * 0.15}s`,
                            }}
                        >
                            <ExperienceCard experience={exp} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
