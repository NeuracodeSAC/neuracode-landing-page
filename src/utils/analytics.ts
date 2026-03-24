declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function isConfigured(value: string | undefined): boolean {
  if (!value) return false
  return !value.includes('TODO')
}

export function initMetaPixel(): void {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID as string
  if (!isConfigured(pixelId)) return

  const queue: unknown[][] = []
  window.fbq = function (...args: unknown[]) {
    queue.push(args)
  }
  ;(window.fbq as unknown as { queue: unknown[][] }).queue = queue

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  window.fbq!('init', pixelId)
  window.fbq!('track', 'PageView')
}

export function initGA4(): void {
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string
  if (!isConfigured(measurementId)) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId)
}

export function trackFBEvent(eventName: string): void {
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName)
  }
}

export function trackGAEvent(eventName: string, params?: Record<string, string>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}
