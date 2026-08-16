# Codex Task — Gate 0 + Gate 1 Only

Repository: `NeuracodeSAC/neuracode-landing-page`

Read root `AGENTS.md` and the full `docs/governance/` pack first.

## Constraint
READ-ONLY audit/proposal. Do not redesign pages, install dependencies, edit production code, change DNS/hosting, remove files or push to `main`.

## Gate 0 — deliver evidence-backed audit
Return:
1. stack/dependency inventory;
2. git/deployment trigger inventory;
3. route inventory and hard-refresh/deep-link behavior;
4. page/component/content inventory;
5. current design-token/palette inventory;
6. stale content/events/promises;
7. claim/fact inconsistencies;
8. social link inventory vs governed registry;
9. SEO/meta/structured-data/sitemap/robots inventory;
10. analytics/third-party script inventory;
11. accessibility issues;
12. responsive issues;
13. performance/motion baseline;
14. dead/unused files/configs;
15. contradiction register with severity and evidence.

For every finding, cite the file/path/line or runtime observation.
Do not infer when direct inspection is possible.

## Gate 1 — propose
Return:
1. target sitemap;
2. current-route migration table: KEEP/MERGE/REDIRECT_301/TEMPORARY/RETIRE_410/REVIEW;
3. deep-link/Hostinger routing solution;
4. SEO rendering approach (keep SPA + enhancements vs prerender/SSG vs migration), with tradeoffs;
5. content model and file structure;
6. component architecture;
7. design-token diff;
8. animation plan and exact library need/no-need decision;
9. test/quality harness proposal;
10. analytics/attribution/privacy review plan;
11. implementation plan by gates;
12. rollout/rollback plan;
13. human TBDs;
14. explicit list of files you expect to modify in implementation.

## Required self-check before responding
Run the adversarial cases in `14_LLM_EVAL_SUITE.md` against your proposal.
If any fail, revise the proposal before returning it.

## Stop condition
Finish with exactly one of:
- `GATE 1: READY FOR HUMAN REVIEW`
- `GATE 1: HOLD — <blocking TBDs>`

Do not proceed to Gate 2 without explicit human approval.
