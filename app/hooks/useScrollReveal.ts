"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                }
            });
        },
        []
    );

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin: "0px 0px -40px 0px",
        });

        // Observe the container AND all child reveal elements
        el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
        if (el.classList.contains("reveal")) observer.observe(el);

        return () => observer.disconnect();
    }, [threshold, handleIntersection]);

    return ref;
}
