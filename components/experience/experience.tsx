"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience, education, honors } from "@/data/experience";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="03" title="Experience & Education" />
      </Reveal>

      <div className="mt-8 flex flex-col lg:flex-row lg:gap-16">
        <div className="lg:flex-1">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <ExperienceRow item={item} />
            </Reveal>
          ))}
        </div>

        <aside className="mt-10 lg:mt-0 lg:w-80">
          <Reveal delay={0.1}>
            <div className="border border-line px-6 py-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Education
              </h3>
              <p className="mt-3 text-lg font-medium tracking-tight">
                {education.school}
              </p>
              <p className="mt-1 text-sm text-muted">{education.degree}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                {education.years}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {education.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 border border-line px-6 py-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Honors
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                {honors.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

function ExperienceRow({ item }: { item: (typeof experience)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="border-b border-line py-6 first:pt-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
          {item.title}
        </h3>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {item.year}
        </span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
        className="overflow-hidden"
      >
        <div className="pt-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-muted/70">
              {item.kind}
            </span>
            {item.org ? (
              <span className="font-mono text-xs uppercase tracking-widest text-muted/70">
                {item.org}
              </span>
            ) : null}
            <span className="text-sm text-muted">{item.role}</span>
          </div>
          <ul className="mt-4 space-y-2 text-md text-ink/80">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span aria-hidden className="font-mono text-xs text-muted">
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