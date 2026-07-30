import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { siteConfig } from "@/lib/site-config";

const title = "Portfolio";
const description =
  "Browse our work across brickwork, masonry & repointing, structural alterations, and general building.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Our Portfolio
        </h1>
        <p className="mt-4 text-lg text-foreground-muted">
          A look at the type of work we carry out, organised by category.
          Filter to browse the kind of project relevant to you.
        </p>
      </div>

      <div className="mt-12">
        <PortfolioGallery />
      </div>
    </section>
  );
}
