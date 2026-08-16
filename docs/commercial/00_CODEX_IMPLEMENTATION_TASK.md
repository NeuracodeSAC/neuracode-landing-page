# Codex Task — Commercial Evidence & SEO Pass

## Scope

Implement the next commercial-content layer on top of the current governed Neuracode website.

This is not a new redesign and not a framework migration.

## Required implementation

### P0 — Jack page
Rebuild `/jack-aguilar` from a sparse profile into a professional portfolio page using:
- `01_COMMERCIAL_POSITIONING.md`
- `02_JACK_AGUILAR_PAGE_SPEC.md`
- `03_PORTFOLIO_EVIDENCE_INVENTORY.md`
- `data/portfolio.yml`

The page must show real experience without converting every item into a "case study".

### P0 — Cases / evidence
Replace the current `/casos` empty state with three clearly labeled collections:
1. Selected Case Studies
2. Selected Professional Experience
3. Current Work / Labs

Only publish entries whose `public_status` permits it.

If a named organization requires human confirmation, use the governed anonymized wording or do not render the name.

### P0 — Resources
Replace `/recursos` empty state with a real content model and at least the approved seed entries from `data/resources.yml`.

Do not invent TikTok/Instagram URLs.
Render social video entries only when a concrete public URL exists.

### P0 — Academy
Replace the "Sin fecha confirmada" commercial dead-end with the evergreen Academy structure from `06_ACADEMY_CONTENT.md`.

No event date is shown while `events.yml` has no confirmed future event.

### P0 — Static rendering
The current `scripts/prerender.mjs` only copies the application shell and swaps metadata.
Implement **real static/pre-rendered route content** using the current React/Vite stack.

Acceptance proof:
- built `/jack-aguilar/index.html` contains `Jack Aguilar` and visible profile/experience copy before JavaScript executes;
- built `/casos/index.html` contains rendered evidence cards before JavaScript;
- built `/recursos/index.html` contains resource titles before JavaScript.

Do not migrate to Next.js or another framework solely for this.

### P1 — SEO
Implement the route map in:
`08_SEO_ROUTE_MAP.md`
and `data/seo-routes.yml`.

Include:
- unique title;
- description;
- canonical;
- H1;
- internal links;
- structured-data type where applicable.

### P1 — Structured data
- Home: Organization + WebSite
- Jack: ProfilePage whose `mainEntity` is Person
- Resource notes: Article/BlogPosting where appropriate
- Dedicated video/watch pages: VideoObject only when required metadata is complete
- Events: Event only for a confirmed event

Do not add unsupported structured data just to create schema volume.

### P1 — Video/content
Implement a content component strategy from `07_RESOURCES_VIDEO_CONTENT.md`.

Rules:
- no wall of live TikTok/Instagram iframes on Home;
- use static title/summary/poster cards;
- external embeds may load on demand for marketing UX;
- for pages intended to rank as a video watch page, the video must be visible/embedded on the page and static text/transcript must not depend on a click;
- no fake/generated photograph of Jack presented as real.

### P1 — Internal linking
At minimum:
- Home -> Empresas, Casos, Jack, Academy
- Jack -> Casos, Resources, Contact
- Cases -> relevant Enterprise offer + Jack
- Resources -> Jack author/profile + related service when natural
- Academy -> Jack/instructor proof + corporate training CTA

### P2 — Quality
Add/extend automated checks so they fail on:
- empty-state text returning to `/casos` or `/recursos`;
- unsupported "MSc", "Magíster", "egresado UNI";
- stale event dates/countdowns;
- direct-client wording for SDC engagements;
- current engagement rendered as verified success;
- missing title/description/canonical for canonical routes;
- built route HTML missing its H1;
- broken internal canonical links;
- video resource marked `published` without URL/title/thumbnail metadata.

## Preserve
- Hostinger deployment;
- current canonical URL strategy;
- current social registry unless explicitly changed;
- provider-neutral positioning;
- brand palette and logo rules;
- existing redirects;
- current WhatsApp number/intents unless source of truth changes.

## Do not
- add GSAP merely because it exists;
- add a CMS;
- add testimonials not supplied;
- invent client metrics;
- invent dates;
- invent TikTok/Instagram content URLs;
- publish private project screenshots;
- create "Our partners" vendor logo walls;
- write a generic "we do everything in AI" page.

## Deliver before merge
1. implementation summary;
2. files changed;
3. exact content rendered on `/jack-aguilar`;
4. rendered portfolio/evidence inventory;
5. SEO route table;
6. static-render proof snippets from built HTML;
7. structured-data validation results;
8. responsive/a11y check;
9. build/check results;
10. unresolved human publication decisions.

STOP before merging to `main`.
