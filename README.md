# Harikrishna Design Portfolio

A faithful React + TypeScript recreation of [harikrishnadesign.figma.site](https://harikrishnadesign.figma.site/), a Figma Make portfolio site, rebuilt as a maintainable, production-quality codebase with a centralized design system.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** — design tokens ported 1:1 from the reference site's compiled CSS (colors, radii, shadows, the "acrylic" glass surfaces)
- **React Router** — real routes for every page and case study (the reference is a single-URL SPA with client-only state; this project upgrades that to real, linkable, back/forward-safe URLs while keeping the visuals identical)
- **lucide-react** — same icon library the reference site uses

## Structure

```
src/
├── design-system/
│   ├── tokens/theme.css      # Design tokens (light + dark, extracted from reference)
│   └── ui/                   # Foundational components (Button, Badge, AcrylicCard, H1, ...)
├── components/
│   ├── nav/                  # Header, mobile nav, settings modal, footer
│   ├── portfolio/            # ProjectCard, ContactSection
│   ├── casestudy/            # Reusable case-study narrative blocks
│   └── reveal.tsx            # Scroll-triggered reveal animation
├── pages/                    # Route-level pages, including /design-system
├── data/                     # Content: projects, experience, nav, contact
└── lib/                      # Shared utilities
```

## Pages

- `/` — Home
- `/work` — Work (all projects)
- `/about` — About
- `/resume` — Resume (with downloadable PDF)
- `/contact` — Contact
- `/work/:slug` — 4 case studies (Phone to PC Resume, PC to Phone Resume, Family Safety, Kopdar Initiative)
- `/design-system` — Internal component & token showcase (not linked from public nav)

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run lint     # oxlint
```
