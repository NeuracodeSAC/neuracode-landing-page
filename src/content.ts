export const capabilities = [
  { title: 'AI Automation', text: 'Convertimos procesos repetitivos en flujos confiables, medibles y operables.' },
  { title: 'AI / Agentic Systems', text: 'Diseñamos sistemas con modelos, herramientas y revisión humana cuando el problema lo justifica.' },
  { title: 'Data & Predictive AI', text: 'Conectamos datos, analítica y modelos para apoyar decisiones concretas.' },
  { title: 'Secure / Agentic SDLC', text: 'Integramos seguridad, evaluación y gobernanza al ciclo de entrega de software.' },
]
export const principles = ['Entendemos antes de automatizar.', 'Elegimos la arquitectura, no la herramienta de moda.', 'Probamos antes de escalar.', 'Medimos valor, calidad, costo y riesgo.']
export const offers = [
  { name: 'AI Automation Discovery', outcome: 'Mapa de oportunidades, restricciones y una solución priorizada.' },
  { name: 'AI Automation Pilot', outcome: 'Implementación acotada con evaluación, registro y decisión de escala.' },
  { name: 'AI Systems Implementation', outcome: 'Integración de modelos, flujos, sistemas, seguridad y operación.' },
  { name: 'AI & Agentic SDLC Assessment', outcome: 'Diagnóstico de entrega, seguridad, arquitectura y preparación para IA.' },
  { name: 'Corporate AI Enablement', outcome: 'Talleres y formación práctica para equipos mediante Academy.' },
]
export const caseCategories = ['AI & Automation', 'Data & Predictive AI', 'Enterprise Software', 'Secure / Agentic SDLC', 'Training']
export const events: never[] = []

export const technologyGroups = [
  { label: 'Modelos y proveedores', items: ['Anthropic / Claude', 'OpenAI'] },
  { label: 'Plataformas', items: ['AWS Bedrock'] },
  { label: 'Ingeniería de agentes', items: ['Codex', 'LangChain', 'LangGraph', 'MCP', 'Skills', 'Tools'] },
  { label: 'Patrones', items: ['RAG', 'Agentic Workflows', 'HITL', 'Evaluations'] },
]
export const primaryEcosystems = ['Anthropic / Claude', 'OpenAI / Codex', 'AWS Bedrock']
export const technicalEcosystems = ['LangChain', 'LangGraph', 'MCP', 'RAG', 'Tools', 'Agentic Workflows']

export type EvidenceItem = { id: string; title: string; label: string; organization?: string; summary: string; tags: string[]; url?: string }
export const professionalExperience: EvidenceItem[] = [
  { id:'atlantic-city', title:'IA aplicada al ciclo de entrega de software', label:'Experiencia profesional actual', summary:'Software engineering en un entorno empresarial regulado: AI Coding, evolución del SDLC, hardening, arquitectura y cloud/data.', tags:['AI Coding','Secure SDLC','Enterprise Software'] },
  { id:'caja-metropolitana', title:'Software y seguridad en banca regulada', organization:'Caja Metropolitana de Lima', label:'Experiencia profesional', summary:'Backend, APIs, seguridad, HSM, transferencias inmediatas y autenticación biométrica en un contexto bancario regulado.', tags:['.NET','APIs','OAuth2/JWT','HSM'] },
  { id:'sdc-consulting', title:'Data, analítica e IA aplicada en consultoría', organization:'SDC Consulting', label:'Experiencia profesional · SDC Consulting', summary:'Data Warehouse y Data Lake, BI, ML, NLP, gobierno de datos, automatización y habilitadores de IA para sector público, utilities y telecomunicaciones.', tags:['Power BI','Python','ML/NLP','Data Architecture'] },
  { id:'sdc-learning', title:'Instructor de Agentes de Inteligencia Artificial', organization:'SDC Learning', label:'Experiencia docente profesional', summary:'Formación a profesionales en arquitecturas basadas en LLMs, sistemas agénticos y adopción de IA aplicada.', tags:['LLMs','Agentic Systems','AI Adoption'] },
]
export const selectedWork: EvidenceItem[] = [
  { id:'forensis', title:'FORENSIS — pipeline agéntico sobre datos públicos', organization:'Neuracode', label:'Proyecto técnico público / laboratorio', summary:'Pipeline de siete agentes con extracción, validación estadística, red-team, narrativa y aprobación humana antes de publicación.', tags:['Agentic AI','Data Engineering','HITL'], url:'https://auditoria.neuracode.dev/' },
]
export const consultingExperience: EvidenceItem[] = [
  { id:'utilities', title:'Agentes y automatización en utilities', organization:'Organización del sector utilities', label:'Engagement mediante SDC Consulting', summary:'Soluciones basadas en agentes y automatización, con habilitadores de IA para un contexto empresarial del sector utilities.', tags:['Agents','Automation','Utilities'] },
  { id:'telecom', title:'Forecasting y analítica predictiva', organization:'Organización de telecomunicaciones', label:'Engagement mediante SDC Consulting', summary:'Forecasting y analítica predictiva para apoyar decisiones basadas en datos.', tags:['Forecasting','Predictive AI','Telecom'] },
]
export const currentWork: EvidenceItem[] = [
  { id:'services', title:'Automatización de operaciones en servicios', organization:'Empresa de servicios', label:'Trabajo actual · sin resultados publicados', summary:'Engagement actual de automatización e IA aplicada a procesos operativos.', tags:['Automation','Operations'] },
  { id:'health', title:'Automatización de procesos en salud', organization:'Servicio de salud', label:'Trabajo actual · sin resultados publicados', summary:'Automatización e IA aplicada a procesos operativos con atención a privacidad, límites de automatización y revisión humana.', tags:['Health Operations','Privacy','HITL'] },
]
export const resources = [
  { id:'linkedin-agentic-sdlc-mcp', type:'Artículo en LinkedIn', title:'Agentic Engineering, MCP y seguridad en el SDLC', summary:'Reflexión pública sobre ingeniería agéntica, contexto, seguridad y evolución del SDLC.', author:'Jack Aguilar', topics:['Agentic AI','MCP','Secure SDLC'], url:'https://es.linkedin.com/posts/jackaguilarc_engineeringleadership-sdlc2026-sdlcmoderno-activity-7430125241563099136-kawN' },
  { id:'linkedin-software-product-ai', type:'Artículo en LinkedIn', title:'La IA cambia el rol del ingeniero: de código a producto, negocio y riesgo', summary:'Una mirada a cómo la IA eleva la importancia del producto, el negocio, el costo y el riesgo en ingeniería.', author:'Jack Aguilar', topics:['AI Adoption','Software Engineering','Business'], url:'https://es.linkedin.com/posts/jackaguilarc_el-ingeniero-de-software-ahora-es-en-realidad-activity-7434364303513804801-R4JC' },
  { id:'forensis-public-project', type:'Proyecto técnico público', title:'FORENSIS — pipeline agéntico sobre datos públicos', summary:'Pipeline multiagente con validación, red-team, revisión humana y publicación reproducible.', author:'Jack Aguilar / Neuracode', topics:['Agentic AI','Data Engineering','HITL'], url:'https://auditoria.neuracode.dev/' },
]
export const jackTechnologyGroups = [
  { label:'AI & Agentic', items:['Anthropic / Claude','OpenAI / Codex','AWS Bedrock','LangGraph','MCP','RAG','HITL','Evaluations'] },
  { label:'Software & APIs', items:['.NET','Python','FastAPI','TypeScript','REST APIs','Microservices'] },
  { label:'Data & Analytics', items:['Power BI','PostgreSQL','Data Warehouse','Data Lake','Forecasting','ML / NLP'] },
  { label:'Cloud, Security & Delivery', items:['AWS','Docker','OAuth2 / JWT','OWASP','HSM','CI/CD','Secure SDLC'] },
]
