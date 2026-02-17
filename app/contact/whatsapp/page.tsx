"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
// Since the path is two levels deep, "app" -> "contact" -> "whatsapp", the import path should be correct
import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function WhatsAppQRPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simple entry animation
        if (containerRef.current) {
            containerRef.current.style.opacity = "1";
            containerRef.current.style.transform = "translateY(0)";
        }
    }, []);

    return (
        <div style={{
            minHeight: "calc(100vh - 6rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            padding: "2rem"
        }}>
            <AnimatedBackground />

            <div
                ref={containerRef}
                className="section"
                style={{
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2.5rem",
                    maxWidth: "90%",
                    width: "100%",
                    zIndex: 10,
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1 className="section-title" style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                        Chat on <span className="gradient-text">WhatsApp</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                        Scan the QR code to start a conversation
                    </p>
                </div>

                <div
                    style={{
                        padding: "1rem",
                        background: "white",
                        borderRadius: "16px",
                        boxShadow: "0 0 30px rgba(0, 240, 255, 0.15)",
                        width: "100%",
                        maxWidth: "320px", // 👈 THIS FIXES DESKTOP SIZE
                        aspectRatio: "1 / 1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="/projects/whatsapp-addme.webp"
                        alt="WhatsApp QR Code"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
                    <Link href="/" className="outline-btn" style={{ fontSize: "0.9rem", padding: "0.7rem 1.5rem" }}>
                        ← Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
}
