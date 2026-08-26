"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GalleryLightbox } from "@/components/portfolio/GalleryLightbox";
import { transformations } from "@/lib/gallery";

const lightboxImages = transformations.flatMap((item) => [
  item.before,
  item.after,
]);

export function Transformations() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="max-w-2xl">
        <p className="text-sm tracking-[0.2em] text-accent uppercase">
          Before &amp; after
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Transformations
        </h2>
      </div>

      <div className="mt-12 space-y-16">
        {transformations.map((item, itemIndex) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-xl font-bold text-foreground">
              {item.title}
            </h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[item.before, item.after].map((image, side) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveIndex(itemIndex * 2 + side)}
                  className="group relative block w-full overflow-hidden border border-border-hairline text-left"
                >
                  <span className="absolute top-4 left-4 z-10 bg-background/80 px-3 py-1 text-xs tracking-[0.2em] text-foreground uppercase backdrop-blur-sm">
                    {side === 0 ? "Before" : "After"}
                  </span>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <GalleryLightbox
        images={lightboxImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
