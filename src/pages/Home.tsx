import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { capabilities, principles, primaryEcosystems, technicalEcosystems } from '../content'
import { whatsappUrl } from '../config'

export default function Home() {
  return <><PageMeta path="/" title="Neuracode | Consultoría de IA, Automatización y Agentes" description="Diseñamos e implementamos automatización con IA, agentes, analítica y software para empresas. Discovery, pilotos, integración, evaluación y formación." />
    <section className="hero"><Container><div className="hero-grid"><div>
      <p className="eyebrow">Neuracode · Enterprise + Academy</p><h1>Integramos IA en <span>procesos reales de negocio.</span></h1>
      <p className="hero-copy">Diseñamos e implementamos automatizaciones, agentes, analítica y software con IA, desde discovery y pilotos hasta integración, evaluación y operación.</p>
      <div className="actions"><Button href={whatsappUrl('proyecto')} target="_blank" rel="noreferrer">Hablar sobre un proyecto</Button><Button to="/academy" variant="secondary">Explorar Academy</Button><Button to="/jack-aguilar" variant="ghost">Conoce a Jack Aguilar</Button></div>
    </div><div className="system-card" aria-label="Nuestro enfoque"><div className="system-line"><span>01</span><p><strong>Problema</strong> antes que herramienta</p></div><div className="system-line"><span>02</span><p><strong>Arquitectura</strong> suficiente y operable</p></div><div className="system-line"><span>03</span><p><strong>Evidencia</strong> antes que promesa</p></div><div className="system-line"><span>04</span><p><strong>Gobernanza</strong> proporcional al riesgo</p></div></div></div></Container></section>
    <section className="section"><Container><SectionHeading eyebrow="Capacidades Enterprise" title="Del proceso a un sistema que funciona." description="La tecnología se elige después de entender el contexto, los datos, las restricciones y el riesgo." /><div className="grid grid-4">{capabilities.map((item, i) => <Card key={item.title}><span className="card-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></Card>)}</div><Button to="/empresas" variant="secondary">Ver servicios para empresas</Button></Container></section>
    <section className="section ecosystem-section"><Container><SectionHeading eyebrow="Experiencia técnica" title="Ecosistemas que podemos integrar y evaluar." description="La tecnología aparece después de entender el problema, la arquitectura existente y las condiciones de operación."/><div className="chip-row chip-row-primary">{primaryEcosystems.map(item=><span key={item}>{item}</span>)}</div><div className="chip-row">{technicalEcosystems.map(item=><span key={item}>{item}</span>)}</div><p className="ecosystem-qualifier">Seleccionamos modelo, proveedor y arquitectura según el caso. No forzamos un LLM o un agente cuando una solución más simple es suficiente.</p></Container></section>
    <section className="section section-dark"><Container><SectionHeading eyebrow="Cómo decidimos" title="Ingeniería antes que hype." /><div className="principles">{principles.map((item, i) => <div key={item}><span>{i + 1}</span><p>{item}</p></div>)}</div></Container></section>
    <section className="section"><Container><div className="split"><div><p className="eyebrow">Neuracode Academy</p><h2>Aprender para aplicar, no para acumular teoría.</h2><p>Formación práctica para profesionales y equipos: fundamentos, AI Engineering, adopción responsable y construcción guiada.</p><Button to="/academy" variant="secondary">Conocer Academy</Button></div><div><p className="eyebrow">Autoridad técnica</p><h2>Build · Research · Teach</h2><p>Jack Aguilar conecta ingeniería de software, sistemas de IA, automatización, datos y seguridad con la realidad operativa del negocio.</p><Button to="/jack-aguilar" variant="secondary">Conocer a Jack</Button></div></div></Container></section>
    <section className="cta"><Container><p className="eyebrow">Primer paso</p><h2>Conversemos sobre el problema antes de elegir la solución.</h2><Button href={whatsappUrl('proyecto')} target="_blank" rel="noreferrer">Iniciar conversación</Button></Container></section>
  </>
}
