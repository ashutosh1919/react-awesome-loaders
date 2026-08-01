# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased] — 2026-08-01

### Added

#### Library

- **TypeScript migration** — converted all loader source from JavaScript to TypeScript (`.ts` / `.tsx`).
- **`tsconfig.json`** with strict mode, declaration emit, and `src/types.ts` shared utilities.
- **Explicit `*Props` interfaces** for every loader, extending shared `LoaderSizeProps`:
  - `BoltLoaderProps`, `BookLoaderProps`, `BoxesLoaderProps`, `CircleLoaderProps`
  - `FlipFlopLoaderProps`, `ScatterBoxLoaderProps`, `SquircleLoaderProps`
  - `SunspotLoaderProps`, `ThreeDLoaderProps`, `WifiLoaderProps`, `XlviLoaderProps`
- **Public type exports** from the package entry (`LoaderSizeProps`, all loader prop types, `resolveLoaderSize`).
- **`src/styled.ts`** — styled-components wrapper for v6 compatibility.
- **`src/types/zdog.d.ts`** — ambient module declaration for Zdog.
- **`npm run typecheck`** script for CI and local validation.

#### Documentation site (`doc/`)

- **Astro 7 + Starlight** doc site replacing the Gatsby / smooth-doc setup.
- Custom landing page (`src/pages/index.astro`) with hero, feature cards, and install CTA.
- Migrated MDX content under `src/content/docs/` (getting started, motivation, contributing, references, about, appreciate).
- All **11 loader documentation pages** under `src/content/docs/loaders/`.
- React doc components: `Loader`, `RandomLoader`, `Title`, `Rug`, `EasterDiv`, `VideoEmbed`.
- Starlight sidebar configuration (Introduction, Loaders autogenerate, More).
- `doc/scripts/migrate-loaders.cjs` — one-time MDX migration helper for loader pages.

### Changed

#### Library

- **Dependency upgrades** to current major versions:
  - Runtime: `gsap` ^3.15, `jquery` ^4, `styled-components` ^6.4, `three` ^0.185, `react-responsive` ^10, etc.
  - Build: Webpack 5, Babel 8, TypeScript 7, React 19 (dev).
- **Webpack 5** config with TypeScript entry (`src/index.ts`) and updated externals.
- **Breaking-change fixes** in loader source:
  - `THREE.Math` → `THREE.MathUtils`
  - GSAP v3 API updates
  - Null-safe canvas / DOM access in Three.js loaders
  - Styled-components v6 via `src/styled.ts`

#### Documentation site

- Replaced Gatsby 2 + smooth-doc with **Astro 7.1** + **Starlight 0.41**.
- Doc site links to the local library via `"react-awesome-loaders": "file:.."`.
- Upgraded doc React stack to **React 19.2** with npm overrides for a single React instance.
- Upgraded **`@astrojs/react` to 6.0.2** for Astro 7 compatibility.
- Vite resolves `react-awesome-loaders` to **`../src/index.ts`** in dev/build so the doc site compiles library source instead of the webpack CJS bundle.
- `Loader.tsx` uses **dynamic import** of loaders on the client to avoid SSR `window is not defined` errors.

### Fixed

#### Library / build

- Gatsby doc build failure (`Unable to open snapshot file`) on Windows / Node 24 — addressed by migrating off Gatsby entirely.
- TypeScript errors from dependency and API breaking changes across loaders.

#### Documentation site

- **Starlight sidebar** `autogenerate` config updated for Starlight v0.39+.
- **Malformed loader MDX frontmatter** from initial migration (duplicate YAML blocks).
- **React hydration error** (`createRoot` not exported from `react-dom/client`) caused by duplicate React versions and Vite dep-optimizer race conditions.
- **`require is not defined`** when importing the webpack `lib/index.js` bundle in Vite dev — fixed by aliasing to TypeScript source.
- **Loader demo hidden behind code blocks** — added min-height, padding, and z-index rules in `custom.css` for `.loader-demo`.

### Removed

#### Library

- `react-scripts`, `node-sass`, legacy Babel 6 packages, `@testing-library/*`, `web-vitals`, and other unused CRA-era dependencies.
- All original `src/**/*.js` loader files (replaced by TypeScript).

#### Documentation site

- Gatsby configuration (`gatsby-config.js`, `gatsby-node.js`) and Gatsby / smooth-doc npm dependencies.
- Parcel / LMDB cache issues tied to the old Gatsby doc pipeline.

### Notes

- Library builds with `npm run build` (webpack + declaration emit) and typechecks with `npm run typecheck`.
- Doc site builds with `cd doc && npm run build` (19 static pages including landing, docs, and loader demos).
- Doc dev server: `cd doc && npm run dev` → `http://localhost:4321/`.
- Build the library before testing docs if using the published `lib/` entry: `npm run build` from the repo root.
- Legacy Gatsby-era files under `doc/pages/` and `doc/src/smooth-doc/` are obsolete and can be removed in a follow-up cleanup.
