"use client";

import { ArrowUpRight } from "lucide-react";

export default function ProjectDemoLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex rounded-[10px] items-center gap-1.5 border border-line px-3 py-1.5 font-mono text-xs tracking-widest text-ink transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      Site
      <ArrowUpRight className="h-3 w-3" />
    </a>
  );
}
