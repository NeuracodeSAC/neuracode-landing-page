import React from 'react'
import clsx from './clsx'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: 'a'
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as: 'button'
}

type Props = (AnchorProps | ButtonProps) & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button(props: Props) {
  const { variant = 'primary', className } = props
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]'
  const variants = {
    primary: 'bg-neurablue-500 hover:bg-neurablue-600 text-paper shadow-lg shadow-neurablue-500/25',
    secondary: 'bg-paper hover:bg-secondary-50 text-ink border border-secondary-300',
    ghost: 'bg-transparent hover:bg-secondary-100 text-secondary-700'
  }
  if (props.as === 'button') {
    const { as, className: _className, ...rest } = props
    return (
      <button className={clsx(base, variants[variant], className)} {...rest} />
    )
  }

  const { as, className: _className, ...rest } = props as AnchorProps
  return (
    <a className={clsx(base, variants[variant], className)} {...rest} />
  )
}
