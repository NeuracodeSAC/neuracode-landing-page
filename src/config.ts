const whatsappNumber = '51982859073'
const wa = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

export const config = {
  brevo: {
    apiKey: import.meta.env.VITE_BREVO_API_KEY as string || '',
    listId: import.meta.env.VITE_BREVO_LIST_ID as string || '',
  },
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
    schedule: 'Lun · Mié · Vie — 8:00 PM (hora Perú)',
    nextDate: 'Miércoles 26 de marzo · 8:00 PM',
    topic: 'IA Práctica para tu Trabajo',
  },
  upcomingLives: [
    { dia: 'Miércoles', fecha: '26 marzo', hora: '8:00 PM', tema: 'IA Práctica para tu Trabajo', esProximo: true },
    { dia: 'Viernes',   fecha: '28 marzo', hora: '8:00 PM', tema: 'Q&A: Resolvemos tus casos con IA en vivo', esProximo: false },
    { dia: 'Lunes',     fecha: '31 marzo', hora: '8:00 PM', tema: 'Excel + IA: de 2 horas a 5 minutos', esProximo: false },
  ],
  links: {
    whatsapp: wa('Hola NeuraCode, quiero informacion general.'),
    whatsappComunidad: wa('Hola NeuraCode, quiero unirme a la comunidad Neuracode IA.'),
    whatsappAgencia: wa('Hola NeuraCode, quiero un diagnostico gratuito para mi negocio.'),
    whatsappAcademyInfo: wa('Hola NeuraCode, quiero informacion de la Academy.'),
    whatsappAcademyJoin: wa('Hola NeuraCode, quiero participar en la Academy.'),
    whatsappRetoInfo: wa('Hola NeuraCode, quiero informacion del Reto 21 Dias.'),
    whatsappRetoJoin: wa('Hola NeuraCode, quiero participar en el Reto 21 Dias.'),
    retoFormAction: import.meta.env.VITE_FORMSPREE_RETO_ID ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_RETO_ID}` : '',
    giveawayInstagram: '#',
    giveawayFacebook: '#',
    checkout: '#',
    instagram: 'https://www.instagram.com/neuracode.dev/',
    facebook: 'https://www.facebook.com/neuracode',
    tiktok: 'https://www.tiktok.com/@jackdeneuracode',
  },
  giveaway: {
    dateLabel: '11 de marzo',
    prizes: {
      tech: 'Amazon Alexa Echo Dot',
      mentoring: 'Mentoría Estratégica 1-a-1 (Diseño de Sistema y MVP)',
    }
  }
}
