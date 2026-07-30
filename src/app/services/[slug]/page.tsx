import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi";
import { getLocalBusinessJsonLd } from "@/lib/json-ld";
import { getServiceBySlug, services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.shortDescription,
      url,
      images: [{ url: service.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ${siteConfig.name}`,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: getLocalBusinessJsonLd(),
    areaServed: siteConfig.address.city,
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative h-[50vh] min-h-[360px] w-full">
        <Image
          src={service.image}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-12">
            <p className="text-sm tracking-wide text-accent">
              Services
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold text-foreground sm:text-5xl">
              {service.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-12">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Overview
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            {service.description}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-foreground">
            What&apos;s included
          </h2>
          <ul className="mt-4 space-y-3">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm text-foreground-muted"
              >
                <HiOutlineCheck className="mt-0.5 shrink-0 text-accent" />
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/60 px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get a Free Quote
            <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}
