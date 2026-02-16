"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { hovering.current = true; };
    const onLeave = () => { hovering.current = false; };

    window.addEventListener("mousemove", onMove);

    const interactiveSelector = "a, button, .glass-card, .glow-btn, .outline-btn, .social-icon, .nav-link, .tech-badge";

    const attachHoverListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachHoverListeners();

    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    let raf: number;
    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }

      // Ring follows with lag
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        const size = hovering.current ? 56 : 36;
        const offset = size / 2;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate(${ringPos.current.x - offset}px, ${ringPos.current.y - offset}px)`;
        ringRef.current.style.borderColor = hovering.current
          ? "var(--accent-cyan)"
          : "rgba(0, 240, 255, 0.4)";
        ringRef.current.style.opacity = hovering.current ? "1" : "0.6";
      }

      // Trail follows with more lag
      trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.08;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.08;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 20}px, ${trailPos.current.y - 20}px)`;
        trailRef.current.style.opacity = hovering.current ? "0.4" : "0.15";
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

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
