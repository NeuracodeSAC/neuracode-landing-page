import Button from './Button'
import { type ContactIntent, whatsappUrl } from '../config'

type Props = {
  title: string
  description: string
  intent?: ContactIntent
  label?: string
}

export default function SectionCTA({ title, description, intent = 'proyecto', label = 'Agendar una conversación' }: Props) {
  return <aside className="section-cta" aria-label="Siguiente paso">
    <div>
      <p className="eyebrow">Siguiente paso</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <Button href={whatsappUrl(intent)} target="_blank" rel="noreferrer">{label}</Button>
  </aside>
}
