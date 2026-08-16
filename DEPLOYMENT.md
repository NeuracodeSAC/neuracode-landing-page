# Deployment

## Source of truth

- Repository: `JackGod7/neuracode-landing-page`
- Source branch: `main`
- Static deployment branch: `hostinger-production`
- Canonical domain: `https://www.neuracode.dev`

## Hostinger deployment

GitHub Actions builds the Vite application after every push to `main` and publishes only the generated `dist` files to `hostinger-production`.

In Hostinger, configure Git Auto Deployment with that branch and an empty install path (`public_html`). Enable the generated webhook for automatic pulls after the branch updates.

## Community contact

All community calls to action open WhatsApp directly. No email-marketing key, database, or server-side signup endpoint is required for this version.

## Production cutover

1. Test the Hostinger preview and the WhatsApp community link.
2. Connect `www.neuracode.dev` to the Hostinger website and issue SSL.
3. Redirect `neuracode.dev` to `https://www.neuracode.dev`.
4. Verify both URLs before removing Vercel.
