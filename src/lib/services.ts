import type { IconType } from "react-icons";
import { GiBrickWall, GiHouse, GiMetalBar, GiStoneWall } from "react-icons/gi";
import { serviceImages } from "@/lib/images";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    slug: "brickwork",
    name: "Brickwork",
    shortDescription:
      "Expert brickwork for new builds, extensions, and repairs, built to last.",
    description:
      "From new-build walls to extensions and repairs, our bricklaying is carried out to exacting standards using quality materials and traditional bonding techniques. Every course is laid true, level, and weathertight, so the finished brickwork looks as good in twenty years as it does on day one.",
    benefits: [
      "Precise, consistent coursing and pointing",
      "Matched brick and mortar for seamless extensions",
      "Suitable for new builds, extensions, and garden walls",
      "Fully insured tradespeople with 10 years' experience",
    ],
    image: serviceImages.brickwork,
    icon: GiBrickWall,
  },
  {
    slug: "masonry-repointing",
    name: "Masonry & Repointing",
    shortDescription:
      "Restoring and repointing masonry to protect and refresh your property's structure.",
    description:
      "Weathered or crumbling mortar lets water into a wall long before any damage is visible. We rake out and repoint masonry with a mortar mix matched to your property's age and material, restoring both the structural integrity and the appearance of the wall.",
    benefits: [
      "Prevents damp and structural water damage",
      "Mortar colour and profile matched to existing brick or stone",
      "Suitable for period and modern properties alike",
      "Restores kerb appeal without a full rebuild",
    ],
    image: serviceImages["masonry-repointing"],
    icon: GiStoneWall,
  },
  {
    slug: "structural-alterations",
    name: "Structural Alterations",
    shortDescription:
      "Structural openings, beam installations, and alterations carried out safely and to spec.",
    description:
      "Opening up a wall, fitting a structural beam, or altering the layout of a property requires careful planning and safe, compliant execution. We carry out structural alterations from initial opening through to steel installation and making good, working to specification throughout.",
    benefits: [
      "Structural openings and beam installations",
      "Work carried out to engineer's specification",
      "Temporary support and safe site management throughout",
      "Making good included, ready for finishing trades",
    ],
    image: serviceImages["structural-alterations"],
    icon: GiMetalBar,
  },
  {
    slug: "general-building",
    name: "General Building",
    shortDescription:
      "Complete general building work, from foundations to finishing touches.",
    description:
      "Beyond brickwork and structural work, we offer general building services covering the full range of a property project, from groundworks and foundations through to the finishing details. One reliable team, managing your project from start to finish.",
    benefits: [
      "Foundations, groundworks, and general construction",
      "One point of contact for the whole project",
      "Reliable scheduling and transparent pricing",
      "Over a decade of local building experience",
    ],
    image: serviceImages["general-building"],
    icon: GiHouse,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
