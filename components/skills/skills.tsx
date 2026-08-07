import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import ArrowLink from "@/components/ui/arrow-link";
import { site } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="05" title="Tech Stack" meta="Proven by projects" />
        </Reveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <Reveal key={category.name} delay={0.05 * i}>
              <div className="border border-line p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                  {String(i + 1).padStart(2, "0")} · {category.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 border border-line px-3 py-1.5 text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 border border-line">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line px-6 py-5 sm:px-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Evidence
              </h3>
              <p className="max-w-md text-sm text-muted">
                Every major skill is backed by a project. These examples prove
                the stack, not just listing it.
              </p>
            </div>
            <div className="grid divide-y divide-line lg:grid-cols-5 lg:divide-x lg:divide-y-0">
              {projects.map((project) => (
                <div key={project.slug} className="px-6 py-5 sm:px-8 lg:px-5">
                  <span className="font-mono text-xs text-muted">
                    {project.number}
                  </span>
                  <p className="mt-2 text-base font-medium tracking-tight">
                    {project.title}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                    {project.stack.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-line px-6 py-5 sm:px-8">
              <ArrowLink href={site.resume} external>
                Download CV
              </ArrowLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}