"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  title: string;
  meta?: string;
};

export default function SectionHeading({ index, title, meta }: SectionHeadingProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative"
    >
      <div className="flex items-baseline justify-between pb-4">
        <h2 className="flex items-baseline gap-4 text-2xl font-medium tracking-tight sm:text-3xl">
          <motion.span
            initial={reduce ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" as const }}
            className="font-mono text-sm text-muted"
          >
            {index}
          </motion.span>
          <span>{title}</span>
        </h2>
        {meta ? (
          <motion.span
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-widest text-muted"
          >
            {meta}
          </motion.span>
        ) : null}
      </div>
      <motion.span
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute -bottom-px left-0 h-px w-full origin-left bg-ink"
      />
    </motion.div>
  );
}