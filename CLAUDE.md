# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Antimicrobianos** is a static educational website for teaching antimicrobial therapy to pediatric residents at Hospital Regional de Taguatinga (HRT). Built with **Astro 5.16.6**, the site features a vintage 1930s-1950s cinema poster aesthetic with interactive course modules.

- **Site URL:** https://atbpedhrt.vercel.app (Vercel deployment)
- **Framework:** Astro 5.16.6 (static site generation, minimal dependencies)
- **Author:** Dr. Iúri Almeida, Pediatric Infectologist
- **Language:** Portuguese

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server at localhost:3000 (Astro default) |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands directly |

## Architecture & Key Concepts

### Content Collections Pattern

Content is managed through **Astro Content Collections** with Zod schema validation (`src/content/config.ts`). All course modules are Markdown files with YAML frontmatter:

```yaml
---
title: "Module Name"
moduleNumber: 1
subtitle: "Description"
description: "Long description"
drugs: ["Drug 1", "Drug 2"]  # Array of antimicrobials covered
bacteriaImage: "/images/bacteria-mod1.png"
bacteriaAlt: "Description for accessibility"
slidesUrl: "/slides/module-name.pdf"  # Optional - link to presentation slides
order: 1  # Display order
draft: false  # Set true to hide from public
---
```

**Adding new modules:** Create `src/content/modulos/[slug].md`, follow the schema above. Pages auto-generate from frontmatter via `getCollection()`.

### File Structure & Routing

```
src/
├── pages/                          # File-based routing (Astro standard)
│   ├── index.astro                # Homepage (/)
│   ├── guia-rapido.astro          # Quick reference guide (Content Collection)
│   ├── sobre.astro                # About course/author
│   ├── 404.astro                  # Custom 404 page (vintage cinema style)
│   └── modulos/
│       ├── index.astro            # Modules listing page
│       └── [slug].astro           # Dynamic module detail pages
├── components/
│   ├── PageHeader.astro           # Reusable header (variants: simple/dramatic)
│   ├── ModuleCard.astro           # Module card component
│   ├── TableOfContents.astro      # Section navigation (desktop sidebar + mobile FAB)
│   └── BaseLayout.astro           # Global layout wrapper
├── content/
│   ├── modulos/                   # Course modules (Markdown files)
│   └── guia-rapido/               # Quick reference guide content (Markdown)
├── styles/
│   └── vintage.css                # Global design system
└── layouts/
    └── BaseLayout.astro           # Master layout (header, nav, footer)
```

### Component Design System

**PageHeader.astro** - Flexible header component with two variants:
- `variant="simple"` (default) - Centered, cream background, blood-red title for general pages
- `variant="dramatic"` - Burgundy gradient background for modules

```astro
<PageHeader title="Page Title" subtitle="Optional subtitle" variant="simple">
  <!-- Optional slot content -->
</PageHeader>
```

**ModuleCard.astro** - Displays course modules in grid layout. All styles consolidated in `vintage.css` (removed from component to avoid duplication).

**TableOfContents.astro** - Section navigation component with two variants:
- `variant="desktop"` - Sticky sidebar with scrollable TOC, highlights active section on scroll
- `variant="mobile"` - Floating Action Button (FAB) with overlay panel

```astro
<!-- Desktop: inside sidebar -->
<TableOfContents headings={headings} maxDepth={3} variant="desktop" />

<!-- Mobile: outside article to avoid stacking context issues -->
<TableOfContents headings={headings} maxDepth={3} variant="mobile" />
```

The component automatically extracts headings from markdown content via `mod.render()` which returns `{ Content, headings }`.

### Styling Architecture

All styles in **`src/styles/vintage.css`** follow a structured system:

1. **CSS Custom Properties (variables)** - Colors, typography, spacing, shadows, transitions, breakpoints
2. **Base styles** - HTML, body, typography resets
3. **Component classes** - BEM naming: `.module-card`, `.module-card__title`, `.module-card--coming-soon`
4. **Responsive breakpoints** - Standardized as variables (`--breakpoint-xs`, `--breakpoint-md`, `--breakpoint-lg`, etc.)

**Color palette:**
- `--color-blood-red: #8B1538` (primary accent)
- `--color-burgundy: #3D0A18` (dark backgrounds)
- `--color-cream: #F5E6D3` (light background)
- `--color-gold: #C9A227` (highlights)

**Fonts:**
- Display titles: Playfair Display (serifed, elegant)
- Headlines: Bebas Neue (condensed, impact)
- Body text: Source Serif 4 (readable, serifed)

### Dynamic Content & Data Flow

**Homepage modules** - Generated dynamically from Content Collections:
```astro
const allModules = await getCollection('modulos');
const modules = allModules
  .filter(mod => !mod.data.draft)
  .sort((a, b) => a.data.order - b.data.order)
  .map(mod => ({ /* transform to component props */ }));
```

**Module detail pages** - Dynamic routing via `[slug].astro`:
- `getStaticPaths()` generates static routes for all non-draft modules
- Each module renders with sidebar navigation (previous/next)
- Frontmatter metadata automatically accessible via `mod.data`

## Security & Performance

### Security Headers (Vercel)

Configured in `vercel.json`:
- **CSP** - Restricts script sources, external fonts allowed
- **X-Frame-Options: SAMEORIGIN** - Prevents click-jacking
- **X-Content-Type-Options: nosniff** - MIME sniffing protection
- **Permissions-Policy** - Disables geolocation, microphone, camera

### Performance Optimizations

- **Static generation** - HTML pre-rendered at build time (zero runtime overhead)
- **Acessibility enhancements** - Skip links, focus styling, ARIA labels
- **Image optimization** - Width/height attributes prevent layout shift; lazy loading where appropriate
- **CSS consolidation** - All component styles in single global file (no duplication)
- **Caching headers** - Images, CSS, JS cached for 1 year (immutable)

## Accessibility

- **Skip link** - Hidden link at top of page (`a.skip-link`) reveals on Tab, allows jump to `#main-content`
- **ARIA labels** - `<nav aria-label="Site navigation">` and `<header role="banner">`
- **Focus styling** - 2px gold outline on links, buttons, interactive elements
- **Semantic HTML** - `<main>`, `<section>`, `<article>` used correctly
- **Alt text** - All images include descriptive alt attributes for screen readers
- **Table accessibility** - `scope="col"` on table headers

## Development Notes

### Adding New Module Slides

Slide presentations are referenced via `slidesUrl` in frontmatter. To add:

1. Create PDF file: `public/slides/modulo-N-name.pdf`
2. Add to frontmatter: `slidesUrl: "/slides/modulo-N-name.pdf"`
3. Button automatically appears on module page

### Breakpoint Variables

Use CSS variables instead of hardcoded values:
```css
@media (max-width: var(--breakpoint-md)) {
  /* Mobile adjustments for medium screens */
}
```

Standard breakpoints (defined in `vintage.css`):
- `--breakpoint-xs: 480px`
- `--breakpoint-sm: 600px`
- `--breakpoint-md: 768px`
- `--breakpoint-lg: 968px`

### Working with Markdown Content

Module markdown files support:
- Headings (h2-h4 automatically styled)
- Lists (ol/ul with proper spacing)
- Tables (with `scope="col"` on headers for accessibility)
- Code blocks (monospace, background styled)
- Blockquotes (sepia border, italicized)
- **Bold** text (blood-red color)

### TypeScript & Type Safety

- **Strict mode enabled** (`tsconfig.json` uses `astro/tsconfigs/strict`)
- **Zod validation** - Content frontmatter validated at build time
- **Component props** - Interface definitions prevent runtime errors

## Deployment

- **Platform:** Vercel (configured in `astro.config.mjs`)
- **Build output:** `./dist/` directory (HTML pre-rendered)
- **Headers:** Automatically applied via `vercel.json`
- **Environment:** Static hosting (no server-side execution)

## Common Patterns & Best Practices

### DRY Principle Applied

- Reusable `PageHeader.astro` component eliminates duplicate header code
- Global CSS variables prevent style duplication
- `getCollection()` provides single source of truth for module data
- Component `.astro` files avoid inline styles (use `vintage.css` instead)

### When to Modify Files

| File | When to Edit |
|------|--------------|
| `src/content/modulos/*.md` | Adding/updating course content |
| `src/styles/vintage.css` | Global styles, colors, typography |
| `src/components/*.astro` | Creating reusable UI components |
| `src/pages/*.astro` | Adding new pages or routes |
| `vercel.json` | Modifying security headers or caching rules |
| `astro.config.mjs` | Site URL, build configuration |

### Avoiding Common Mistakes

1. **Don't hardcode module data** - Use `getCollection()` instead (homepage does this)
2. **Don't add styles to components** - Put them in `vintage.css` with BEM naming
3. **Don't use hardcoded breakpoints** - Use CSS variables (`--breakpoint-*`)
4. **Don't forget alt text** - All images need descriptive alt attributes
5. **Don't skip ARIA labels** - Add to interactive elements for screen readers

## Recent Optimizations (Commit c02f703)

- Consolidated CSS (removed 200+ lines of duplication)
- Extracted PageHeader component (reusable across pages)
- Refactored module data to use `getCollection()` (no hardcoding)
- Added skip link and focus styling (accessibility)
- Implemented security headers (vercel.json)
- Standardized breakpoints with CSS variables
- Improved alt text and added table scope attributes

## Recent Features (December 2025)

- **TableOfContents component** - Desktop sticky sidebar + mobile FAB with overlay for section navigation
- **Guia de Consulta Rápida** - Comprehensive quick reference guide as Content Collection with full antimicrobial dosing tables
- **Custom 404 page** - Vintage cinema-themed error page ("Você encontrou os bastidores secretos!")
- **Auto-scroll TOC** - Active section automatically scrolls into view in the sidebar
- **Improved mobile experience** - Responsive tables with horizontal scroll, optimized spacing
