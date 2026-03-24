import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import { config } from '../config'

export default function ComunidadGracias() {
  const navigate = useNavigate()
  const pdfUrl = config.pdfGuideUrl
  const pdfReady = pdfUrl && !pdfUrl.includes('TODO')

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
              Tu registro fue exitoso. Descarga tu guia gratuita aqui.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {pdfReady ? (
                <Button href={pdfUrl} target="_blank" rel="noreferrer">
                  Descargar Guia Gratuita
                </Button>
              ) : (
                <Button as="button" disabled>
                  Guia disponible pronto
                </Button>
              )}
              <Button as="button" variant="ghost" onClick={() => navigate('/')}>
                Volver al inicio
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
