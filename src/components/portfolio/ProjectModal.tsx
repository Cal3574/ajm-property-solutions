"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import type { PortfolioProject } from "@/lib/portfolio";

type ProjectModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previouslyFocusedElement.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR,
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocusedElement.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 grid max-h-[85vh] w-full max-w-3xl grid-rows-[auto_1fr] overflow-hidden border border-border-hairline bg-surface sm:grid-cols-2 sm:grid-rows-1"
          >
            <div className="relative h-56 sm:h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col overflow-y-auto p-8">
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close project detail"
                onClick={onClose}
                className="ml-auto text-2xl text-foreground-muted transition-colors hover:text-accent"
              >
                <HiOutlineX />
              </button>
              <p className="text-sm tracking-wide text-accent">
                {project.category}
              </p>
              <h2
                id="project-modal-title"
                className="mt-2 font-heading text-2xl font-bold text-foreground"
              >
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
