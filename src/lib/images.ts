const unsplash = (slug: string) => `https://images.unsplash.com/${slug}`;

export const serviceImages: Record<string, string> = {
  brickwork: unsplash("photo-1495578942200-c5f5d2137def"),
  "masonry-repointing": unsplash("photo-1533239111758-7d9b96218c55"),
  "structural-alterations": unsplash("photo-1593012672010-5709b6d407cb"),
  "general-building": unsplash("photo-1541888946425-d81bb19240f5"),
};

export const heroImage = "/gallery/ajm-aerial-roof-construction.jpeg";
export const aboutImage = unsplash("photo-1768321902639-91f450392c56");
