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
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink"
          >
            ← All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex items-baseline gap-4">
            <span className="font-mono text-sm text-muted">{project.number}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {project.category}
            </span>
          </div>
          <h1 className="mt-2 text-4xl font-medium tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{cs.overview}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-5">
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
            <div className="sm:col-span-2">
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

      <div className="mx-auto mt-14 max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden border border-line">
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
      </div>

      {project.gallery.length > 0 ? (
        <div className="mx-auto mt-14 max-w-content px-5 sm:px-8">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              Gallery
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6">
              <ProjectGallery items={project.gallery} />
            </div>
          </Reveal>
        </div>
      ) : null}

      <div className="mx-auto mt-16 max-w-content px-5 sm:px-8">
        <section className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <CaseSectionLabel>01 · Overview</CaseSectionLabel>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-xl leading-relaxed">{cs.overview}</p>
            </Reveal>
          </div>
        </section>
      </div>

      <CaseSection number="02" title="The Problem">
        <List items={cs.problem} />
      </CaseSection>

      <CaseSection number="03" title="The Solution">
        <List items={cs.solution} />
      </CaseSection>

      <CaseSection number="04" title="My Contribution">
        <List items={cs.contribution} />
      </CaseSection>

      <CaseSection number="05" title="Key Features">
        <ol className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {cs.features.map((feature, i) => (
            <Reveal as="li" key={feature} delay={0.03 * i}>
              <span className="flex gap-4">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-md text-ink/85">{feature}</span>
              </span>
            </Reveal>
          ))}
        </ol>
      </CaseSection>

      <CaseSection number="06" title="Technical Architecture">
        <ArchitectureFlow steps={cs.architecture} />
      </CaseSection>

      <CaseSection number="07" title="Development Challenges">
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {cs.challenges.map((challenge, i) => (
            <Reveal key={challenge.title} delay={0.05 * i}>
              <div className="border-t border-line pt-4">
                <h3 className="flex items-baseline gap-3 text-lg font-medium tracking-tight">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {challenge.title}
                </h3>
                <p className="mt-2 text-md text-muted">{challenge.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection number="08" title="Outcome">
        <List items={cs.outcome} />
      </CaseSection>

      <CaseSection number="09" title="Limitations">
        <List items={cs.limitations} />
      </CaseSection>

      <CaseSection number="10" title="Links and Availability">
        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
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
        <div className="mt-6 space-y-3 font-mono text-xs leading-relaxed text-muted">
          <p>
            <span className="text-ink">Status:</span>{" "}
            {project.availability.statusNote}
          </p>
          <p>
            <span className="text-ink">Source:</span>{" "}
            {project.availability.sourceNote}
          </p>
        </div>
      </CaseSection>

      <div className="mx-auto mt-20 max-w-content px-5 sm:px-8">
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
    <section className="mx-auto mt-16 max-w-content px-5 sm:px-8">
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

function CaseSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-4 text-2xl font-medium tracking-tight">
      <span className="font-mono text-sm text-muted">
        {children}
      </span>
    </h2>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={0.04 * i}>
          <span className="flex gap-4">
            <span className="font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-md leading-relaxed text-ink/85">{item}</span>
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
