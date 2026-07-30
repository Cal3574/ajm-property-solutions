"use client";

import { motion, type Variants } from "framer-motion";
import { timeline } from "@/lib/about";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Timeline() {
  return (
    <motion.ol
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-12 space-y-10 border-l border-border-hairline pl-8"
    >
      {timeline.map((entry) => (
        <motion.li key={entry.title} variants={item} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <h3 className="font-heading text-xl font-bold text-foreground">
            {entry.title}
          </h3>
          <p className="mt-2 max-w-2xl text-foreground-muted">
            {entry.description}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
