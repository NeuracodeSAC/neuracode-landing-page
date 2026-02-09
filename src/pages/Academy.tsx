import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import { config } from '../config'

export default function Academy() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-secondary-200">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(46,118,229,0.18),transparent_55%)]" />
        <Container>
          <div className="py-14 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-paper px-3 py-1 text-xs text-secondary-700">
              NeuraCode Academy • Reto
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
              Crea el sistema de tu negocio en <span className="text-neurablue-700">21 días</span>
            </h1>
            <p className="mt-4 max-w-3xl text-secondary-700 text-lg">
              Del problema real al MVP funcional. Sin tutoriales inútiles. Con guía real, lógica y criterio de arquitectura.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={config.links.whatsappAcademyJoin}
                target="_blank"
                rel="noreferrer"
                className="bg-[#00F2FF] text-ink hover:bg-[#00D9E6]"
              >
                Quiero participar
              </Button>
              <Button variant="secondary" href={config.links.whatsappAcademyInfo} target="_blank" rel="noreferrer">Quiero informacion</Button>
              <Button variant="ghost" href="/sorteo">Ver sorteo</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Qué logra el reto"
            title="No vienes a ver teoría. Vienes a construir."
            description="En 21 días vas a ordenar tu idea o negocio y convertirlo en un sistema claro, con un roadmap listo para ejecutar."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ['Claridad total del negocio', 'Problema, usuarios, procesos, riesgos y datos críticos.'],
              ['Reglas de negocio y estados', 'Excepciones, vencimientos, acumulados, trazabilidad.'],
              ['Modelo de datos y APIs', 'Entidades clave, relaciones y endpoints necesarios.'],
              ['MVP correcto y escalable', 'Qué construir primero y qué dejar para después.'],
            ].map(([t,d]) => (
              <Card key={t}>
                <div className="font-bold">{t}</div>
                <div className="mt-2 text-sm text-secondary-700">{d}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="Diferenciador"
            title="IA guiada con criterio (no prompts sueltos)."
            description="Usas estructura diaria y plantillas diseñadas para evitar caos y acelerar la construcción del MVP."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              ['Ejecución diaria', '1 objetivo por día. 1 avance real por día.'],
              ['Plantillas listas', 'Prompts, checklists, formatos y estructura.'],
              ['Puente a consultoría', 'Si quieres, NeuraCode lo construye contigo o por ti.'],
            ].map(([t,d]) => (
              <Card key={t} className="p-6">
                <div className="font-bold">{t}</div>
                <div className="mt-2 text-sm text-secondary-700">{d}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14 border-t border-secondary-200">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 items-start">
            <SectionHeading
              eyebrow="Oferta fundadores"
              title="Primera cohorte • Acceso anticipado"
              description="La Academy construye comunidad y respaldo. La consultoría construye sistemas en producción."
            />
            <Card>
              <div className="font-semibold text-lg">¿Listo para entrar?</div>
              <p className="mt-2 text-sm text-secondary-700">
                Únete a la lista de espera. Si necesitas que lo construyamos por ti, escríbenos por WhatsApp.
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Button
                  href={config.links.whatsappAcademyJoin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#00F2FF] text-ink hover:bg-[#00D9E6]"
                >
                  Quiero participar
                </Button>
                <Button variant="secondary" href={config.links.whatsappAcademyJoin} target="_blank" rel="noreferrer">Quiero participar</Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}

