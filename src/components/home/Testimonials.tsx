"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { testimonials } from "@/lib/testimonials.placeholder";

const AUTO_ADVANCE_MS = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-12">
      <p className="text-sm tracking-[0.2em] text-accent uppercase">
        Testimonials
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        What Our Clients Say
      </h2>

      <div className="relative mt-12 min-h-[220px] sm:min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={current.id}
            initial={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
            }
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <blockquote className="font-heading text-2xl leading-snug text-foreground sm:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm tracking-wide text-accent">
              {current.attribution}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="text-xl text-foreground-muted transition-colors hover:text-accent"
        >
          <HiOutlineChevronLeft />
        </button>

        <div className="flex items-center">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-foreground-muted/40"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="text-xl text-foreground-muted transition-colors hover:text-accent"
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </section>
  );
}
