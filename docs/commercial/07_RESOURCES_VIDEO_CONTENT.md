# Resources, Video & Social Content

## Goal

Turn social content into durable website authority without making the site a wall of social embeds.

## Content types

- Video
- Note / article
- Talk / workshop
- Guide / checklist
- Public technical project
- External social post

## Resource page

`/recursos`

Show a filterable editorial grid:
- Agentic AI
- AI Automation
- AI & SDLC
- Data & AI
- Security / Governance
- Business / ROI

Each card needs:
- title;
- short summary;
- author;
- type;
- topic;
- publication date if known;
- canonical site URL when a site page exists;
- external source only when no site page exists.

## Social embed policy

### Home
No TikTok/Instagram feed wall.

At most 1–3 curated resource cards, preferably static cards.

### Jack
3–6 curated content cards.
A single flagship video is optional and useful.

### Resources
External social content may be embedded selectively.

Use a poster/thumbnail and title/summary so the page remains useful even if the platform embed fails.

## Click-to-load nuance

For general marketing pages:
- click-to-load external iframe is acceptable for performance/privacy;
- static title/summary/poster must remain in HTML.

For a page intended as a **video watch page for SEO**:
- the video must actually be embedded/visible on the watch page;
- do not require a click merely for Google to discover the only video content;
- include stable thumbnail metadata;
- include a useful transcript/summary in static HTML.

## Dedicated watch page

Pattern:
`/recursos/videos/:slug`

Structure:
1. H1
2. short description
3. video/player
4. transcript
5. key takeaways
6. related resources
7. author -> Jack profile
8. relevant service/Academy CTA only if natural

Structured data:
`VideoObject` only if required metadata is complete.

## Flagship Jack video — recommended

Duration:
60–90 seconds.

Purpose:
Build trust for executives/referrals.

Draft script:

> Muchas empresas llegan con una herramienta en mente: Claude, OpenAI, un agente o alguna automatización.
>
> Mi trabajo empieza antes de elegir el modelo.
>
> Primero entiendo el proceso, los datos, los sistemas y las restricciones. A partir de ahí definimos si conviene una automatización tradicional, un workflow con LLM, un agente o una arquitectura agéntica.
>
> He trabajado en software empresarial, banca regulada, datos, analítica, machine learning y automatización, y hoy combino esa experiencia con sistemas de IA y AI Coding.
>
> La meta no es demostrar que la IA puede hacer algo una vez. Es construir una solución que tenga sentido, pueda integrarse y pueda operar.
>
> Soy Jack Aguilar. Si tienes un proceso que estás evaluando mejorar con IA, conversemos.

No fake cinematic claims.
Use real Jack on camera.

## Short video idea 1

Title:
**¿Agente o workflow?**

Hook:
> Que puedas construir un agente no significa que necesites uno.

Core:
- deterministic process -> workflow;
- uncertain/tool-using decision -> consider agent;
- higher autonomy -> more controls/evaluation.

CTA:
Full explanation/resources on Neuracode.

## Short video idea 2

Title:
**Me piden Claude. ¿Por dónde empiezo?**

Hook:
> Si una empresa me dice "quiero automatizar esto con Claude", Claude no es mi primera pregunta.

Core:
- process;
- data;
- integrations;
- quality;
- human validation;
- frequency/volume;
- security;
- delivery channel.

## Existing public content seed

Current public/indexed LinkedIn themes include:
- Agentic Engineering / MCP / SDLC / security
- AI changes software/product thinking
- harness / governed AI coding discussion

Do not scrape/rewrite posts blindly.
Use them as candidates for curation and canonical resource pages.

## TikTok / Instagram

Known canonical accounts:
- Jack TikTok: `https://www.tiktok.com/@jacktonyac`
- Jack Instagram: `https://www.instagram.com/jacktonyac/`

Specific video URLs are NOT safely inventoried in this pack.
Do not invent them.

Create a data slot and only render after Jack provides/approves the exact URL.

## Embed resilience

If a third-party embed fails:
- keep poster/title/summary visible;
- provide "Ver en [platform]" link;
- do not break layout;
- do not block page rendering.
