export const siteConfig = {
  name: "AJM Property Solutions",
  shortName: "AJM",
  description:
    "Established brickwork, masonry, and structural building specialists serving Wilmslow and the surrounding area for over 10 years.",
  url: "https://ajmpropertysolutions.com",
  phone: "07960121157",
  phoneHref: "tel:+447960121157",
  email: "info@ajmpropertysolutions.co.uk",
  whatsapp: "07376236883",
  whatsappHref: "https://wa.me/447376236883",
  instagramHref: "https://www.instagram.com/ajm_property_solutions",
  address: {
    line1: "Freedom House",
    line2: "Church St",
    city: "Wilmslow",
    postcode: "SK9 1AX",
    full: "Freedom House, Church St, Wilmslow, SK9 1AX",
  },
  hours: [
    { days: "Monday - Friday", time: "8:00 - 17:00" },
    { days: "Saturday", time: "9:00 - 13:00" },
    { days: "Sunday", time: "Closed" },
  ],
  stats: {
    yearsExperience: 10,
    projectsCompleted: 250,
    happyCustomers: 200,
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
