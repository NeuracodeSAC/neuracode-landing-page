import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import Button from './Button'
import { config } from '../config'

function NavItem({ to, children, onClick }: { to: string, children: React.ReactNode, onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
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
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-secondary-200 bg-paper/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between gap-3 py-4 flex-wrap">
          <NavLink to="/" className="flex items-center gap-3">
            {!logoMissing ? (
              <img
                src={config.brand.logoSrc}
                alt={`${config.brand.company} logo`}
                className="h-12 w-auto"
                onError={() => setLogoMissing(true)}
              />
            ) : (
              <div className="h-9 w-9 rounded-xl bg-lilac-500/25 border border-purple-500/30 grid place-items-center">
                <span className="font-black text-purple-600">N</span>
              </div>
            )}
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">{config.brand.company}</div>
              <div className="text-xs text-secondary-600">{config.brand.tagline}</div>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            <NavItem to="/">Empresa</NavItem>
            <NavItem to="/academy">Academy</NavItem>
            <NavItem to="/reto-21-dias">Reto</NavItem>
            <NavItem to="/sorteo">Sorteo</NavItem>
            <NavItem to="/comunidad">Comunidad</NavItem>
          </nav>

          <div className="flex items-center gap-2">
            <Button className="px-3 sm:px-4 text-xs sm:text-sm" href={config.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</Button>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-secondary-200 text-secondary-700 hover:bg-secondary-50"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="text-lg leading-none">{menuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>

        <div className={menuOpen ? 'md:hidden pb-4' : 'md:hidden hidden'}>
          <nav className="flex flex-col gap-3 border-t border-secondary-200 pt-4">
            <NavItem to="/" onClick={() => setMenuOpen(false)}>Empresa</NavItem>
            <NavItem to="/academy" onClick={() => setMenuOpen(false)}>Academy</NavItem>
            <NavItem to="/reto-21-dias" onClick={() => setMenuOpen(false)}>Reto</NavItem>
            <NavItem to="/sorteo" onClick={() => setMenuOpen(false)}>Sorteo</NavItem>
            <NavItem to="/comunidad" onClick={() => setMenuOpen(false)}>Comunidad</NavItem>
          </nav>
        </div>
      </Container>
    </header>
  )
}
