# Personal Website — React + Vite

A small multi-page personal site using React, Vite, and Framer Motion with a vibrant palette and animated background.

## Run Locally

1. Install deps:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Structure

- `src/components/Background.tsx`: Conic halo, floating gradient blobs, subtle star field.
- `src/components/Header.tsx`, `Footer.tsx`, `Chips.tsx`: Shared UI.
- `src/pages/HomePage.tsx`, `ExperiencePage.tsx`, `BlogPage.tsx`: Pages.
- `src/hooks/useHashRoute.ts`: Tiny hash router (`#/`, `#/experience`, `#/blog`).
- `src/theme.ts`: Palette and motion presets.
- `src/index.css`: Global styles, CSS variables, and animations.

## Notes

- Color scheme: ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"].
- Animations respect `prefers-reduced-motion` and remain performant.
# personal-website
