const whatsappNumber = '51982859073'

export type ContactIntent = 'proyecto' | 'formacion' | 'academy' | 'alianza'
const messages: Record<ContactIntent, string> = {
  proyecto: 'Hola Neuracode, quiero conversar sobre un proyecto de IA, automatización o software.',
  formacion: 'Hola Neuracode, quiero información sobre formación corporativa para mi equipo.',
  academy: 'Hola Neuracode, quiero conocer los próximos programas de Academy.',
  alianza: 'Hola Neuracode, quiero conversar sobre una alianza.',
}
export const whatsappUrl = (intent: ContactIntent = 'proyecto') => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[intent])}`
export const config = {
  brand: { company: 'Neuracode', academy: 'Neuracode Academy', tagline: 'IA, automatización y software con criterio.', logoSrc: '/logo-neuracode-horizontal.png', isologoSrc: '/isologo-neuracode.png', email: 'contact@neuracode.dev' },
  socials: {
    neuracode: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/neuracodelatam/' },
      { label: 'Instagram', url: 'https://www.instagram.com/neuracode.dev/' },
      { label: 'Facebook', url: 'https://www.facebook.com/neuracode/' },
    ],
    jack: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jackaguilarc/' },
      { label: 'Instagram', url: 'https://www.instagram.com/jacktonyac/' },
      { label: 'TikTok', url: 'https://www.tiktok.com/@jacktonyac' },
      { label: 'Facebook', url: 'https://www.facebook.com/jack.tony.1804/' },
    ],
    academy: [
      { label: 'Instagram', url: 'https://www.instagram.com/neuracode0/' },
      { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61592205880028' },
    ],
  },
}
