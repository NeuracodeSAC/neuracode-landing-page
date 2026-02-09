import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import { config } from '../config'

export default function Giveaway() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-secondary-200">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(46,118,229,0.18),transparent_55%)]" />
        <Container>
          <div className="py-14 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-paper px-3 py-1 text-xs text-secondary-700">
              Sorteo Híbrido • Volumen + calidad
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
              Gran Sorteo <span className="text-neurablue-700">NeuraCode</span>
            </h1>
            <p className="mt-4 max-w-3xl text-secondary-700 text-lg">
              Tecnología para algunos. Criterio para quienes quieren ir más lejos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={config.links.instagram} target="_blank" rel="noreferrer">Ver en Instagram</Button>
              <Button variant="secondary" href={config.links.facebook} target="_blank" rel="noreferrer">Ver en Facebook</Button>
              <Button variant="ghost" href={config.links.whatsapp} target="_blank" rel="noreferrer">Escribir “SORTEO”</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Premios"
            title="Lo que sorteamos"
            description={`Fecha del sorteo: ${config.giveaway.dateLabel}`}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-sm text-secondary-600">Premio 1</div>
              <div className="mt-1 text-xl font-extrabold">{config.giveaway.prizes.tech}</div>
              <p className="mt-3 text-secondary-700 text-sm">
                Un asistente inteligente para productividad diaria: organización, música y automatización básica.
              </p>
            </Card>
            <Card>
              <div className="text-sm text-secondary-600">Premio 2</div>
              <div className="mt-1 text-xl font-extrabold">{config.giveaway.prizes.mentoring}</div>
              <p className="mt-3 text-secondary-700 text-sm">
                Sesión 1:1 para transformar tu idea o negocio en un sistema claro: MVP, reglas, modelo y roadmap de desarrollo.
              </p>
              <ul className="mt-3 text-sm text-secondary-700 list-disc pl-5 space-y-1">
                <li>Duración: 90 minutos</li>
                <li>Online (Meet/Zoom) + grabación</li>
                <li>Resumen estructurado (PDF/Notion)</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="Cómo participar"
            title="Mecánica (optimizada para alcance)"
            description="Acciones simples que amplifican, sin atraer solo cazadores de premios."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              ['1) Sigue a NeuraCode', 'Síguenos en Instagram y/o Facebook.'],
              ['2) Like + comenta', 'Comenta: ¿qué idea, negocio o proceso te gustaría convertir en sistema/app?'],
              ['3) Comparte en stories', 'Etiquétanos y ganas una oportunidad extra. (Opcional: etiqueta a 1 persona con negocio).'],
            ].map(([t,d]) => (
              <Card key={t} className="p-6">
                <div className="font-bold">{t}</div>
                <div className="mt-2 text-sm text-secondary-700">{d}</div>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <div className="font-semibold">Tip NeuraCode</div>
            <p className="mt-2 text-sm text-secondary-700">
              Si tu comentario es serio (negocio real), te vamos a responder con una pregunta para entender tu caso.
              Muchas veces ese “comentario” termina en un proyecto real o en el reto 21 días.
            </p>
            <div className="mt-4 flex gap-3 flex-wrap">
              <Button href="/reto-21-dias">Ver Reto 21 dias</Button>
              <Button variant="secondary" href={config.links.whatsapp} target="_blank" rel="noreferrer">Hablar por WhatsApp</Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  )
}

