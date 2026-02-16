"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className="nav-glass"
            style={{
                background: scrolled ? "rgba(10, 10, 15, 0.88)" : "rgba(10, 10, 15, 0.75)",
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1.5rem",
                }}
            >
                {/* Logo */}
                <a href="#" className="nav-link" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                    <span className="gradient-text">JX</span>
                    {/* <span style={{ marginLeft: "4px", opacity: 0.6, fontWeight: 400 }}>folio</span> */}
                </a>

                {/* Links */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden sm:flex">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <a href="#contact" className="glow-btn" style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}>
                        <span>Get in Touch</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
