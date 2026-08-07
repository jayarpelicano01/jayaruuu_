import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          index="03"
          title="Selected Work"
          meta={`${String(projects.length).padStart(2, "0")} Projects`}
        />
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden border border-line bg-paper transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    {project.number}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-current"
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.category}</p>

                <p className="mt-4 max-w-md text-md leading-relaxed text-ink/80">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-6 pt-8">
                  <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ink">
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  {project.liveDemo ? (
                    <span className="font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-ink">
                      {project.liveDemoLabel ?? "Live Demo"}
                    </span>
                  ) : null}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}