# Repository Guidelines
Use this guide to ramp up on the Reel Home monorepo quickly.

## Project Structure & Module Organization
- `apps/home` hosts the Hono server; `src/index.ts` wires routes, `src/pages` holds JSX views, `src/utils` helpers, `src/styles` CSS, and `assets` static files.
- `packages/tsconfig` centralizes TypeScript baselines (hono, react, ts-library, typegen); extend these instead of redefining compiler flags.

## Build, Test, and Development Commands
- `pnpm install` with Node 22.x (see `package.json`) and the bundled `pnpm@10.17.1`.
- `pnpm run dev` launches the local server.
- `pnpm typecheck` performs repo-wide `tsc --noEmit`, and `pnpm test:e2e` is reserved for upcoming end-to-end suites managed by Turbo.

## Coding Style & Naming Conventions
- TypeScript-first code uses ES modules and 2-space indentation (see `apps/home/src/index.ts`).
- Run Prettier with `prettier-plugin-tailwindcss` to normalize formatting and class ordering before committing.
- Components are PascalCase, utilities camelCase, and feature folders lowercase to match the current layout.
- Reuse the profiles in `packages/tsconfig` and document any intentional deviations from strict defaults.
- Use icons from `lucide-react`; avoid hand-coding inline SVG assets.

## Testing Guidelines
- Use Vitest for unit and integration coverage; keep specs as `*.test.ts` beside source or under `test/` so they land in the `turbo.json` globs.
- Add request-level suites (Hono supertest or Playwright) and expose them through each package’s `test:e2e` script.
- Record setup steps and fixtures close to tests to keep runs deterministic.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat(home): add hero section`) to mirror upstream history and support changelog tooling.
- Keep subjects under 72 characters, expand on migrations or env changes in the body, and reference related issues.
- PRs should note the scope, verification (`pnpm lint`, `pnpm --filter home build`), linked tickets, and UI screenshots where relevant.
