import { readFile } from 'node:fs/promises'
import { glob } from 'node:fs/promises'
const banned = [/Jack de NeuraCode/i,/Egresado UNI/i,/fundad[ao].*20(?:20|24)/i,/25 de marzo/i,/1 abril/i,/8 abril/i,/10x/i]
let failed = false
for await (const file of glob(['src/**/*.{ts,tsx}','index.html'])) {
  const text = await readFile(file,'utf8')
  for (const pattern of banned) if (pattern.test(text)) { console.error(`${file}: contenido bloqueado por ${pattern}`); failed = true }
}
if (failed) process.exit(1)
console.log('Content governance checks passed.')
