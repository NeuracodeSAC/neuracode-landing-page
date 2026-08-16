import { mkdir, readFile, writeFile } from 'node:fs/promises'
const pages = {
  empresas: ['Soluciones de IA y automatización para empresas — Neuracode','Discovery, pilotos e implementación de IA, automatización, datos y Secure SDLC para empresas.'],
  academy: ['Neuracode Academy — Formación práctica en IA','Talleres, rutas de aprendizaje y formación corporativa en IA, AI Engineering y adopción responsable.'],
  casos: ['Casos y evidencia — Neuracode','Experiencia y evidencia de Neuracode, publicada con contexto, atribución y permiso.'],
  'jack-aguilar': ['Jack Aguilar — Software Engineer & AI Systems Consultant','Jack Aguilar: Software Engineer y consultor en sistemas de IA, automatización, datos y Secure / Agentic SDLC.'],
  recursos: ['Recursos sobre IA, automatización y software — Neuracode','Notas, guías, charlas e investigación práctica de Neuracode.'],
  contacto: ['Contacto — Neuracode','Conversa con Neuracode sobre proyectos, formación corporativa, Academy o alianzas.'],
}
const base = await readFile('dist/index.html','utf8')
for (const [route,[title,description]] of Object.entries(pages)) {
  const url = `https://www.neuracode.dev/${route}`
  const html = base
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/(<meta property="og:title" content=").*?(" \/>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=").*?(" \/>)/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=").*?(" \/>)/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=").*?(" \/>)/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=").*?(" \/>)/, `$1${description}$2`)
  await mkdir(`dist/${route}`, { recursive: true })
  await writeFile(`dist/${route}/index.html`, html)
}
