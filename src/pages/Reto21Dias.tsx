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

const whatsappCountries = [
  { label: 'Argentina', code: '54' },
  { label: 'Bolivia', code: '591' },
  { label: 'Brasil', code: '55' },
  { label: 'Chile', code: '56' },
  { label: 'Colombia', code: '57' },
  { label: 'Ecuador', code: '593' },
  { label: 'Guyana', code: '592' },
  { label: 'Paraguay', code: '595' },
  { label: 'Perú', code: '51' },
  { label: 'Surinam', code: '597' },
  { label: 'Uruguay', code: '598' },
  { label: 'Venezuela', code: '58' },
  { label: 'Guayana Francesa', code: '594' },
]

export default function Reto21Dias() {
  const [whatsappError, setWhatsappError] = React.useState('')

  const normalizeWhatsapp = (raw: string) => raw.replace(/\D/g, '')

  const handleRetoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const countryCode = String(data.get('countryCode') || '').trim()
    const whatsappRaw = String(data.get('whatsapp') || '').trim()
    const whatsappLocal = normalizeWhatsapp(whatsappRaw)
    const business = String(data.get('business') || '').trim()
    const message = String(data.get('message') || '').trim()

    const fullWhatsapp = normalizeWhatsapp(countryCode + whatsappLocal)

    if (whatsappLocal.length < 6 || whatsappLocal.length > 14) {
      setWhatsappError('Ingresa un número válido (6 a 14 dígitos).')
      return
    }

    if (fullWhatsapp.length < 8 || fullWhatsapp.length > 15) {
      setWhatsappError('Número completo inválido (8 a 15 dígitos).')
      return
    }

    setWhatsappError('')

    const lines = [
      'Hola NeuraCode, quiero registrarme al Reto 21 Días.',
      name ? `Nombre: ${name}` : '',
      email ? `Correo: ${email}` : '',
      fullWhatsapp ? `WhatsApp: +${fullWhatsapp}` : '',
      business ? `Rubro: ${business}` : '',
      message ? `Sistema: ${message}` : '',
    ].filter(Boolean)

    const url = `${config.links.whatsappRetoJoin}&text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    form.reset()
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-secondary-200">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(160,32,240,0.14),transparent_55%)]" />
        <Container>
          <div className="py-14 sm:py-20">
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

      <section className="py-12 sm:py-14">
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

      <section className="py-12 sm:py-14 border-t border-secondary-200">
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

      <section className="py-12 sm:py-14 border-t border-secondary-200">
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

      <section className="py-12 sm:py-14 border-t border-secondary-200">
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

      <section className="py-12 sm:py-14 border-t border-secondary-200">
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

      <section className="py-12 sm:py-14 border-t border-secondary-200">
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

      <section className="py-12 sm:py-14 border-t border-secondary-200">
        <Container>
          <SectionHeading
            eyebrow="Registro"
            title="Inscríbete al Reto 21 Días"
            description="Déjanos tus datos y te contactamos con los pasos para ingresar."
          />
          <Card className="mt-8">
            <form
              onSubmit={handleRetoSubmit}
              className="grid gap-4 sm:grid-cols-2"
            >
              <label className="grid gap-2">
                <span className="text-sm text-secondary-700">Nombre completo</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-secondary-700">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-secondary-700">Código país</span>
                <select
                  name="countryCode"
                  defaultValue="51"
                  className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                >
                  {whatsappCountries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.label} (+{country.code})
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-secondary-700">WhatsApp</span>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="999 999 999"
                  inputMode="numeric"
                  pattern="[0-9]{6,14}"
                  minLength={6}
                  maxLength={14}
                  onInput={(event) => {
                    const target = event.currentTarget
                    target.value = normalizeWhatsapp(target.value)
                    if (whatsappError) {
                      setWhatsappError('')
                    }
                  }}
                  className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                />
                {whatsappError && (
                  <span className="text-xs text-red-600">{whatsappError}</span>
                )}
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-secondary-700">Negocio / rubro</span>
                <input
                  name="business"
                  type="text"
                  placeholder="Ej. restaurante, tienda, consultoría"
                  className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                />
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm text-secondary-700">Cuéntanos brevemente qué sistema quieres</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Ej. control de ventas, agenda, inventario..."
                  className="rounded-xl border border-secondary-200 bg-paper p-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                />
              </label>

              <div className="sm:col-span-2 flex flex-wrap gap-3 items-center">
                <Button as="button" type="submit">Enviar registro</Button>
                <span className="text-xs text-secondary-600">
                  Se abrirá WhatsApp con tu mensaje listo para enviar.
                </span>
              </div>
            </form>
          </Card>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
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
