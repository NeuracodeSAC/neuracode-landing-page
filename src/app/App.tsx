import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './SiteLayout'
import Home from '../pages/Home'
import Academy from '../pages/Academy'
import Giveaway from '../pages/Giveaway'
import Reto21Dias from '../pages/Reto21Dias'
import NotFound from '../pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/reto-21-dias" element={<Reto21Dias />} />
        <Route path="/sorteo" element={<Giveaway />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  )
}
