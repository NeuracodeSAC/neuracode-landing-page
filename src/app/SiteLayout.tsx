import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { config } from '../config'

export default function SiteLayout() {
  const [showGiveaway, setShowGiveaway] = React.useState(true)
  const [slideIndex, setSlideIndex] = React.useState(1)

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 2)
    }, 10000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <a
        href={config.links.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 wa-float"
        aria-label="Abrir WhatsApp"
      >
        <div className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 grid place-items-center">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M20.5 3.5A10 10 0 0 0 4.2 17.7L3 22l4.5-1.2A10 10 0 1 0 20.5 3.5Zm-8.5 17a8 8 0 0 1-4-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 20.5Zm4.4-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.9-.1.1-.3.2-.5.1-1.3-.5-2.4-1.4-3.2-2.6-.1-.2 0-.4.1-.5l.6-.7c.1-.2.1-.4 0-.6-.1-.2-.6-1.3-.7-1.5-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.5.5-.8 1.1-.8 1.8 0 .4.1.8.3 1.2.7 1.7 2.3 3.4 4.4 4.3.6.3 1.1.4 1.5.4.6 0 1.1-.2 1.5-.6.2-.2.5-.8.6-1.1.1-.2.1-.4 0-.6Z" />
          </svg>
        </div>
      </a>

      {showGiveaway && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-paper shadow-2xl border border-secondary-200 overflow-hidden">
            <button
              type="button"
              className="absolute right-3 top-3 h-9 w-9 rounded-full bg-paper/90 border border-secondary-200 text-secondary-700 hover:bg-secondary-50"
              aria-label="Cerrar"
              onClick={() => setShowGiveaway(false)}
            >
              ×
            </button>
            {slideIndex === 1 && (
              <>
                <img src="/reto_21.png" alt="Reto 21 días" className="w-full h-auto" />
                <div className="p-4 flex flex-wrap gap-3 justify-center">
                  <a
                    href={config.links.whatsappRetoJoin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-[#25D366] text-white"
                  >
                    Ir a WhatsApp
                  </a>
                </div>
              </>
            )}
            {slideIndex === 0 && (
              <>
                <a
                  href={config.links.giveawayInstagram}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <img src="/sorteo_1.jpeg" alt="Sorteo NeuraCode" className="w-full h-auto" />
                </a>
                <div className="p-4 flex flex-wrap gap-3 justify-center">
                  <a
                    href={config.links.giveawayInstagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-[#E1306C] text-white"
                  >
                    Ver en Instagram
                  </a>
                  <a
                    href={config.links.giveawayFacebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-[#1877F2] text-white"
                  >
                    Ver en Facebook
                  </a>
                </div>
              </>
            )}
            <button
              type="button"
              onClick={() => setSlideIndex((prev) => (prev + 1) % 2)}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-secondary-200 bg-paper/90 text-secondary-700 hover:bg-secondary-50"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setSlideIndex((prev) => (prev + 1) % 2)}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-secondary-200 bg-paper/90 text-secondary-700 hover:bg-secondary-50"
              aria-label="Siguiente"
            >
              ›
            </button>
            <div className="pb-4 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSlideIndex(1)}
                className={slideIndex === 1 ? 'h-2 w-6 rounded-full bg-neurablue-500' : 'h-2 w-2 rounded-full bg-secondary-300'}
                aria-label="Reto 21 días"
              />
              <button
                type="button"
                onClick={() => setSlideIndex(0)}
                className={slideIndex === 0 ? 'h-2 w-6 rounded-full bg-neurablue-500' : 'h-2 w-2 rounded-full bg-secondary-300'}
                aria-label="Sorteo"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
