# Neuracode Web Governance — Index & Operating Model
Version: 2.2
Date: 2026-08-16
Status: Candidate governed baseline; implementation gated

## Objective
Prevent stale content, legacy identities, unverified claims and technical contradictions from being propagated by an LLM during redesign.

## Core sources
- `AGENTS.md` — operational instructions and precedence.
- `01_BUSINESS_BRAND_SOURCE_OF_TRUTH.md` — what Jack/Neuracode are and sell.
- `02_CURRENT_REPO_BASELINE_AND_CONTRADICTIONS.md` — verified current technical state.
- `07_EVIDENCE_AND_CLAIMS_GOVERNANCE.md` — what may be claimed publicly.
- `11_DECISIONS_TBDS_NON_GOALS.md` — decisions fixed vs still open.

## Task-specific sources
- `03_INFORMATION_ARCHITECTURE_AND_CONTENT_MODEL.md`
- `04_DESIGN_SYSTEM_AND_PALETTE.md`
- `05_MOTION_RESPONSIVE_ACCESSIBILITY_PERFORMANCE.md`
- `06_PAGE_CONTENT_SPEC.md`
- `08_SOCIAL_CHANNEL_REGISTRY.md`
- `09_SEO_ANALYTICS_CONVERSION.md`
- `10_IMPLEMENTATION_GATES_AND_QA.md`
- `17_BRAND_ASSET_REGISTER.md`
- `18_TECHNOLOGY_AND_LLM_POSITIONING.md`

## Machine-readable registries
- `data/socials.yml`
- `data/claim-ledger.yml`
- `data/route-migration.yml`
- `data/events.yml`

## Evaluation
- `14_LLM_EVAL_SUITE.md` defines adversarial prompts/tests.
- `15_LLM_EVAL_REPORT.md` records the package evaluation and residual risks.

## Efficiency rule
Initial audit: read the full pack.
Subsequent work: load core sources + only relevant task docs. Do not keep copying the entire business story into every prompt.

## Change control
Update the decision log before changing:
- brand architecture;
- canonical colors/logo;
- public metrics/client claims;
- client naming/attribution;
- canonical routes;
- hosting/deployment;
- analytics/cookie strategy;
- framework migration;
- WhatsApp destination;
- event state model.
17. `17_BRAND_ASSET_REGISTER.md` — verified logo/palette/image assets and rules for use.
18. `18_TECHNOLOGY_AND_LLM_POSITIONING.md` — governed LLM/provider/framework visibility for commercial pages.


## Visual and technology efficiency rule
Do not make Codex rediscover these decisions on every page:
- brand assets and image behavior come from `17_BRAND_ASSET_REGISTER.md` + `data/brand-assets.yml`;
- LLM/provider/framework naming comes from `18_TECHNOLOGY_AND_LLM_POSITIONING.md` + `data/technology-ecosystems.yml`.

Pages consume these governed sources rather than hard-coding duplicated vendor or asset lists.
