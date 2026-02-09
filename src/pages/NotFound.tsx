import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold">Página no encontrada</h1>
          <p className="mt-3 text-secondary-700">La ruta que buscas no existe.</p>
          <div className="mt-6">
            <Button href="/">Volver al inicio</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
