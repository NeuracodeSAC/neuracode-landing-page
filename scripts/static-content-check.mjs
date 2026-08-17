import { readFile } from 'node:fs/promises'

const assertions = {
  'dist/index.html': ['Integramos IA en'],
  'dist/jack-aguilar/index.html': ['Jack Aguilar', 'Software Engineer', 'Software Architecture', 'Google Vertex AI'],
  'dist/casos/index.html': ['50 entrevistas', 'Google Vertex AI', 'Forecasting de demanda', 'Automatización NLP'],
  'dist/academy/index.html': ['Formación práctica en IA', 'SDC Learning'],
  'dist/recursos/index.html': ['FORENSIS'],
}

let failed = false
for (const [file, terms] of Object.entries(assertions)) {
  const html = await readFile(file, 'utf8')
  for (const term of terms) {
    if (!html.includes(term)) {
      console.error(`${file}: missing required content: ${term}`)
      failed = true
    }
  }
}

if (failed) process.exit(1)
console.log('Static content checks passed.')
