# LLM Evaluation Report — Governance Pack v2.2
Date: 2026-08-16
Method: adversarial consistency review against current repository facts, user-provided brand/business facts, social URLs and expected Codex behavior.

## v1.1 findings that required remediation
Severity scale: BLOCKER / HIGH / MEDIUM / LOW.

| ID | Severity | Finding | v2 remediation |
|---|---|---|---|
| F-01 | HIGH | v1.1 lacked a root Codex-native instruction file | Added root `AGENTS.md` with precedence/context-loading rules |
| F-02 | BLOCKER | No explicit resolution for contradictory docs | Added source precedence + contradiction stop rule |
| F-03 | BLOCKER | Deep-link/SPA Hostinger risk not captured | Added P0-03 + routing gate + eval |
| F-04 | HIGH | Current `/jack` contains stale/incorrect facts | Added fact conflict list + claim ledger + evals |
| F-05 | HIGH | Founding date conflicts (2020/2024) | Set TBD; no public use until confirmed |
| F-06 | HIGH | Repo says private in memory but is observed public | Added contradiction/TBD |
| F-07 | HIGH | `CLAUDE.md` Vercel vs actual Hostinger | Added P0 contradiction and remediation gate |
| F-08 | HIGH | TDD/80% policy exists without test harness | Added test-theater detection and quality-harness gate |
| F-09 | HIGH | Social links incomplete; no registry/status | Added all user-provided links + display policy |
| F-10 | MEDIUM | Carrd status unclear | Explicit retire/redirect; never canonical |
| F-11 | HIGH | Company LinkedIn not represented | Added canonical `neuracodelatam` + new copy direction |
| F-12 | HIGH | Legacy Jack/Neuracode accounts could remain canonical | Added canonical/migration/verify states |
| F-13 | HIGH | Stale March/weekly-live system not fully state-modeled | Added `Event` model + empty events registry + evals |
| F-14 | HIGH | Sitemap contains `/auditoria` without React route | Added P0 route mismatch and migration decision |
| F-15 | MEDIUM | Current OG/schema assets/social identities not verified | Added asset/schema validation gate |
| F-16 | MEDIUM | GSAP guidance could become “install GSAP” | Added library-justification rule and cargo-cult eval |
| F-17 | MEDIUM | “100% responsive” was not objectively testable | Added explicit width matrix + arbitrary widths |
| F-18 | HIGH | Current engagements/pipeline could be inflated into cases | Added claim states + adversarial tests |
| F-19 | MEDIUM | v1.1 repeated context but lacked machine-readable data | Added YAML registries |
| F-20 | HIGH | Main branch production trigger not highlighted | Added release safety rule and Gate 0/1 read-only constraint |

## Eval result for v2.2
- 40 adversarial scenarios defined.
- Expected policy outcome is explicit for all 40.
- No known blocker remains inside the governance pack itself.
- Residual human TBDs are isolated in `11_DECISIONS_TBDS_NON_GOALS.md` rather than guessed.

## Residual risk
The pack cannot verify contractual publication permissions, metric source documents, academic records, legal/privacy requirements, social-account ownership or future event dates by itself. Those are intentional human gates.

## Release recommendation
**PACK STATUS: ACCEPT FOR CODEX GATE 0/1**

Do not treat this as approval to redesign/deploy. It is approval to let Codex audit and propose.


## v2.2 additional hardening
| ID | Severity | Finding prevented | v2.2 remediation |
|---|---|---|---|
| F-21 | HIGH | Supplied raster logo could be assumed transparent/vector | Recorded RGB/white-background source facts + derivative policy |
| F-22 | HIGH | Logo could be recolored/morphed by motion redesign | Added logo-identity/motion constraints |
| F-23 | MEDIUM | Vendor logos could imply partnership | Default text-chip policy + official-source/trademark gate |
| F-24 | HIGH | Provider-neutral positioning could hide commercially useful LLM terms | Added governed named-technology layer |
| F-25 | HIGH | Bedrock/LangGraph/MCP could be incorrectly called LLMs | Added technology taxonomy |
| F-26 | MEDIUM | Tool names could dominate hero/copy | Added outcome-first placement rules |
| F-27 | HIGH | Internal/client imagery could leak confidential context | Added image/evidence/publication rules |
| F-28 | MEDIUM | Full 500x500 source canvas could produce poor favicon/header rendering | Added production-derivative and responsive asset QA |
