# 11 — Site-wide SEO completion

**What to build:** A search engine crawling the finished site can discover every real page, understand the business as a Local Business, and render correct rich results.

**Blocked by:** 02, 03, 04, 05, 06, 07, 08, 09, 10 — every page must exist so the sitemap and site-wide schema are accurate

**Status:** ready-for-agent

- [ ] `robots.txt` generated, allowing indexing and pointing to the sitemap
- [ ] `sitemap.xml` generated dynamically covering every real route that now exists (home, services overview + 4 service pages, portfolio, about, contact, privacy policy)
- [ ] Root-layout `LocalBusiness` JSON-LD structured data using the real business name, address, phone, and opening hours
- [ ] Favicon and web app manifest present and correctly linked
- [ ] Canonical URLs on every page point at `https://ajmpropertysolutions.com`
- [ ] Audit pass confirms every page has unique, accurate title/description/OG/Twitter metadata (no leftover placeholder metadata)
- [ ] Audit pass confirms semantic HTML and correct heading hierarchy (one `h1` per page) across all pages
