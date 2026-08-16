import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import clsx from './clsx'
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string; variant?: 'primary' | 'secondary' | 'ghost' }
export default function Button({ to, href, variant = 'primary', className, children, ...props }: Props) {
  const classes = clsx('button', `button--${variant}`, className)
  if (to) return <Link to={to} className={classes}>{children}</Link>
  return <a href={href} className={classes} {...props}>{children}</a>
}
