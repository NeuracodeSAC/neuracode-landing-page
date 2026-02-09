import React from 'react'
import clsx from './clsx'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant = 'primary', className, ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]'
  const variants = {
    primary: 'bg-neurablue-500 hover:bg-neurablue-600 text-paper shadow-lg shadow-neurablue-500/25',
    secondary: 'bg-paper hover:bg-secondary-50 text-ink border border-secondary-300',
    ghost: 'bg-transparent hover:bg-secondary-100 text-secondary-700'
  }
  return (
    <a className={clsx(base, variants[variant], className)} {...props} />
  )
}
