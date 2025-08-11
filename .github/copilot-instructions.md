# Copilot Instructions for agno-nymous.github.io

## Project Overview
This is a personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS v4. It features custom theming, hash-based routing, and animated backgrounds. The codebase is optimized for performance and accessibility.

## Architecture & Structure
- **Main App**: All active development is in the root `src/` directory.
- **Entry Point**: `src/main.tsx` → `App.tsx` → component tree.
- **Pages**: Located in `src/pages/` (e.g., `HomePage.tsx`, `ExperiencePage.tsx`, `BlogPage.tsx`, `ResumePage.tsx`).
- **Components**: Shared UI in `src/components/` (e.g., `Header.tsx`, `Footer.tsx`, `Background.tsx`).
- **Hooks**: Custom hooks in `src/hooks/` (notably `useHashRoute.ts` for routing, `useTheme.ts` for theming).
- **Theme & Animations**: Palette and motion presets in `src/theme.ts`. Global styles and CSS variables in `src/index.css`.

## Key Patterns & Conventions
- **Routing**: Uses a custom hash-based router via `useHashRoute` (not React Router). Example routes: `#/`, `#/experience`, `#/blog`.
- **Theming**: Theme is managed via context and CSS variables, stored in `localStorage` and applied to `<html>` via `data-theme`.
- **Animations**: Framer Motion for page transitions (`AnimatePresence`), CSS for backgrounds. All animations respect `prefers-reduced-motion`.
- **Styling**: Tailwind CSS classes with custom variables. Color palette defined in `@theme` block in `src/index.css`.
- **Props**: Inline type definitions for simple props, interfaces for complex props. No barrel exports; use direct imports.

## Developer Workflow
- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev` (localhost:5173)
- **Build for production**: `npm run build`
- **Lint**: `npm run lint` (TypeScript + ESLint)
- **Preview production build**: `npm run preview`

## Integration Points
- **Framer Motion**: For page and element animations.
- **Lucide Icons**: For iconography.
- **Typography**: Inter via Google Fonts.

## Examples
- **Routing**:
  ```typescript
  const { route, setRoute } = useHashRoute();
  // Example: setRoute('experience') → navigates to #/experience
  ```
- **Theme Toggle**:
  ```tsx
  <ThemeToggle /> // toggles between light/dark/system themes
  ```
- **Animated Background**:
  - See `src/components/Background.tsx` for conic halo, gradient blobs, and star field.

## Additional Notes
- All animations and transitions are optimized for performance and accessibility.
- Color palette: ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"].
- No legacy barrel exports; always use direct imports.

---
If any conventions or workflows are unclear, please ask for clarification or examples from the codebase.
