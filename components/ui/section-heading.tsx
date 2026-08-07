type SectionHeadingProps = {
  index: string;
  title: string;
  meta?: string;
};

export default function SectionHeading({ index, title, meta }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-line pb-4">
      <h2 className="flex items-baseline gap-4 text-2xl font-medium tracking-tight sm:text-3xl">
        <span className="font-mono text-sm text-muted">{index}</span>
        <span>{title}</span>
      </h2>
      {meta ? (
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {meta}
        </span>
      ) : null}
    </div>
  );
}