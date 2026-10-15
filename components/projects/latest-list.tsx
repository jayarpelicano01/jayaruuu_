"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import Reveal from "@/components/ui/reveal";
import ProjectCard from "@/components/projects/project-card";

const INITIAL_COUNT = 1;

export default function LatestList({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  if (projects.length === 0) return null;

  const needsToggle = projects.length > INITIAL_COUNT;
  const visible = expanded || !needsToggle ? projects : projects.slice(0, INITIAL_COUNT);
  const previewItems = !expanded && needsToggle ? projects.slice(INITIAL_COUNT, INITIAL_COUNT + 1) : [];
  const hiddenCount = projects.length - visible.length;

  return (
    <div>
      <div className="mt-6 grid gap-4">
        {visible.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} eager={i === 0} />
          </Reveal>
        ))}
      </div>

      {!expanded && needsToggle ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-expanded="false"
          aria-label={`Show more, ${hiddenCount} more projects`}
          className="group relative mt-4 grid w-full grid-cols-1 items-start gap-4 overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <span
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/85 to-bg/20"
            aria-hidden="true"
          />
          {previewItems.map((project) => (
            <span key={project.slug} className="block max-h-[84px] overflow-hidden opacity-60 saturate-50 sm:max-h-[100px]" aria-hidden="true">
              <ProjectCard project={project} />
            </span>
          ))}
          <span className="absolute inset-0 z-20 flex items-center justify-center">
            <span className="border rounded-[10px] border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 group-hover:border-line group-hover:bg-ink/90 group-hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
              Show more · {hiddenCount} more
            </span>
          </span>
        </button>
      ) : null}

      {expanded && needsToggle ? (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-expanded="true"
            className="border rounded-[10px] border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-line hover:bg-ink/90 hover:text-bg"
          >
            Show less
          </button>
        </div>
      ) : null}

      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
        {expanded ? `${projects.length} projects` : `Showing ${visible.length} of ${projects.length}`}
      </p>
    </div>
  );
}
