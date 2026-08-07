import type { IconType } from "react-icons";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiOpenjdk, SiSpringboot, SiMysql, SiGit, SiGithub, SiVercel, SiRender, SiPostman, SiArduino } from "react-icons/si";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import ArrowLink from "@/components/ui/arrow-link";
import { site } from "@/data/site";

const iconMap: Record<string, IconType> = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiPostman,
  SiArduino,
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="02" title="Tech Stack" meta="Proven by projects" />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, ci) => (
            <Reveal key={category.name} delay={0.05 * ci}>
              <div className="h-full border border-line p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                  {String(ci + 1).padStart(2, "0")} · {category.name}
                </h3>
                <div className="mt-5 space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3"
                      >
                        {Icon ? <Icon className="h-5 w-5 text-ink" /> : null}
                        <p className="text-sm font-medium tracking-tight">
                          {skill.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 border border-line">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line px-6 py-5 sm:px-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Evidence
              </h3>
              <p className="max-w-md text-sm text-muted">
                Every major skill is backed by a project. These examples prove
                the stack, not just listing it.
              </p>
            </div>
            <div className="divide-y divide-line">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="grid grid-cols-[auto_1fr] items-center gap-4 px-6 py-5 sm:px-8"
                >
                  <span className="font-mono text-xs text-muted">
                    {project.number}
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="text-lg font-medium tracking-tight">
                      {project.title}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      {project.stack.join(" · ")}
                    </p>
                  </div>
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