"use client";

import AccordionGallery from "@/components/ui/accordion-gallery/AccordionGallery";

type GalleryItem = { image: string; alt: string };

export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  return (
    <AccordionGallery
      items={items.map((item) => ({ image: item.image, label: item.alt, alt: item.alt }))}
      defaultIndex={0}
      expandRatio={0.55}
      trigger="hover"
      overlayColor="#0a0a0a"
      grayscale={false}
    />
  );
}