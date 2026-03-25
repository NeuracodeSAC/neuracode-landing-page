import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import { config } from '../config'

export default function ComunidadGracias() {
  const navigate = useNavigate()
  const pdfUrl = config.pdfGuideUrl
  const pdfReady = pdfUrl && !pdfUrl.includes('TODO')
  const zoomReady = config.zoomLink && !config.zoomLink.includes('TODO')

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(160,32,240,0.14),transparent_55%)]" />
        <Container>
          <div className="py-20 sm:py-28 text-center max-w-2xl mx-auto">
            <div className="text-6xl mb-6" aria-hidden="true">&#10003;</div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Bienvenido/a a la comunidad NeuraCode!
            </h1>
            <p className="mt-4 text-secondary-700 text-lg">
              Tu registro fue exitoso. Aqui tienes todo para empezar:
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 max-w-md mx-auto">
              {zoomReady && (
                <div className="w-full rounded-2xl border-2 border-red-200 bg-red-50 p-5">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-sm font-bold text-red-700 uppercase">Live hoy a las 8PM</span>
                  </div>
                  <p className="text-sm text-secondary-700 mb-3">
                    {config.live.topic}
                  </p>
                  <Button href={config.zoomLink} target="_blank" rel="noreferrer">
                    Unirme al Live por Zoom
                  </Button>
                </div>
              )}

              <div className="w-full rounded-2xl border border-secondary-200 bg-paper p-5">
                <p className="text-sm font-bold mb-3">Comunidad WhatsApp</p>
                <p className="text-sm text-secondary-700 mb-3">
                  Tips de IA diarios, avisos de lives y respuestas a tus preguntas.
                </p>
                <Button
                  href={config.links.whatsappComunidad}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  Unirme a WhatsApp Community
                </Button>
              </div>

              {pdfReady && (
                <div className="w-full rounded-2xl border border-secondary-200 bg-paper p-5">
                  <p className="text-sm font-bold mb-3">Tu guia gratuita</p>
                  <p className="text-sm text-secondary-700 mb-3">
                    Los prompts exactos que usamos en cada live + 7 por profesion.
                  </p>
                  <Button href={pdfUrl} target="_blank" rel="noreferrer" variant="secondary">
                    Descargar PDF
                  </Button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('/')}
              className="mt-6 text-sm text-secondary-500 hover:text-secondary-700 transition"
            >
              Volver al inicio
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}
