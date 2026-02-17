"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    /* ===============================
       Scroll Detection
    =============================== */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ===============================
       Lock Body Scroll
    =============================== */
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    /* ===============================
       Close on ESC
    =============================== */
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    /* ===============================
       Close on Route Change
    =============================== */
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMenuOpen(false);
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav
                className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl"
                style={{
                    background:
                        scrolled || isMenuOpen
                            ? "rgba(10,10,15,0.95)"
                            : "rgba(10,10,15,0.75)",
                }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-white text-lg"
                    >
                        <Image src="/favicon.ico" alt="Logo" width={20} height={20} className="w-5 h-5" />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            JX
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10 text-white">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative transition duration-300 ${isActive
                                        ? "text-cyan-400"
                                        : "hover:text-cyan-400"
                                        }`}
                                >
                                    {link.label}

                                    {/* Active underline */}
                                    {isActive && (
                                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Burger */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-3 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Background */}
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute inset-0 bg-[rgba(10,10,15,0.92)] backdrop-blur-2xl"
                />

                {/* Menu Panel */}
                <div
                    className={`relative z-50 flex flex-col items-start gap-8 pt-28 px-8
          transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-6"
                        }`}
                >
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`
                  relative text-2xl font-semibold text-white
                  transition-all duration-300
                  px-4 py-2 rounded-xl
                  ${isActive
                                        ? "text-cyan-400 shadow-[0_0_15px_#22d3ee]"
                                        : "hover:text-cyan-400 hover:shadow-[0_0_20px_#22d3ee]"
                                    }
                `}
                                style={{
                                    transitionDelay: `${index * 80}ms`,
                                }}
                            >
                                {link.label}

                                {/* Glow background on hover */}
                                <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 bg-cyan-400 blur-xl transition duration-300 -z-10" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
