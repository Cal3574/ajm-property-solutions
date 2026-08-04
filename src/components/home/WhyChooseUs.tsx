"use client";

import { motion, type Variants } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineCurrencyPound,
  HiOutlineEye,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";

const reasons = [
  {
    icon: HiOutlineShieldCheck,
    title: "Fully Insured",
    description:
      "Every project is covered by full public liability insurance, for your complete peace of mind.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Experienced Team",
    description:
      "Over a decade of hands-on brickwork and building experience across every project we take on.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Quality Craftsmanship",
    description:
      "Meticulous attention to finish and technique, built to a standard that lasts.",
  },
  {
    icon: HiOutlineCurrencyPound,
    title: "Transparent Pricing",
    description:
      "Clear, honest quotes with no hidden costs, agreed before any work begins.",
  },
  {
    icon: HiOutlineClock,
    title: "Reliable",
    description:
      "We turn up when we say we will, and deliver projects to the timeline we agree.",
  },
  {
    icon: HiOutlineEye,
    title: "Attention to Detail",
    description:
      "The small details are what separate good work from great work, and we don't cut corners.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function WhyChooseUs() {
  return (
    <section className="border-y border-border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-accent uppercase">
            Why choose us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Built On Trust
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={item}
              className="border border-border-hairline bg-surface-raised p-8"
            >
              <reason.icon className="text-3xl text-accent" />
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
