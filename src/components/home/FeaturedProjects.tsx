"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GalleryImageCard } from "@/components/portfolio/GalleryImageCard";
import { galleryImages } from "@/lib/gallery";

const featuredImages = galleryImages.slice(0, 4);

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">
            Our work
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 text-sm tracking-wide text-foreground transition-colors hover:text-accent"
        >
          View full portfolio
          <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-4">
        {featuredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="mb-6 break-inside-avoid"
          >
            <Link
              href="/portfolio"
              className="group relative block w-full overflow-hidden"
            >
              <GalleryImageCard image={image} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
