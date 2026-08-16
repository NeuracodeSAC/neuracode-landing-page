# Social & Channel Registry
Purpose: store every known link, but surface only canonical/approved accounts.

## Jack Aguilar — personal brand
| Platform | URL | Status | Surface |
|---|---|---|---|
| LinkedIn | https://www.linkedin.com/in/jackaguilarc/ | CANONICAL | `/jack`, `/contacto` |
| Instagram | https://www.instagram.com/jacktonyac/ | CANONICAL | `/jack`, `/contacto` |
| TikTok | https://www.tiktok.com/@jacktonyac | CANONICAL | `/jack`, `/contacto` |
| Facebook | https://www.facebook.com/jack.tony.1804/ | CANONICAL_PERSONAL_BRAND | `/jack`, `/contacto` |
| Carrd | https://jackaguilar.carrd.co/ | RETIRE_OR_REDIRECT | never surface as canonical |

## Neuracode — umbrella / enterprise
| Platform | URL | Status | Surface |
|---|---|---|---|
| Website | https://www.neuracode.dev/ | CANONICAL | everywhere |
| LinkedIn | https://www.linkedin.com/company/neuracodelatam/ | CANONICAL | global footer, `/contacto` |
| Facebook | https://www.facebook.com/neuracode/ | CANONICAL | global footer, `/contacto` |
| Instagram | https://www.instagram.com/neuracode.dev/ | CANONICAL | global footer, `/contacto` |
| TikTok | https://www.tiktok.com/@jack.de.neura.code | TO_RENAME_TO_NEURACODE | do not hard-code as final handle until rename confirmed |

## Neuracode Academy
| Platform | URL | Status | Surface |
|---|---|---|---|
| Instagram | https://www.instagram.com/neuracode0/ | ACADEMY_ACTIVE | `/academy`, `/contacto` |
| Facebook | https://www.facebook.com/profile.php?id=61592205880028 | ACADEMY_PAGE_CONFIRMED_BY_SCREENSHOT | `/academy`, `/contacto`; prefer custom username later |

## Legacy / migration / verification
| Platform | URL | Status | Rule |
|---|---|---|---|
| Instagram | https://www.instagram.com/jackdeneuracode/ | LEGACY_MIGRATION | migrate audience; not long-term canonical |
| Facebook | https://www.facebook.com/profile.php?id=61586364313576 | VERIFY_IDENTITY | never surface until owner/purpose confirmed |
| X/Twitter | https://x.com/JackTonyAC | EXISTS_IN_CURRENT_CODE_NOT_USER_RECONFIRMED | verify before keeping |

## Display policy
Do not place every account in the global footer.

Recommended:
- Global footer: canonical Neuracode corporate channels only.
- `/jack`: canonical Jack channels.
- `/academy`: Academy channels.
- `/contacto`: all canonical + active-secondary channels grouped by brand.
- Legacy/migration/verify accounts: stored internally but hidden from canonical UI.

This preserves every known link without confusing users.

## Carrd decision
Preferred:
1. remove Carrd from every new bio/site surface;
2. if useful, keep a minimal temporary Carrd that points to `https://www.neuracode.dev/jack`;
3. retire Carrd after checking whether it still receives meaningful inbound traffic/backlinks.

Neuracode hosting/domain becomes the source of truth for Jack too.

## LinkedIn company copy direction
Current company LinkedIn wording is too narrow/contradictory because it simultaneously says “software/agentes/ciberseguridad” and “Academia: IA para que NO necesites programar”.

Recommended short descriptor:
**IA, automatización y software para empresas. Academy: formación práctica en AI Engineering y adopción de IA.**

Recommended About direction:
**Neuracode diseña e implementa soluciones de IA, automatización y software para empresas, y forma equipos mediante Neuracode Academy. Trabajamos desde discovery y pilotos hasta integración, operación y adopción, con foco en AI/Agentic Systems, Data & AI y Secure/Agentic SDLC. Elegimos la tecnología según el problema, no al revés.**

Do not publish the suggested copy blindly if the legal company description or service scope changes.
