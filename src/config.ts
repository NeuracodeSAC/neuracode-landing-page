const whatsappNumber = '51982859073'
const wa = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

export const config = {
  formspree: {
    id: import.meta.env.VITE_FORMSPREE_ID as string || '',
  },
  pdfGuideUrl: import.meta.env.VITE_PDF_GUIDE_URL as string || '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID as string || '',
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID as string || '',
  zoomLink: import.meta.env.VITE_ZOOM_LINK as string || '',
  brand: {
    company: 'NeuraCode',
    academy: 'NeuraCode Academy',
    tagline: 'IA práctica para tu trabajo.',
    logoSrc: '/logo-neuracodee.png',
    email: 'contact@neuracode.dev',
  },
  live: {
    schedule: 'Miércoles — 8:00 PM (hora Perú)',
    nextDate: 'HOY Miércoles 25 de marzo · 8:00 PM',
    topic: 'Demo EN VIVO: IA que Hace tu Excel, Emails y Reportes en Segundos',
  },
  upcomingLives: [
    { dia: 'Miércoles', fecha: '25 marzo', hora: '8:00 PM', tema: 'Demo EN VIVO: IA que Hace tu Excel, Emails y Reportes en Segundos', esProximo: true },
    { dia: 'Miércoles', fecha: '1 abril', hora: '8:00 PM', tema: 'IA para Emails y Comunicación Profesional', esProximo: false },
    { dia: 'Miércoles', fecha: '8 abril', hora: '8:00 PM', tema: 'Caso Real: Automatización con IA en una PYME', esProximo: false },
  ],
  links: {
    whatsapp: wa('Hola NeuraCode, quiero informacion general.'),
    whatsappComunidad: wa('Hola NeuraCode, quiero unirme a la comunidad Neuracode IA.'),
    whatsappAgencia: wa('Hola NeuraCode, quiero un diagnostico gratuito para mi negocio.'),
    whatsappAcademyInfo: wa('Hola NeuraCode, quiero informacion de la Academy.'),
    whatsappAcademyJoin: wa('Hola NeuraCode, quiero participar en la Academy.'),
    whatsappRetoInfo: wa('Hola NeuraCode, quiero informacion del mini-curso de IA.'),
    whatsappRetoJoin: wa('Hola NeuraCode, quiero inscribirme en el mini-curso de IA.'),
    retoFormAction: '',
    giveawayInstagram: '#',
    giveawayFacebook: '#',
    checkout: '#',
    instagram: 'https://www.instagram.com/neuracode.dev/',
    facebook: 'https://www.facebook.com/neuracode',
    tiktok: 'https://www.tiktok.com/@jackdeneuracode',
  },
  giveaway: {
    dateLabel: 'Próximamente',
    prizes: {
      tech: 'Por anunciar',
      mentoring: 'Por anunciar',
    }
  }
}
