# Neuracode Codex Web Governance Pack v2.2

Date: 2026-08-16
Purpose: repository-ready context, governance, visual-asset discipline and evaluation pack for Codex.

## Install
Copy the contents of this pack into the root of `NeuracodeSAC/neuracode-landing-page` preserving paths.

The pack contains a root `AGENTS.md` so Codex receives concise repository-level instructions and follows the deeper governed documents only when relevant.

## First Codex task
Do not ask Codex to redesign immediately.

Run:
`docs/governance/12_CODEX_GATE_0_1_TASK.md`

The first run is read-only:
- Gate 0 — evidence-backed audit
- Gate 1 — architecture/content/design proposal

Codex must stop for human approval before implementation.

## v2.2 changes
v2.2 hardens two areas that could otherwise create unnecessary redesign iterations:

1. **Logo / image governance**
   - distinguishes source artwork from production-ready web assets;
   - records that the supplied PNG logo/isologo have white RGB backgrounds and large canvas whitespace;
   - forbids assuming transparency, recoloring, distortion, AI regeneration or logo morphing;
   - defines permitted web derivatives, surface rules, responsive image delivery and case-study image safety;
   - adds image/asset QA to Gate 0/1 and adversarial evals.

2. **LLM / technology positioning**
   - makes LLM/provider experience visible to executive buyers without turning the site into a tool list;
   - distinguishes LLM/model ecosystems, developer agents, model platforms, orchestration frameworks, protocols and architecture patterns;
   - supports named demand such as Claude, OpenAI/Codex and AWS Bedrock while preserving provider-neutral judgment;
   - forbids implying vendor partnership or universal expertise without evidence;
   - adds executive FAQ/SEO language for buyers searching by technology name.

## Previous remediation retained
The pack still governs:
- Hostinger vs stale Vercel documentation;
- SPA/deep-link risk;
- stale lives/events;
- social-account migration;
- Jack / Neuracode / Academy brand architecture;
- client/case evidence classes;
- route migration and SEO;
- test-theater prevention;
- responsive/accessibility/performance gates.

See:
- `docs/governance/15_LLM_EVAL_REPORT.md`
- `docs/governance/17_BRAND_ASSET_REGISTER.md`
- `docs/governance/18_TECHNOLOGY_AND_LLM_POSITIONING.md`
