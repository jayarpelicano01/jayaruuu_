import { education, honors } from "@/data/experience";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function Education() {
  return (
    <section id="education" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="01" title="Education & Honors" />
        </Reveal>

        <div className="mt-12 lg:px-12">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                {education.school}
              </h3>
              <span className="font-mono text-sm uppercase tracking-widest text-muted">
                {education.years}
              </span>
            </div>
            <p className="mt-3 text-2xl text-muted sm:text-3xl">
              {education.degree}
            </p>
            <p className="mt-1 font-mono text-sm uppercase tracking-widest text-muted">
              {education.location}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-14 border border-line">
              <h3 className="border-b border-line px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted sm:px-8">
                Honors and Awards
              </h3>
              <ul className="divide-y divide-line">
                {honors.map((honor) => (
                  <li
                    key={honor.title}
                    className="px-6 py-6 sm:px-8 sm:py-8"
                  >
                    <p className="text-xl font-medium tracking-tight sm:text-2xl">
                      {honor.title}
                    </p>
                    <p className="mt-2 max-w-prose text-md leading-relaxed text-ink/80">
                      {honor.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}