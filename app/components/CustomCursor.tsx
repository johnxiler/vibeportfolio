"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isMobile) return;

    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    // Use event delegation for hover states - much more efficient than MutationObserver
    const interactiveSelector = "a, button, .glass-card, .glow-btn, .outline-btn, .social-icon, .nav-link, .tech-badge";

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        hovering.current = true;
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        hovering.current = false;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    let raf: number;
    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`;
      }

      // Ring follows with lag
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        const size = hovering.current ? 56 : 36;
        const offset = size / 2;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - offset}px, ${ringPos.current.y - offset}px, 0)`;
        ringRef.current.style.borderColor = hovering.current
          ? "var(--accent-cyan)"
          : "rgba(0, 240, 255, 0.4)";
        ringRef.current.style.opacity = hovering.current ? "1" : "0.6";
      }

      // Trail follows with more lag
      trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.08;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.08;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x - 20}px, ${trailPos.current.y - 20}px, 0)`;
        trailRef.current.style.opacity = hovering.current ? "0.4" : "0.15";
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing glow */}
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.35s ease, height 0.35s ease, border-color 0.35s ease, opacity 0.35s ease",
          willChange: "transform",
        }}
      />
      {/* Center dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--accent-cyan)",
          pointerEvents: "none",
          zIndex: 10000,
          boxShadow: "0 0 10px var(--accent-cyan), 0 0 20px var(--accent-cyan-glow)",
          willChange: "transform",
        }}
      />
    </>
  );
}
