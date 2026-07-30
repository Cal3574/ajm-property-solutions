export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "From the first quote to the final walkthrough, the whole job was handled professionally. The brickwork matched our existing extension perfectly, you'd never know it wasn't original.",
    attribution: "Verified Customer, Wilmslow",
  },
  {
    id: "testimonial-2",
    quote:
      "Our old stone boundary wall was falling apart. The repointing work brought it back to life, and the team left the site cleaner than they found it every single day.",
    attribution: "Verified Customer, Wilmslow",
  },
  {
    id: "testimonial-3",
    quote:
      "We needed a structural opening formed for a new kitchen extension. The whole process was explained clearly, the pricing was transparent, and the work was completed exactly on schedule.",
    attribution: "Verified Customer, Cheshire",
  },
  {
    id: "testimonial-4",
    quote:
      "Reliable, tidy, and genuinely skilled tradespeople. It's rare to find a building company that turns up when they say they will, but that's exactly what we got.",
    attribution: "Verified Customer, Wilmslow",
  },
];
