import { getLatestProjects } from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import LatestList from "@/components/projects/latest-list";

export default function LatestWork() {
  const latest = getLatestProjects();
  if (latest.length === 0) return null;

  return (
    <section id="latest" className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <SectionHeading
          index="04"
          title="Newest Projects"
          meta="New in the last 3 months"
        />
      </Reveal>

      <LatestList projects={latest} />
    </section>
  );
}
