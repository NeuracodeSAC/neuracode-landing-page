# Deployment

## Source of truth

- Repository: `JackGod7/neuracode-landing-page`
- Source branch: `main`
- Static deployment branch: `hostinger-production`
- Canonical domain: `https://www.neuracode.dev`

## Hostinger deployment

GitHub Actions builds the Vite application after every push to `main` and publishes only the generated `dist` files to `hostinger-production`.

In Hostinger, configure Git Auto Deployment with that branch and an empty install path (`public_html`). Enable the generated webhook for automatic pulls after the branch updates.

## Community form secret

The form calls `/api/community-signup.php`. Before testing the form, create `public_html/api/config.php` in Hostinger from `config.example.php`, adding the current Brevo API key and list ID. This file is ignored by Git and protected from direct HTTP access.

Never use a `VITE_BREVO_API_KEY`; Vite embeds all `VITE_*` variables in public browser code.

## Production cutover

1. Test the Hostinger preview and the community form.
2. Connect `www.neuracode.dev` to the Hostinger website and issue SSL.
3. Redirect `neuracode.dev` to `https://www.neuracode.dev`.
4. Verify both URLs before removing Vercel.
