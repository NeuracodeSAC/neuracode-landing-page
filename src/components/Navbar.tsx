import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Container from './Container'
import Button from './Button'
import { config, whatsappUrl } from '../config'

const links = [['/empresas', 'Empresas'], ['/academy', 'Academy'], ['/casos', 'Casos'], ['/jack-aguilar', 'Jack Aguilar'], ['/recursos', 'Recursos'], ['/contacto', 'Contacto']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  return <header className="site-header">
    <Container className="nav-wrap">
      <NavLink to="/" className="brand" aria-label="Neuracode, inicio">
        <img src={config.brand.logoSrc} alt="Neuracode" width="400" height="140" />
      </NavLink>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span><span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
      <nav id="primary-nav" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navegación principal">
        {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        <Button href={whatsappUrl('proyecto')} target="_blank" rel="noreferrer">Hablar sobre un proyecto</Button>
      </nav>
    </Container>
  </header>
}
