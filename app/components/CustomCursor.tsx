"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const containerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check if device is mobile/touch
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);

    if (isMobile) return;

    // Create script element to dynamically load the threejs cursor
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
      
      const container = document.getElementById('threejs-cursor-canvas');
      if (container) {
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
      document.body.removeEventListener("click", handleClick);
      const app = (window as any).tubesCursorApp;
      if (app && typeof app.destroy === "function") {
        app.destroy();
      }
      delete (window as any).tubesCursorApp;

      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
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
