import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import { config } from '../config'
import { trackFBEvent, trackGAEvent } from '../utils/analytics'

const paises = [
  'Argentina',
  'Bolivia',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Ecuador',
  'El Salvador',
  'Guatemala',
  'Honduras',
  'Mexico',
  'Nicaragua',
  'Panama',
  'Paraguay',
  'Peru',
  'Puerto Rico',
  'Republica Dominicana',
  'Uruguay',
  'Venezuela',
  'Espana',
  'Estados Unidos',
  'Otro',
]

interface FormState {
  nombre: string
  email: string
  profesion: string
  pais: string
}

export default function Comunidad() {
  const navigate = useNavigate()
  const [form, setForm] = React.useState<FormState>({
    nombre: '',
    email: '',
    profesion: '',
    pais: '',
  })
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = (): string | null => {
    if (!form.nombre.trim()) return 'El nombre es obligatorio.'
    if (!form.email.trim()) return 'El email es obligatorio.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Ingresa un email valido.'
    if (!form.profesion.trim()) return 'La profesion es obligatoria.'
    if (!form.pais) return 'Selecciona un pais.'
    return null
  }

  const isConfigured = (value: string | undefined): boolean => {
    if (!value) return false
    return !value.includes('TODO')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    setLoading(true)

    try {
      let success = false

      // 1. Intentar Brevo
      if (isConfigured(config.brevo.apiKey)) {
        try {
          const res = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
              'api-key': config.brevo.apiKey,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              email: form.email.trim(),
              attributes: {
                NOMBRE: form.nombre.trim(),
                PROFESION: form.profesion.trim(),
                PAIS: form.pais,
              },
              listIds: [Number(config.brevo.listId)],
              updateEnabled: true,
            }),
          })

          if (res.status === 200 || res.status === 201 || res.status === 204) {
            success = true
          }
        } catch {
          // Brevo fallo, intentar Formspree
        }
      }

      // 2. Fallback Formspree
      if (!success) {
        if (isConfigured(config.formspree.id)) {
          try {
            const res = await fetch(`https://formspree.io/f/${config.formspree.id}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify({
                name: form.nombre.trim(),
                email: form.email.trim(),
                profesion: form.profesion.trim(),
                pais: form.pais,
              }),
            })

            if (res.ok) {
              success = true
            }
          } catch {
            // Formspree tambien fallo
          }
        } else {
          console.warn('Ni Brevo ni Formspree estan configurados.')
        }
      }

      if (success) {
        trackFBEvent('Lead')
        trackFBEvent('CompleteRegistration')
        trackGAEvent('generate_lead', { method: 'community_form' })
        navigate('/comunidad/gracias')
      } else {
        setError('Hubo un problema al registrarte. Intenta de nuevo o contactanos por WhatsApp.')
      }
    } catch {
      setError('Hubo un problema al registrarte. Intenta de nuevo o contactanos por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-secondary-200">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(46,118,229,0.14),transparent_55%)]" />
        <Container>
          <div className="py-14 sm:py-20 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-paper px-3 py-1 text-xs text-secondary-700">
              NeuraCode • Comunidad
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
              Unite a la Comunidad NeuraCode
            </h1>
            <p className="mt-4 text-secondary-700 text-lg">
              Conecta con profesionales y entusiastas de la tecnologia e inteligencia artificial.
              Aprende, comparte y crece junto a una comunidad que construye el futuro.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <div className="max-w-xl mx-auto">
            <SectionHeading
              eyebrow="Registro gratuito"
              title="Completa tus datos para unirte"
              description="Te enviaremos recursos exclusivos y una guia gratuita de bienvenida."
            />

            <Card className="mt-8">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm text-secondary-700">Nombre completo</span>
                  <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
                    className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-secondary-700">Profesion</span>
                  <input
                    name="profesion"
                    type="text"
                    required
                    placeholder="Ej: Ingeniero de software, Estudiante, Emprendedor"
                    value={form.profesion}
                    onChange={handleChange}
                    className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-secondary-700">Pais</span>
                  <select
                    name="pais"
                    required
                    value={form.pais}
                    onChange={handleChange}
                    className="h-11 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                  >
                    <option value="">Selecciona tu pais</option>
                    {paises.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </label>

                {error && (
                  <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <Button as="button" type="submit" disabled={loading}>
                  {loading ? 'Enviando...' : 'Unirme a la comunidad'}
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}
