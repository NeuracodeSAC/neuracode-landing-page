# Design System & Canonical Palette

## Source authority
The user-supplied brand asset bundle dated 2026-08-16 is the highest-authority visual source currently available for the Neuracode logo/isologo/base palette.

Read together:
- `17_BRAND_ASSET_REGISTER.md`
- `data/brand-assets.yml`

Production assets in `public/` may be older derivatives and must be compared before being treated as canonical.

## Canonical palette
- Primary Blue: `#2E76E5`
- Secondary Grey-Blue: `#7C889A`
- Purple: `#A020F0`
- Light Purple: `#C5A3FF`
- Text Black: `#000000`
- Background White: `#FFFFFF`

Current Tailwind-generated tonal scales may remain where accessible and visually compatible.

Existing `ink: #002000` is a green-black outlier and must be audited before replacement.

## Visual direction
Desired:
- premium;
- technical;
- calm;
- modern;
- enterprise-capable;
- AI-native without cliché;
- credible to executives and engineers;
- recognizably Neuracode.

Avoid:
- cyberpunk overload;
- crypto/gaming neon;
- generic robot/brain imagery everywhere;
- gradients on every surface;
- unreadable glassmorphism;
- low-contrast violet text;
- vendor-logo walls;
- decorative “AI particles” that overpower content.

## Semantic token proposal
Components consume semantic tokens rather than raw hex values.

Light foundation:
- brand-primary -> `#2E76E5`
- brand-violet -> `#A020F0`
- brand-lilac -> `#C5A3FF`
- text -> near-black derived from approved black
- text-muted -> contrast-safe grey-blue
- surface -> white / very-light cool gray
- border -> cool gray

Dark sections may use a near-black/navy implementation extension.
It is not a new canonical brand color.

## Gradient family
Recognition gradient:
`linear-gradient(135deg, #2E76E5 0%, #A020F0 72%, #C5A3FF 100%)`

Use selectively for:
- accent lines;
- small highlights;
- controlled hero/diagram details.

Do not put every card/button/heading in the gradient.

## Logo behavior
Current source logo/isologo have white baked backgrounds.
The design must therefore:
- prefer light surfaces for the source marks;
- use a clean white brand plate if placed in a dark section;
- avoid CSS filter/invert tricks;
- use verified derived transparent/vector assets only after QA.

Full rules are in `17_BRAND_ASSET_REGISTER.md`.

## Image direction
Use evidence-rich visuals:
- real approved interfaces/workflows;
- architecture/process diagrams;
- redacted screenshots;
- real people/events with permission;
- clearly labeled product mockups.

Avoid generic “AI person staring at holographic brain” imagery as the default.

## Technology visuals
Technology names may be surfaced as text chips.
Vendor logos are optional and require official-source/trademark verification.
Never label technology logos as “partners” unless an actual partnership exists.

## Typography
Before changing fonts:
- inspect current loading/assets/licensing;
- support Spanish diacritics;
- prioritize performance;
- use fluid type with readable line length;
- avoid ultra-bold everywhere;
- ensure executive-level scanning: strong hierarchy, short blocks, useful labels.

## Governed primitives
Button, TextLink, Badge, TechChip, SectionHeading, Card, OfferingCard,
CaseStudyCard, EvidenceChip, Stat, EventCard, SocialLink, CTASection,
Header/Nav, MobileNav, Footer, MotionSection/Reveal, ResponsiveContainer,
ArchitectureDiagram, ImageFrame, LogoMark.

## Approval
Any canonical color/logo geometry change requires:
- diff;
- rationale;
- visual comparison;
- human approval.
