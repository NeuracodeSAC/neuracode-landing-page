# Current Repository Baseline & Contradiction Register
Audit basis: `NeuracodeSAC/neuracode-landing-page`, observed 2026-08-16.

## Verified current stack
- TypeScript
- React 18
- React Router v6
- Vite 5
- Tailwind CSS 3
- npm / package-lock
- static client-side application

Current `package.json` exposes only `dev`, `build`, `preview`. There is currently no configured lint/test/e2e script in the package manifest.

## Verified deployment direction
`DEPLOYMENT.md`, `PROJECT_MEMORY.md` and `.github/workflows/publish-hostinger.yml` indicate:
`main` -> GitHub Actions build -> `hostinger-production` -> Hostinger `public_html`.

Canonical domain: `https://www.neuracode.dev`.

Pushes to `main` trigger the production publishing workflow, so implementation work must not casually use `main` as a scratch branch.

## P0 contradictions / defects
### P0-01 Deployment documentation conflict
`CLAUDE.md` still says Vercel is required while current deployment docs/workflow say Vercel was removed.

Action:
- update/archive stale Vercel deployment instructions;
- do not reconnect DNS to Vercel;
- audit whether Vercel Analytics/Speed Insights packages are still useful or functional in the current Hostinger deployment before retaining/removing them.

### P0-02 Repository visibility conflict
`PROJECT_MEMORY.md` says the repository is private; GitHub currently reports it as public.

Action:
- current observed fact = PUBLIC;
- human decides desired target visibility;
- never store secrets regardless of visibility.

### P0-03 Deep-link / SPA hosting risk
React defines routes such as `/jack`, but current `.htaccess` only canonicalizes the host and does not implement an SPA fallback to `index.html`.

Action:
- verify direct GET/hard refresh for every retained route;
- implement Hostinger-safe routing/rewrites or another approved rendering strategy;
- do not break static assets;
- test 301 vs 200 behavior explicitly.

### P0-04 Stale/incorrect Jack facts in source
Current `/jack` contains statements that conflict with supplied/current facts or remain unverified, including:
- “Egresado UNI”;
- “Sr. Software Engineer” vs supplied professional title “Software Engineer”;
- Neuracode founding references conflict across files (2020 vs 2024);
- legacy identity “Jack de NeuraCode”;
- over-specific role/founding wording that lacks a governed claim record.

Action:
- use the claim ledger;
- founding year/date = TBD until human confirmation;
- do not infer academic completion.

### P0-05 Stale event system
`src/config.ts`, Home and Live contain historical March/April dates and weekly-live promises.

Action:
- no confirmed future event exists in this governance baseline;
- create structured event status;
- hide “next event” if no future confirmed event exists.

### P0-06 SEO/structured-data mismatch
Current `index.html` still uses legacy “IA sin código” positioning and old social identity references.
It references `og-image.png` / `logo.png` URLs that are not present in the observed root public asset list.

Action:
- verify social preview/logo assets;
- create per-route metadata strategy;
- canonical schema uses only canonical social identities;
- no false founding/credential/date claims.

### P0-07 Sitemap vs route mismatch
`sitemap.xml` includes `/auditoria`, while current React route inventory does not expose `/auditoria`.

Action:
- determine whether evidence lives at `auditoria.neuracode.dev`, should be proxied/linked, or should become a `/casos/...` page;
- remove dead sitemap entries after an approved migration decision.

### P0-08 Test-policy mismatch
`CLAUDE.md` says TDD mandatory and 80%+ coverage, but current package manifest has no test scripts/dependencies.

Action:
- do not pretend coverage exists;
- establish pragmatic test architecture before major refactor;
- prioritize critical journeys/content-state/accessibility/e2e;
- set a numeric coverage threshold only after test architecture exists and is approved.

## P1 cleanup
- `README.md` still describes Reto 21 / sorteo as core product surfaces;
- current Academy is centered on a 21-day challenge and includes stale “sorteo” navigation;
- legacy `SEO_TICKETS.md` contains old identity/positioning instructions and must not be current authority;
- `src/config.ts` contains stale/placeholder configuration and old social links;
- old source files (Giveaway/Reto) must be classified before deletion;
- audit tracked build artifacts such as `.tsbuildinfo`;
- audit unused env keys and placeholders (`#`);
- audit analytics initialization and provider usefulness;
- audit duplicate/unused logo files.

## Current route facts
Current React routes:
- `/`
- `/academy`
- `/comunidad`
- `/live`
- `/jack`
- legacy redirects for `/reto-21-dias`, `/sorteo`, `/comunidad/gracias`, `/equipo`, `/about`, `/founder`, `/ceo`
- `/404` and wildcard client navigation

Target routes not implemented yet:
- `/empresas`
- `/casos`
- `/recursos`
- `/contacto`

## Framework migration rule
Do not migrate away from React/Vite by default.
If SEO/static rendering needs cannot be met cleanly, propose SSG/prerender or framework migration only through an ADR containing problem, alternatives, migration cost, SEO/performance evidence, deployment impact, rollback and human approval.
