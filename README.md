# Vladyslav Boretskyi — Personal Portfolio

**[boretskyi.dev](https://boretskyi.dev)**

A high-performance, minimalist personal portfolio designed to showcase architecture, clean code benchmarks, and frontend engineering solutions. Built with a focus on strict semantic HTML, accessibility (A11y), and 100/100 Core Web Vitals.

---

## Tech Stack & Architecture

| Layer              | Technology                                        |
| ------------------ | ------------------------------------------------- |
| **Framework**      | Next.js 16 (App Router, Static Pre-rendering)     |
| **Language**       | TypeScript (Strict mode)                          |
| **Styling**        | Tailwind CSS v4 (CSS-based `@theme` configuration)|
| **Animations**     | Framer Motion (CLS-safe transform-only animations)|
| **Icons**          | Lucide React + Custom SVG modules (`icons.tsx`)   |
| **Fonts**          | Geist Sans & Geist Mono via `next/font/google`   |
| **Deployment**     | Vercel                                            |

---

## Key Engineering Features

### Server Component Optimization

Components that don't require client-side interactivity (layout, footer, icons) are rendered as **React Server Components**, shipping zero JavaScript to the browser. Only sections with Framer Motion animations opt into the client boundary via `"use client"`.

### Semantic HTML & Accessibility

- Proper landmark hierarchy: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- All sections linked to their headings via `aria-labelledby`
- Date entries use the `<time>` element for machine-readable semantics
- Decorative elements marked with `aria-hidden="true"`
- Technology lists rendered as `<ul>`/`<li>` with descriptive `aria-label`
- All interactive elements have visible `:focus-visible` ring states

### CLS-Safe Animations

Every Framer Motion animation exclusively uses **transform** (`y`, `x`, `scale`) and **opacity** properties, which are composited on the GPU and do not trigger layout recalculations — ensuring zero Cumulative Layout Shift.

### Strict TypeScript

All data structures are defined with explicit `interface` types and `readonly` arrays. No `any` types exist in the codebase.

### SEO & Open Graph

The root layout exports a comprehensive Next.js `Metadata` object including:

- Dynamic title template (`%s | Vladyslav Boretskyi`)
- Open Graph `type: "profile"` with `firstName`, `lastName`, `siteName`
- Granular `robots` directives for Google Bot
- Structured `keywords` and `authors` fields

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 @theme config, custom utilities
│   ├── layout.tsx         # Root layout, fonts, metadata (Server Component)
│   └── page.tsx           # Home page, semantic landmark structure
└── components/
    ├── Hero.tsx           # Header with CTA navigation (Client Component)
    ├── Projects.tsx       # Featured projects grid (Client Component)
    ├── Experience.tsx     # Timeline layout (Client Component)
    ├── Footer.tsx         # Contact links (Server Component)
    └── icons.tsx          # Shared SVG icon components (Server Component)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run a production build (TypeScript + ESLint verification)
npm run build

# Start the production server
npm start
```

---

## License

© 2026 Vladyslav Boretskyi. All rights reserved.
