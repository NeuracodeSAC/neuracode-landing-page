import React from 'react'

export default function SectionHeading({ eyebrow, title, description }:{
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-purple-600">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
      {description && <p className="mt-3 text-secondary-700">{description}</p>}
    </div>
  )
}
