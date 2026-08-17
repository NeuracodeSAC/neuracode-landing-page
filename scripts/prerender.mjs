import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'

const pages = {
  '/': ['Neuracode | Consultoría de IA, Automatización y Agentes','Diseñamos e implementamos automatización con IA, agentes, analítica y software para empresas. Discovery, pilotos, integración, evaluación y formación.'],
  '/empresas': ['Consultoría de IA y Automatización para Empresas | Neuracode','Discovery, pilotos e implementación de automatización, agentes y sistemas de IA. Claude, OpenAI/Codex, Google Vertex AI, AWS Bedrock, datos, APIs y Secure SDLC.'],
  '/academy': ['Neuracode Academy | Formación en IA, Agentes y AI Engineering','Talleres y formación práctica para profesionales y equipos en IA, LLMs, agentes, AI Engineering, AI Coding y adopción segura.'],
  '/casos': ['Casos y Experiencia en IA, Automatización y Software | Neuracode','Proyectos, experiencia profesional y trabajo técnico en automatización, agentes, datos, software empresarial y Secure / Agentic SDLC.'],
  '/jack-aguilar': ['Jack Aguilar | Consultor de IA, Automatización y Agentes','Ingeniero de software y consultor en IA. Diseño automatizaciones, agentes y sistemas integrados a procesos, datos, APIs y software empresarial.'],
  '/recursos': ['Recursos de IA, Agentes y Software | Neuracode','Videos, notas, guías y charlas sobre automatización, agentes de IA, LLMs, AI Engineering, Secure SDLC, datos y adopción empresarial.'],
  '/contacto': ['Contacto | Neuracode','Conversa con Neuracode sobre IA, automatización, agentes, software, formación corporativa o Neuracode Academy.'],
}
const escapeAttribute = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;')
const base = await readFile('dist/index.html','utf8')
for (const [route,[title,description]] of Object.entries(pages)) {
  const url = `https://www.neuracode.dev${route === '/' ? '' : route}`
  const body = render(route)
  const html = base
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeAttribute(description)}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/(<meta property="og:title" content=").*?(" \/>)/, `$1${escapeAttribute(title)}$2`)
    .replace(/(<meta property="og:description" content=").*?(" \/>)/, `$1${escapeAttribute(description)}$2`)
    .replace(/(<meta property="og:url" content=").*?(" \/>)/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=").*?(" \/>)/, `$1${escapeAttribute(title)}$2`)
    .replace(/(<meta name="twitter:description" content=").*?(" \/>)/, `$1${escapeAttribute(description)}$2`)
  const directory = route === '/' ? 'dist' : `dist${route}`
  await mkdir(directory,{recursive:true})
  await writeFile(`${directory}/index.html`,html)
}
await rm('dist-ssr',{recursive:true,force:true})
