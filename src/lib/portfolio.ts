import { portfolioImages, serviceImages } from "@/lib/images";

export const portfolioCategories = [
  "Residential Brickwork",
  "Masonry & Repointing",
  "Structural Alterations",
  "General Building",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioProject = {
  id: string;
  category: PortfolioCategory;
  title: string;
  description: string;
  image: string;
  aspect: "portrait" | "square" | "landscape";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "residential-brickwork-1",
    category: "Residential Brickwork",
    title: "Residential Brickwork",
    description:
      "New-build and extension brickwork laid to a precise, consistent bond, matched to the surrounding property for a seamless finish.",
    image: portfolioImages.brickTownhouses,
    aspect: "portrait",
  },
  {
    id: "residential-brickwork-2",
    category: "Residential Brickwork",
    title: "Residential Brickwork",
    description:
      "Feature brickwork detailing bringing texture and character to a residential facade, built to withstand the elements.",
    image: portfolioImages.weatheredBrickWall,
    aspect: "square",
  },
  {
    id: "residential-brickwork-3",
    category: "Residential Brickwork",
    title: "Residential Brickwork",
    description:
      "Clean, crisp brick coursing on a new garden wall, finished with a neat mortar joint throughout.",
    image: portfolioImages.redBrickTexture,
    aspect: "landscape",
  },
  {
    id: "masonry-repointing-1",
    category: "Masonry & Repointing",
    title: "Masonry & Repointing",
    description:
      "Natural stone masonry repointed to restore weatherproofing and bring out the character of the original stonework.",
    image: portfolioImages.dryStoneWall,
    aspect: "square",
  },
  {
    id: "masonry-repointing-2",
    category: "Masonry & Repointing",
    title: "Masonry & Repointing",
    description:
      "Careful raking-out and repointing of an aged stone wall, matching mortar colour and profile to the original.",
    image: portfolioImages.stoneWallBlocks,
    aspect: "portrait",
  },
  {
    id: "masonry-repointing-3",
    category: "Masonry & Repointing",
    title: "Masonry & Repointing",
    description:
      "Restored stone masonry boundary wall, with damaged sections rebuilt to match the existing structure.",
    image: portfolioImages.stoneBrickWall,
    aspect: "landscape",
  },
  {
    id: "structural-alterations-1",
    category: "Structural Alterations",
    title: "Structural Alteration",
    description:
      "Structural opening formed and supported with a steel beam, carried out to engineer's specification with full temporary support.",
    image: portfolioImages.steelBeamRenovation,
    aspect: "landscape",
  },
  {
    id: "structural-alterations-2",
    category: "Structural Alterations",
    title: "Structural Alteration",
    description:
      "Load-bearing wall alteration creating an open-plan layout, finished ready for plastering and decoration.",
    image: portfolioImages.structuralOpening,
    aspect: "portrait",
  },
  {
    id: "structural-alterations-3",
    category: "Structural Alterations",
    title: "Structural Alteration",
    description:
      "Exposed roof timbers and steelwork reinforced as part of a wider structural alteration project.",
    image: portfolioImages.timberRoofBeams,
    aspect: "square",
  },
  {
    id: "general-building-1",
    category: "General Building",
    title: "General Building",
    description:
      "Full general building project managed from groundworks through to completion, coordinated as a single point of contact.",
    image: portfolioImages.apartmentsUnderConstruction,
    aspect: "portrait",
  },
  {
    id: "general-building-2",
    category: "General Building",
    title: "General Building",
    description:
      "New residential build progressing through the general building phase, from foundations to superstructure.",
    image: portfolioImages.housesUnderConstruction,
    aspect: "landscape",
  },
  {
    id: "general-building-3",
    category: "General Building",
    title: "General Building",
    description:
      "General building work carried out as part of a wider property refurbishment, from start to finish.",
    image: serviceImages["general-building"],
    aspect: "square",
  },
];
