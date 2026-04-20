# SEO & Brand Authority — Tickets

Owner: Jack Aguilar
Origen: AI Overview de Google atribuyó falsamente a Manuel Sigüeñas como "fundador de NeuraCode" (2026-04-19).

---

## ✅ Hecho

| # | Acción | Fecha |
|---|--------|-------|
| 1 | Borrar comentario en post LinkedIn de Manuel Sigüeñas | 2026-04-19 |
| 2 | Reportar AI Overview falso a Google | 2026-04-19 |
| 3 | Verificar `neuracode.dev` (Dominio) en Search Console | 2026-04-19 |
| 4 | Verificar `auditoria.neuracode.dev` (Prefijo URL, auto) | 2026-04-19 |
| 5 | Solicitar indexación: `/`, `/jack`, `/auditoria`, `auditoria.neuracode.dev/` | 2026-04-19 |
| 6 | JSON-LD `Person` (Jack) + `Organization` (NeuraCode) en landing | 2026-04-19 |
| 7 | JSON-LD `Article` con `author: Jack Aguilar` en auditoría | 2026-04-19 |
| 8 | Página canónica `/jack` con bio + sameAs todas las redes | 2026-04-19 |
| 9 | Aliases `/equipo /about /founder /ceo` → `/jack` | 2026-04-19 |
| 10 | `sitemap.xml` + `robots.txt` en ambos dominios | 2026-04-19 |

---

## 🔴 Pendiente — Post-cierre de datos

### TICKET-001 · Editar bio LinkedIn de Jack
**Owner:** Jack
**Antes de:** TICKET-002
- Cambiar a: `Founder & CEO @ NeuraCode · neuracode.dev | Sr. SE @ Atlantic City | OWASP & SDLC Security`
- Agregar link clickeable a `https://www.neuracode.dev` en sección de contacto.

### TICKET-002 · Post LinkedIn de autoría
**Owner:** Jack
**Audiencia:** Cualquier persona (público)
**Texto:** ver `SEO_TICKETS_DRAFT_POST.md` (pendiente crear) o transcript del 2026-04-19.
**Acción post-publicación:** copiar URL del post, pasársela a Claude para inyectar en `sameAs` del JSON-LD.

### TICKET-003 · Replicar post en TikTok + IG
**Owner:** Jack
- TikTok: @jack.de.neura.code
- IG marca: @jackdeneuracode
- IG personal: @jacktonyac
- Mismo día que TICKET-002.

### TICKET-004 · Inyectar URL del post en JSON-LD
**Owner:** Claude (Jack pasa el link)
- Agregar URL del post LinkedIn al array `sameAs` de `/jack` y `/auditoria`.

### TICKET-005 · Verificar AI Overview corregido
**Owner:** Jack
**Cuando:** 7-14 días después de publicar TICKET-002.
- Google "neuracode auditoria" → confirmar que el AI Overview ya no menciona a Manuel como fundador.
- Si persiste: re-reportar feedback con nuevas evidencias (link del post, página `/jack`).

---

## 🔵 Backlog — Ideas para reforzar autoridad

- Crear `humans.txt` en raíz con info de Jack como autor.
- Wikipedia stub de NeuraCode (requiere cobertura mediática primero).
- Press release: nota corta en medio peruano de tech sobre la auditoría → backlinks.
- Schema `FAQPage` en `/jack` con preguntas tipo "¿Quién fundó NeuraCode?".
- Open Graph image dedicada para `/jack` con foto y título.

---

## 📊 Métricas a vigilar

| Métrica | Hoy | Meta 30d |
|---------|-----|----------|
| `site:neuracode.dev` resultados indexados | ? | +20 |
| Knowledge Panel "NeuraCode" en Google | No | Sí (con Jack como founder) |
| Posición #1 para "neuracode auditoria" | Manuel | NeuraCode/Jack |
| AI Overview menciona a Jack como founder | No (Manuel) | Sí (Jack) |
