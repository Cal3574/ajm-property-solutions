Status: ready-for-agent

# Spec: AJM Property Solutions Website

## Problem Statement

AJM Property Solutions is a real, established brickwork and masonry building company (trading 20 years) that currently has a website which does not reflect the quality of its work.
The existing site is thin on content, lacks a distinct visual identity, and reads as generic rather than premium.
Prospective clients researching a brickwork/masonry/structural building contractor form a first impression from the website before any other contact, and a generic-feeling site undermines trust in a trade where craftsmanship and attention to detail are the entire value proposition.
The company needs a website that immediately signals quality, professionalism, and trustworthiness, on par with premium architecture and design studio websites rather than typical trade/builder templates.

## Solution

Build a new marketing website for AJM Property Solutions from scratch using Next.js (App Router), TypeScript, and Tailwind CSS, deployed to Hostinger's Node.js hosting under the existing domain ajmpropertysolutions.com.
The site takes visual and structural inspiration from luxury architecture firms, premium interior design studios, and high-end creative agencies, explicitly avoiding the look of a generic construction/trade template.
Content is scoped to what AJM Property Solutions actually does (brickwork, masonry and repointing, structural alterations, general building) rather than the broader trade list a generic builder site might include, and all business-identifying content (contact details, opening hours, location) is real rather than placeholder.
Where real content does not yet exist (testimonials, portfolio project specifics), the site uses clearly generic placeholder content structured for straightforward replacement, rather than fabricated specifics attributed as real.
The only interactive/dynamic behavior in the site is the contact form, which sends real submissions via Resend to the company's inbox.

## User Stories

1. As a prospective client researching brickwork/masonry contractors, I want to immediately see a premium, professional homepage, so that I trust AJM Property Solutions to deliver high-quality work.
2. As a prospective client, I want to see a full-screen hero with a clear headline and supporting copy, so that I immediately understand what the company does and its value proposition.
3. As a prospective client, I want a clear primary call-to-action ("Get a Free Quote") and secondary call-to-action ("View Our Work") in the hero, so that I can act on my interest immediately.
4. As a prospective client, I want to see credibility signals (years in business, projects completed, happy customers) presented as animated counters, so that I can quickly gauge the company's track record.
5. As a prospective client, I want to see the specific services offered (brickwork, masonry & repointing, structural alterations, general building) as distinct, well-presented cards, so that I can quickly identify whether the company does the kind of work I need.
6. As a prospective client, I want to see "Why Choose Us" reasons (fully insured, experienced team, quality craftsmanship, transparent pricing, reliable, attention to detail), so that I can evaluate the company against my own priorities before contacting them.
7. As a prospective client, I want to see a preview of featured/example projects on the homepage, so that I can gauge the visual quality of the company's work at a glance.
8. As a prospective client, I want to read testimonials from previous customers, so that I can gain confidence from other people's experience with the company.
9. As a prospective client, I want a clear, prominent call-to-action section encouraging me to get in touch, so that I know how to proceed once I'm convinced.
10. As a site visitor, I want a footer with navigation, contact details, and social links, so that I can find what I need regardless of which page I land on.
11. As a prospective client, I want a dedicated Portfolio page with a gallery of example projects, organized by category and filterable, so that I can browse the type of work relevant to my own project.
12. As a prospective client, I want to click into a project on the Portfolio page and see more detail in a modal, so that I can learn more about that category of work without leaving the page.
13. As a prospective client, I want a dedicated Services page listing every service with a description, benefits, and image, so that I can understand what's included in each service before enquiring.
14. As a prospective client interested in one specific service (e.g. structural alterations), I want that service to have its own page with a specific URL, so that I can find and share information about exactly that service, and so that the page can be found via search engines for that specific search term.
15. As a prospective client, I want an About page telling the company's story, mission, and values, so that I can understand who I'd be working with beyond just the services list.
16. As a prospective client, I want to see why clients trust the company on the About page, so that I have additional reassurance beyond the homepage's "Why Choose Us" section.
17. As a prospective client ready to enquire, I want a Contact page with a working contact form, so that I can send my enquiry directly through the website.
18. As a prospective client, I want to see the company's real phone number, email, and physical address on the Contact page, so that I can reach them by whichever method I prefer.
19. As a prospective client, I want to see the company's real opening hours on the Contact page, so that I know when I can expect a response or call them directly.
20. As a prospective client, I want to see an embedded map showing the company's real location, so that I can understand where they're based relative to my own property.
21. As a site owner, I want contact form submissions to be emailed to the company's real inbox via Resend, so that enquiries reach the business without me needing to check a database or dashboard.
22. As a site owner, I want the contact form to reject spam/invalid submissions server-side, so that the inbox isn't flooded with junk.
23. As a site visitor on a mobile device, I want the entire site to be fully responsive and usable, so that I can browse and enquire from my phone with the same quality of experience as desktop.
24. As a site visitor, I want smooth, tasteful scroll and hover animations throughout the site (fade-ins, staggered reveals, hover states, a scroll progress indicator, an initial page loader), so that the site feels premium and considered rather than static or, conversely, gimmicky.
25. As a site visitor who has `prefers-reduced-motion` enabled, I want animations to be reduced or removed, so that the site remains comfortable and accessible to me.
26. As a site visitor using a keyboard or screen reader, I want proper semantic HTML, heading hierarchy, and accessible focus states throughout, so that I can navigate and understand the site without a mouse or with assistive technology.
27. As a search engine, I want each page to have accurate, unique metadata (title, description, Open Graph tags, Twitter card, canonical URL), so that I can index and represent each page correctly in search results and link previews.
28. As a search engine, I want a robots.txt and sitemap.xml, so that I can discover and correctly crawl all indexable pages.
29. As a search engine, I want JSON-LD structured data identifying AJM Property Solutions as a Local Business (with real name, address, phone, and opening hours), so that I can display rich local-business results.
30. As a search engine, I want each individual service page to carry its own Service-level structured data and metadata, so that it can rank independently for that service's specific search terms.
31. As a site visitor, I want a favicon and web app manifest, so that the site is properly represented in browser tabs and if added to a home screen.
32. As a site owner, I want the site to score well on Lighthouse across Performance, Accessibility, Best Practices, and SEO, so that the site is fast, discoverable, and doesn't lose visitors to poor technical quality.
33. As a site visitor, I want all images to load efficiently (via next/image, appropriately sized), so that pages feel fast even with large, high-quality photography.
34. As a site owner, I want a Privacy Policy page describing what personal data the contact form collects and how it's used, so that the site meets UK GDPR expectations for a form that processes real personal data.
35. As a developer maintaining this site later, I want a clean, typed, componentized codebase (reusable Navbar, Footer, Hero, ServiceCard, ProjectCard, TestimonialCard, Counter, ContactForm, etc.), so that future changes (e.g. swapping in real photos, real testimonials, a real logo) are straightforward and low-risk.
36. As the site owner, I want a placeholder logo component in the navbar/footer, so that the site is complete and usable before the real logo asset is supplied.
37. As the site owner, I want all placeholder imagery sourced from Unsplash via remote URLs, so that the site has high-quality photography from day one without needing my own photo library yet, understanding these will be swapped for real project photos later.

## Implementation Decisions

- **Framework/stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion for animation, React Icons for iconography, `next/image` for all imagery, `next/font/local` for Satoshi and `next/font/google` (or local) for Inter.
- **Package manager**: pnpm. **Node version**: 20 LTS.
- **Repository**: initialize git in the project root (`ajm-main`), package name `ajm-property-solutions`, first commit once the scaffold is in place.
- **Brand name**: "AJM Property Solutions" is used consistently across all copy, metadata, and structured data (not "AJM Property Services", which appears inconsistently on the current live site).
- **Service scope**: exactly four services are represented across the site (service cards, service sub-pages, nav): Brickwork, Masonry & Repointing, Structural Alterations, General Building. No Roofing, Landscaping, Extensions, or Property Maintenance content anywhere on the site.
- **Real business data used verbatim**: phone `07960121157`, email `info@ajmpropertysolutions.co.uk`, WhatsApp `07376236883`, address "Freedom House, Church St, Wilmslow, SK9 1AX", opening hours Mon–Fri 8:00–17:00, Sat 9:00–13:00, Sun Closed. These populate the footer, Contact page, and the Local Business JSON-LD.
- **Stats counters**: Years Experience = 20, Projects Completed = 250+, Happy Customers = 200+. No "Areas Covered" stat (dropped — only one office location is known, not a service radius).
- **Testimonials**: sourced from a clearly-named placeholder data module, each entry attributed generically (e.g. "Verified Customer, Wilmslow") rather than to an invented named individual.
- **Team section**: not included anywhere on the site (About page has no "Meet the Team" section).
- **Portfolio/Featured Projects**: cards and detail modals are labeled by work category (e.g. "Residential Brickwork," "Masonry Repointing," "Structural Alteration") with generic descriptive copy about that type of work. No invented project-specific details (no fake addresses, completion dates, or client names).
- **Placeholder imagery**: sourced from Unsplash via remote URLs (`images.unsplash.com` added to `next.config` `images.remotePatterns`), not downloaded/committed to the repo. Understood to be a "for now" choice, swapped for real project photography later.
- **Routing/IA**: `/` (home), `/services` (overview) plus `/services/[slug]` individual pages for each of the four services, `/portfolio`, `/about`, `/contact`, `/privacy-policy`.
- **Contact form**: client-side form calls a Next.js Server Action that validates input server-side, applies basic spam mitigation (honeypot field at minimum), and sends the submission via Resend to `info@ajmpropertysolutions.co.uk`. The Resend API key is read from an environment variable that is not yet supplied — the code path is complete and production-ready, activated the moment the key is set.
- **Contact page map**: a real embedded Google Maps iframe centered on the company's real address, not a placeholder graphic.
- **Design direction**: dark editorial-agency aesthetic — matte black/charcoal background (#111111–#181818), dark grey secondary surfaces, warm white text, soft gold (#D4AF37) used sparingly as a thin accent/underline (not as fills or backgrounds), optional muted bronze highlights. Full-bleed photography, generous whitespace, hairline dividers preferred over boxed/bordered cards, restrained glassmorphism only where it reinforces elevation (not as a blanket style). Slow, confident scroll pacing rather than a dense/busy one.
- **Typography**: Satoshi for headings (self-hosted via `next/font/local`), Inter for body copy.
- **Cursor follower**: explicitly excluded. Standard cursor throughout; premium interaction feel is carried by hover/focus states, magnetic buttons, and micro-interactions instead.
- **Motion**: all scroll/hover/page-transition animations implemented with Framer Motion, and all respect `prefers-reduced-motion` by reducing/removing motion for users who request it.
- **Analytics/cookies**: none. No analytics tooling, no cookie consent banner, no tracking of any kind.
- **SEO**: Next.js Metadata API for per-page metadata (including dynamic metadata for each `/services/[slug]` page), Open Graph and Twitter card tags, canonical URLs, `robots.txt`, `sitemap.xml`, JSON-LD `LocalBusiness` structured data on relevant pages plus JSON-LD `Service` structured data on each individual service page, semantic HTML with correct heading hierarchy throughout, favicon and web app manifest. Canonical base URL: `https://ajmpropertysolutions.com`.
- **Hosting target**: Hostinger Node.js hosting (persistent Node process, so SSR/Server Actions/image optimization all function as in a standard Next.js deployment — no static export required).
- **Logo**: a placeholder logo component (text/wordmark-based) used in the Navbar and Footer, structured so it can be swapped for the real logo asset later without other changes.

## Testing Decisions

- Automated testing is scoped to a single seam: the contact form submission boundary. Everything else in this build (page layout, animations, copy rendering, navigation) is presentational and is verified visually/manually rather than through automated tests, per the project's usual standard of hands-on UI review rather than snapshot/visual-regression testing for a first build.
- **Seam under test**: a plain function (e.g. `submitContactForm(input): Result`) called by the contact form's Server Action. The Resend email-sending client is injected/abstracted behind an interface so tests substitute a fake sender rather than calling the real Resend API.
- Tests should only assert on external behavior of this function — its return value (success/validation-error/failure) and whether/how the injected sender was called — never on internal implementation details.
- **Cases to cover**:
  1. Valid input → sender is called once with the correctly-shaped payload → function returns a success result.
  2. Invalid input (missing/malformed required fields) → sender is never called → function returns a validation-error result describing the problem.
  3. Honeypot field populated (bot submission) → sender is never called → function returns a result indistinguishable from success to the caller (so bots don't learn the honeypot was detected), no error surfaced to a real user path.
  4. Sender throws/rejects → function returns a failure result → no internal error detail (e.g. API keys, stack traces) is leaked in the result.
- **Prior art**: none — this is a new repository with no existing test suite or testing conventions to follow.

## Out of Scope

- Real photography of AJM Property Solutions' actual completed projects (Unsplash placeholders are used until real photos are supplied).
- The real company logo (a placeholder logo component is used until the asset is provided).
- Real, named customer testimonials and named team member profiles (generic placeholders only; team section omitted entirely).
- Analytics, cookie consent, and any form of visitor tracking.
- Any content or pages for services outside brickwork, masonry & repointing, structural alterations, and general building.
- A CMS or any admin interface for editing content — all content is authored directly in code for this initial build.
- Automated visual regression or end-to-end UI testing — verification of pages/animations/layout is manual.
- Multi-language/localization support.
- Blog or news section (not requested in the brief).
- Deployment/CI pipeline configuration for Hostinger beyond what's needed for local `pnpm build`/`pnpm start` to work correctly on a Node.js host — actual Hostinger account setup and deployment is a separate, later step.

## Further Notes

- This spec was produced after a `/grill` session that resolved several discrepancies between the original brief and the real, live AJM Property Solutions website (ajmpropertysolutions.com), which was fetched and used as the source of truth for company name, services actually offered, and real contact details/hours.
- Several decisions in this spec exist specifically to avoid presenting fabricated content as real on a live business website (testimonials, team members, portfolio project specifics) — this constraint should be treated as a hard rule for any future content added to this site, not just this initial build.
- The Resend API key and any future Hostinger deployment credentials are expected to be supplied by the user later as environment variables; no such secrets should be requested, invented, or committed during implementation.
- No `CONTEXT.md`/ADRs exist yet for this repo (new project) — the domain-modeling skill can create these lazily as real domain terminology or architectural decisions get resolved during implementation.
