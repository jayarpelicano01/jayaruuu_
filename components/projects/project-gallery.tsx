"use client";

import AccordionGallery from "@/components/ui/accordion-gallery/AccordionGallery";

type GalleryItem = { image: string; alt: string };

export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  // Panel media is intentionally wider than its clipped panel (parallax), so mark it for the UI gate.
  return (
    <div data-allow-overflow>
      <AccordionGallery
        items={items.map((item) => ({ image: item.image, label: item.alt, alt: item.alt }))}
        defaultIndex={0}
        expandRatio={0.55}
        trigger="hover"
        overlayColor="var(--color-ink)"
        grayscale={false}
      />
    </div>
  );
}