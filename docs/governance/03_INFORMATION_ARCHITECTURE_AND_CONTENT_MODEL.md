# Information Architecture & Content Model

## Primary navigation target
- Inicio
- Empresas
- Academy
- Casos
- Jack Aguilar
- Recursos
- Contacto

## Target routes
- `/` — umbrella homepage
- `/empresas` — B2B services/conversion
- `/academy` — education division
- `/casos` — selected evidence
- `/casos/:slug` — case detail
- `/jack` — canonical professional page
- `/recursos` — articles/guides/research/talks
- `/contacto` — contact + canonical social directory
- `/eventos` — only when event volume justifies it

## Homepage information order
1. Hero: Enterprise primary CTA; Academy secondary.
2. Trust/experience: sectors/capabilities, not uncontrolled logo wall.
3. Enterprise capabilities: maximum four.
4. Selected evidence: maximum three.
5. Operating principles.
6. Academy bridge.
7. Jack authority block.
8. Resource/latest insight.
9. Final WhatsApp CTA.

## Typed content models
### CaseStudy
- id
- slug
- title
- evidence_class
- engagement_mode
- organization_display_name?
- engagement_context
- sector
- problem
- constraints
- approach
- architecture_summary
- technologies[]
- controls[]
- result_summary?
- metrics[]
- evidence_notes
- publication_permission
- confidentiality_notes
- date_range?
- featured

### Event
- id
- title
- status: draft | scheduled | registration-open | completed | cancelled
- start_datetime
- timezone
- platform
- registration_url?
- recording_url?
- hide_after_end: true

Rule: “next event” queries only future `scheduled|registration-open` events.

### Offering
- id
- name
- audience
- problem
- outcome
- scope
- deliverables[]
- typical_duration?
- CTA
- active

### SocialLink
- brand: jack | neuracode | academy
- platform
- handle?
- url
- status: canonical | active-secondary | migration | verify | retired
- surface: global-footer | jack | academy | contacto | none
- priority

## Content strategy
Events, cases, social links, offers and key claims must be data-driven/typed, not duplicated across page components.

## Redirect governance
Inventory every current/indexed route before retirement.
Each old route gets one state:
`KEEP | MERGE | REDIRECT_301 | TEMPORARY | RETIRE_410 | REVIEW`.

Do not silently turn known indexed routes into 404s.

## SEO rendering decision
Before building many indexable pages, decide whether the current SPA metadata/routing approach is adequate.
Do not assume client-side `document.title` alone gives reliable SEO/social previews.
Prefer the smallest solution that yields reliable direct-link rendering and route-specific metadata.
