"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = reduce ? false : undefined;

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-content gap-10 px-5 pt-32 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:pt-40">
        <div className="pb-4">
          <motion.p
            custom={0}
            initial={anim}
            variants={rise}
            className="font-mono text-xs uppercase tracking-widest text-muted"
          >
            Junior Software Developer — Philippines
          </motion.p>

          <h1 className="mt-6 text-[15vw] font-medium leading-[0.9] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            <motion.span
              custom={1}
              initial={anim}
              variants={rise}
              className="block"
            >
              Jay Ar
            </motion.span>
            <motion.span
              custom={2}
              initial={anim}
              variants={rise}
              className="block"
            >
              Pelicano
            </motion.span>
          </h1>

          <motion.p
            custom={3}
            initial={anim}
            variants={rise}
            className="mt-8 font-mono text-lg uppercase tracking-widest text-muted sm:text-xl"
          >
            Full-Stack<br />Developer
          </motion.p>

          <motion.p
            custom={4}
            initial={anim}
            variants={rise}
            className="mt-6 max-w-md text-lg text-muted"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            custom={5}
            initial={anim}
            variants={rise}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ink hover:text-muted"
            >
              View My Work
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted hover:text-ink"
            >
              Get in touch <span aria-hidden>→</span>
            </a>
          </motion.div>

          <motion.p
            custom={6}
            initial={anim}
            variants={rise}
            className="mt-12 font-mono text-xs uppercase tracking-widest text-muted/70"
          >
            {site.fullName} · @{site.handle}
          </motion.p>
        </div>

        <motion.div
          custom={1}
          initial={anim}
          variants={rise}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-line">
            <Image
              src="/images/profile/portrait.jpg"
              alt={`Professional portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 20rem"
              className="object-cover grayscale"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}