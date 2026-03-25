import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Card from '../components/Card'
import { config } from '../config'

const PROXIMOS_LIVES = config.upcomingLives

const TEMAS_ANTERIORES = [
  'Cómo usar Claude para hacer informes en la mitad del tiempo',
  'Emails profesionales en 30 segundos con IA',
  'Analiza contratos con IA sin ser abogado',
  'Los 3 errores que comete el 90% al usar ChatGPT',
]

export default function Live() {
  const zoomReady = config.zoomLink && !config.zoomLink.includes('TODO')

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-secondary-200">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(160,32,240,0.10),transparent_55%)]" />
        <Container>
          <div className="py-14 sm:py-20 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Live en vivo · Cada miércoles 8PM
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
              IA aplicada en vivo,<br />
              <span className="text-purple-500">con demos reales</span>
            </h1>
            <p className="mt-4 text-secondary-700 text-lg leading-relaxed">
              Cada miércoles a las 8PM mostramos cómo usar IA para resolver problemas reales de trabajo.
              Sin teoría. Sin programar. Solo pantalla compartida y resultados en segundos.
            </p>
            <p className="mt-3 font-semibold text-neurablue-600">
              {config.live.schedule}
            </p>
          </div>
        </Container>
      </section>

      {/* Próximos lives */}
      <section className="py-12 sm:py-16 border-b border-secondary-200">
        <Container>
          <h2 className="text-2xl font-black tracking-tight mb-6">Próximos lives</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {PROXIMOS_LIVES.map((live) => (
              <Card key={live.fecha} className={`p-5 ${live.esProximo ? 'ring-2 ring-neurablue-500' : ''}`}>
                {live.esProximo && (
                  <span className="inline-block mb-2 text-xs font-bold bg-neurablue-500 text-white px-2 py-0.5 rounded-full">
                    PRÓXIMO
                  </span>
                )}
                <div className="text-sm text-secondary-500 font-medium">
                  {live.dia} {live.fecha} · {live.hora}
                </div>
                <div className="mt-1 font-bold leading-snug">{live.tema}</div>
                {live.esProximo && zoomReady && (
                  <div className="mt-3">
                    <Button href={config.zoomLink} target="_blank" rel="noreferrer">
                      Unirme al live
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {!zoomReady && (
            <div className="mt-6 text-center">
              <Button href={config.links.whatsappComunidad} target="_blank" rel="noreferrer">
                Avísame antes de cada live por WhatsApp
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Temas que cubrimos */}
      <section className="py-12 sm:py-16 border-b border-secondary-200 bg-secondary-50/50">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-2xl font-black tracking-tight">Temas que cubrimos</h2>
            <p className="mt-2 text-secondary-700 text-sm">
              Cada live es un caso práctico que puedes aplicar el día siguiente en tu trabajo.
            </p>
            <ul className="mt-6 space-y-3">
              {TEMAS_ANTERIORES.map((tema) => (
                <li key={tema} className="flex items-start gap-3 text-sm text-secondary-700">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-neurablue-100 text-neurablue-600 grid place-items-center text-xs font-bold">✓</span>
                  {tema}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              No te pierdas el próximo live
            </h2>
            <p className="mt-3 text-secondary-700">
              Únete a la comunidad de WhatsApp y te avisamos antes de cada live con el link de Zoom.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={config.links.whatsappComunidad} target="_blank" rel="noreferrer">
                Unirme a la comunidad WA
              </Button>
              <Button variant="secondary" href="/comunidad">
                Descargar guía gratis
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
