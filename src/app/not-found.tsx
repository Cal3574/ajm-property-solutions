import type { Metadata } from "next";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Logo } from "@/components/layout/Logo";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center lg:px-12">
        <div className="flex justify-center">
          <Logo />
        </div>

        <p className="mt-10 text-sm tracking-[0.2em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Let&apos;s get you back on solid ground.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-background transition-transform hover:scale-[1.03]"
          >
            Back to Home
            <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-sm tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
