# Kushagra Mathur, portfolio

A single-page portfolio built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and `motion`.

## Editing content

Every word on the page lives in `src/content.ts`: profile, about, projects, experience, education and socials. Wrap words in `*asterisks*` to render them at full contrast in body copy. Project screenshots go in `public/projects/<slug>.png`. A card without its screenshot shows only the wallpaper gradient.

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```
