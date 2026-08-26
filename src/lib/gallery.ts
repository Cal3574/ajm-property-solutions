export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Transformation = {
  id: string;
  title: string;
  before: GalleryImage;
  after: GalleryImage;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "bathroom-renovation",
    src: "/gallery/ajm-bathroom-renovation.jpeg",
    alt: "Renovated bathroom with a freestanding bath and walk-in glass shower",
    width: 1200,
    height: 1600,
  },
  {
    id: "oak-frame-house-exterior",
    src: "/gallery/ajm-oak-frame-house-exterior.jpeg",
    alt: "Detached house with oak-framed gable glazing and a chevron timber garage door",
    width: 1080,
    height: 1350,
  },
  {
    id: "rear-extension-construction",
    src: "/gallery/ajm-rear-extension-construction.jpeg",
    alt: "Rear single-storey extension under construction with bi-fold doors and roof scaffolding",
    width: 1024,
    height: 1536,
  },
  {
    id: "fireplace-feature-wall",
    src: "/gallery/ajm-fireplace-feature-wall.jpeg",
    alt: "Media wall with a built-in fireplace and backlit floating shelving either side",
    width: 1320,
    height: 1310,
  },
  {
    id: "render-house-front",
    src: "/gallery/ajm-render-house-front.jpeg",
    alt: "Semi-detached house with white render finish and a bay window extension",
    width: 1024,
    height: 1356,
  },
  {
    id: "aerial-roof-construction",
    src: "/gallery/ajm-aerial-roof-construction.jpeg",
    alt: "Aerial drone view of a new roof structure being built with scaffolding around it",
    width: 2048,
    height: 1364,
  },
  {
    id: "garden-patio-terrace",
    src: "/gallery/ajm-garden-patio-terrace.jpeg",
    alt: "Porcelain-paved garden terrace with a built-in fire feature at dusk",
    width: 1320,
    height: 1604,
  },
  {
    id: "brick-house-front-garden",
    src: "/gallery/ajm-brick-house-front-garden.jpeg",
    alt: "Brick house with dormer windows and a landscaped front lawn",
    width: 1200,
    height: 1600,
  },
  {
    id: "stone-new-build-construction",
    src: "/gallery/ajm-stone-new-build-construction.jpeg",
    alt: "Large ashlar stone new-build home under construction with a telehandler and skips on site",
    width: 1200,
    height: 1600,
  },
  {
    id: "steel-beam-installation",
    src: "/gallery/ajm-steel-beam-installation.jpeg",
    alt: "Steel beam installation to a brick house rear elevation, supported by acrow props",
    width: 1320,
    height: 1758,
  },
  {
    id: "garden-decking-construction",
    src: "/gallery/ajm-garden-decking-construction.jpeg",
    alt: "Composite decking and garden landscaping under construction with a children's play area beyond",
    width: 1200,
    height: 1600,
  },
  {
    id: "garden-landscaping-progress",
    src: "/gallery/ajm-garden-landscaping-progress.jpeg",
    alt: "Garden landscaping in progress with paving being laid alongside new composite decking",
    width: 1200,
    height: 1600,
  },
  {
    id: "open-plan-living-fitout",
    src: "/gallery/ajm-open-plan-living-fitout.jpeg",
    alt: "Open-plan living and dining room mid-fit-out with floor protection down and bi-fold doors to the garden",
    width: 736,
    height: 966,
  },
  {
    id: "garden-decking-paving",
    src: "/gallery/ajm-garden-decking-paving.jpeg",
    alt: "Wide view of a rear garden with new composite decking and porcelain paving under construction",
    width: 1200,
    height: 1600,
  },
  {
    id: "porcelain-patio-installation",
    src: "/gallery/ajm-porcelain-patio-installation.jpeg",
    alt: "Large porcelain patio being laid with levelling spacers across the joints",
    width: 1200,
    height: 1600,
  },
  {
    id: "glazed-internal-partition",
    src: "/gallery/ajm-glazed-internal-partition.jpeg",
    alt: "Crittall-style glazed internal partition dividing a hallway from an open-plan living room",
    width: 1249,
    height: 2048,
  },
  {
    id: "grey-gloss-kitchen-quartz-island",
    src: "/gallery/ajm-grey-gloss-kitchen-quartz-island.jpeg",
    alt: "Grey gloss handleless kitchen with a white quartz island, black pendant lights and integrated Bosch ovens",
    width: 1320,
    height: 1573,
  },
  {
    id: "open-plan-kitchen-diner-extension",
    src: "/gallery/ajm-open-plan-kitchen-diner-extension.jpeg",
    alt: "Open-plan kitchen and dining extension with a flat rooflight and bi-fold doors onto the garden",
    width: 1320,
    height: 1565,
  },
  {
    id: "kitchen-extension-roof-lantern",
    src: "/gallery/ajm-kitchen-extension-roof-lantern.jpeg",
    alt: "Kitchen extension lit by a large roof lantern, with a grey gloss kitchen and a black island with built-in wine fridge",
    width: 1320,
    height: 1577,
  },
  {
    id: "grey-gloss-kitchen-extension",
    src: "/gallery/ajm-grey-gloss-kitchen-extension.jpeg",
    alt: "Grey gloss kitchen run with a white quartz waterfall island and under-cabinet lighting in a rear extension",
    width: 1319,
    height: 1563,
  },
  {
    id: "crittall-glazed-room-divider",
    src: "/gallery/ajm-crittall-glazed-room-divider.jpeg",
    alt: "Black steel Crittall-style glazed screen dividing a living room from the hallway",
    width: 1197,
    height: 1436,
  },
  {
    id: "crittall-glazed-double-doors",
    src: "/gallery/ajm-crittall-glazed-double-doors.jpeg",
    alt: "Black-framed Crittall-style glazed double doors leading through to a kitchen and dining room",
    width: 1239,
    height: 1483,
  },
  {
    id: "crittall-glazed-partition-dining",
    src: "/gallery/ajm-crittall-glazed-partition-dining.jpeg",
    alt: "Full-height Crittall-style glazed partition separating a hallway from a dining room with countryside views",
    width: 1012,
    height: 1329,
  },
  {
    id: "home-cinema-media-wall",
    src: "/gallery/ajm-home-cinema-media-wall.jpeg",
    alt: "Home cinema room with a large wall-mounted screen, electric fire and tiered grey velvet recliner seating",
    width: 1320,
    height: 1508,
  },
  {
    id: "home-cinema-tiered-seating",
    src: "/gallery/ajm-home-cinema-tiered-seating.jpeg",
    alt: "Dark panelled home cinema in a loft with two tiers of grey velvet recliner sofas and wall lights",
    width: 1320,
    height: 1505,
  },
  {
    id: "fitted-wardrobes-shaker-doors",
    src: "/gallery/ajm-fitted-wardrobes-shaker-doors.jpeg",
    alt: "Bespoke fitted wardrobes with shaker-style doors built into the eaves of a bedroom, primed ready for painting",
    width: 1200,
    height: 1600,
  },
  {
    id: "fitted-wardrobes-carcass-shelving",
    src: "/gallery/ajm-fitted-wardrobes-carcass-shelving.jpeg",
    alt: "Bespoke fitted wardrobe carcasses with hanging rails and open shelving, before the doors are hung",
    width: 1127,
    height: 1395,
  },
  {
    id: "fitted-wardrobes-carcass-install",
    src: "/gallery/ajm-fitted-wardrobes-carcass-install.jpeg",
    alt: "Carpenter fitting bespoke wardrobe carcasses to a bedroom wall with dust sheets down over the floor",
    width: 1200,
    height: 1600,
  },
  {
    id: "rear-extension-groundworks",
    src: "/gallery/ajm-rear-extension-groundworks.jpeg",
    alt: "Rear of a house opened up for a single-storey extension, with foundation trenches dug and the existing slab exposed",
    width: 1320,
    height: 1583,
  },
  {
    id: "rear-extension-steel-frame",
    src: "/gallery/ajm-rear-extension-steel-frame.jpeg",
    alt: "Steel beam frame installed across the rear of a house for a new extension, with a builder working from a ladder",
    width: 1320,
    height: 1577,
  },
  {
    id: "rear-extension-brick-shell",
    src: "/gallery/ajm-rear-extension-brick-shell.jpeg",
    alt: "Brick and blockwork shell of a new single-storey rear extension, built up before the roof and glazing go on",
    width: 1320,
    height: 1449,
  },
  {
    id: "loft-conversion-strip-out",
    src: "/gallery/ajm-loft-conversion-strip-out.jpeg",
    alt: "Loft stripped back to the joists and rafters at the start of a loft conversion, with an old fireplace still in place",
    width: 1320,
    height: 1496,
  },
  {
    id: "loft-conversion-roof-structure",
    src: "/gallery/ajm-loft-conversion-roof-structure.jpeg",
    alt: "Loft conversion mid-build with the roof opened to the rafters and joiners framing new stud walls",
    width: 1320,
    height: 1635,
  },
];

export const transformations: Transformation[] = [
  {
    id: "staircase",
    title: "Oak staircase reimagined",
    before: {
      id: "staircase-before",
      src: "/gallery/ajm-staircase-before.jpeg",
      alt: "Dated oak staircase with a spindle balustrade and carpeted treads in a double-height hallway",
      width: 900,
      height: 1600,
    },
    after: {
      id: "staircase-after",
      src: "/gallery/ajm-staircase-after.jpeg",
      alt: "The same hallway with a modern floating staircase, grey oak treads, a frameless glass balustrade and LED strip lighting",
      width: 941,
      height: 1672,
    },
  },
  {
    id: "house-exterior",
    title: "Pebbledash to contemporary render",
    before: {
      id: "house-exterior-before",
      src: "/gallery/ajm-house-exterior-before.jpeg",
      alt: "Dated detached house with grey pebbledash render, white uPVC windows and a uPVC porch",
      width: 1672,
      height: 941,
    },
    after: {
      id: "house-exterior-after",
      src: "/gallery/ajm-house-exterior-after.jpeg",
      alt: "The same house remodelled with smooth white render, black windows, a black slatted sliding gate and exterior uplighting",
      width: 736,
      height: 1600,
    },
  },
];
