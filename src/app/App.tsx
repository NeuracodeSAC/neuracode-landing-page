import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './SiteLayout'
import Home from '../pages/Home'
import Empresas from '../pages/Empresas'
import Academy from '../pages/Academy'
import Casos from '../pages/Casos'
import Jack from '../pages/Jack'
import Recursos from '../pages/Recursos'
import Contacto from '../pages/Contacto'
import NotFound from '../pages/NotFound'
export default function App() {
  return <Routes><Route element={<SiteLayout />}>
    <Route path="/" element={<Home />} /><Route path="/empresas" element={<Empresas />} /><Route path="/academy" element={<Academy />} /><Route path="/casos" element={<Casos />} /><Route path="/jack-aguilar" element={<Jack />} /><Route path="/jack" element={<Navigate to="/jack-aguilar" replace />} /><Route path="/recursos" element={<Recursos />} /><Route path="/contacto" element={<Contacto />} />
    {['/reto-21-dias','/sorteo','/comunidad','/comunidad/gracias','/live'].map(path => <Route key={path} path={path} element={<Navigate to="/academy" replace />} />)}
    {['/equipo','/about','/founder','/ceo'].map(path => <Route key={path} path={path} element={<Navigate to="/jack-aguilar" replace />} />)}
    <Route path="/404" element={<NotFound />} /><Route path="*" element={<NotFound />} />
  </Route></Routes>
}
