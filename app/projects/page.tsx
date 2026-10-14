import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import ProjectCard from "@/components/projects/project-card";

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

      <div className="mt-6 grid gap-4">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} eager={i < 2} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
