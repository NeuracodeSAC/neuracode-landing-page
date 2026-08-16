# Governance implementation report

Date: 2026-08-16
Branch: `codex/governance-implementation`

## Gate 0 — observed baseline

- React 18, TypeScript, Vite 5, React Router 6, Tailwind 3 and npm.
- Pushes to `main` publish through GitHub Actions to `hostinger-production` and Hostinger.
- The old site exposed `/`, `/academy`, `/comunidad`, `/live`, `/jack` and client-only aliases.
- Hostinger rules canonicalized the host but did not provide an SPA fallback.
- Historical March/April event dates, weekly-live promises and legacy challenge/giveaway surfaces were active in source.
- `/jack` published an unverified founding year, legacy identity, unsupported title and inaccurate academic wording.
- Root metadata contained legacy positioning, a founding year, legacy socials and references to missing preview assets.
- The sitemap exposed `/auditoria` without a matching route.
- Vercel telemetry packages were initialized despite Hostinger deployment; GA4 and Meta scripts loaded without a governed consent decision when IDs existed.
- The repository had no test/lint scripts; the earlier 80% coverage claim was documentation only.
- The old visual system used canonical blue/violet/lilac but also the outlier `#002000`, small focus/touch patterns and stale promotional UI.

## Gate 1 — implemented architecture

- Canonical sitemap: `/`, `/empresas`, `/academy`, `/casos`, `/jack-aguilar`, `/recursos`, `/contacto`.
- `/jack`, `/equipo`, `/about`, `/founder`, `/ceo` -> server 301 to `/jack-aguilar`.
- Challenge, giveaway, community and live routes -> server 301 to `/academy`.
- Hostinger serves existing assets/directories and falls back to `index.html` for unknown client routes.
- React/Vite remains in place. A small post-build script emits route-specific HTML metadata; no framework migration is needed.
- Typed brand, contact, social, offer, capability and event configuration replaces duplicated stale content.
- CSS/native transitions only; no animation library added. Reduced-motion behavior is explicit.
- Vercel telemetry was removed. Marketing trackers remain disabled pending a human privacy/consent decision.
- `npm run check` combines TypeScript and governed-content checks; `npm run build` also verifies production compilation and prerender output.
- Rollback: revert this branch/merge commit; `main` remains untouched until explicit release approval.

## Verification evidence

- Build and governance checks pass.
- Seven canonical routes render with unique titles, descriptions and canonical URLs.
- Static HTML exists for each canonical non-root route.
- Desktop and mobile browser checks found no console errors or horizontal overflow.
- Approved v2.1 horizontal logo and isologo sources are stored unchanged under `docs/brand/assets-source/`; web derivatives only crop surrounding whitespace and do not redraw, recolor or distort the marks.
- Social preview asset uses approved palette and contains no client, metric, date or provider claim.
- v2.2 technology positioning is integrated outcome-first on Home, Empresas and `/jack-aguilar`; provider names are text labels, not partnership logos.
- The footer uses the unchanged logo on a white plate, with no CSS recoloring/filtering.

## Human gates remaining

- GitHub target visibility.
- Named case-study publication permissions and metric evidence.
- Business email and WhatsApp final confirmation before production release.
- Analytics/privacy/consent decision.
- `/auditoria` long-term destination.
- Active X/Twitter status and Neuracode TikTok rename.
- No dependency advisory remains after the verified Vite and React Router security updates.

GATE 1: READY FOR HUMAN REVIEW
