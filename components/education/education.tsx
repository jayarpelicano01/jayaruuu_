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

        <div className="mx-auto mt-10 max-w-3xl">
          <Reveal delay={0.1}>
            <div className="border border-line p-8 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {education.school}
                </h3>
                <span className="font-mono text-sm uppercase tracking-widest text-muted">
                  {education.years}
                </span>
              </div>
              <p className="mt-2 text-lg text-muted">{education.degree}</p>
              <p className="mt-1 font-mono text-sm uppercase tracking-widest text-muted">
                {education.location}
              </p>

              <ul className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
                {education.details.map((d, i) => (
                  <li key={i} className="flex gap-4">
                    <span aria-hidden className="font-mono text-sm text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 border border-line p-8 sm:p-10">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Honors
              </h3>
              <ul className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">
                {honors.map((h, i) => (
                  <li key={h} className="flex gap-4">
                    <span aria-hidden className="font-mono text-sm text-muted">
                      {String(i + 1).padStart(2, "0")}
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