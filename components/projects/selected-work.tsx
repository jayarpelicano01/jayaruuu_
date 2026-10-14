import {
  featuredProjectSlugs,
  projects,
} from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import ArrowLink from "@/components/ui/arrow-link";
import ProjectCard from "@/components/projects/project-card";

const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
const selected = featuredProjectSlugs.map((slug) => {
  const project = projectBySlug.get(slug);
  if (!project) throw new Error(`Missing featured project: ${slug}`);
  return project;
});

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <SectionHeading
          index="03"
          title="Featured Works"
          meta="Projects I built and contributed to"
        />
      </Reveal>

      <div className="mt-6 grid gap-4">
        {selected.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} eager={i < 2} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex justify-center">
          <ArrowLink href="/projects" external={false}>
            View All Projects
          </ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
