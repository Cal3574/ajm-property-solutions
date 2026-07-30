import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const title = "Services";
const description =
  "Brickwork, masonry & repointing, structural alterations, and general building services from AJM Property Solutions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/services`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-foreground-muted">
          Brickwork, masonry, structural alterations, and general
          building, carried out to the same exacting standard on
          every project.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
