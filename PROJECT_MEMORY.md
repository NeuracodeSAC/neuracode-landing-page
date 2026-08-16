# NeuraCode landing: memoria operativa

Actualizado: 2026-08-16

## Propósito

Landing pública de NeuraCode y NeuraCode Academy. Es una aplicación estática
con React, Vite, TypeScript y Tailwind. Los contactos de comunidad se dirigen a
WhatsApp; esta versión no usa base de datos, Brevo ni un formulario propio.

## Fuente de verdad

- Repositorio oficial: `NeuracodeSAC/neuracode-landing-page`.
- Directorio local: `/Users/jackaguilar/Projects/02-neuracode/active/neuracode-landing-page`.
- Rama de producción: `main`; el trabajo debe realizarse en ramas de revisión.
- Rama de artefactos compilados: `hostinger-production`.
- El repositorio anterior de `JackGod7` ya no debe usarse para este proyecto.

## Producción

- Hosting y DNS: Hostinger, cuenta `u431719834`.
- Dominio principal: `https://www.neuracode.dev`.
- `https://neuracode.dev` redirige permanentemente hacia la versión `www`.
- Directorio web de Hostinger: `public_html`.
- SSL de Hostinger está activo.
- Vercel fue retirado de esta landing; no reconectarlo ni apuntar DNS hacia Vercel.

## Flujo de despliegue continuo

1. Se hace un cambio en `main`.
2. El flujo `.github/workflows/publish-hostinger.yml` ejecuta `npm ci` y
   `npm run build`.
3. GitHub Actions publica únicamente el contenido de `dist` en
   `hostinger-production`.
4. Hostinger Git Auto Deployment detecta esa actualización y la publica en
   `public_html`.

La cadena se probó el 2026-08-16: el workflow de GitHub finalizó correctamente
y Hostinger actualizó el sitio automáticamente.

## Comprobaciones antes de publicar

```bash
npm run build
git status --short --branch
git push
```

Después del push, verificar:

```bash
curl -I https://neuracode.dev
```

En GitHub, revisar que el workflow **Publish Hostinger artifact** haya terminado
en verde y que **Verify production** confirme `www = 200` y raíz = `301`. En
Hostinger, el despliegue debe indicar `Completed`, rama `hostinger-production`
y raíz `public_html`.

## Reglas de seguridad

- Nunca guardar tokens, claves API, contraseñas ni archivos `.env` en Git.
- No usar variables `VITE_*` para secretos: Vite las expone al navegador.
- Mantener la integración de Hostinger limitada a esta organización y repositorio.
- GitHub mostraba el repositorio como público el 2026-08-16. La visibilidad deseada sigue pendiente de decisión humana.
- Secret scanning y push protection no están disponibles para este repositorio
  privado con el plan actual; compensar con revisión antes de `git push` y no
  almacenar secretos en el proyecto.
- Antes de tocar DNS, conservar los registros de correo (MX, SPF y DKIM).
- Si se vuelve a usar Brevo u otro proveedor, crear las credenciales nuevas en
  su panel y almacenarlas solo en el servidor o proveedor de secretos.

## Pendientes decididos

- Confirmar la visibilidad deseada del repositorio: tras la transferencia a la
  organización, GitHub lo muestra público; la preferencia previa era privado.
- Cambiar el correo principal de la cuenta GitHub `jackthony` a
  `jackmjm10@gmail.com`, conservar Outlook temporalmente como recuperación.
- Mejorar después la landing (copy de lives, velocidad, componentes y auditoría
  de dependencias), sin alterar el flujo de despliegue estable.
