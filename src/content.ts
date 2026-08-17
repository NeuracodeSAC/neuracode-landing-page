export const capabilities = [
  { title: 'AI Automation', text: 'Convertimos procesos repetitivos en flujos confiables, medibles y operables.' },
  { title: 'AI / Agentic Systems', text: 'Diseñamos sistemas con modelos, herramientas y revisión humana cuando el problema lo justifica.' },
  { title: 'Data & Predictive AI', text: 'Conectamos datos, analítica y modelos para apoyar decisiones concretas.' },
  { title: 'Secure / Agentic SDLC', text: 'Integramos seguridad, evaluación y gobernanza al ciclo de entrega de software.' },
]

export const principles = ['Entender el proceso y el resultado esperado.', 'Mapear sistemas, datos y restricciones.', 'Elegir una arquitectura suficiente.', 'Probar, integrar y operar con medición.']

export const offers = [
  { name: 'AI Automation Discovery', outcome: 'Mapa de oportunidades, restricciones y una solución priorizada.' },
  { name: 'AI Automation Pilot', outcome: 'Implementación acotada para evaluar viabilidad, calidad y operación.' },
  { name: 'AI Systems Implementation', outcome: 'Integración de modelos, flujos, sistemas, seguridad y operación.' },
  { name: 'AI & Agentic SDLC Assessment', outcome: 'Diagnóstico de entrega, seguridad, arquitectura y preparación para IA.' },
  { name: 'Corporate AI Enablement', outcome: 'Talleres y formación práctica para equipos mediante Academy.' },
]

export const buyerScenarios = ['Quiero automatizar un proceso con IA.', 'Ya usamos Claude u OpenAI y queremos integrarlo bien.', 'Tenemos datos y reporting —por ejemplo en Power BI— y queremos análisis, forecasting o automatización.', 'Necesitamos un agente que trabaje con herramientas y datos internos.', 'Tenemos software existente y queremos incorporar IA sin rehacer todo.', 'Nuestro equipo ya usa AI Coding y necesita controles y medición.']

export const primaryEcosystems = ['Anthropic / Claude', 'OpenAI / Codex', 'Google Cloud / Vertex AI', 'AWS / Bedrock']
export const technicalEcosystems = ['LangChain', 'LangGraph', 'MCP', 'RAG', 'Tool / function calling', 'Agentic Workflows', 'HITL', 'Evals']

export type EvidenceItem = { id: string; title: string; label: string; organization?: string; summary: string; tags: string[]; url?: string; metrics?: string[] }

export const focusGroupProject: EvidenceItem = { id: 'focus-group', title: 'Automatización de entrevistas de Focus Group con IA', label: 'Proyecto cuantificado', summary: 'Flujo de 50 entrevistas de 15–25 minutos, desde transcripción hasta insights y resultados, con validación experta y entrega de dashboard.', tags: ['Google Vertex AI', 'AI Automation', 'Qualitative Analytics', 'HITL'], metrics: ['~1 semana → 3–4 días', '>50% por debajo del baseline manual estimado'] }

export const professionalExperience: EvidenceItem[] = [
  { id: 'atlantic-city', title: 'Ingeniería de software en entorno regulado', organization: 'Atlantic City Casino & Sports', label: 'Experiencia profesional actual', summary: 'Software engineering en un entorno empresarial regulado, trabajando en arquitectura de software, cloud y datos, hardening de aplicaciones y evolución del SDLC, incluyendo adopción gobernada de AI Coding.', tags: ['Enterprise Software', 'Software Architecture', 'AWS / Cloud', 'Secure SDLC', 'AI Coding'] },
  { id: 'caja-metropolitana', title: 'Backend Java e integración en banca regulada', organization: 'Caja Metropolitana de Lima', label: 'Experiencia profesional', summary: 'Backend Java, arquitectura e integraciones para sistemas financieros: Spring Boot, APIs REST/OpenAPI, HSM, transferencias inmediatas, autenticación biométrica, resiliencia y continuidad.', tags: ['Java', 'Spring Boot', 'APIs', 'HSM', 'Distributed Systems', 'Security'] },
  { id: 'sdc-consulting', title: 'Software, datos e IA aplicada en consultoría', organization: 'SDC Consulting', label: 'Experiencia de consultoría', summary: 'Backend y full-stack en sistemas estratégicos, además de datos, analítica, arquitectura, forecasting, NLP y automatización para distintos sectores.', tags: ['Java', 'Angular', 'Power BI', 'ML / NLP', 'Data Architecture'] },
  { id: 'sdc-learning', title: 'Instructor de Agentes de Inteligencia Artificial', organization: 'SDC Learning', label: 'Experiencia docente', summary: 'Formación a profesionales en arquitecturas LLM, sistemas agénticos y aplicación práctica de IA.', tags: ['LLMs', 'Agentic Systems', 'AI Enablement'] },
  { id: 'neuracode', title: 'Neuracode', organization: 'Neuracode', label: 'Cofundador', summary: 'Desarrollo de la práctica de Enterprise y Academy alrededor de IA, automatización, software y formación técnica.', tags: ['AI Automation', 'Enterprise', 'Academy'] },
]

export const engineeringExperience = professionalExperience.filter(({ id }) => ['atlantic-city', 'caja-metropolitana', 'sdc-consulting'].includes(id))
export const authorityExperience = professionalExperience.filter(({ id }) => ['sdc-learning', 'neuracode'].includes(id))

export const selectedWork: EvidenceItem[] = [focusGroupProject, { id: 'forensis', title: 'FORENSIS — pipeline agéntico sobre datos públicos', organization: 'Neuracode', label: 'Proyecto técnico público', summary: 'Pipeline de siete agentes con extracción, validación estadística, red-team, narrativa y aprobación humana antes de publicación.', tags: ['Agentic AI', 'Data Engineering', 'HITL'], url: 'https://auditoria.neuracode.dev/' }]

export const consultingExperience: EvidenceItem[] = [
  { id: 'utilities-nlp', title: 'Automatización NLP de atención en redes sociales', organization: 'Sector utilities', label: 'Proyecto de consultoría', summary: 'Automatización pre-LLM para comentarios de Facebook: clasificación de texto, manejo de contenido ofensivo, respuestas predefinidas, base de conocimiento, escalamiento humano y dashboard.', tags: ['NLP', 'Text Classification', 'Workflow Automation'] },
  { id: 'forecasting', title: 'Forecasting de demanda para inventario', organization: 'Importación y distribución regional', label: 'Proyecto de consultoría', summary: 'Modelos de forecasting y analítica predictiva para apoyar la planificación de demanda, stock e inventario.', tags: ['Forecasting', 'Predictive Analytics', 'Inventory Planning'] },
  { id: 'research-model', title: 'Analítica predictiva para investigación científica', organization: 'Sector público / investigación', label: 'Proyecto de consultoría', summary: 'Modelo analítico sobre indicadores de publicaciones e investigadores para apoyar clasificación y revisión priorizada.', tags: ['Predictive Analytics', 'Data Engineering', 'ML'] },
  { id: 'data-architecture', title: 'Arquitectura empresarial de datos', organization: 'Sector público', label: 'Proyecto de consultoría', summary: 'Participación en iniciativas de arquitectura empresarial de datos, integración y organización de información dentro de un entorno institucional complejo.', tags: ['Data Architecture', 'Integration', 'Analytics Foundations'] },
]

export const currentWork: EvidenceItem[] = [
  { id: 'health', title: 'Documentación clínica asistida por voz', organization: 'Sector salud', label: 'Engagement actual', summary: 'Automatización de atención y documentación clínica asistida por voz, generando borradores estructurados con revisión profesional.', tags: ['Voice AI', 'Workflow Automation', 'HITL'] },
  { id: 'services', title: 'Automatización de operaciones de servicio', organization: 'Empresa de servicios en EE. UU.', label: 'Engagement actual', summary: 'Automatización con IA para operaciones de atención y servicio; el alcance evoluciona junto con el proceso y la operación.', tags: ['AI Automation', 'Service Operations'] },
  { id: 'commerce', title: 'Agente para operaciones comerciales', organization: 'Comercio B2C / importación', label: 'Engagement actual', summary: 'Trabajo actual sobre un agente y automatizaciones para operaciones comerciales y atención al cliente, con escalamiento humano.', tags: ['Agentic Workflows', 'Customer Operations', 'HITL'] },
]

export const architectureCapabilityGroups = [
  { label: 'Arquitectura', items: ['Software Architecture', 'Data Architecture', 'Cloud / Serverless Architecture', 'Solution Architecture'] },
  { label: 'Integración y evolución', items: ['API Integration', 'Distributed Systems', 'Legacy Evolution'] },
  { label: 'Confiabilidad y operación', items: ['High Availability', 'Resilience'] },
]

export const deliveryStages = [
  { title: 'Proceso', description: 'Entender el flujo, el problema y el resultado esperado.' },
  { title: 'Arquitectura', description: 'Definir componentes, límites, datos y puntos de integración.' },
  { title: 'Integración', description: 'Conectar APIs, datos, herramientas y sistemas existentes.' },
  { title: 'Piloto', description: 'Probar con alcance controlado y criterios definidos.' },
  { title: 'Evaluación', description: 'Medir utilidad, calidad, costo, riesgo y retrabajo.' },
  { title: 'Preparación operativa', description: 'Cerrar observabilidad, hardening, controles y condiciones de producción.' },
  { title: 'Operación', description: 'Llevar la solución a uso real, observarla y evolucionarla.' },
]
export const jackTechnologyGroups = [
  { label: 'Software & APIs', items: ['.NET', 'Python', 'FastAPI', 'Java', 'Spring Boot', 'Spring WebFlux', 'TypeScript', 'Angular', 'REST APIs', 'Microservices', 'Clean Architecture'] },
  { label: 'Data & Analytics', items: ['PostgreSQL', 'SQL Server', 'ETL', 'Pentaho', 'Power BI', 'Elasticsearch', 'Data Warehouse', 'Data Lake', 'Forecasting', 'ML / NLP'] },
  { label: 'Cloud, Security & Delivery', items: ['AWS', 'Docker', 'OAuth2 / JWT', 'OWASP', 'HSM', 'CI/CD', 'Secure SDLC'] },
  { label: 'AI & Agentic', items: ['Anthropic / Claude', 'OpenAI / Codex', 'Google Vertex AI', 'AWS Bedrock', 'LangGraph', 'MCP', 'RAG', 'Tools / Skills', 'HITL', 'Evals'] },
]

export const resources = [
  { id: 'linkedin-agentic-sdlc-mcp', type: 'Artículo en LinkedIn', title: 'Agentic Engineering, MCP y seguridad en el SDLC', summary: 'Reflexión pública sobre ingeniería agéntica, contexto, seguridad y evolución del SDLC.', author: 'Jack Aguilar', topics: ['Agentic AI', 'MCP', 'Secure SDLC'], url: 'https://es.linkedin.com/posts/jackaguilarc_engineeringleadership-sdlc2026-sdlcmoderno-activity-7430125241563099136-kawN' },
  { id: 'linkedin-software-product-ai', type: 'Artículo en LinkedIn', title: 'La IA cambia el rol del ingeniero: de código a producto, negocio y riesgo', summary: 'Una mirada a cómo la IA eleva la importancia del producto, el negocio, el costo y el riesgo en ingeniería.', author: 'Jack Aguilar', topics: ['AI Adoption', 'Software Architecture', 'Business'], url: 'https://es.linkedin.com/posts/jackaguilarc_el-ingeniero-de-software-ahora-es-en-realidad-activity-7434364303513804801-R4JC' },
  { id: 'forensis-public-project', type: 'Proyecto técnico público', title: 'FORENSIS — pipeline agéntico sobre datos públicos', summary: 'Pipeline multiagente con validación, red-team, revisión humana y publicación reproducible.', author: 'Jack Aguilar / Neuracode', topics: ['Agentic AI', 'Data Engineering', 'HITL'], url: 'https://auditoria.neuracode.dev/' },
]
