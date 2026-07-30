const unsplash = (slug: string) => `https://images.unsplash.com/${slug}`;

export const serviceImages: Record<string, string> = {
  brickwork: unsplash("photo-1495578942200-c5f5d2137def"),
  "masonry-repointing": unsplash("photo-1533239111758-7d9b96218c55"),
  "structural-alterations": unsplash("photo-1593012672010-5709b6d407cb"),
  "general-building": unsplash("photo-1541888946425-d81bb19240f5"),
};

export const portfolioImages = {
  brickTownhouses: unsplash("photo-1430285561322-7808604715df"),
  weatheredBrickWall: unsplash("photo-1592853598064-5a7fa150592c"),
  redBrickTexture: unsplash("photo-1520758594221-872948699332"),
  dryStoneWall: unsplash("photo-1707211711417-72ebdc991f89"),
  stoneWallBlocks: unsplash("photo-1609879520494-1685f2e262c6"),
  stoneBrickWall: unsplash("photo-1690235758424-2e34a71e68a2"),
  steelBeamRenovation: unsplash("photo-1593012672105-42e6d13af5ac"),
  structuralOpening: unsplash("photo-1592581912637-222dcc696ac4"),
  timberRoofBeams: unsplash("photo-1728025855236-b939e6a33768"),
  apartmentsUnderConstruction: unsplash("photo-1583338850703-bc602b103674"),
  housesUnderConstruction: unsplash("photo-1761479135364-4240520b5793"),
} as const;

export const heroImage = unsplash("photo-1699625809637-31c6f327ac96");
export const aboutImage = unsplash("photo-1768321902639-91f450392c56");
