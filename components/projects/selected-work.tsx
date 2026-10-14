import Image from "next/image";
import Link from "next/link";
import {
  featuredProjectSlugs,
  projects,
  type Project,
} from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import ArrowLink from "@/components/ui/arrow-link";
import ProjectDemoLink from "@/components/projects/project-demo-link";

const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
const selected = featuredProjectSlugs.map((slug) => {
  const project = projectBySlug.get(slug);
  if (!project) throw new Error(`Missing featured project: ${slug}`);
  return project;
});

type ProjectCardProps = {
  project: Project;
  eager?: boolean;
};

function ProjectCard({ project, eager }: ProjectCardProps) {
  return (
    <article className="group flex flex-row overflow-hidden rounded-2xl border border-transparent pl-4 transition-all py-3 duration-300 hover:border-ink">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="relative w-28 sm:w-64 aspect-[16/10] shrink-0 self-center overflow-hidden rounded-[10px] sm:rounded-[20px]"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 640px) 112px, 256px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <Link href={`/projects/${project.slug}`} className="min-w-0">
          <h3 className="text-base font-medium font-body tracking-tight sm:text-lg transition-colors duration-300 group-hover:text-ink">
            {project.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted font-mono">
            {project.shortDescription ?? project.description}
          </p>
        </Link>

        <div className="mt-auto flex items-center justify-end gap-2 pt-3 sm:gap-3">
          {project.availability.demo ? (
            <ProjectDemoLink href={project.availability.demo.href} />
          ) : null}
        </div>
      </div>
    </article>
  );
}

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
