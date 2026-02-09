import React from 'react'
import Container from './Container'
import { config } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-secondary-200 bg-secondary-50/40">
      <Container>
        <div className="py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-extrabold">{config.brand.company}</div>
            <p className="mt-2 text-sm text-secondary-700">
              Consultoría y desarrollo de sistemas. {config.brand.academy}: formación práctica para construir MVPs con lógica y criterio.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Secciones</div>
            <ul className="space-y-1 text-secondary-700">
              <li><a className="hover:text-neurablue-700" href="/">Empresa</a></li>
              <li><a className="hover:text-neurablue-700" href="/academy">NeuraCode Academy</a></li>
              <li><a className="hover:text-neurablue-700" href="/reto-21-dias">Reto 21 dias</a></li>
              <li><a className="hover:text-neurablue-700" href="/sorteo">Sorteo</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Contacto</div>
            <ul className="space-y-1 text-secondary-700">
              <li><a className="hover:text-neurablue-700" href={config.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a className="hover:text-neurablue-700" href={config.links.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="hover:text-neurablue-700" href={config.links.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="pb-8 text-xs text-secondary-600">
          © {year} {config.brand.company}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
