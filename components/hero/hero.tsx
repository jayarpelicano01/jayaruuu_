"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";
import ArrowLink from "@/components/ui/arrow-link";

const ease = [0.22, 1, 0.36, 1] as const;
const honor = "Magna Cum Laude · Champion, UEP 2nd Arduino Innovator Challenge (2025)";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden pt-20 md:block md:min-h-0"
    >
      <div className="mx-auto my-auto w-full max-w-content px-5 py-10 sm:px-8 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="relative mx-auto w-full max-w-[9rem] sm:max-w-[12rem] md:mx-0 md:max-w-none"
          >
            <div className="relative aspect-[3/4] border border-line rounded-[40px] w-full overflow-hidden">
              <Image
                src="/images/profile/portrait.jpg"
                alt={`Professional portrait of ${site.name}`}
                fill
                sizes="(min-width: 768px) 50vw, 40vw"
                className="object-cover rounded-[40px]"
                priority
              />
            </div>
          </motion.div>

          <div className="min-w-0 text-center gap-20 md:text-left">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="whitespace-nowrap text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-3xl lg:text-[40px]"
            >
              {site.fullName}
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-3 font-mono text-base tracking-widest text-muted md:mt-4"
            >
              {site.roles[1]}
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mx-auto mt-12 max-w-xxl text-base leading-relaxed text-muted md:mx-0 lg:text-lg"
            >
              {site.tagline}
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="mx-auto mt-3 max-w-xxl text-base leading-relaxed text-muted md:mx-0 lg:text-lg"
            >
              {site.taglineSecond}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 md:justify-start"
            >
              <ArrowLink href={site.github}>github</ArrowLink>
              <ArrowLink href={site.linkedin}>linkedin</ArrowLink>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-8 border-t border-line pt-4 md:mt-12 md:pt-6"
        >
          <div data-allow-overflow className="overflow-hidden">
            <motion.p
              animate={reduce ? {} : { x: ["0%", "-50%"] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              className="flex w-max whitespace-nowrap font-semibold text-xs uppercase tracking-widest text-muted"
            >
              <span className="pr-6">{honor}</span>
              <span aria-hidden="true" className="pr-8">
                {honor}
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
