import type { ArchitectureStep } from "@/data/projects";

export default function ArchitectureFlow({
  steps,
}: {
  steps: ArchitectureStep[];
}) {
  return (
    <ol className="mt-6 flex flex-col gap-6" aria-label="Architecture flow">
      {steps.map((step, index) => (
        <li
          key={`${step.label}-${index}`}
          className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4"
        >
          <div className="relative flex justify-center">
            <span className="relative z-10 flex h-8 w-8 items-center justify-center border border-ink bg-bg font-mono text-xs text-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className="absolute left-1/2 top-8 bottom-[-1.5rem] w-px -translate-x-1/2 bg-line"
              />
            ) : null}
          </div>
          <div className="border border-line bg-paper p-4 sm:p-5">
            <p className="font-mono text-sm uppercase tracking-widest text-ink">
              {step.label}
            </p>
            <p className="mt-2 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
              {step.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
