import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/contact",
    "/privacy-policy",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
