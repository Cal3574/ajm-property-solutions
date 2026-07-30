import type { Metadata } from "next";
import Image from "next/image";
import { InfoCardGrid } from "@/components/about/InfoCardGrid";
import { Timeline } from "@/components/about/Timeline";
import { trustReasons, values } from "@/lib/about";
import { aboutImage } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

const title = "About";
const description =
  "Twenty years of brickwork, masonry, and structural building experience serving Wilmslow and the surrounding area.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function AboutPage() {
  return (
    <article>
      <div className="relative h-[45vh] min-h-[320px] w-full">
        <Image
          src={aboutImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-12">
            <p className="text-sm tracking-wide text-accent">About</p>
            <h1 className="mt-2 font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Our Story
            </h1>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-12">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Our Mission
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          AJM Property Solutions was built on a simple idea: brickwork and
          building work should be done properly, or not at all. For over
          twenty years, we&apos;ve worked with homeowners across Wilmslow and
          the surrounding area, bringing traditional craftsmanship to every
          brickwork, masonry, structural, and general building project we
          take on. Our mission is straightforward, to deliver work
          we&apos;re proud to put our name to, carried out honestly,
          reliably, and to the highest standard.
        </p>
      </section>

      <section className="border-y border-border-hairline bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-12">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Our Values
          </h2>
          <InfoCardGrid cards={values} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-12">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Our Journey
        </h2>
        <Timeline />
      </section>

      <section className="border-y border-border-hairline bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-12">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Why Clients Trust Us
          </h2>
          <InfoCardGrid cards={trustReasons} />
        </div>
      </section>
    </article>
  );
}
