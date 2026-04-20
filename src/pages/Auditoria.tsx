import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const DASHBOARD_URL = 'https://jackthony.github.io/auditoria-eg2026/'
const REPO_URL = 'https://github.com/jackthony/auditoria-eg2026'
const ACADEMY_URL = '/comunidad'

const STATS = [
  {
    value: '4,703',
    label: 'Mesas faltantes',
    detail: 'El universo oficial de ONPE declara estas mesas como procesadas. La API pública no devuelve su data.',
  },
  {
    value: '566,233',
    label: 'Votos sin cuadrar',
    detail: 'Desfase entre la suma mesa-a-mesa y el total oficial publicado por ONPE.',
  },
  {
    value: '13,624',
    label: 'Votos definen el 2° puesto',
    detail: '81× menor que el universo de actas pendientes del Jurado Electoral Especial.',
  },
  {
    value: '63,300',
    label: 'Peruanos sin votar (Lima)',
    detail: '211 mesas no abrieron el día de elección. Proveedor: CALAG. 4.6× el margen del 2° puesto.',
  },
]

const FINDINGS = [
  { id: 'GAP-F1', severity: 'CRÍTICO', texto: 'La suma mesa-a-mesa produce un top-10 distinto al total oficial.' },
  { id: 'GAP-F2', severity: 'CRÍTICO', texto: '4,703 mesas del universo oficial no devuelven data en la API pública.' },
  { id: 'GAP-F3', severity: 'CRÍTICO', texto: '566,233 votos válidos faltan al sumar mesa-a-mesa.' },
  { id: 'E1', severity: 'CRÍTICO', texto: 'Margen del 2° puesto es ~81× menor que el universo de actas pendientes del JEE.' },
]

export default function Auditoria() {
  return (
    <div className="bg-[#faf7f2]">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-secondary-200">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(176,23,31,0.10),transparent_60%)]" />
        <Container>
          <div className="py-16 sm:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              Análisis en vivo · Aporte ciudadano
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-red-700">
              Auditoría Elecciones Generales 2026 por Neuracode
            </p>

            <h1 className="mt-3 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.0]">
              Algo no <em className="not-italic" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>cuadra.</em>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-secondary-800 leading-relaxed max-w-2xl">
              Agarramos la página de <strong>ONPE</strong>, descargamos mesa por mesa
              y nos pusimos a sumar. Spoiler: las cuentas no dan.
              Todo el código es abierto, cada captura firmada con <strong>SHA-256</strong>.
              Cualquiera puede re-ejecutarlo.
            </p>

            <div className="mt-3 text-sm text-secondary-600">
              Por <strong>Neuracode</strong> · Coautoría: Jack Aguilar
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href={DASHBOARD_URL} target="_blank" rel="noreferrer">
                Ver dashboard en vivo →
              </Button>
              <Button variant="secondary" href={REPO_URL} target="_blank" rel="noreferrer">
                Código en GitHub
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-secondary-200">
        <Container>
          <div className="py-14 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-8">Los números</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-secondary-200 bg-white p-6">
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-red-700 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-wider text-secondary-900">
                    {s.label}
                  </div>
                  <p className="mt-3 text-sm text-secondary-600 leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Narrative */}
      <section className="border-b border-secondary-200">
        <Container>
          <div className="py-14 sm:py-20 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-8">La historia</p>

            <div className="space-y-8 text-lg text-secondary-800 leading-relaxed">
              <div>
                <p className="font-black text-secondary-900 text-xl mb-2">🧮 Imagínate esto:</p>
                <p>ONPE dice: "procesamos X mesas". Tú sumas las mesas que publican → faltan <strong className="text-red-700">4,703</strong>. ¿Dónde están? Nadie contesta.</p>
              </div>
              <div>
                <p className="font-black text-secondary-900 text-xl mb-2">📊 El 2° puesto:</p>
                <p>Se decide por <strong className="text-red-700">13,624 votos</strong>. Eso es menos gente que la que cabe en el Monumental. Con eso decides quién va a segunda vuelta.</p>
              </div>
              <div>
                <p className="font-black text-secondary-900 text-xl mb-2">🚪 Y en Lima:</p>
                <p>El día de la elección, <strong className="text-red-700">211 mesas no abrieron</strong>. Proveedor: CALAG. 63,300 peruanos se quedaron sin votar. Eso es <strong className="text-red-700">4.6× el margen</strong> que define el 2° puesto. Léelo otra vez.</p>
              </div>
              <div>
                <p className="font-black text-secondary-900 text-xl mb-2">🎲 Las probabilidades:</p>
                <p>Según los datos actuales, hay <strong className="text-red-700">26.9% de chance</strong> de que Renovación Popular pase a Sánchez. No es brujería, es matemática pública. Puedes revisar el código.</p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border-l-4 border-red-700 bg-white p-6">
              <p className="text-base sm:text-lg text-secondary-800 leading-relaxed">
                <strong className="text-secondary-900">⚖️ Esto no dice "fraude".</strong>{' '}
                Dice: "ONPE, explícate". Si encuentras un error en las cuentas,
                abre un issue en GitHub y lo arreglamos. Así funciona la ciencia abierta.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Findings técnicos */}
      <section className="border-b border-secondary-200">
        <Container>
          <div className="py-14 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-8">Hallazgos técnicos</p>
            <div className="space-y-3 max-w-3xl">
              {FINDINGS.map((f) => (
                <div key={f.id} className="flex gap-4 items-start rounded-xl border border-secondary-200 bg-white p-4">
                  <span className="shrink-0 rounded-md bg-red-100 text-red-700 text-xs font-bold px-2 py-1 uppercase tracking-wider">
                    {f.severity}
                  </span>
                  <div>
                    <span className="font-mono text-xs text-secondary-500 mr-2">{f.id}</span>
                    <span className="text-sm text-secondary-800">{f.texto}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-secondary-500 max-w-2xl">
              Señales exploratorias (Benford, Moran's I, ML-anomalías) en <a href={REPO_URL + '/blob/main/docs/EXPLORATORIO.md'} target="_blank" rel="noreferrer" className="text-neurablue-600 underline">docs/EXPLORATORIO.md</a>. Requieren corrección de múltiples tests y peer-review.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Academy */}
      <section className="border-b border-secondary-200 bg-secondary-50/50">
        <Container>
          <div className="py-14 sm:py-20 max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-neurablue-600 mb-3">Esto lo hizo Neuracode</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              IA aplicada a problemas reales.<br />No tutoriales de juguete.
            </h2>
            <p className="mt-4 text-secondary-700 leading-relaxed">
              Descargamos APIs públicas, construimos pipelines de datos, firmamos cada
              captura con SHA-256 y publicamos el código para que cualquier peruano
              pueda verificarlo. Eso es lo que enseñamos en la Academy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={ACADEMY_URL}>
                Aprende IA real con Neuracode →
              </Button>
              <Button variant="secondary" href={DASHBOARD_URL} target="_blank" rel="noreferrer">
                Ver dashboard en vivo
              </Button>
            </div>
            <p className="mt-4 text-xs text-secondary-500">
              Por <strong>Neuracode</strong> · Coautoría: Jack Aguilar · Sin afiliación política · MIT License
            </p>
          </div>
        </Container>
      </section>

    </div>
  )
}
