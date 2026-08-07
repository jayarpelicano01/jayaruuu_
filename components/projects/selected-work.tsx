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
          index="01"
          title="Selected Work"
          meta={`${String(projects.length).padStart(2, "0")} Projects`}
        />
      </Reveal>

      <div className="mt-4">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-1 gap-x-6 border-b border-line py-10 sm:py-12 lg:grid-cols-12"
            >
              <div className="flex items-start gap-6 lg:col-span-4">
                <span className="font-mono text-xs text-muted">
                  {project.number}
                </span>
                <h3 className="text-3xl font-medium tracking-tight transition-colors group-hover:text-muted sm:text-4xl">
                  {project.title}
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-md text-muted">{project.category}</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs uppercase tracking-widest text-muted/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 lg:col-span-4 lg:mt-0 lg:flex lg:items-end lg:justify-end">
                <div className="hidden w-28 overflow-hidden lg:block">
                  <div className="relative aspect-[4/3] transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="7rem"
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink lg:mt-0">
                  View
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}