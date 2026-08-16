"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { experience } from "@/data/experience";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="03" title="Experience" meta="Click or hover to expand" />
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
  const [open, setOpen] = useState(false);
  const expanded = open || hovered;

  return (
    <article
      className="cursor-pointer border-b border-line py-10 first:pt-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <h3 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          {item.title}
        </h3>
        <span className="font-mono text-base uppercase tracking-widest text-muted">
          {item.year}
        </span>
      </div>

      <p className="mt-4 flex items-start gap-3 text-xl leading-relaxed text-ink/80 sm:text-2xl">
        <ArrowDownRight aria-hidden className="mt-1 h-5 w-5 shrink-0 text-muted" />
        <span>{item.highlight}</span>
      </p>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" as const }}
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
            <span className="text-xl text-muted sm:text-2xl">{item.role}</span>
          </div>
          <ul className="mt-6 space-y-3 text-xl leading-relaxed text-ink/80 sm:text-2xl">
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