"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import ThemeToggle from "@/components/ui/theme-toggle";

const links = [
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

const sectionIds = links.map((link) => link.sectionId);

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 16);
    };

    const onScroll = () => {
      if (!mq.matches) {
        setScrolled(false);
        return;
      }
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onChange = () => {
      if (!mq.matches) setScrolled(false);
      else onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line/30 transition-[background-color] duration-300 ${
        scrolled ? "bg-bg md:backdrop-blur-none" : "bg-bg/85 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-content items-center justify-between px-5 py-4 transition-[padding] duration-300 sm:px-8 lg:px-12 ${
          scrolled ? "md:py-2" : "md:py-4"
        }`}
      >
        <Link
          href="/#top"
          className="flex min-h-[24px] min-w-[24px] flex-col justify-center leading-none text-ink"
          onClick={close}
        >
          <span className="text-md font-medium tracking-tight">
            @{site.handle}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={active === link.sectionId}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center font-mono text-sm uppercase tracking-widest text-ink hover:text-muted"
          >
            CV <span aria-hidden>↗</span>
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-bg md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-line py-3 font-medium tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer noopener"
              onClick={close}
              className="py-3 font-mono uppercase tracking-widest text-muted"
            >
              View CV ↗
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group font-mono text-[13px] uppercase tracking-widest text-ink transition-colors hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      aria-current={active ? "true" : undefined}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-out ${
            active
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </span>
    </Link>
  );
}
