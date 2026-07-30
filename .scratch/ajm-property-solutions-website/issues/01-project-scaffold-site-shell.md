# 01 — Project scaffold & site shell

**What to build:** A working Next.js project that any visitor can load and see a complete, premium site shell — navigation, footer, and global chrome — even before individual pages have their real content.

**Blocked by:** None — can start immediately

**Status:** ready-for-agent

- [ ] `git init` run in the project root; initial commit made once the scaffold below is in place
- [ ] Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Icons installed via pnpm; package name `ajm-property-solutions`; Node 20 targeted
- [ ] Satoshi (headings, self-hosted via `next/font/local`) and Inter (body, `next/font`) wired up and applied globally
- [ ] Dark editorial-agency theme tokens in place: matte black/charcoal background (#111111–#181818), dark grey secondary surfaces, warm white text, soft gold (#D4AF37) as a sparing accent only, optional muted bronze highlight
- [ ] `next.config` allows remote images from `images.unsplash.com`
- [ ] Sticky navbar with background blur on scroll, animated mobile menu, smooth scrolling; includes a placeholder logo component (text/wordmark-based, swappable later)
- [ ] Footer with navigation, real contact details (phone `07960121157`, email `info@ajmpropertysolutions.co.uk`, WhatsApp `07376236883`, address "Freedom House, Church St, Wilmslow, SK9 1AX"), social icons, and copyright
- [ ] Animated page-load screen, scroll-progress indicator, and back-to-top button present on all routes
- [ ] Smooth page-transition wrapper applied between route changes
- [ ] All motion in this shell respects `prefers-reduced-motion`
- [ ] No cursor-follower component included anywhere
- [ ] Every route (even stub/placeholder pages) renders inside this shell without layout errors
