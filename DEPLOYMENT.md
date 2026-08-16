# Deployment

## Source of truth

- Repository: `NeuracodeSAC/neuracode-landing-page`
- Source branch: `main`
- Static deployment branch: `hostinger-production`
- Canonical domain: `https://www.neuracode.dev`

## Hostinger deployment

GitHub Actions builds the Vite application after every push to `main` and publishes only the generated `dist` files to `hostinger-production`.

Hostinger Git Auto Deployment is connected to that branch and publishes it into
`public_html`. The integration was verified on 2026-08-16: a GitHub Actions
publication automatically reached `https://neuracode.dev`.

## Community contact

All community calls to action open WhatsApp directly. No email-marketing key, database, or server-side signup endpoint is required for this version.

## Production cutover

1. Test the WhatsApp community link.
2. Verify `https://neuracode.dev` redirects permanently to `https://www.neuracode.dev` after a change.
3. Do not reintroduce Vercel for this site; it has been removed.
