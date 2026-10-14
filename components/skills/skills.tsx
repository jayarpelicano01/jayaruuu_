import type { IconType } from "react-icons";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiOpenjdk, SiSpringboot, SiMysql, SiPostgresql, SiSupabase, SiGit, SiGithub, SiVercel, SiRender, SiPostman, SiClaude, SiGooglegemini } from "react-icons/si";
import { TbTerminal2, TbAiAgent, TbBrandOpenai } from "react-icons/tb";
import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import GitHubActivity from "@/components/skills/github-activity";

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
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiClaude,
  SiGooglegemini,
  TbTerminal2,
  TbAiAgent,
  TbBrandOpenai,
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <SectionHeading index="04" title="Tech Stack" meta="Proven by projects" />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map((category, ci) => (
            <Reveal key={category.name} delay={0.05 * ci}>
              <div className="h-full border rounded-[30px] border-line p-5">
                <h3 className="font-mono text-sm uppercase tracking-widest text-muted">
                  {String(ci + 1).padStart(2, "0")} · {category.name}
                </h3>
                <div className="mt-4 space-y-3">
                  {category.skills.map((skill) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3"
                      >
                        {Icon ? <Icon className="h-5 w-5 text-ink" /> : null}
                        <p className="text-lg font-medium tracking-tight">
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

        {/* GitHub Activity */}
        <Reveal delay={0.15}>
          <GitHubActivity />
        </Reveal>
      </div>
    </section>
  );
}