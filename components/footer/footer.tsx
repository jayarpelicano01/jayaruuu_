import { site } from "@/data/site";
import ArrowLink from "@/components/ui/arrow-link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 py-10 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-lg font-medium tracking-tight">{site.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
              {site.fullName}
            </p>
            <p className="mt-3 text-sm text-muted">
              Junior Software Developer · Full-Stack Developer
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href={`mailto:${site.email}`}>Email</ArrowLink>
            <ArrowLink href={site.github}>GitHub</ArrowLink>
            <ArrowLink href={site.linkedin}>LinkedIn</ArrowLink>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>@{site.handle}</p>
          <p>© {new Date().getFullYear()} {site.fullName}</p>
        </div>
      </div>
    </footer>
  );
}