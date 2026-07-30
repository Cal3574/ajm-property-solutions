"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border-hairline bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-accent)_0%,_transparent_60%)] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-12"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-5xl">
          Ready To Start Your Project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-foreground-muted">
          Get in touch for a free, no-obligation quote and speak directly
          with our team about your brickwork, masonry, or building project.
        </p>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium tracking-wide text-background transition-transform hover:scale-[1.03]"
        >
          Get in Touch
          <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
