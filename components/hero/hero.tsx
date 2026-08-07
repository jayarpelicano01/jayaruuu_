"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import TiltedCard from "@/components/ui/tilted-card/TiltedCard";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-content gap-10 px-5 pt-32 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-center lg:gap-10 lg:pt-40">
        <div className="pb-4">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-mono text-xs uppercase tracking-widest text-muted"
          >
            Junior Software Developer · Philippines
          </motion.p>

          <h1 className="mt-6 text-[15vw] font-bold leading-[0.9] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="block text-stroke lg:inline lg:mr-3"
            >
              Jay Ar
            </motion.span>
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="block text-ink lg:inline"
            >
              Pelicano
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-8 font-mono text-lg uppercase tracking-widest text-muted sm:text-xl"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-6 max-w-md text-lg text-muted"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
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
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-12 font-mono text-xs uppercase tracking-widest text-muted/70"
          >
            {site.fullName} · @{site.handle}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[22rem]"
        >
          <TiltedCard
            imageSrc="/images/profile/portrait.jpg"
            altText={`Professional portrait of ${site.name}`}
            captionText={`@${site.handle}`}
            containerHeight="22rem"
            containerWidth="100%"
            imageHeight="352px"
            imageWidth="352px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
          />
        </motion.div>
      </div>
    </section>
  );
}