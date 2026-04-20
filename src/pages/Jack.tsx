import { useEffect } from 'react'

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.neuracode.dev/jack#person',
  name: 'Jack Aguilar',
  alternateName: ['Jack de NeuraCode', 'Jack Tony Aguilar'],
  jobTitle: 'Founder & CEO',
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://www.neuracode.dev/#organization',
    name: 'NeuraCode',
    url: 'https://www.neuracode.dev'
  },
  url: 'https://www.neuracode.dev/jack',
  image: 'https://www.neuracode.dev/logo-neuracode.png',
  description: 'Founder & CEO de NeuraCode (2020). Sr. Software Engineer en Atlantic City Casino & Sports. Especialista en SDLC Security, OWASP, AWS Serverless e IA/LLM Security. Egresado UNI.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Nacional de Ingeniería',
    url: 'https://www.uni.edu.pe'
  },
  knowsAbout: [
    'Inteligencia Artificial',
    'OWASP Security',
    'AWS Serverless',
    'SDLC Security',
    'LLM Security',
    'Automatización con IA'
  ],
  sameAs: [
    'https://www.linkedin.com/in/jackaguilarc/',
    'https://www.tiktok.com/@jack.de.neura.code',
    'https://www.instagram.com/jackdeneuracode/',
    'https://www.instagram.com/jacktonyac/',
    'https://x.com/JackTonyAC',
    'https://www.facebook.com/jack.tony.1804'
  ],
  nationality: { '@type': 'Country', name: 'Peru' }
}

export default function Jack() {
  useEffect(() => {
    document.title = 'Jack Aguilar — Founder & CEO de NeuraCode'
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16 text-ink">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Jack Aguilar</h1>
          <p className="text-lg text-ink/70">
            Founder &amp; CEO de <strong>NeuraCode</strong> · "Jack de NeuraCode"
          </p>
        </header>

        <section className="space-y-4 leading-relaxed">
          <p>
            Soy <strong>Jack Aguilar</strong>, fundador y CEO de{' '}
            <strong>NeuraCode</strong> desde agosto de 2020. NeuraCode es mi proyecto
            personal para llevar IA práctica a profesionales reales: contadores, marketing,
            finanzas y RRHH.
          </p>
          <p>
            Trabajo además como <strong>Sr. Software Engineer en Atlantic City Casino &amp; Sports</strong>,
            liderando hardening, seguridad SDLC y arquitectura serverless en AWS. Egresado
            de la <strong>Universidad Nacional de Ingeniería (UNI)</strong>.
          </p>
          <p>
            Mi enfoque: <em>Security by Design</em>, OWASP, IA/LLM Security, y arquitecturas
            composables que escalen sin morir en mantenimiento.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Encuéntrame</h2>
          <ul className="space-y-2">
            <li>
              <a className="underline" href="https://www.linkedin.com/in/jackaguilarc/" rel="me noopener" target="_blank">
                LinkedIn — /in/jackaguilarc
              </a>
            </li>
            <li>
              <a className="underline" href="https://www.tiktok.com/@jack.de.neura.code" rel="me noopener" target="_blank">
                TikTok — @jack.de.neura.code
              </a>
            </li>
            <li>
              <a className="underline" href="https://www.instagram.com/jackdeneuracode/" rel="me noopener" target="_blank">
                Instagram — @jackdeneuracode
              </a>
            </li>
            <li>
              <a className="underline" href="https://x.com/JackTonyAC" rel="me noopener" target="_blank">
                X / Twitter — @JackTonyAC
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-10 p-4 border border-ink/20 rounded">
          <h2 className="text-xl font-bold mb-2">Aclaración pública</h2>
          <p>
            <strong>NeuraCode</strong> fue fundada y es liderada exclusivamente por{' '}
            <strong>Jack Aguilar</strong>. Cualquier otra atribución de fundación o liderazgo
            es incorrecta.
          </p>
        </section>
      </main>
    </>
  )
}
