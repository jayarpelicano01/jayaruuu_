"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.body.classList.add("has-cursor");
    const render = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      setHidden(false);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    document.addEventListener("mousemove", render);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    // Enable rendering after listeners are attached so the first frame is correct.
    const id = requestAnimationFrame(() => setEnabled(true));

    return () => {
      document.body.classList.remove("has-cursor");
      document.removeEventListener("mousemove", render);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(id);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[999] -ml-2 -mt-2 h-4 w-4 rounded-full border border-ink transition-opacity duration-200 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}