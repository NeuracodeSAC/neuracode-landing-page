# SEO, Analytics & Conversion

## SEO principle
Optimize for qualified intent and clear entity/content structure, not keyword stuffing.

Priority territories:
- LLM automation for business processes
- Claude / OpenAI / AWS Bedrock integration intent, where naturally relevant
- AI automation consulting
- enterprise AI automation
- AI / agentic systems
- secure / agentic SDLC
- corporate AI training
- data & AI automation

## Metadata
Every indexable page requires:
- unique title;
- unique description;
- canonical URL;
- Open Graph/social preview;
- appropriate structured data;
- language/locale;
- verified preview image asset.

## Structured data candidates
Use only when content is real:
- Organization
- Person
- Service
- Course
- Event
- Article
- BreadcrumbList

No Event schema without a confirmed scheduled event.
No stale or legacy social identity in canonical `sameAs`.
No unverified founder date/credential.

## SPA/direct-link SEO gate
Before expanding indexable routes, verify direct URL status, metadata rendering and social preview behavior.
If the current SPA cannot meet requirements reliably, propose the smallest viable prerender/SSG/routing change before a framework migration.

## Analytics
Track at minimum:
- page_view
- CTA click
- WhatsApp click
- service interest
- case study open
- Academy entry
- event registration click
- social outbound click

## Attribution
Use stable source/intent parameters and prefilled WhatsApp messages.
Examples:
- jack_linkedin_consulting
- jack_instagram_consulting
- neuracode_linkedin_enterprise
- neuracode_instagram_enterprise
- academy_instagram_training

Do not expose sensitive data in URL parameters.

## One WhatsApp
One business WhatsApp is acceptable at this stage.
Differentiate intent:
- consulting/project;
- enterprise training;
- Academy/workshop;
- partnership.

## Lead quality
Measure qualified conversations, proposal rate, close rate, ticket size and source, not only raw lead count.

## Privacy / consent
Before enabling or changing GA4, Meta Pixel or other marketing trackers, audit the applicable privacy/consent requirements and document the decision. Do not assume current tracking is compliant merely because it already exists.

## Current analytics contradiction
The project loads Vercel Analytics/Speed Insights while deployment documentation says Vercel was removed. Audit actual data flow/usefulness before keeping/removing these packages.


## Named-technology search intent
Executive buyers may search by the technology they already have in mind.

Capture this intent through:
- natural homepage support copy;
- `/empresas` technology block and FAQ;
- `/jack` ecosystem section;
- original technical resources/cases.

Do not keyword-stuff the hero and do not create thin provider doorway pages.

Approved examples:
- “¿Trabajan con Claude, OpenAI o AWS Bedrock?”
- “automatización con LLMs”
- “agentes de IA para empresas”
- “integración de Claude/OpenAI/Bedrock según el caso”

Taxonomy must remain technically correct:
- Bedrock is not called an LLM;
- LangChain/LangGraph are not called LLMs;
- Codex is presented in the OpenAI developer/agent ecosystem.

## Vendor structured data
Do not place vendors in `sameAs` or imply affiliation.
`knowsAbout`/service copy may name technologies when genuinely supported, but partnership/certification requires separate evidence.
