# Implementation Gates & QA

## Gate 0 — Inventory (read-only)
Before edits:
- identify framework/version/package manager;
- current git branch/status and production-trigger branches;
- list routes/components/pages;
- list content/data sources;
- list analytics/third-party scripts;
- list redirects/hosting rewrites;
- list fonts/assets;
- validate current canonical domain and deep links;
- baseline accessibility/performance where possible;
- baseline screenshots;
- contradiction register;
- content/claim/social inventory.

Output: evidence-backed current-state report.

## Gate 1 — Architecture proposal (read-only)
Codex proposes:
- target sitemap;
- KEEP/MERGE/REDIRECT/RETIRE matrix;
- direct-link/SEO rendering strategy;
- component/content architecture;
- design-token diff;
- motion/library strategy;
- analytics/attribution plan;
- test strategy;
- migration/release plan;
- risks/TBDs/decisions.

Stop for human approval.

## Gate 2 — Documentation contradiction remediation
Before large UI refactor:
- align `CLAUDE.md`, `README.md`, `PROJECT_MEMORY.md`, deployment docs and legacy tickets with actual state;
- preserve historical docs only if clearly marked archive;
- do not let stale docs remain authoritative.

## Gate 3 — Quality harness
Establish project-appropriate checks before broad refactor:
- typecheck/build;
- lint;
- unit/component tests for critical logic;
- e2e/smoke tests for critical routes/CTAs;
- accessibility scan;
- link/route checks;
- visual snapshots.

Do not claim a coverage percentage until measured.

## Gate 4 — Design system
Tokens/primitives first.
Acceptance:
- consistent spacing/type/color;
- focus states;
- reduced motion;
- responsive primitives;
- no uncontrolled one-off patterns.

## Gate 5 — Core pages
Implement `/`, `/empresas`, `/academy`, `/jack`, `/casos`, then `/recursos`, `/contacto` as approved.

## Gate 6 — Content/evidence migration
- remove stale dates/promises;
- classify claims;
- apply social registry;
- implement event state model;
- implement route migration;
- verify no orphaned critical content.

## Gate 7 — Functional/security/accessibility QA
- direct deep-link + hard refresh;
- nav/mobile menu;
- WhatsApp messages;
- external links;
- analytics events;
- structured data;
- keyboard/focus;
- reduced motion;
- no console errors;
- no secrets/client-sensitive content.

## Gate 8 — Responsive matrix
320, 360, 390, 412, 480, 768, 820, 1024, 1280, 1440, 1536, 1920 plus two random intermediate widths.

## Gate 9 — Performance/motion
- compare before/after;
- audit added dependencies;
- verify no material CWV regression;
- lazy-load/split noncritical assets;
- no smooth-scroll library unless justified.

## Gate 10 — Content/legal/human review
Human approval for:
- named clients/logos;
- metrics;
- health claims;
- testimonials;
- credentials;
- founder date;
- current engagement status;
- privacy/tracking decision;
- social rename decisions.

## Gate 11 — Release candidate
Evidence required:
- clean build/checks;
- route/redirect/deep-link report;
- canonical/sitemap/robots report;
- preview metadata test;
- analytics validation;
- responsive screenshots;
- accessibility report;
- performance report;
- content claim diff;
- rollback instructions.

## Gate 12 — Production release
Because `main` currently triggers production publishing, release must be explicit.
After release, verify `www` status, root canonical redirect, retained deep links, WhatsApp CTA, analytics and key pages in production.
