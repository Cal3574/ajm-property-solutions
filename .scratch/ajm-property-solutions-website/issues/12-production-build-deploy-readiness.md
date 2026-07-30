# 12 — Production build & deploy readiness

**What to build:** The finished site builds cleanly for Hostinger's Node.js hosting and meets the project's quality bar for performance, accessibility, and polish before handoff.

**Blocked by:** 11 — Site-wide SEO completion

**Status:** ready-for-agent

- [ ] `pnpm build` and `pnpm start` succeed cleanly with no errors or warnings, producing a working production server suitable for Hostinger's Node.js hosting (no static export required)
- [ ] Lighthouse audit run against key pages (home, a service page, portfolio, contact) with strong scores across Performance, Accessibility, Best Practices, and SEO; any regressions found are fixed
- [ ] Manual pass confirms all motion respects `prefers-reduced-motion` site-wide
- [ ] Manual responsive QA pass across mobile, tablet, laptop, and desktop breakpoints on every page, checking for pixel-level layout issues
- [ ] No cursor-follower, no analytics, no cookie banner present anywhere on the site
- [ ] Final commit made once the above checks pass
