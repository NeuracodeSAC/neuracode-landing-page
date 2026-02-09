import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import { config } from '../config'
import { Link } from 'react-router-dom'

function Bullet({ children }:{ children: React.ReactNode }) {
  return <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-purple-500"></span><span className="text-secondary-700">{children}</span></li>
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(46,118,229,0.20),transparent_55%)]" />
        <Container>
          <div className="py-14 sm:py-24 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-paper px-3 py-1 text-xs text-secondary-700">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                NeuraCode • Consultoría y desarrollo
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Construimos <span className="text-neurablue-700">sistemas reales</span> para negocios reales.
              </h1>
              <p className="mt-4 text-secondary-700 text-lg">
                De la idea a producción: diseñamos, construimos y desplegamos software con lógica, trazabilidad y foco en resultados.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={config.links.whatsapp} target="_blank" rel="noreferrer">Hablemos por WhatsApp</Button>
                <Button variant="secondary" href="/academy">Ver Academy</Button>
              </div>
              <p className="mt-3 text-xs text-secondary-600">
                ¿Buscas formación? Mira <Link className="underline hover:text-neurablue-700" to="/academy">NeuraCode Academy</Link>.
              </p>
            </div>

            <Card className="bg-gradient-to-b from-paper to-secondary-50/50">
              <div className="text-sm text-secondary-600">Lo que hacemos</div>
              <ul className="mt-4 space-y-3">
                <Bullet>Diagnóstico y definición del sistema (MVP y roadmap).</Bullet>
                <Bullet>Arquitectura y modelo de datos (escalable, sin sobreconstrucción).</Bullet>
                <Bullet>Desarrollo de aplicaciones web, APIs y paneles internos.</Bullet>
                <Bullet>Automatizaciones, integraciones y despliegue.</Bullet>
              </ul>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-secondary-200 bg-secondary-50 p-4">
                  <div className="font-semibold">Para empresas</div>
                  <div className="text-sm text-secondary-700 mt-1">Consultoría, delivery, soporte y evolución.</div>
                </div>
                <div className="rounded-xl border border-secondary-200 bg-secondary-50 p-4">
                  <div className="font-semibold">Para emprendedores</div>
                  <div className="text-sm text-secondary-700 mt-1">MVP con criterio y velocidad.</div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Claridad → Diseño → Construcción → Despliegue"
            description="Proceso simple, trazable y enfocado en negocio. Sin humo, sin improvisación."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['Descubrimiento', 'Entendemos el problema real, usuarios, flujos y riesgos.'],
              ['Arquitectura', 'Diseñamos la solución y el MVP correcto.'],
              ['Entrega', 'Construimos por iteraciones con control de calidad.'],
              ['Escalado', 'Medimos, optimizamos y evolucionamos el sistema.'],
            ].map(([t,d]) => (
              <Card key={t} className="p-5">
                <div className="font-bold">{t}</div>
                <div className="mt-2 text-sm text-secondary-700">{d}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14 border-t border-secondary-200">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <SectionHeading
              eyebrow="NeuraCode Academy"
              title="El reto que convierte ideas en sistemas."
              description="Un programa de ejecución guiada para construir el sistema de tu negocio en días, con enfoque de arquitectura."
            />
            <Card>
              <div className="font-semibold">¿Quieres entrar al reto?</div>
              <p className="mt-2 text-sm text-secondary-700">
                Únete a la lista de espera y recibe acceso anticipado a la primera cohorte.
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Button href="/reto-21-dias">Ver Reto 21 dias</Button>
                <Button variant="secondary" href="/academy">Ver Academy</Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}

