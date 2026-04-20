import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './SiteLayout'
import Home from '../pages/Home'
import Academy from '../pages/Academy'
import Comunidad from '../pages/Comunidad'
import ComunidadGracias from '../pages/ComunidadGracias'
import Live from '../pages/Live'
import Auditoria from '../pages/Auditoria'
import NotFound from '../pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/reto-21-dias" element={<Navigate to="/comunidad" replace />} />
        <Route path="/sorteo" element={<Navigate to="/comunidad" replace />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/comunidad/gracias" element={<ComunidadGracias />} />
        <Route path="/live" element={<Live />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  )
}
