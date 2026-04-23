# RheaOS Landing Page

This repository now uses **Vite + React 19 + TypeScript + Tailwind CSS** as the canonical application surface.

## Canonical app surface

The active implementation is under `src/`:

- `src/main.tsx` — React entrypoint
- `src/app/App.tsx` — page composition shell
- `src/components/**` — layout and section components
- `src/hooks/**` — interaction behavior
- `src/styles/globals.css` — Tailwind/global styles

Root `index.html` is a minimal Vite shell that mounts `#root` and loads `/src/main.tsx`.

## Legacy assets status

The old static entrypoint assets are no longer part of the active runtime path:

- `style.css` — archived marker only (not imported by `index.html`)
- `script.js` — archived marker only (not imported by `index.html`)

Original pre-migration artifacts are retained in `Archive.zip` as migration reference material.

## Development

Minimum Node.js version: **20.19.0+** (or **22.12.0+**) for Vite 8 compatibility.

Before installing dependencies, ensure your Node.js runtime matches the requirement in `package.json` (`engines.node`). If needed, switch versions with your version manager (for example `nvm use`).

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```
