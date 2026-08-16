import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import { config } from '../config'
import { trackFBEvent, trackGAEvent } from '../utils/analytics'

const codigosPais: Record<string, string> = {
  'Argentina': '+54',
  'Bolivia': '+591',
  'Chile': '+56',
  'Colombia': '+57',
  'Costa Rica': '+506',
  'Cuba': '+53',
  'Ecuador': '+593',
  'El Salvador': '+503',
  'Guatemala': '+502',
  'Honduras': '+504',
  'Mexico': '+52',
  'Nicaragua': '+505',
  'Panama': '+507',
  'Paraguay': '+595',
  'Peru': '+51',
  'Puerto Rico': '+1',
  'Republica Dominicana': '+1',
  'Uruguay': '+598',
  'Venezuela': '+58',
  'Espana': '+34',
  'Estados Unidos': '+1',
  'Otro': '+0',
}

const digitosPorPais: Record<string, number> = {
  'Argentina': 10, 'Bolivia': 8, 'Chile': 9, 'Colombia': 10,
  'Costa Rica': 8, 'Cuba': 8, 'Ecuador': 9, 'El Salvador': 8,
  'Guatemala': 8, 'Honduras': 8, 'Mexico': 10, 'Nicaragua': 8,
  'Panama': 8, 'Paraguay': 9, 'Peru': 9, 'Puerto Rico': 10,
  'Republica Dominicana': 10, 'Uruguay': 9, 'Venezuela': 10,
  'Espana': 9, 'Estados Unidos': 10, 'Otro': 6,
}

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
  codigoPais: string
  telefono: string
}

export default function Comunidad() {
  const navigate = useNavigate()
  const [form, setForm] = React.useState<FormState>({
    nombre: '',
    email: '',
    profesion: '',
    pais: '',
    codigoPais: '',
    telefono: '',
  })
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [errorTelefono, setErrorTelefono] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'pais') {
      setForm((prev) => ({ ...prev, pais: value, codigoPais: codigosPais[value] || '' }))
    } else if (name === 'telefono') {
      const soloPermitido = value.replace(/[^0-9\s]/g, '')
      setForm((prev) => ({ ...prev, telefono: soloPermitido }))
      setErrorTelefono('')
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const validate = (): string | null => {
    if (!form.nombre.trim()) return 'El nombre es obligatorio.'
    if (!form.email.trim()) return 'El email es obligatorio.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Ingresa un email valido.'
    if (!form.profesion.trim()) return 'La profesion es obligatoria.'
    if (!form.pais) return 'Selecciona un pais.'

    const soloDigitos = form.telefono.replace(/\D/g, '')
    const digitosEsperados = digitosPorPais[form.pais] || 6
    if (!soloDigitos) {
      setErrorTelefono('📱 Ingresa tu número de teléfono para continuar.')
      return 'telefono_error'
    }
    if (soloDigitos.length < digitosEsperados) {
      setErrorTelefono(`📱 El número de ${form.pais} debe tener ${digitosEsperados} dígitos. Solo ingresaste ${soloDigitos.length}, te faltan ${digitosEsperados - soloDigitos.length}.`)
      return 'telefono_error'
    }
    setErrorTelefono('')
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorTelefono('')
    const validationError = validate()
    if (validationError) {
      if (validationError !== 'telefono_error') setError(validationError)
      return
    }

    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/community-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          profesion: form.profesion.trim(),
          pais: form.pais,
          telefono: form.codigoPais + form.telefono.replace(/\D/g, '').trim(),
        }),
      })

      if (res.ok) {
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

                <div className="grid gap-2">
                  <span className="text-sm text-secondary-700">Número de teléfono</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={form.codigoPais || '+'}
                      className="h-11 w-20 rounded-xl border border-secondary-200 bg-paper px-3 text-sm text-center focus:outline-none"
                    />
                    <input
                      name="telefono"
                      type="tel"
                      inputMode="numeric"
                      placeholder={`Ej: ${Array((digitosPorPais[form.pais] || 9) + 1).join('9')}`}
                      value={form.telefono}
                      onChange={handleChange}
                      className="h-11 flex-1 rounded-xl border border-secondary-200 bg-paper px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neurablue-500"
                    />
                  </div>
                  {errorTelefono && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <span>⚠️</span> {errorTelefono}
                    </p>
                  )}
                </div>

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
