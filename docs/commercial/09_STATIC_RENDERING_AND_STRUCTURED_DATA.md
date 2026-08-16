# Static Rendering & Structured Data

## Current issue

The existing post-build `scripts/prerender.mjs` creates route-specific HTML and swaps metadata, but the body remains an application shell.

For stronger discoverability and non-JavaScript resilience, canonical public routes should contain meaningful page content in the initial HTML response.

Google can render JavaScript, but Google Search documentation still recommends server-side/static rendering as a good option for users/crawlers, and not all bots execute JavaScript.

## Required outcome

No framework migration.

Use the smallest compatible static-render approach for the current React/Vite/Router stack.

Acceptance:
- `dist/jack-aguilar/index.html` contains visible Jack hero and experience text;
- `dist/casos/index.html` contains evidence cards;
- `dist/recursos/index.html` contains resource titles;
- app hydrates/boots without duplicate or broken UI;
- direct refresh works in Hostinger;
- canonical route metadata remains unique.

## Structured data

### Jack
Use:
`ProfilePage`
with:
`mainEntity: Person`

Person may include:
- name;
- url;
- image only if real/approved;
- jobTitle;
- sameAs;
- knowsAbout;
- worksFor/founder relationship only when evidence/governance permits.

Do not add an unverified founding date.

### Home
Organization + WebSite.

### Resource article
Article or BlogPosting:
- headline;
- author -> Jack profile `@id`;
- datePublished/dateModified;
- canonical URL;
- image if valid.

### Video watch page
VideoObject only when metadata is complete:
- name;
- description;
- thumbnailUrl;
- uploadDate;
- contentUrl or embedUrl as appropriate;
- duration when known.

### Event
Only when future event is confirmed.

No fake event entity for "coming soon".

## Validation

Before release:
- Rich Results Test where applicable;
- Schema Markup Validator if useful;
- inspect raw built HTML;
- Search Console URL Inspection after deployment;
- sitemap resubmit / recrawl request for priority routes.

## References

Official Google Search Central:
- JavaScript SEO basics:
  https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Dynamic rendering guidance:
  https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering
- ProfilePage:
  https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Video structured data:
  https://developers.google.com/search/docs/appearance/structured-data/video
- Video SEO:
  https://developers.google.com/search/docs/appearance/video
- General structured-data guidelines:
  https://developers.google.com/search/docs/appearance/structured-data/sd-policies
