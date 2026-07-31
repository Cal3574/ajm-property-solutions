"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { heroImage } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        <p className="text-sm tracking-[0.2em] text-accent uppercase">
          AJM Property Solutions
        </p>

        <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
          Building Quality. Delivering Trust.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
          Established brickwork, masonry, and structural building
          specialists, bringing two decades of craftsmanship to every
          project in Wilmslow and beyond.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-background transition-transform hover:scale-[1.03]"
          >
            Get a Free Quote
            <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-sm tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
