import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import Button from './Button'
import { config } from '../config'

function NavItem({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'text-sm font-medium transition ' + (isActive ? 'text-neurablue-700' : 'text-secondary-700 hover:text-ink')
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [logoMissing, setLogoMissing] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-secondary-200 bg-paper/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-3">
            {!logoMissing ? (
              <img
                src={config.brand.logoSrc}
                alt={`${config.brand.company} logo`}
                className="h-10 w-auto"
                onError={() => setLogoMissing(true)}
              />
            ) : (
              <div className="h-9 w-9 rounded-xl bg-lilac-500/25 border border-purple-500/30 grid place-items-center">
                <span className="font-black text-purple-600">N</span>
              </div>
            )}
            <div className="leading-tight">
              {logoMissing && <div className="font-extrabold tracking-tight">{config.brand.company}</div>}
              <div className="text-xs text-secondary-600">{config.brand.tagline}</div>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            <NavItem to="/">Empresa</NavItem>
            <NavItem to="/academy">Academy</NavItem>
            <NavItem to="/reto-21-dias">Reto</NavItem>
            <NavItem to="/sorteo">Sorteo</NavItem>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={config.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
