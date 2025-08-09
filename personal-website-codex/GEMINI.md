# Project: Personal Website

## Project Overview

This is a personal website for Ashish Thomas Chempolil, a Machine Learning Engineer. The site is a modern, single-page application built with React, Vite, and TypeScript. It showcases his professional focus on OCR, multimodal extraction, and AI systems. The design is clean and features smooth animations using Framer Motion.

The project is structured as a monorepo with the main website code located in the `site/` directory.

## Building and Running

The project uses `npm` for package management. The following commands are used to build, run, and test the project:

*   **Install dependencies:**
    ```bash
    npm install
    ```
*   **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

*   **Build for production:**
    ```bash
    npm run build
    ```
*   **Lint the code:**
    ```bash
    npm run lint
    ```
*   **Preview the production build:**
    ```bash
    npm run preview
    ```

## Development Conventions

*   **Framework:** The project is built with React and Vite.
*   **Language:** TypeScript is used for type safety.
*   **Styling:** The project uses CSS modules for styling, with a global stylesheet in `src/index.css`.
*   **Routing:** The site uses hash-based routing, implemented with a custom `useHashRoute` hook. The available routes are `#/`, `#/experience`, and `#/blog`.
*   **Animations:** Animations are implemented using `framer-motion`.
*   **Icons:** Icons are from the `lucide-react` library.
*   **Components:** The code is organized into reusable components located in `src/components`.
*   **Pages:** The main content for each route is in the `src/pages` directory.
