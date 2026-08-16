import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { whatsappUrl } from '../config'
export default function SiteLayout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return <div className="site-shell"><a className="skip-link" href="#content">Saltar al contenido</a><Navbar /><main id="content"><Outlet /></main><Footer />
    <a className="whatsapp-float" href={whatsappUrl('proyecto')} target="_blank" rel="noreferrer" aria-label="Conversar por WhatsApp"><span aria-hidden="true">WA</span></a>
  </div>
}
