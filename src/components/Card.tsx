import React from 'react'
import clsx from './clsx'

export default function Card({ children, className }:{ children: React.ReactNode, className?: string }) {
  return (
    <div className={clsx("rounded-2xl border border-secondary-200 bg-paper p-5 sm:p-6 shadow-lg shadow-secondary-900/10", className)}>
      {children}
    </div>
  )
}
