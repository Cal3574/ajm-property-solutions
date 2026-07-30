# 02 — Services content & pages

**What to build:** A visitor researching a specific trade can find and read a dedicated page for exactly that service, and a full overview page listing all services — both discoverable and correctly described for search engines.

**Blocked by:** 01 — Project scaffold & site shell

**Status:** ready-for-agent

- [ ] A single shared services data model (name, slug, description, benefits, image) defines exactly four services: Brickwork, Masonry & Repointing, Structural Alterations, General Building — no other service categories anywhere
- [ ] `/services` overview page lists all four services as cards (image, description, benefits, CTA), matching the dark editorial design direction
- [ ] `/services/[slug]` renders a dedicated page per service, each with its own large image, description, benefits, and CTA
- [ ] Each service page has correct, unique Metadata API output (title, description, OG tags, Twitter card, canonical URL)
- [ ] Each service page includes `Service`-level JSON-LD structured data
- [ ] Placeholder imagery for each service sourced from Unsplash via remote URLs
- [ ] Pages are fully responsive and keyboard/screen-reader navigable with correct heading hierarchy
