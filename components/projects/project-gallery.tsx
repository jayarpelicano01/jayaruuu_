"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryItem = { image: string; alt: string };

const INITIAL_COUNT = 2;

export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const [expanded, setExpanded] = useState(false);
  if (items.length === 0) return null;

  const needsToggle = items.length > INITIAL_COUNT;
  const previewItems = !expanded && needsToggle ? items.slice(INITIAL_COUNT, INITIAL_COUNT + 2) : [];
  const visible = expanded || !needsToggle ? items : items.slice(0, INITIAL_COUNT);
  const hiddenCount = items.length - visible.length;

  return (
    <div>
      <div className="columns-1 gap-4 sm:columns-2">
        {visible.map((item) => (
          <figure
            key={item.image}
            className="mb-4 break-inside-avoid overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={1200}
              height={900}
              loading="lazy"
              sizes="(min-width: 440px) 50vw, 100vw"
              className="mx-auto block h-auto max-h-[540px] rounded-[20px] border border-line w-auto max-w-full object-contain"
            />
          </figure>
        ))}
      </div>

      {!expanded && needsToggle ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-expanded="false"
          aria-label={`Show more, ${hiddenCount} more images`}
          className="group relative mt-4 grid w-full grid-cols-1 items-start gap-4 overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:grid-cols-2"
        >
          <span
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/85 to-bg/20"
            aria-hidden="true"
          />
          {previewItems.map((item) => (
            <span
              key={item.image}
              className="block overflow-hidden border border-line opacity-60 saturate-50"
              aria-hidden="true"
            >
              <Image
                src={item.image}
                alt=""
                width={1200}
                height={900}
                loading="lazy"
                sizes="(min-width: 440px) 50vw, 100vw"
                className="block h-auto w-full"
              />
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
            className="border rounded-[10px] border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-line hover:bg-ink/90 hover:text-bg "
          >
            Show less
          </button>
        </div>
      ) : null}

      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
        {expanded ? `${items.length} images` : `Showing ${visible.length} of ${items.length}`}
      </p>
    </div>
  );
}