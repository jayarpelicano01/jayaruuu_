import { education, honors } from "@/data/experience";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function Education() {
  return (
    <section id="education" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="04" title="Education & Honors" />
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="border border-line p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Education
              </h3>
              <p className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                {education.school}
              </p>
              <p className="mt-2 text-lg text-muted">{education.degree}</p>
              <p className="mt-2 font-mono text-sm uppercase tracking-widest text-muted">
                {education.years}
              </p>
              <ul className="mt-6 space-y-3 text-md leading-relaxed text-ink/80">
                {education.details.map((d) => (
                  <li key={d} className="flex gap-4">
                    <span aria-hidden className="font-mono text-sm text-muted">
                      ·
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-line p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Honors
              </h3>
              <ul className="mt-4 space-y-3 text-md leading-relaxed text-ink/80">
                {honors.map((h) => (
                  <li key={h} className="flex gap-4">
                    <span aria-hidden className="font-mono text-sm text-muted">
                      ·
                    </span>
                    <span>{h}</span>
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