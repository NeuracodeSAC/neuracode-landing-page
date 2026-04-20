import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import Card from '../components/Card'
import { config } from '../config'

// ── Helpers ────────────────────────────────────────────────────────────────

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-12 w-12 rounded-2xl border border-secondary-200 bg-paper hover:bg-secondary-50 grid place-items-center transition"
    >
      {children}
    </a>
  )
}

// ── Section: Hero ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-secondary-200">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(46,118,229,0.12),transparent_60%)]" />
      <Container>
        <div className="py-16 sm:py-24 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neurablue-200 bg-neurablue-50 px-3 py-1 text-xs text-neurablue-700 font-medium">
            <span className="h-2 w-2 rounded-full bg-neurablue-500 animate-pulse" />
            Live gratis · Miércoles 8PM Peru
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
            No te enseñamos a programar.{' '}
            <span className="text-neurablue-500">
              Te enseñamos a usar IA para que NO necesites programar.
            </span>
          </h1>

          <p className="mt-5 text-secondary-700 text-lg sm:text-xl leading-relaxed">
            Demos reales de IA aplicada a tu trabajo diario — para contadores,
            marketing, recursos humanos y gerentes de PYME en LATAM.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/comunidad">
              Descarga los prompts del live — gratis
            </Button>
            <Button
              variant="secondary"
              href={config.links.whatsappComunidad}
              target="_blank"
              rel="noreferrer"
            >
              Únete a la comunidad WA
            </Button>
          </div>

          <p className="mt-4 text-xs text-secondary-500">
            Gratis. Sin spam. Puedes salir cuando quieras.
          </p>
        </div>
      </Container>
    </section>
  )
}

// ── Section: Auditoría EG2026 (Hero block) ────────────────────────────────

function AuditoriaHero() {
  return (
    <section className="relative overflow-hidden border-b border-secondary-200 bg-[#faf7f2]">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(176,23,31,0.09),transparent_60%)]" />
      <Container>
        <div className="py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                Análisis en vivo · Neuracode
              </div>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.02]">
                Algo no{' '}
                <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>cuadra.</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-secondary-800 leading-relaxed">
                Auditamos mesa por mesa el escrutinio ONPE de las{' '}
                <strong>Elecciones Generales 2026</strong>. SHA-256 por captura.
                Código abierto. Cualquiera puede verificarlo.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { v: '4,703', l: 'mesas faltantes' },
                  { v: '566K', l: 'votos sin cuadrar' },
                  { v: '13,624', l: 'votos decide 2° puesto' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white border border-secondary-200 p-3 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-red-700 leading-none">{s.v}</div>
                    <div className="mt-1 text-xs text-secondary-600 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/auditoria" className="inline-flex items-center justify-center rounded-2xl bg-red-700 hover:bg-red-800 text-white px-5 py-3 text-sm font-bold transition">
                  Ver análisis completo →
                </Link>
                <a
                  href="https://jackthony.github.io/auditoria-eg2026/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-secondary-200 bg-white hover:bg-secondary-50 text-secondary-800 px-5 py-3 text-sm font-semibold transition"
                >
                  Dashboard en vivo
                </a>
              </div>

              <p className="mt-4 text-xs text-secondary-500">
                Por <strong>Neuracode</strong> · Coautoría: Jack Aguilar · Sin afiliación política
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

// ── Section: Para quién ────────────────────────────────────────────────────

const PERFILES = [
  {
    emoji: '🧾',
    rol: 'Contadores y finanzas',
    descripcion: 'Automatiza reportes, analiza datos en Excel y resume documentos en segundos.',
  },
  {
    emoji: '📢',
    rol: 'Marketing y ventas',
    descripcion: 'Escribe emails, posts y propuestas comerciales 10x más rápido con IA.',
  },
  {
    emoji: '👥',
    rol: 'Recursos Humanos',
    descripcion: 'Redacta evaluaciones, analiza CVs y crea comunicaciones internas al instante.',
  },
  {
    emoji: '🏢',
    rol: 'Gerentes de PYME',
    descripcion: 'Toma mejores decisiones con análisis automático de datos y reportes listos.',
  },
]

function ParaQuien() {
  return (
    <section className="py-14 sm:py-20 border-b border-secondary-200">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">Para quién es</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">
            IA práctica para profesionales reales
          </h2>
          <p className="mt-3 text-secondary-700">
            No necesitas saber programar. Solo necesitas querer trabajar más inteligente.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERFILES.map((p) => (
            <Card key={p.rol} className="text-center p-6">
              <div className="text-4xl mb-3" aria-hidden="true">{p.emoji}</div>
              <div className="font-bold text-sm">{p.rol}</div>
              <p className="mt-2 text-sm text-secondary-700 leading-relaxed">{p.descripcion}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ── Section: Qué aprenderás ────────────────────────────────────────────────

const PRODUCTOS = [
  {
    badge: 'GRATIS',
    badgeColor: 'bg-green-100 text-green-700',
    nombre: 'Live semanal',
    descripcion: 'Demos en vivo de IA aplicada a tu trabajo. Miércoles 8PM Peru por Zoom.',
    cta: 'Unirme al próximo live',
    href: '/live',
    interno: true,
  },
  {
    badge: 'GRATIS',
    badgeColor: 'bg-green-100 text-green-700',
    nombre: 'Prompts del live + guía por profesión',
    descripcion: 'Los prompts exactos que usamos en cada live + 7 adicionales para tu rol.',
    cta: 'Descargar gratis',
    href: '/comunidad',
    interno: true,
  },
  {
    badge: 'GRATIS',
    badgeColor: 'bg-green-100 text-green-700',
    nombre: 'Workshop quincenal',
    descripcion: '"Automatiza tu Primera Tarea con IA en 60 Minutos" — hands-on por Zoom.',
    cta: 'Registrarme',
    href: config.links.whatsappComunidad,
    interno: false,
  },
  {
    badge: 'S/ 29',
    badgeColor: 'bg-neurablue-100 text-neurablue-700',
    nombre: 'Elimina 10 Horas de Trabajo Manual con IA',
    descripcion: '5 módulos de video: reportes, emails, documentos y análisis — sin programar.',
    cta: 'Próximamente',
    href: config.links.whatsappAcademyInfo,
    interno: false,
  },
]

function QueAprenderas() {
  return (
    <section className="py-14 sm:py-20 border-b border-secondary-200">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">Lo que ofrecemos</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">
            Empieza gratis. Avanza a tu ritmo.
          </h2>
          <p className="mt-3 text-secondary-700">
            Todo comienza con contenido gratuito. Sin presión, sin riesgo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTOS.map((p) => (
            <Card key={p.nombre} className="flex flex-col p-5">
              <span className={`self-start text-xs font-bold px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                {p.badge}
              </span>
              <div className="mt-3 font-bold leading-snug">{p.nombre}</div>
              <p className="mt-2 text-sm text-secondary-700 leading-relaxed flex-1">{p.descripcion}</p>
              <div className="mt-4">
                {p.interno ? (
                  <Link
                    to={p.href}
                    className="text-sm font-semibold text-neurablue-600 hover:text-neurablue-800 transition"
                  >
                    {p.cta} →
                  </Link>
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-neurablue-600 hover:text-neurablue-800 transition"
                  >
                    {p.cta} →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ── Section: Próximo Live ──────────────────────────────────────────────────

function ProximoLive() {
  const zoomReady = config.zoomLink && !config.zoomLink.includes('TODO')

  return (
    <section className="py-14 sm:py-20 border-b border-secondary-200 bg-secondary-50/50">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            PRÓXIMO LIVE
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
            {config.live.topic}
          </h2>

          <p className="mt-2 text-neurablue-600 font-semibold text-lg">
            {config.live.nextDate}
          </p>

          <p className="mt-4 text-secondary-700 leading-relaxed">
            Demos reales en pantalla: cómo usar IA para Excel, emails y documentos —
            sin instalar nada, sin programar. Solo tú, Claude y tu trabajo del día a día.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {zoomReady ? (
              <Button href={config.zoomLink} target="_blank" rel="noreferrer">
                Unirme al live gratis
              </Button>
            ) : (
              <Button href={config.links.whatsappComunidad} target="_blank" rel="noreferrer">
                Avísame del próximo live
              </Button>
            )}
            <Button variant="secondary" href="/live">
              Ver todos los lives
            </Button>
          </div>

          <p className="mt-4 text-xs text-secondary-500">
            {config.live.schedule} · Por Zoom · Gratis
          </p>
        </div>
      </Container>
    </section>
  )
}

// ── Section: CTA WhatsApp ──────────────────────────────────────────────────

function CTAWhatsApp() {
  return (
    <section className="py-14 sm:py-20 border-b border-secondary-200">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-4" aria-hidden="true">💬</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Únete a la comunidad{' '}
            <span className="text-[#25D366]">Neuracode IA</span>
          </h2>
          <p className="mt-3 text-secondary-700 leading-relaxed">
            Tips de IA todos los días, avisos de lives, respuestas a tus preguntas
            y una comunidad de profesionales que están usando IA en su trabajo real.
          </p>
          <div className="mt-6">
            <Button
              href={config.links.whatsappComunidad}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 inline-block" fill="currentColor" aria-hidden="true">
                <path d="M20.5 3.5A10 10 0 0 0 4.2 17.7L3 22l4.5-1.2A10 10 0 1 0 20.5 3.5Zm-8.5 17a8 8 0 0 1-4-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 20.5Zm4.4-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.9-.1.1-.3.2-.5.1-1.3-.5-2.4-1.4-3.2-2.6-.1-.2 0-.4.1-.5l.6-.7c.1-.2.1-.4 0-.6-.1-.2-.6-1.3-.7-1.5-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.5.5-.8 1.1-.8 1.8 0 .4.1.8.3 1.2.7 1.7 2.3 3.4 4.4 4.3.6.3 1.1.4 1.5.4.6 0 1.1-.2 1.5-.6.2-.2.5-.8.6-1.1.1-.2.1-.4 0-.6Z" />
              </svg>
              Unirme a WhatsApp Community — gratis
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ── Section: Redes Sociales ────────────────────────────────────────────────

function RedesSociales() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">Síguenos</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
            Contenido de IA todos los días
          </h2>
          <p className="mt-2 text-secondary-700 text-sm">
            5 reels + 1 live por semana en TikTok e Instagram.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            {/* TikTok */}
            <SocialIcon href={config.links.tiktok} label="TikTok @jackdeneuracode">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M19.6 3.3A4.9 4.9 0 0 1 14.8 0h-3.4v16.4a2.9 2.9 0 1 1-2-2.8V10a6.3 6.3 0 1 0 5.4 6.4V8.1a8.3 8.3 0 0 0 4.8 1.5V6.2a4.9 4.9 0 0 1-3-2.9Z" />
              </svg>
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon href={config.links.instagram} label="Instagram @neuracode.dev">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#E1306C]" fill="currentColor" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.8 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
              </svg>
            </SocialIcon>

            {/* Facebook */}
            <SocialIcon href={config.links.facebook} label="Facebook Neuracode">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1877F2]" fill="currentColor" aria-hidden="true">
                <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v5h3v-5h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
              </svg>
            </SocialIcon>

            {/* WhatsApp */}
            <SocialIcon href={config.links.whatsapp} label="WhatsApp Neuracode">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25D366]" fill="currentColor" aria-hidden="true">
                <path d="M20.5 3.5A10 10 0 0 0 4.2 17.7L3 22l4.5-1.2A10 10 0 1 0 20.5 3.5Zm-8.5 17a8 8 0 0 1-4-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 20.5Zm4.4-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.9-.1.1-.3.2-.5.1-1.3-.5-2.4-1.4-3.2-2.6-.1-.2 0-.4.1-.5l.6-.7c.1-.2.1-.4 0-.6-.1-.2-.6-1.3-.7-1.5-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.5.5-.8 1.1-.8 1.8 0 .4.1.8.3 1.2.7 1.7 2.3 3.4 4.4 4.3.6.3 1.1.4 1.5.4.6 0 1.1-.2 1.5-.6.2-.2.5-.8.6-1.1.1-.2.1-.4 0-.6Z" />
              </svg>
            </SocialIcon>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs text-secondary-500">
            <span>@jackdeneuracode en TikTok</span>
            <span>·</span>
            <span>@neuracode.dev en Instagram</span>
            <span>·</span>
            <span>fb.com/neuracode</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div>
      <Hero />
      <AuditoriaHero />
      <ParaQuien />
      <QueAprenderas />
      <ProximoLive />
      <CTAWhatsApp />
      <RedesSociales />
    </div>
  )
}
