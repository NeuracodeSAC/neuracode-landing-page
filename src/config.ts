const whatsappNumber = '51982859073'
const wa = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

export const config = {
  brand: {
    company: 'NeuraCode',
    academy: 'NeuraCode Academy',
    tagline: 'Construimos sistemas reales.',
    logoSrc: '/logo-neuracodee.png',
  },
  links: {
    whatsapp: wa('Hola NeuraCode, quiero informacion general.'),
    whatsappAcademyInfo: wa('Hola NeuraCode, quiero informacion de la Academy.'),
    whatsappAcademyJoin: wa('Hola NeuraCode, quiero participar en la Academy.'),
    whatsappRetoInfo: wa('Hola NeuraCode, quiero informacion del Reto 21 Dias.'),
    whatsappRetoJoin: wa('Hola NeuraCode, quiero participar en el Reto 21 Dias.'),
    retoFormAction: 'https://formspree.io/f/REEMPLAZA_ID',
    giveawayInstagram: '#',
    giveawayFacebook: '#',
    checkout: '#',
    instagram: 'https://www.instagram.com/neuracode.dev/',
    facebook: 'https://www.facebook.com/neuracode',
  },
  giveaway: {
    dateLabel: '11 de marzo',
    prizes: {
      tech: 'Amazon Alexa Echo Dot',
      mentoring: 'Mentoría Estratégica 1-a-1 (Diseño de Sistema y MVP)',
    }
  }
}
