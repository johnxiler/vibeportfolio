"use client";

import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProjectsSection() {
    const sectionRef = useScrollReveal();
    return (
        <section id="projects" className="section" ref={sectionRef}>
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
                            liveUrl={project.liveUrl}
                            liveUrlLabel={project.liveUrlLabel}
                            image={project.image}
                            index={i}
                        />
                    ))}
                </div>
                <div
                    className="reveal reveal-delay-4"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5rem",
                        textAlign: "center"
                    }}
                >
                    <a
                        href="https://github.com/johnxiler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gradient-text github-link"
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 800,
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            padding: "1rem",
                            position: "relative"
                        }}
                    >
                        Explore More on my Github
                    </a>
                </div>
            </div>
        </section>
    );
}
