import { site } from "@/data/site";
import Reveal from "@/components/ui/reveal";
import ArrowLink from "@/components/ui/arrow-link";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-32">
      <Reveal>
        <h2 className="text-[14vw] font-medium leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
          Let&apos;s
          <br />
          work
          <br />
          together.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-md text-lg text-muted">
          I&apos;m currently open to opportunities as a Junior Software
          Developer or Full-Stack Developer.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          <ArrowLink href={`mailto:${site.email}`}>Email</ArrowLink>
          <ArrowLink href={site.github}>GitHub</ArrowLink>
          <ArrowLink href={site.linkedin}>LinkedIn</ArrowLink>
          <ArrowLink href={site.resume} external>
            CV
          </ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}