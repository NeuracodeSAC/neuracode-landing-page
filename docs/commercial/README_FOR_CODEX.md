# Neuracode Commercial Portfolio & SEO Pack v3.0

Date: 2026-08-16
Target repository: `NeuracodeSAC/neuracode-landing-page`
Purpose: turn the governed v2.2 website into a credible commercial portfolio without reintroducing hype, stale content or unsupported claims.

## Relationship with existing governance

This pack is **additive**.

Existing repository authority remains:
1. `AGENTS.md`
2. `docs/governance/01_BUSINESS_BRAND_SOURCE_OF_TRUTH.md`
3. `docs/governance/07_EVIDENCE_AND_CLAIMS_GOVERNANCE.md`
4. `docs/governance/11_DECISIONS_TBDS_NON_GOALS.md`
5. current repository/runtime facts

This pack may strengthen commercial copy and content architecture, but it must not override evidence/claim restrictions.

If this pack conflicts with the existing evidence ledger, the stricter evidence rule wins.

## Primary problem to solve

The current redesign is technically cleaner and safer, but several important pages are under-filled:
- `/jack-aguilar` does not yet demonstrate the depth of Jack's real professional history;
- `/casos` is an empty state even though there is publishable professional experience;
- `/recursos` is an empty state despite existing public content and the ability to create new video assets;
- `/academy` is correct but commercially thin;
- current "criterion" wording is philosophically good but not a strong primary sales proposition;
- route-specific HTML currently changes metadata but does not contain the route's full page content before JavaScript executes.

## Commercial outcome

A prospect who asks:
> "¿Tienes información de los trabajos que has realizado?"

must be able to open:
`https://www.neuracode.dev/jack-aguilar`

and quickly understand:
- what Jack does;
- what kinds of business problems he can implement;
- his background in software, data and AI;
- the sectors where he has worked;
- selected experience and current work;
- his teaching/enablement experience;
- the LLM/platform ecosystems he can work with;
- how to contact him.

## First action for Codex

Read:
- repository `AGENTS.md`;
- current v2.2 governance;
- this entire folder once.

Then execute:
`00_CODEX_IMPLEMENTATION_TASK.md`

Do not improvise additional claims.

## Core commercial principle

Do not sell "criterion" as an abstract value.

Show the buyer what Jack can build and integrate.

The judgment is demonstrated through:
- the architecture choices;
- the range of previous work;
- the ability to work across LLM/providers;
- the decision not to force an agent where a workflow is enough;
- evidence, security and operational controls.

The visitor should infer the judgment from the work.

## No CMS requirement

Do not add a CMS at this stage.

Use typed source-controlled content registries so the portfolio, resources and SEO can evolve without rewriting page components.

## Release discipline

Work on a review branch.
Do not deploy directly to production-enabled `main`.
Run the existing checks plus the acceptance tests in this pack.

## Additional internal maps
- `15_TECHNICAL_CAPABILITY_MAP.md` prevents technology/tool-salad while preserving the real stack.
- `16_PROOF_GAPS_AND_HUMAN_INPUTS.md` lists missing evidence that must not be invented.
