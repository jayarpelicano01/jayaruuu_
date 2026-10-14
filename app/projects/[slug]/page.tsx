import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/data/projects";
import Reveal from "@/components/ui/reveal";
import ArrowLink from "@/components/ui/arrow-link";
import ProjectGallery from "@/components/projects/project-gallery";
import ArchitectureFlow from "@/components/projects/architecture-flow";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Jay Ar Pelicano`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <article className="pb-20">
      <header className="mx-auto max-w-content px-5 pt-32 sm:px-8 sm:pt-40">
        <Reveal>
          <Link
            href="/projects"
            className="inline-block py-1.5 font-mono text-xs uppercase tracking-widest text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            ← All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-2 text-4xl font-medium tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{cs.overview}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {project.availability.demo ? (
              <ArrowLink href={project.availability.demo.href}>
                {project.availability.demo.label}
              </ArrowLink>
            ) : null}
            {project.availability.source ? (
              <ArrowLink href={project.availability.source.href} muted>
                {project.availability.source.label}
              </ArrowLink>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Role
              </p>
              <p className="mt-1.5 text-sm font-medium">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Year
              </p>
              <p className="mt-1.5 text-sm font-medium">{project.year}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Status
              </p>
              <p className="mt-1.5 text-sm font-medium">
                {project.availability.status}
              </p>
            </div>
            <div className="col-span-2 border-t border-line pt-5 sm:col-span-3">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Stack
              </p>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-ink/80">
                {project.stack.join(" · ")}
              </p>
            </div>
          </div>
        </Reveal>
      </header>

      <section
        aria-label="Visuals"
        className="mx-auto mt-12 max-w-content px-5 sm:px-8"
      >
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Visuals
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative mt-6 aspect-[16/9] overflow-hidden border border-line">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(min-width: 1152px) 72rem, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        {project.gallery.length > 0 ? (
          <Reveal delay={0.05}>
            <div className="mt-4">
              <ProjectGallery items={project.gallery} />
            </div>
          </Reveal>
        ) : null}
      </section>

      <CaseSection number="01" title="Context">
        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Problem
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/85">
              {cs.problem[0]}
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Solution
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/85">
              {cs.solution[0]}
            </p>
          </div>
        </div>
      </CaseSection>

      <CaseSection number="02" title="Build">
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
          Key features
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {cs.features.map((feature) => (
            <li
              key={feature}
              className="border border-line bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink/80"
            >
              {feature}
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection number="03" title="Architecture">
        <ArchitectureFlow steps={cs.architecture} />
      </CaseSection>

      <div className="mx-auto mt-16 max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg">
              Like what I build? Let&apos;s work together.
            </p>
            <ArrowLink href={`mailto:${site.email}`} external>
              Get in touch
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto mt-12 max-w-content px-5 sm:px-8">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="flex items-baseline gap-4 text-2xl font-medium tracking-tight">
              <span className="font-mono text-sm text-muted">{number}</span>
              {title}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
