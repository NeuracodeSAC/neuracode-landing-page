# Motion, Responsive, Accessibility & Performance

## Motion principle
Motion communicates hierarchy, causality or progress; it is not decoration.

GSAP is allowed for:
- hero sequencing;
- meaningful scroll storytelling;
- timeline/architecture diagrams;
- case-study narrative;
- complex coordinated motion.

Use CSS/native transitions for simple states.

### Conversational-card motion
For representative-message or buyer-scenario sequences:
- use short staggered opacity/translate entries to establish reading order;
- use subtle hover elevation only where a pointer exists;
- animate only `transform` and `opacity`;
- never represent animation as proof of a client conversation or testimonial;
- disable non-essential motion under `prefers-reduced-motion` without hiding content.

### Brand motion constraint
Animate logo containers only. Do not morph, skew, recolor, continuously rotate/pulse, or otherwise distort Neuracode/vendor logos. The logo itself is identity, not motion decoration.

## Library discipline
Do not install GSAP, Motion/Framer Motion, Lenis or another motion/scroll library by default.
For each added library, record:
- exact use case;
- why CSS/native is insufficient;
- bundle/runtime impact;
- cleanup/lifecycle pattern;
- mobile/reduced-motion fallback.

Avoid overlapping libraries that solve the same problem unless justified.

## Reduced motion
All non-essential motion must honor `prefers-reduced-motion`.
The site remains fully understandable without animation.

## Responsive
Mobile-first.
QA widths:
320, 360, 390, 412, 480, 768, 820, 1024, 1280, 1440, 1536, 1920.
Also test at least two arbitrary widths between breakpoints.

Rules:
- no content-caused horizontal scroll;
- no fixed hero geometry that breaks;
- cards reflow;
- touch targets approximately 44x44 CSS px where practical;
- floating/sticky WhatsApp cannot cover content;
- mobile motion simplifies;
- images have responsive sizing/aspect ratio;
- no unreadably small text.

## Accessibility target
WCAG 2.2 AA behavior for core journeys.
Required: semantic headings, keyboard navigation, visible focus, labels, alt text,
decorative-image handling, contrast, reduced motion, accessible menus/dialogs,
`lang=es`, and no hover-only essential information.

## Core Web Vitals working goals
Validate against current official definitions at implementation time.
Working goals:
- LCP <= 2.5s p75
- INP <= 200ms p75
- CLS <= 0.1 p75

Do not present local Lighthouse as field-data proof.

## Performance budgets
Before adding heavy visual dependencies, propose and record budgets for:
- initial JS transfer;
- image payloads/formats;
- font payload;
- third-party scripts;
- animation runtime.

Prefer `transform`/`opacity` for motion and lazy-load noncritical assets.

## Image performance
- inventory image dimensions/file sizes before redesign;
- do not ship 500x500 source-logo canvases blindly where a cropped derivative is appropriate;
- preserve lossless quality for marks/icons;
- use responsive AVIF/WebP for photography/illustration when justified;
- never lazy-load the actual LCP image;
- verify white-background logo behavior on every surface;
- include image/OG/favicon assets in visual regression.

## Visual regression
Capture key pages at phone/tablet/desktop widths.
Prioritize hero, navigation, cards, case pages, CTA and footer.
