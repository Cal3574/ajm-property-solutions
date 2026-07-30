"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">
            What we do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm tracking-wide text-foreground transition-colors hover:text-accent"
        >
          View all services
          <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <motion.div key={service.slug} variants={item}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
