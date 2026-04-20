# Neuracode Landing Page

## Purpose
Corporate landing page for Neuracode SAC. Showcases company services, team, and value proposition using React 18 with Vite, Tailwind CSS, and Vercel Analytics for performance monitoring.

## Stack
- **Language**: TypeScript
- **Framework**: React 18 + React Router v6
- **Database**: None (static site with routing)
- **Package Manager**: npm (package-lock.json)
- **Deployment**: Vercel

## Commands
```bash
# Development
npm run dev               # Vite dev server (HMR)

# Production
npm run build            # TypeScript check + Vite build

# Maintenance
npm run preview          # Preview production build locally
```

## Structure
```
src/
  app/                    # Route-based pages
  components/             # Reusable UI components
  pages/                  # Page components
  utils/                  # Helper utilities
  config.ts               # App configuration
  main.tsx
  styles.css
```

## Conventions
- Conventional commits (feat:, fix:, refactor:, etc.)
- TDD mandatory (unit tests for components/utils), 80%+ coverage
- Tailwind CSS for styling (no CSS modules)
- React Router for client-side navigation
- Vercel Analytics for performance tracking

---

## Agent Architecture
- **Primary topology**: Single (simple marketing site)
- **Orchestrator model**: Haiku for development
- **Worker model**: Haiku for component generation
- **Agent activation**:
  - Feature requests → code-reviewer (direct implementation)
  - After code changes → code-reviewer (parallel: security + accessibility)
  - Design changes → architect agent (if significant)

## Claude Code Config
- This CLAUDE.md is the project's "tech lead" — overrides global defaults
- Rules loaded from: ~/.claude/rules/common/ + ~/.claude/rules/typescript/
- Memory persists in project-specific memory directory

## Output Contracts
- API responses: JSON (if using external APIs)
- Component props: TypeScript interfaces
- Validation: Runtime validation for external data

## MCP & Tools
- Active MCP servers: Inherits global (engram, drawio)
- Tool design: React component naming (PascalCase, descriptive names)
- Security: No hardcoded secrets, use .env for API endpoints

## Reliability
- Token optimization: RTK prefix on all commands
- Context budget: Keep system prompt < 20% of window
- Error handling: Graceful fallbacks for failed API calls
- Performance: Vercel Speed Insights for Core Web Vitals monitoring

---

## Active Decisions
- Vite for fast HMR and optimized builds
- React Router v6 for client-side navigation
- Vercel deployment for instant deployment from git
- Tailwind CSS for rapid UI development
- TypeScript strict mode enabled

## Known Constraints
- Vercel deployment required (build script includes `tsc -b`)
- Static content only (no backend needed)
- React 18 concurrent features available but not required for landing page
- Environment variables in .env.example must be set for external integrations
