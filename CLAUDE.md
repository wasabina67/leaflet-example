# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check with `tsc -b` then build to `docs/` directory
- `npm run lint` — Run ESLint
- `npm run preview` — Preview the production build locally

## Architecture

React 19 + TypeScript app built with Vite. Single-page app with entry point at `src/main.tsx` rendering `<App />`.

The build output goes to `docs/` (not the default `dist/`) for GitHub Pages hosting. The Vite `base` is set to `/leaflet-example/` to match the GitHub Pages path.
