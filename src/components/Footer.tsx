import React from 'react'
import Container from './Container'
import { config } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-secondary-200 bg-paper text-ink">
      <Container>
        <div className="py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="font-extrabold text-xl">{config.brand.company}</div>
            <p className="mt-3 text-sm text-secondary-700">
              Neuracode: Consultoría y formación práctica. Transformamos el SDLC en una ventaja competitiva para empresas y emprendedores.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                className="h-10 w-10 rounded-xl border border-secondary-200 bg-paper hover:bg-secondary-50 grid place-items-center transition"
                href={config.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25D366]" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 3.5A10 10 0 0 0 4.2 17.7L3 22l4.5-1.2A10 10 0 1 0 20.5 3.5Zm-8.5 17a8 8 0 0 1-4-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 20.5Zm4.4-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.9-.1.1-.3.2-.5.1-1.3-.5-2.4-1.4-3.2-2.6-.1-.2 0-.4.1-.5l.6-.7c.1-.2.1-.4 0-.6-.1-.2-.6-1.3-.7-1.5-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.5.5-.8 1.1-.8 1.8 0 .4.1.8.3 1.2.7 1.7 2.3 3.4 4.4 4.3.6.3 1.1.4 1.5.4.6 0 1.1-.2 1.5-.6.2-.2.5-.8.6-1.1.1-.2.1-.4 0-.6Z" />
                </svg>
              </a>
              <a
                className="h-10 w-10 rounded-xl border border-secondary-200 bg-paper hover:bg-secondary-50 grid place-items-center transition"
                href={config.links.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#E1306C]" fill="currentColor" aria-hidden="true">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.8 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                </svg>
              </a>
              <a
                className="h-10 w-10 rounded-xl border border-secondary-200 bg-paper hover:bg-secondary-50 grid place-items-center transition"
                href={config.links.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1877F2]" fill="currentColor" aria-hidden="true">
                  <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v5h3v-5h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold mb-3">Enlaces de interés</div>
            <ul className="space-y-2 text-secondary-700">
              <li><a className="hover:text-ink" href="/">Empresa</a></li>
              <li><a className="hover:text-ink" href="/academy">NeuraCode Academy</a></li>
              <li><a className="hover:text-ink" href="/reto-21-dias">Reto 21 días</a></li>
              <li><a className="hover:text-ink" href="/sorteo">Sorteo</a></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold mb-3">Contáctanos</div>
            <ul className="space-y-3 text-secondary-700">
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#25D366]" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 3.5A10 10 0 0 0 4.2 17.7L3 22l4.5-1.2A10 10 0 1 0 20.5 3.5Z" />
                </svg>
                <a className="hover:text-ink" href={config.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#E1306C]" fill="currentColor" aria-hidden="true">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
                </svg>
                <a className="hover:text-ink" href={config.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1877F2]" fill="currentColor" aria-hidden="true">
                  <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v5h3v-5h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
                </svg>
                <a className="hover:text-ink" href={config.links.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-6 text-xs text-secondary-600 border-t border-secondary-200 pt-4">
          © {year} {config.brand.company}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
