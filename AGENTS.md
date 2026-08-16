# AGENTS.md — Neuracode Website

## Mission
Maintain `neuracode.dev` as production-grade commercial infrastructure for:
1. Jack Aguilar — personal authority and consulting trust.
2. Neuracode — umbrella business brand / Enterprise.
3. Neuracode Academy — education division.

## Instruction precedence
When information conflicts, use this order and DO NOT guess:
1. Explicit human instruction in the current task.
2. `docs/governance/01_BUSINESS_BRAND_SOURCE_OF_TRUTH.md` for business/brand intent.
3. `docs/governance/07_EVIDENCE_AND_CLAIMS_GOVERNANCE.md` for claims/publication safety.
4. `docs/governance/11_DECISIONS_TBDS_NON_GOALS.md` for approved decisions and unresolved items.
5. Observed repository/runtime facts for implementation reality.
6. `DEPLOYMENT.md` for deployment, if consistent with observed workflows.
7. `PROJECT_MEMORY.md` for operational history, unless contradicted by current repository/runtime facts.
8. `CLAUDE.md`, README and older tickets only where they do not conflict with the above.

If two sources at the same level conflict, record the contradiction and stop the affected decision.

## Context loading
Do not reread every governance document on every task.

Always load:
- this `AGENTS.md`;
- `01_BUSINESS_BRAND_SOURCE_OF_TRUTH.md`;
- `07_EVIDENCE_AND_CLAIMS_GOVERNANCE.md`;
- `11_DECISIONS_TBDS_NON_GOALS.md`.

Then load only task-specific docs:
- IA/routes/content: 02, 03, 06
- design/motion/responsive/assets: 04, 05, 17
- social links: 08
- SEO/analytics: 09
- technology/LLM commercial positioning: 18
- release/QA: 10
- initial audit: 12, 14, 15

For the FIRST audit/redesign task, read the full pack once.

## Non-negotiables
- Do not invent clients, metrics, dates, credentials, testimonials or project status.
- Do not turn leads/current engagements into success cases.
- Do not imply direct client ownership for work performed through an employer/consultancy.
- Do not expose confidential architecture, vulnerabilities, health/personal data, secrets or private messages.
- Do not hard-code unconfirmed/expired event dates into evergreen page copy.
- Do not change canonical brand colors or logo geometry without explicit approval.
- Do not assume the supplied logo PNGs are transparent/vector; follow `17_BRAND_ASSET_REGISTER.md`.
- Do not use vendor logos to imply partnerships. Default to governed text labels unless official-logo use is justified/verified.
- Named LLM/provider terms may be surfaced for buyer intent, but keep outcome-first/provider-neutral positioning and correct taxonomy.
- Do not migrate framework, hosting or analytics stack merely because a newer option exists.
- Do not add animation libraries without a written need and bundle/performance check.
- Do not delete indexed routes without an approved redirect/retirement decision.
- Do not push implementation directly to production-enabled `main` unless the human explicitly authorizes the release workflow.

## Production facts currently observed
- Repository: `NeuracodeSAC/neuracode-landing-page`
- App: React 18 + TypeScript + Vite + React Router + Tailwind.
- Current GitHub repository visibility observed on 2026-08-16: PUBLIC.
- Current production workflow: push to `main` -> GitHub Actions -> `hostinger-production` -> Hostinger.
- Canonical domain: `https://www.neuracode.dev`.
- Existing documentation still contains stale Vercel statements. Treat them as contradictions to remediate, not authority.

## First action
Before redesign implementation, execute Gate 0 and Gate 1 from `10_IMPLEMENTATION_GATES_AND_QA.md` using `12_CODEX_GATE_0_1_TASK.md`.
Stop for approval after Gate 1.
