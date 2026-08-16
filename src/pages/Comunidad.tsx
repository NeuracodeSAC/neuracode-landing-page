import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import { config } from '../config'
import { trackFBEvent, trackGAEvent } from '../utils/analytics'

export default function Comunidad() {
  const handleWhatsAppClick = () => {
    trackFBEvent('Lead')
    trackGAEvent('generate_lead', { method: 'whatsapp_community' })
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
              Únete a la Comunidad NeuraCode
            </h1>
            <p className="mt-4 text-secondary-700 text-lg">
              Conecta con profesionales que usan inteligencia artificial para mejorar su trabajo.
              Recibe avisos de lives, recursos y respuestas directamente por WhatsApp.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <div className="max-w-xl mx-auto">
            <SectionHeading
              eyebrow="Comunidad gratuita"
              title="Escríbenos por WhatsApp"
              description="Cuéntanos a qué te dedicas y te ayudaremos a elegir los recursos y próximos lives que más te sirvan."
            />

            <Card className="mt-8 text-center">
              <p className="text-secondary-700">
                No necesitas completar formularios ni compartir datos en esta página.
              </p>
              <Button
                href={config.links.whatsappComunidad}
                target="_blank"
                rel="noreferrer"
                onClick={handleWhatsAppClick}
                className="mt-6"
              >
                Hablar por WhatsApp
              </Button>
              <p className="mt-4 text-xs text-secondary-500">
                Se abrirá WhatsApp con un mensaje listo para enviar.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}
