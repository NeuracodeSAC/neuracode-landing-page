# Conversion & Analytics

## One WhatsApp, multiple intents

Keep the single business WhatsApp.

Use intent-specific messages:
- Jack / consulting
- Enterprise project
- Corporate training
- Academy events
- Partnership

## Suggested CTA mapping

### Jack
"Hablar sobre un proyecto"
Message:
Hola Neuracode, llego desde el perfil de Jack Aguilar y quisiera conversar sobre un proyecto de IA, automatización o software.

### Enterprise
"Evaluar una oportunidad"
Message:
Hola Neuracode, quiero revisar un proceso o proyecto para evaluar una solución de IA o automatización.

### Corporate training
"Conversar sobre formación corporativa"
Message:
Hola Neuracode, quiero información sobre formación corporativa en IA para mi equipo.

### Academy
"Quiero recibir próximos eventos"
Message:
Hola Neuracode, quiero recibir información de próximos workshops y webinars de Academy.

## Analytics events

Do not activate tracking without the current privacy/consent decision.

When analytics is approved, track:
- `cta_whatsapp_click`
  - source_page
  - intent
  - content_id?
- `portfolio_item_open`
- `resource_open`
- `video_play`
- `social_outbound`
- `academy_interest`
- `case_related_service_click`

Do not store sensitive WhatsApp message content in web analytics.

## UTM strategy

Use UTMs for outbound campaigns/social links to the website:
- utm_source
- utm_medium
- utm_campaign
- utm_content

Do not create dozens of ungoverned variants.

## Funnel

Social / referral / search
-> Jack / Enterprise / Academy / Resource
-> evidence
-> WhatsApp
-> human discovery
-> proposal
-> project
-> later case study

The website's job is credibility + qualification, not fully automated sales.
