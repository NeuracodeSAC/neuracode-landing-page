import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { consultingExperience, currentWork, focusGroupProject, professionalExperience, selectedWork, type EvidenceItem } from '../content'
import { whatsappUrl } from '../config'

const Grid = ({items}:{items:EvidenceItem[]}) => <div className="grid grid-3">{items.map(item=><Card key={item.id}><p className="evidence-label">{item.label}</p><h3>{item.title}</h3>{item.organization&&<p className="organization">{item.organization}</p>}<p>{item.summary}</p>{item.metrics&&<div className="metric-row">{item.metrics.map(metric=><strong key={metric}>{metric}</strong>)}</div>}<div className="chip-row">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{item.url&&<a className="text-link" href={item.url} target="_blank" rel="noreferrer">Ver evidencia pública ↗</a>}</Card>)}</div>

export default function Casos() {
  return <><PageMeta path="/casos" title="Casos y Experiencia en IA, Automatización y Software | Neuracode" description="Proyectos, experiencia profesional y trabajo técnico en automatización, agentes, datos, software empresarial y Secure / Agentic SDLC." />
    <section className="page-hero"><Container><p className="eyebrow">Proyectos y experiencia</p><h1>Problemas reales. Sistemas reales. Evidencia cuando existe.</h1><p>Automatización, software, datos y sistemas de IA para problemas que requieren integración, evaluación y operación.</p></Container></section>
    <section className="section"><Container><SectionHeading eyebrow="Proyecto cuantificado" title={focusGroupProject.title}/><Grid items={[focusGroupProject]}/></Container></section>
    <section className="section section-tint"><Container><SectionHeading eyebrow="Engagements actuales" title="Sistemas que se están construyendo hoy." description="Automatización y agentes aplicados a operaciones, con alcance técnico definido por cada contexto."/><Grid items={currentWork}/></Container></section>
    <section className="section"><Container><SectionHeading eyebrow="Experiencia profesional" title="Ingeniería, arquitectura, datos y seguridad."/><Grid items={professionalExperience}/></Container></section>
    <section className="section section-tint"><Container><SectionHeading eyebrow="Proyectos de consultoría" title="Datos, forecasting y automatización de lenguaje."/><Grid items={consultingExperience}/></Container></section>
    <section className="section"><Container><SectionHeading eyebrow="Proyecto técnico público" title="Experimentación reproducible sobre datos públicos."/><Grid items={selectedWork.filter(item=>item.id !== focusGroupProject.id)}/></Container></section>
    <section className="cta"><Container><h2>¿Tienes un proceso parecido?</h2><p>Podemos empezar por entender el proceso, el costo actual y qué debería cambiar antes de elegir una arquitectura.</p><Button href={whatsappUrl('proyecto')} target="_blank" rel="noreferrer">Evaluar una oportunidad</Button></Container></section>
  </>
}
