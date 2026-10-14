import type { ArchitectureStep } from "@/data/projects";

export default function ArchitectureFlow({
  steps,
}: {
  steps: ArchitectureStep[];
}) {
  return (
    <ol
      className="mt-5 grid gap-3 sm:grid-cols-2"
      aria-label="Architecture flow"
    >
      {steps.map((step, index) => (
        <li
          key={`${step.label}-${index}`}
          className="flex min-w-0 gap-3 border border-line bg-paper p-4"
        >
          <span className="shrink-0 font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-ink">
              {step.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {step.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
