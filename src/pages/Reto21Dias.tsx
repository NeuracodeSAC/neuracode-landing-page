import React from 'react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import { config } from '../config'

const infoGeneral = [
  ['Inicio', 'Lunes 23 de febrero de 2026'],
  ['Duracion', '21 dias (3 semanas)'],
  ['Modalidad', 'Online en vivo + grabaciones'],
  ['Horario', 'Lunes a viernes - 7:00 pm a 9:00 pm (Hora Peru)'],
  ['Total horas en vivo', '30 horas'],
  ['Tecnologias', 'FastAPI, React, PostgreSQL'],
]

const ejemplos = [
  'Agenda para barberia o consultorio',
  'Inventario para almacen o tienda',
  'Control de ventas para minimarket',
  'Gestion de clientes o pedidos',
  'Control de servicios o prestamos',
]

const metodologia = [
  'Analisis de requerimientos del negocio',
  'Diseno del sistema y base de datos',
  'Desarrollo backend y frontend',
  'Pruebas y validaciones',
  'Despliegue en produccion',
  'Mejora continua',
]

const incluye = [
  'Sistema de autenticacion (login)',
  'Gestion de usuarios',
  '2-3 modulos principales del negocio',
  'CRUD completo',
  'Dashboard basico',
  'Base de datos PostgreSQL',
  'Deploy en la nube (backend y frontend)',
]

const noIncluye = [
  'ERP completo',
  'Facturacion electronica',
  'Sistemas contables avanzados',
  'Integraciones complejas con terceros',
]

const fases = [
  {
    title: 'Semana 1 - Analisis y Diseno',
    items: [
      'Definicion del problema del negocio',
      'Alcance del MVP',
      'Modelado de base de datos',
      'Arquitectura del sistema',
      'Configuracion del entorno',
    ],
  },
  {
    title: 'Semana 2 - Desarrollo',
    items: [
      'Backend con FastAPI',
      'CRUD y relaciones',
      'Autenticacion y seguridad',
      'Frontend con React',
      'Integracion API',
    ],
  },
  {
    title: 'Semana 3 - Pruebas y Despliegue',
    items: [
      'Validaciones y pruebas',
      'Ajustes segun el negocio',
      'Deploy backend',
      'Deploy frontend',
      'Presentacion final del sistema',
    ],
  },
]

const acompanamiento = [
  'Grupo privado de soporte (WhatsApp)',
  'Resolucion de dudas',
  'Grabaciones de todas las sesiones',
  'Revision grupal de avances',
]

const resultadoFinal = [
  'Sistema funcionando en internet',
  'Codigo fuente completo',
  'Arquitectura profesional',
  'Experiencia practica en SDLC',
  'Base para escalar tu solucion o negocio',
]

const dirigidoA = [
  'Emprendedores y duenos de negocio',
  'Programadores junior o intermedios',
  'Freelancers',
  'Personas que desean digitalizar su negocio',
]

const requisitos = [
  'Laptop o PC',
  'Disponibilidad de 2 horas diarias',
  'Compromiso durante las 3 semanas',
]

export default function Reto21Dias() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-secondary-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(160,32,240,0.14),transparent_55%)]" />
        <Container>
          <div className="py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-paper px-3 py-1 text-xs text-secondary-700">
              NeuraCode • Reto profesional
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
              Reto 21 Dias: Construye el sistema de tu negocio con enfoque profesional SDLC
            </h1>
            <p className="mt-4 max-w-3xl text-secondary-700 text-lg">
              En 21 dias construiras un sistema web funcional para una necesidad real de tu negocio,
              siguiendo el mismo flujo profesional usado en equipos de software.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={config.links.whatsappRetoJoin} target="_blank" rel="noreferrer">Quiero participar en el reto</Button>
              <Button variant="secondary" href={config.links.whatsappRetoInfo} target="_blank" rel="noreferrer">Quiero informacion</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="1) Informacion general"
            title="Fechas, horario y stack tecnologico"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {infoGeneral.map(([label, value]) => (
              <Card key={label}>
                <div className="text-sm text-secondary-600">{label}</div>
                <div className="mt-1 font-semibold">{value}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="2) Objetivo"
            title="Construir un MVP real en 21 dias"
            description="Aplicaras SDLC de punta a punta sobre un caso real de negocio."
          />
          <Card className="mt-8">
            <div className="font-semibold">Ejemplos de sistemas</div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-secondary-700">
              {ejemplos.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="3) Metodologia"
            title="Proceso profesional SDLC"
            description="Durante todo el programa aplicamos practicas Secure by Design: validacion de datos, autenticacion, proteccion de endpoints y buenas practicas de despliegue."
          />
          <Card className="mt-8">
            <ul className="list-disc pl-5 space-y-1 text-secondary-700">
              {metodologia.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="4) Alcance"
            title="MVP con alcance claro"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="font-semibold text-neurablue-700">Incluye</div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-secondary-700">
                {incluye.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
            <Card>
              <div className="font-semibold text-purple-600">No incluye</div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-secondary-700">
                {noIncluye.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="5) Cronograma"
            title="Plan por fases SDLC (3 semanas)"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {fases.map((fase) => (
              <Card key={fase.title}>
                <div className="font-bold">{fase.title}</div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-secondary-700 text-sm">
                  {fase.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 border-t border-secondary-200">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <SectionHeading eyebrow="6) Acompanamiento" title="Soporte durante todo el reto" />
              <ul className="mt-4 list-disc pl-5 space-y-1 text-secondary-700">
                {acompanamiento.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
            <Card>
              <SectionHeading eyebrow="7) Resultado final" title="Lo que te llevas al terminar" />
              <ul className="mt-4 list-disc pl-5 space-y-1 text-secondary-700">
                {resultadoFinal.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-14 border-t border-secondary-200">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <SectionHeading eyebrow="8) Dirigido a" title="Perfil recomendado" />
              <ul className="mt-4 list-disc pl-5 space-y-1 text-secondary-700">
                {dirigidoA.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
            <Card>
              <SectionHeading eyebrow="9) Requisitos" title="Lo minimo para participar" />
              <ul className="mt-4 list-disc pl-5 space-y-1 text-secondary-700">
                {requisitos.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
          </div>
          <Card className="mt-6">
            <div className="font-semibold text-lg">Inscripciones abiertas para inicio el lunes 23 de febrero de 2026</div>
            <p className="mt-2 text-secondary-700">
              Si quieres construir un sistema real para tu negocio con un proceso profesional, este reto es para ti.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href={config.links.whatsappRetoJoin} target="_blank" rel="noreferrer">Quiero participar en el reto</Button>
              <Button variant="secondary" href={config.links.whatsappRetoJoin} target="_blank" rel="noreferrer">Quiero participar en el reto</Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  )
}
