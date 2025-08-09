# Copilot Instructions - Personal Website

## Project Overview
A personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS v4. Features custom theming, hash-based routing, and animated backgrounds.

## Architecture

### Project Structure
- **Root**: Contains both legacy static files and the main React app in `site/`
- **Working Directory**: Always work in `site/` - this is the active codebase
- **Entry Point**: `src/main.tsx` → `App.tsx` → component tree

### Key Patterns

**Hash-Based Routing**: Uses custom `useHashRoute` hook, not React Router
```typescript
// Routes: #/, #/experience, #/blog
const { route, setRoute } = useHashRoute()
```

**Theme System**: Custom CSS variables + context provider pattern
- Themes stored in `localStorage` with system preference fallback
- Apply via `data-theme` attribute on `<html>`
- Colors defined in `src/index.css` using Tailwind v4 `@theme` syntax

**Animation Strategy**: Framer Motion for page transitions + CSS for background
- Page transitions: `AnimatePresence` with opacity/y transforms
- Background: Pure CSS animations (performance optimized)
- All animations respect `prefers-reduced-motion`

## Development Workflow

### Commands (run from `site/` directory)
```bash
npm run dev        # Start dev server (localhost:5173)
npm run build      # Build for production (tsc + vite build)
npm run lint       # ESLint with TypeScript rules
npm run preview    # Preview production build
```

### Component Conventions
- **Barrel exports**: None used, direct imports preferred
- **Props**: Use inline type definitions for simple props, interfaces for complex
- **Styling**: Tailwind classes with custom CSS variables for themes
- **Animations**: Import motion variants from `src/theme.ts` (see `H` object)

### Color System
Uses custom palette defined in `@theme` block:
- Primary colors: `red-pantone`, `honeydew`, `non-photo-blue`, `cerulean`, `berkeley-blue`
- Theme variables: `--color-primary`, `--color-secondary`, etc.
- Background: CSS custom properties for accent colors in animations

## Key Files

### Core Architecture
- `src/App.tsx`: Main app structure, routing logic, page transitions
- `src/hooks/useHashRoute.ts`: Custom router (no external routing library)
- `src/hooks/useTheme.ts`: Theme state management with persistence
- `src/components/ThemeProvider.tsx`: Context provider for theme

### Styling System
- `src/index.css`: Global styles, theme definitions, CSS variables
- `src/theme.ts`: Motion variants and animation presets
- `postcss.config.js`: Tailwind v4 configuration

### Background Animation
- `src/components/Background.tsx`: Fixed positioning with layered gradient animations
- Uses CSS animations (not Framer Motion) for performance
- Multiple animated gradients with staggered timing

## Dependencies

### Core Stack
- **React 19**: Latest stable, uses new JSX transform
- **Vite**: Fast dev server, no special config needed
- **TypeScript**: Strict mode enabled, project references pattern
- **Tailwind v4**: CSS-first approach with `@theme` syntax

### Animation & UI
- **Framer Motion 12**: Page transitions and micro-interactions
- **Lucide React**: Icon library (prefer over custom SVGs)

## Common Tasks

### Adding New Pages
1. Create component in `src/pages/`
2. Add route case in `App.tsx`
3. Update navigation in `Header.tsx`

### Theme Modifications
1. Update CSS variables in `src/index.css` `@theme` block
2. Ensure both light/dark variants exist
3. Test with system preference changes

### Animation Updates
- Page-level: Modify `AnimatePresence` setup in `App.tsx`
- Component-level: Import variants from `src/theme.ts`
- Background: Edit CSS animations in `Background.tsx`

### Performance Considerations
- Background animations use CSS transforms (GPU accelerated)
- Page transitions limited to opacity/transform changes
- All animations include `prefers-reduced-motion` handling
