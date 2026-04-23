# Implementation Plan for Vanilla HTML/CSS/JS to React 19 + TailwindCSS + shadcn/ui + Lucide Migration

The goal is to replace the legacy static Bootstrap-style landing page implementation with a maintainable React 19 application using TailwindCSS for styling, shadcn/ui primitives for reusable UI building blocks, and Lucide React for iconography. Based on the current repository state, the migration has already been partially executed: a Vite + React + TypeScript + Tailwind application exists under `src/`, with section-based components, hooks, shared UI primitives, and Lucide icons. The remaining work should focus on formalizing the migration, aligning the codebase with shadcn/ui conventions, removing legacy assets, and validating the React app as the canonical implementation.

### Task 1: Audit and stabilize the current React migration baseline
**Depends on:** none
**Files:** `package.json`, `src/main.tsx`, `src/app/App.tsx`, `src/styles/globals.css`, `tailwind.config.ts`, `vite.config.ts`, `tsconfig.json`
Confirm the Vite + React 19 + Tailwind pipeline is the primary app entry and builds cleanly. Verify path aliases, global styles, Tailwind content scanning, and app bootstrapping are consistent. Remove obsolete or duplicated config if it conflicts with the current TypeScript/Tailwind setup, and ensure the React app is the source of truth before additional migration work continues.

### Task 2: Inventory and preserve legacy content for reference-only usage
**Depends on:** none
**Files:** `index.html`, `style.css`, `script.js`, `Archive.zip`
Review the legacy HTML, CSS, and JavaScript only to extract content structure, copy, section ordering, interactive behaviors, and visual cues still worth preserving. Treat these files as reference inputs rather than implementation targets. Document which parts have already been migrated into React and which parts are still missing or approximated.

### Task 3: Map legacy page sections to React component boundaries
**Depends on:** Task 1, Task 2
**Files:** `src/app/App.tsx`, `src/components/layout/*.tsx`, `src/components/sections/*.tsx`, `src/data/site-content.ts`
Define a clear one-to-one mapping between the old landing page sections and the new React sections. Confirm that navigation anchors, section IDs, data-driven content, and layout composition reflect the original experience. Where the React implementation diverges, identify whether the change is intentional modernization or an incomplete migration.

### Task 4: Normalize shared design tokens and Tailwind utilities
**Depends on:** Task 1
**Files:** `tailwind.config.ts`, `src/styles/globals.css`, `src/lib/utils.ts`
Centralize reusable design decisions such as colors, shadows, radius scale, typography, glass effects, and motion helpers so the migrated UI behaves like a consistent design system. Reduce ad hoc utility duplication and move repeated stylistic patterns into Tailwind extensions or semantic utility classes where appropriate.

### Task 5: Align reusable primitives with shadcn/ui structure
**Depends on:** Task 1, Task 4
**Files:** `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, `src/components/ui/input.tsx`, `src/components/ui/badge.tsx`, `src/lib/utils.ts`, `components.json` (new, if adopting standard shadcn metadata)
Refactor or replace the existing UI primitives so they follow shadcn/ui conventions: composable variants, predictable class merging, and consistent primitive APIs. If full shadcn CLI adoption is desired, add the expected metadata/config shape and make the current primitives compatible with that ecosystem without forcing unnecessary rewrites.

### Task 6: Migrate missing legacy interactions into React hooks/components
**Depends on:** Task 2, Task 3
**Files:** `src/hooks/use-navbar-scroll.ts`, `src/hooks/use-parallax.ts`, `src/hooks/use-count-up.ts`, `src/hooks/use-reveal-on-scroll.ts`, relevant files in `src/components/sections/`
Compare legacy interactive behavior against the current React implementation and port any missing motion or UI logic into idiomatic hooks/components. Keep the behavior progressive and respectful of reduced-motion preferences. Remove any interaction gaps that still make the React version feel incomplete compared with the original page.

### Task 7: Replace Bootstrap-style layout assumptions with Tailwind-first responsive patterns
**Depends on:** Task 3, Task 4
**Files:** `src/components/layout/container.tsx`, `src/components/layout/navbar.tsx`, `src/components/sections/*.tsx`, `src/styles/globals.css`
Ensure every migrated section uses responsive Tailwind layout patterns rather than legacy mental models inherited from Bootstrap. Standardize spacing, breakpoints, flex/grid behavior, and section rhythm across the page so the final implementation is fully native to Tailwind rather than a transliteration of the old markup.

### Task 8: Clean up legacy entrypoint assets and define the canonical app surface
**Depends on:** Task 1, Task 2, Task 3
**Files:** `index.html`, `style.css`, `script.js`, `README.md` (new or updated), optional archival notes file
Once the React app fully represents the intended landing page, simplify the root entrypoint so it only serves the Vite application shell. Remove or archive old CSS/JS assets from active use, and document that the React/Tailwind code under `src/` is now the canonical implementation. Preserve original files only if they are intentionally retained as migration references.

### Task 9: Add quality checks for the migrated React app
**Depends on:** Task 5, Task 6, Task 7
**Files:** `package.json`, optional `eslint.config.js` (new), optional test files under `src/`
Introduce the minimum validation tooling needed to keep the migration maintainable: build verification, linting, and optionally lightweight component or smoke tests. This ensures the migrated implementation remains stable as further shadcn/ui adoption or content changes happen.

### Task 10: Final visual and functional verification against migration goals
**Depends on:** Task 8, Task 9
**Files:** `MIGRATION_PLAN.md`, `SPEC.md`, `src/app/App.tsx`, `src/components/**/*`
Perform a final pass against the migration goals: React 19 app active, TailwindCSS styling in place, Lucide React icons used consistently, shadcn/ui-compatible primitives established, and no remaining runtime dependency on legacy Bootstrap-style assets. Update the migration plan/status notes so the repository clearly reflects what has been completed and what remains as future enhancement.
