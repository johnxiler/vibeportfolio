"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
            setIsMobile(mobile);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            container.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <div ref={containerRef} className="hidden md:block" style={{ transition: "transform 0.8s ease-out" }}>
            <div className="animated-grid" />
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
        </div>
    );
}
