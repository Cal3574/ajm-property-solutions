"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineX } from "react-icons/hi";
import type { GalleryImage } from "@/lib/gallery";

type GalleryLightboxProps = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const image = activeIndex === null ? null : images[activeIndex];

  const showPrevious = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const showNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!image) return;

    previouslyFocusedElement.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocusedElement.current?.focus();
    };
  }, [image, onClose, showPrevious, showNext]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            aria-hidden="true"
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
          />

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close image"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-2xl text-foreground-muted transition-colors hover:text-accent sm:top-8 sm:right-8"
          >
            <HiOutlineX />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={showPrevious}
            className="absolute left-2 z-10 text-3xl text-foreground-muted transition-colors hover:text-accent sm:left-6"
          >
            <HiOutlineChevronLeft />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={showNext}
            className="absolute right-2 z-10 text-3xl text-foreground-muted transition-colors hover:text-accent sm:right-6"
          >
            <HiOutlineChevronRight />
          </button>

          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-0 h-full max-h-[85vh] w-full max-w-4xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
