import { Link } from 'react-router-dom'
import Container from './Container'
import { config } from '../config'
export default function Footer() {
  return <footer className="site-footer"><Container>
    <div className="footer-grid">
      <div><div className="footer-logo-plate"><img src="/isologo-neuracode-footer.png" alt="Neuracode" width="210" height="168"/></div><p>IA, automatización y software para empresas. Formación práctica mediante Neuracode Academy.</p></div>
      <div><h2>Explora</h2><Link to="/empresas">Empresas</Link><Link to="/academy">Academy</Link><Link to="/casos">Casos</Link><Link to="/jack-aguilar">Jack Aguilar</Link><Link to="/recursos">Recursos</Link><Link to="/contacto">Contacto</Link></div>
      <div><h2>Neuracode</h2>{config.socials.neuracode.map(link => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Neuracode.</span><span>Ingeniería antes que hype.</span></div>
  </Container></footer>
}
