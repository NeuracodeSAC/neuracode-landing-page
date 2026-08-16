# Neuracode website — Claude-specific notes

Shared project truth, brand rules, claims policy and implementation gates live in
`AGENTS.md` and `docs/governance/`. Read those sources first.

## Current implementation

- React 18, TypeScript, Vite 5, React Router 6 and Tailwind CSS 3.
- Static application deployed to Hostinger.
- `main` triggers `.github/workflows/publish-hostinger.yml`, which publishes the built artifact to `hostinger-production`.
- `npm run check` performs TypeScript and governed-content checks.
- `npm run build` compiles the app and produces route-specific static HTML.

Do not reintroduce Vercel, claim an unmeasured coverage percentage, or duplicate business facts here.
