# vite-react-typescript-template

Minimal [Vite](https://vite.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) template for building single-page applications.

**[Live Demo](https://wasabina67.is-a.dev/leaflet-example/)**

## Tech Stack

- **Vite** — Fast build tool and dev server
- **React 19** — UI library with StrictMode enabled
- **TypeScript** — Strict mode with ES2023 target
- **ESLint** — Flat config with React Hooks and React Refresh plugins

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the Vite development server             |
| `npm run build`     | Type-check with `tsc` and build with Vite     |
| `npm run lint`      | Run ESLint                                    |
| `npm run preview`   | Preview the production build locally          |

## Project Structure

```
├── docs/                # Build output (GitHub Pages)
├── public/              # Static assets
├── src/
│   ├── assets/          # Asset files
│   ├── App.css          # Component styles
│   ├── App.tsx          # Root component
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── index.html           # HTML entry point
├── tsconfig.json        # TypeScript project references
├── tsconfig.app.json    # TypeScript config for the app (strict, ES2023)
├── tsconfig.node.json   # TypeScript config for Node/tooling
├── vite.config.ts       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json
```

## Deployment

Build output is configured to `docs/` for GitHub Pages deployment. The base path is set to `/leaflet-example/` in `vite.config.ts`.
