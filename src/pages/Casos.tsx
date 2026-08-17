import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { consultingExperience, currentWork, focusGroupProject, professionalExperience, selectedWork, type EvidenceItem } from '../content'
import { whatsappUrl } from '../config'

const Grid = ({items}:{items:EvidenceItem[]}) => <div className="grid grid-3">{items.map(item=><Card key={item.id}><p className="evidence-label">{item.label}</p><h3>{item.title}</h3>{item.organization&&<p className="organization">{item.organization}</p>}<p>{item.summary}</p>{item.metrics&&<div className="metric-row">{item.metrics.map(metric=><strong key={metric}>{metric}</strong>)}</div>}<div className="chip-row">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{item.url&&<a className="text-link" href={item.url} target="_blank" rel="noreferrer">Ver evidencia pública ↗</a>}</Card>)}</div>
const FocusGroupDetail=()=> <div className="focus-detail"><p className="organization">Investigación cualitativa · experiencia de consultoría</p><p>Automatización de un flujo de investigación cualitativa con 50 entrevistas de 15–25 minutos, desde transcripción hasta generación de insights y resultados, manteniendo validación experta antes de consolidar los hallazgos.</p><div className="grid grid-3"><Card><h3>Volumen y tiempo</h3><p>50 entrevistas · 15–25 min por entrevista</p><p><strong>Manual:</strong> ~1 semana</p><p><strong>Asistido por IA:</strong> 3–4 días, incluyendo validaciones y correcciones.</p></Card><Card><h3>Costos del flujo</h3><p>Baseline manual de transcripción: ~S/8,900</p><p>Consumo real de API: US$154</p><p>Implementación técnica estimada: ~S/2,000</p></Card><Card><h3>Resultado</h3><p>El costo del flujo quedó más de 50% por debajo del baseline manual estimado de transcripción, incluso considerando la implementación, y amplió el alcance hasta análisis, insights y resultados.</p></Card></div><div className="chip-row">{focusGroupProject.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>

export default function Casos() {
  return <><PageMeta path="/casos" title="Casos y Experiencia en IA, Automatización y Software | Neuracode" description="Proyectos, experiencia profesional y trabajo técnico en automatización, agentes, datos, software empresarial y Secure / Agentic SDLC." />
    <section className="page-hero"><Container><p className="eyebrow">Proyectos y experiencia</p><h1>Problemas reales. Sistemas reales. Evidencia cuando existe.</h1><p>Automatización, software, datos y sistemas de IA para problemas que requieren integración, evaluación y operación.</p></Container></section>
    <section className="section"><Container><SectionHeading eyebrow="Proyecto cuantificado" title={focusGroupProject.title}/><FocusGroupDetail/></Container></section>
    <section className="section section-tint"><Container><SectionHeading eyebrow="Engagements actuales" title="Sistemas que se están construyendo hoy." description="Automatización y agentes aplicados a operaciones, con alcance técnico definido por cada contexto."/><Grid items={currentWork}/></Container></section>
    <section className="section"><Container><SectionHeading eyebrow="Experiencia profesional" title="Ingeniería, arquitectura, datos y seguridad."/><Grid items={professionalExperience}/></Container></section>
    <section className="section section-tint"><Container><SectionHeading eyebrow="Proyectos de consultoría" title="Datos, forecasting y automatización de lenguaje."/><Grid items={consultingExperience}/></Container></section>
    <section className="section"><Container><SectionHeading eyebrow="Proyecto técnico público" title="Experimentación reproducible sobre datos públicos."/><Grid items={selectedWork.filter(item=>item.id !== focusGroupProject.id)}/></Container></section>
    <section className="cta"><Container><h2>¿Tienes un proceso parecido?</h2><p>Podemos empezar por entender el proceso, el costo actual y qué debería cambiar antes de elegir una arquitectura.</p><Button href={whatsappUrl('proyecto')} target="_blank" rel="noreferrer">Evaluar una oportunidad</Button></Container></section>
  </>
}
