# Brand Asset & Image Register

Status: VERIFIED FROM USER-SUPPLIED ZIP (2026-08-16)

## Purpose
Prevent Codex or any other agent from:
- inventing brand colors;
- redrawing or AI-regenerating the logo;
- assuming raster assets are vector or transparent;
- stretching, recoloring or morphing the mark;
- using client/vendor logos in ways that imply partnerships;
- filling the site with generic AI stock imagery;
- leaking confidential project visuals.

## User-supplied source files
The uploaded archive contained exactly three PNG files. No separate story-highlight icon set was present at review time.

| Canonical governance copy | Original file | Role | Dimensions | Mode |
|---|---|---|---|---|
| `docs/brand/assets-source/neuracode-wordmark-source.png` | `NEURACODE VECTORIZAR.png` | Neuracode horizontal lockup/reference | 500x500 | PNG / RGB |
| `docs/brand/assets-source/neuracode-isologo-source.png` | `isologo.png` | Neuracode symbol/reference | 500x500 | PNG / RGB |
| `docs/brand/assets-source/neuracode-palette-reference.png` | `4.png` | official palette reference | 500x500 | PNG / RGB |

### Important raster fact
The supplied logo and isologo are **RGB images with a white baked-in background** and substantial whitespace around the artwork.

Therefore:
- do not assume alpha transparency;
- do not place the source PNG directly over dark/gradient photography expecting transparency;
- do not use CSS blend modes/filters to “fix” the logo;
- do not simply shrink the entire 500x500 canvas for favicon/header use;
- do not call the asset vector merely because its original filename contains “VECTORIZAR”.

These are **source references**, not automatically production-optimized web files.

## Canonical base palette
The supplied palette explicitly specifies:
- Primary Blue: `#2E76E5`
- Secondary Grey-Blue: `#7C889A`
- Purple: `#A020F0`
- Light Purple: `#C5A3FF`
- Text Black: `#000000`
- Background White: `#FFFFFF`

These six values are the canonical base colors.

Derived tonal scales, dark surfaces, muted text, borders and states are implementation tokens, not new official brand colors.

## Logo usage hierarchy

### Full Neuracode lockup / wordmark
Preferred for:
- desktop header;
- footer brand block;
- corporate contact/download material;
- selected OG/social compositions.

Use on:
- white;
- near-white/cool-light surfaces;
- a deliberately designed white logo plate if the surrounding section is dark.

Do not:
- isolate the text from the mark;
- retype “NeuraCode” with a font;
- recolor the mark;
- add glow/stroke/drop-shadow to the mark;
- crop into the visible mark itself;
- place it on a visually noisy image.

### Isologo
Preferred for:
- favicon/app-icon derivatives;
- compact mobile contexts;
- small brand signature;
- selected diagram/node branding where Neuracode identity is genuinely useful.

Do not repeat it decoratively across every section.

### Neuracode Academy
Academy is a division of Neuracode.
Do not invent a new Academy logo or alter the corporate mark.
If an Academy lockup is needed, it must be a governed text/lockup treatment or a supplied approved asset, not an AI-redrawn logo.

## Permitted production derivatives
Codex may propose derivative web assets only if the visible mark remains pixel-faithful to the supplied source.

Permitted after visual QA:
- non-destructive cropping of external white canvas/whitespace;
- responsive PNG/WebP derivative generation where it does not introduce visible artifacts;
- transparent-background derivative only if the extraction preserves anti-aliased edges and is visually compared against the source;
- favicon/app-icon derivative from the isologo;
- 1x/2x responsive variants;
- OG/social compositions that place the unchanged logo on a brand-safe surface.

Not permitted without human approval:
- vector auto-tracing presented as canonical;
- logo geometry edits;
- color substitution;
- AI cleanup/redesign;
- generative expansion;
- text/font replacement inside the logo.

### Preferred future asset
Obtain/export the original SVG/vector master from the design source.
Once supplied and visually verified, it should become the production-preferred master.

## Clear space and sizing
Until a formal brand manual defines exact ratios:
- preserve clear space around the visible mark;
- do not let adjacent text/buttons touch the logo;
- render using `object-fit: contain`;
- set explicit dimensions/aspect ratio to prevent CLS;
- verify legibility rather than inventing a tiny mandatory size.

Codex should propose concrete CSS sizes only after comparing header/mobile/footer layouts.

## Dark-mode/surface rule
Because current source PNGs have white backgrounds:
1. preferred: use the logo on a light surface;
2. acceptable: place the unchanged source/derivative inside a clean white brand plate on a dark section;
3. future preferred: use a verified transparent/vector master;
4. forbidden: CSS invert/filter/recolor to fabricate a dark-mode logo.

## Motion rule for logos
GSAP/CSS motion may animate the **container** (opacity/translation/scale within subtle limits) but must not:
- morph logo paths;
- warp/skew the logo;
- animate brand colors;
- continuously spin/pulse the logo;
- use the logo as decorative particle art.

Brand recognition beats animation novelty.

# Image system

## Preferred visual evidence
Order of preference:
1. real approved project/interface evidence;
2. redacted/anonymized workflow or architecture diagrams;
3. real workshop/event/team photography with permission;
4. product/interface mockups clearly represented as mockups;
5. abstract technical illustration created for explanation.

Avoid making generic AI-generated humans/robots/brains the default visual language.

## Jack photography
For `/jack`, prefer a real current professional photo supplied/approved by Jack.
Do not generate a synthetic “photo of Jack” and present it as real.

## Case-study visuals
Permitted when publication rights allow:
- architecture diagrams;
- process before/after maps;
- UI screenshots;
- dashboards;
- anonymized data visualizations;
- measurable result graphics.

Never expose:
- internal vulnerabilities;
- credentials/secrets;
- private customer data;
- patient/health data;
- confidential architecture;
- private messages;
- unapproved client branding.

## Client logos
Do not use a “logo wall” by default.

A client/organization logo requires:
- relationship attribution verified;
- publication permission or clear lawful/public basis;
- no implication that the organization endorses Neuracode;
- correct engagement mode (direct / employer / consulting).

For SDC Consulting engagements, a client logo must not imply the organization was a direct Neuracode client.

## Vendor logos
Vendor logos such as Anthropic, OpenAI or AWS are not proof of partnership.

Default commercial UI should prefer **text labels/chips** for technology ecosystems.

If vendor logos are proposed:
- source only from the vendor's current official brand resources;
- verify current trademark/brand-use rules at implementation time;
- label the section “Ecosistemas / tecnologías” rather than “Partners”;
- do not alter logo colors/proportions;
- do not place vendor marks more prominently than Neuracode;
- do not imply certification/partner status unless documented.

## Responsive image delivery
For each production image:
- define intrinsic width/height or `aspect-ratio`;
- provide `srcset`/`sizes` where useful;
- prefer AVIF/WebP for photographic/illustrative content when supported by the toolchain;
- keep crisp brand marks in lossless/appropriate formats;
- lazy-load below-the-fold imagery;
- do not lazy-load the actual LCP/hero image;
- avoid shipping desktop-size imagery to mobile;
- test high-DPR screens;
- test 320px mobile through large desktop.

## Accessibility
- informative images: concise meaningful alt;
- decorative images: empty alt / appropriate decorative handling;
- logos: alt should identify the brand, not repeat surrounding copy unnecessarily;
- do not embed essential textual content only inside an image.

## Social / OG imagery
Target a dedicated verified social preview composition rather than referencing nonexistent files.
Rules:
- correct 1200x630-class composition or platform-appropriate equivalent;
- unchanged Neuracode mark;
- sufficient safe margins;
- short legible title;
- no tiny body copy;
- no stale event date;
- verify the final URL actually serves the image.

## Web QA checklist
Codex must verify:
- exact asset used on each surface;
- white-background behavior;
- no pixelation at rendered size;
- no distortion/cropping of the visible mark;
- no unexpected white square on dark surfaces;
- explicit sizing prevents CLS;
- alt/decorative treatment;
- correct favicon/app icons;
- OG image exists and renders;
- project/client image permission;
- mobile payload and visual quality;
- no duplicated/dead logo assets left unexplained.

## Missing assets / human TBD
- original SVG/vector master;
- any approved transparent logo export;
- story-highlight assets if still desired;
- current professional Jack photo for `/jack`, if not already supplied elsewhere;
- explicit logo publication permissions for case studies.
