"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WelcomeIntro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("welcome-seen")) return;
    sessionStorage.setItem("welcome-seen", "1");
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: EASE,
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => {
        window.setTimeout(() => setVisible(false), 250);
      },
    });
    return () => controls.stop();
  }, [visible]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome-intro"
          aria-hidden="true"
          className="fixed inset-0 z-[200] flex flex-col overflow-hidden bg-bg"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="flex items-start justify-between px-5 pt-6 sm:px-8 lg:px-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[11px] uppercase tracking-widest text-muted sm:text-sm"
            >
              Portfolio — © 2026
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="hidden font-mono text-[11px] uppercase tracking-widest text-muted sm:block sm:text-sm"
            >
              Junior Software Developer
            </motion.p>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-5">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="mb-8 font-mono text-xs uppercase tracking-widest text-muted sm:text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <h1 className="text-center">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ x: "-110%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.85, ease: EASE }}
                  className="text-stroke block text-[15vw] font-bold leading-[0.9] tracking-tight sm:text-8xl lg:text-[8.5rem]"
                >
                  Jay Ar
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ x: "-110%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
                  className="block text-[15vw] font-bold leading-[0.9] tracking-tight text-ink sm:text-8xl lg:text-[8.5rem]"
                >
                  Pelicano
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
              className="mt-8 font-mono text-xs uppercase tracking-widest text-muted sm:text-sm"
            >
              Full-Stack Developer
            </motion.p>
          </div>

          <div className="px-5 pb-8 sm:px-8 lg:px-12">
            <div className="h-px w-full bg-line">
              <div className="h-px bg-ink" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted sm:text-sm">
              <span>Loading</span>
              <span className="tabular-nums">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}