import { experience } from "@/data/experience";
import SectionHeading from "@/components/ui/section-heading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16"
    >
      <SectionHeading index="02" title="Experience"  />

      <div className="mt-6">
        {experience.map((group) => (
          <div key={group.org + group.year} className="py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                {group.org}
              </h3>
              <span className="font-mono text-base uppercase tracking-widest text-muted">
                {group.year}
              </span>
            </div>

            <div className="mt-6 space-y-6 pl-4">
              {group.roles.map((roleItem) => (
                <article key={roleItem.title} className="pb-4 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h4 className="text-lg font-medium tracking-tight">
                      {roleItem.title}
                    </h4>
                    <span className="font-mono text-sm uppercase tracking-widest text-muted/70">
                      {roleItem.role}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-ink/80 sm:text-lg">
                    {roleItem.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden className="font-mono text-sm text-muted shrink-0">
                          ·
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
