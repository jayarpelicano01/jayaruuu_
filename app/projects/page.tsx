import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export const metadata = {
  title: "Projects",
  description:
    "Case studies from Jay Ar Pelicano: GSU System, Faura-Farmer, CampusChoice, URDS, Smart Farming, and this portfolio.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-content px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <SectionHeading index="/" title="Projects" meta="Case Studies" />
      </Reveal>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block border border-line bg-paper"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-muted">
                    {project.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-muted">
                  {project.title}
                </h2>
                <p className="text-sm text-muted">{project.description}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {project.stack.join(" · ")}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}