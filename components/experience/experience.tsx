"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="03" title="Experience" meta="Hover to expand" />
      </Reveal>

      <div className="mt-8">
        {experience.map((item, i) => (
          <Reveal key={item.title} delay={0.05 * i}>
            <ExperienceRow item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ExperienceRow({ item }: { item: (typeof experience)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="border-b border-line py-10 first:pt-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <h3 className="text-4xl font-medium tracking-tight sm:text-5xl">
          {item.title}
        </h3>
        <span className="font-mono text-base uppercase tracking-widest text-muted">
          {item.year}
        </span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
        className="overflow-hidden"
      >
        <div className="pt-6">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <span className="font-mono text-base uppercase tracking-widest text-muted/70">
              {item.kind}
            </span>
            {item.org ? (
              <span className="font-mono text-base uppercase tracking-widest text-muted/70">
                {item.org}
              </span>
            ) : null}
            <span className="text-xl text-muted">{item.role}</span>
          </div>
          <ul className="mt-6 space-y-3 text-xl leading-relaxed text-ink/80">
            {item.points.map((point) => (
              <li key={point} className="flex gap-4">
                <span aria-hidden className="font-mono text-sm text-muted">
                  ·
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
}