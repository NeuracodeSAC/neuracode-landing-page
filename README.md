# Neuracode website

Sitio oficial de Neuracode, su línea Enterprise, Neuracode Academy y la página profesional de Jack Aguilar.

## Desarrollo

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

El paquete de gobernanza instalado en `docs/governance/` es la fuente de verdad para arquitectura de marca, contenido, afirmaciones, redes, SEO y liberación. Consulta `AGENTS.md` antes de realizar cambios.

## Despliegue

El sitio se publica en Hostinger mediante GitHub Actions. Un push a `main` dispara producción; usa una rama de trabajo y revisión antes de integrar.
