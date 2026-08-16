# Legacy Documentation Remediation Plan
Do not let contradictory documents coexist indefinitely.

## `CLAUDE.md`
Current issues:
- states deployment = Vercel;
- says Vercel required;
- describes TDD/80% coverage without an implemented test harness;
- hard-codes Claude-agent topology/models that are irrelevant to Codex and may be stale.

Action after Gate 1 approval:
- keep only Claude Code-specific developer conventions that are still true;
- point shared project truth to `AGENTS.md` / governance docs;
- fix deployment/test statements;
- avoid duplicating business truth.

## `PROJECT_MEMORY.md`
Current issue: says repo private while observed public.
Action: update current fact and keep historical note if useful.

## `README.md`
Current issue: still frames Academy around Reto 21 / Sorteo.
Action: rewrite after target IA is approved.

## `SEO_TICKETS.md`
Current issue: old “Jack de Neuracode” identity and older SEO tactics are mixed with valid historical incident notes.
Action: archive as historical record; migrate still-valid tasks into current backlog.

## `src/config.ts`
Current issue: stale event dates, old social handles, placeholders and possibly unused integration keys.
Action: split into typed content/config by domain after Gate 1 approval.

## Rule
Do not delete historical context until useful decisions/evidence have been migrated.
