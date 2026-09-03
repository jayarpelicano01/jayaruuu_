import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  muted?: boolean;
  className?: string;
};

export default function ArrowLink({
  href,
  children,
  external = true,
  muted = false,
  className = "",
}: ArrowLinkProps) {
  const classes = `group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-ink ${
    muted ? "text-muted hover:text-ink" : "text-ink hover:text-muted"
  } ${className}`;

  const inner = (
    <>
      <span className="relative pb-1">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      </span>
      <span
        aria-hidden
        className="inline-flex transform transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} className={classes}>
      {inner}
    </Link>
  );
}