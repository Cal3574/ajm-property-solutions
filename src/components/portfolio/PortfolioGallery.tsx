"use client";

import { useState } from "react";
import { GalleryImageCard } from "@/components/portfolio/GalleryImageCard";
import { GalleryLightbox } from "@/components/portfolio/GalleryLightbox";
import { galleryImages } from "@/lib/gallery";

export function PortfolioGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative mb-6 block w-full overflow-hidden break-inside-avoid text-left"
          >
            <GalleryImageCard image={image} />
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
