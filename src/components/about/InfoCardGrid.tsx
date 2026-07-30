"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type InfoCard = {
  title: string;
  description: string;
};

export function InfoCardGrid({ cards }: { cards: InfoCard[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-12 grid gap-8 sm:grid-cols-2"
    >
      {cards.map((card) => (
        <motion.div
          key={card.title}
          variants={item}
          className="border border-border-hairline bg-surface p-8"
        >
          <h3 className="font-heading text-lg font-bold text-foreground">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            {card.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
