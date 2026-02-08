# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check with `tsc -b` then build with Vite (outputs to `docs/`)
- `npm run lint` — Run ESLint (flat config, TS/TSX files only)
- `npm run preview` — Preview the production build locally

## Architecture

Minimal Vite + React 19 + TypeScript SPA template. Entry point is `src/main.tsx` → `src/App.tsx`. No routing, state management, or testing framework is included.

Build output goes to `docs/` (not the default `dist/`) for GitHub Pages deployment. The `base` path in `vite.config.ts` is set to `/vite-react-typescript-template/`.

## TypeScript

- Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`
- Target: ES2023
- Split tsconfig: `tsconfig.app.json` (src) and `tsconfig.node.json` (vite.config.ts)

## Styling

Plain CSS with no preprocessor or CSS-in-JS. Global reset in `src/index.css`, component styles in `src/App.css`.
