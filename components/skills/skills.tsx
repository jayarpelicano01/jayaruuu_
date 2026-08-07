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
          <SectionHeading index="04" title="Skills" meta="Proven by projects" />
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div>
            {skills.map((category) => (
              <Reveal key={category.name}>
                <div className="border-b border-line py-6 first:pt-0">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                    {category.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
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
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Evidence
              </h3>
              <p className="mt-3 max-w-md text-lg text-muted">
                Every major skill is backed by a project. These examples prove
                the stack, not just listing it.
              </p>
              <div className="mt-6 grid gap-3">
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    className="grid grid-cols-[auto_1fr] items-center gap-4 border border-line px-4 py-3"
                  >
                    <span className="font-mono text-xs text-muted">
                      {project.number}
                    </span>
                    <div>
                      <p className="text-sm font-medium tracking-tight">
                        {project.title}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                        {project.stack.join(" · ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <ArrowLink href={site.resume} external>
                  Download CV
                </ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}