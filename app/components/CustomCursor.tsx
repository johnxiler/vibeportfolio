"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const containerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);

    if (isMobile) return;

    let isActive = true;

    if (!(window as any).tubesCursorApp) {
      const script = document.createElement("script");
      script.type = "module";
      script.setAttribute("data-cursor-script", "true");
      script.innerHTML = `
        import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
        
        const container = document.getElementById('threejs-cursor-canvas');
        if (container && !window.tubesCursorApp) {
          window.tubesCursorApp = TubesCursor(container, {
            tubes: {
              colors: ["#f967fb", "#53bc28", "#6958d5"],
              lights: {
                intensity: 200,
                colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
              }
            }
          });
        }
      `;
      document.body.appendChild(script);
    }

    const randomColors = (count: number) => {
      return new Array(count)
        .fill(0)
        .map(
          () =>
            "#" +
            Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0")
        );
    };

    const handleClick = () => {
      const app = (window as any).tubesCursorApp;
      if (app && app.tubes) {
        const colors = randomColors(3);
        const lightsColors = randomColors(4);
        app.tubes.setColors(colors);
        app.tubes.setLightsColors(lightsColors);
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      isActive = false;
      document.body.removeEventListener("click", handleClick);

      try {
        const app = (window as any).tubesCursorApp;
        if (app && typeof app.destroy === "function") {
          app.destroy();
        }
      } catch {
        // WebGPU device may already be lost — safe to ignore
      }
      delete (window as any).tubesCursorApp;

      const oldScript = document.querySelector('script[data-cursor-script]');
      if (oldScript?.parentNode) {
        oldScript.parentNode.removeChild(oldScript);
      }

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="custom-cursor-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
        mixBlendMode: "screen",
        transition: "opacity 0.3s ease",
      }}
    >
      <canvas
        ref={containerRef}
        id="threejs-cursor-canvas"
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
}
