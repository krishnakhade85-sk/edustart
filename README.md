# EduStart

**A safe, age-adaptive digital world where children can think, discover, create, make, ask, and explore.**

> "The AI should help them explore. It should never become the destination."

---

## What is EduStart?

EduStart is not a generic school LMS, homework platform, or AI chatbot for children.

It is a safe, age-adaptive exploration environment where children aged 4–17 can:

- **THINK** — reasoning challenges, pattern recognition, spatial thinking
- **DISCOVER** — explore 25+ introductory experiences across different domains
- **CREATE** — drawing, writing, stories, design, open-ended invention
- **MAKE** — build bicycles, bridges, rockets, machines through iteration and experimentation
- **ASK** — age-adaptive AI that scaffolds thinking rather than giving answers
- **EXPLORE** — world geography, cultures, everyday childhood experiences

The system observes what children are curious about — not to define them, but to help them discover what makes them curious.

---

## Core Philosophy

> "We do not want AI to tell children who they are.  
> We want to give them a safe environment in which they can discover it for themselves."

- The child is the explorer. AI is the guide/scaffold/explainer.
- The system never tells a child who they permanently are.
- Success is measured by **what the child discovered**, not how long they stayed.

---

## Age Groups

| Band | Ages |
|------|------|
| Early Explorer | 4–6 |
| Curious Learner | 7–9 |
| Active Thinker | 10–12 |
| Independent Explorer | 13–15 |
| Deep Diver | 16–17 |

Age adaptation means more than simpler vocabulary — it changes language, abstraction, reasoning difficulty, interface complexity, AI behaviour, activity duration, autonomy, and safety restrictions.

---

## Navigation

`HOME` · `DISCOVER` · `THINK` · `CREATE` · `MAKE` · `MY JOURNEY` · `ASK`

---

## Technical Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | Supabase (PostgreSQL + RLS) |
| Auth | Supabase Auth |
| AI | Provider abstraction (Gemini / OpenAI) — server-side only |
| Deployment | Vercel |

---

## Safety Architecture

Safety is an architecture requirement, not a feature. Defence in depth:

```
Child Input → Age Classification → Input Safety → Prompt Injection Detection
→ Sensitive Topic Detection → LLM Policy Layer → LLM → Output Safety
→ Response Transformation → Child
```

The AI never: pretends to be human, encourages secrecy, creates emotional dependency, makes permanent personality or career labels, or provides medical diagnosis.

---

## Privacy

- Data minimisation: only what is needed for the experience
- Child data and parent data are logically isolated
- Governed by DPDP Act 2023 (India) and applicable international standards
- Full parent controls: consent, retention, deletion, account removal

---

## Repository Structure (planned)

```
src/
  app/           Next.js App Router pages
  components/    UI components
  lib/
    ai/          AI provider abstraction + safety pipeline
    db/          Supabase client + typed queries
    topics/      Modular topic content system
    curiosity/   Curiosity Engine (signal collection + interest clustering)
    safety/      Input/output safety classifiers
  types/         TypeScript type definitions
supabase/
  migrations/    Database schema migrations
  seed/          Seed data (topics, activities)
docs/
  research/      Literature review, frameworks, source matrix
  architecture/  Technical architecture documents
  safety/        Child AI safety specification
  privacy/       Privacy and data specification
```

---

## Deployment Pipeline

```
Local development (d:\Samkri)
    ↓ git push origin main
GitHub: krishnakhade85-sk/edustart (branch: main)
    ↓ auto-deploy
Vercel Production
```

---

## Research Foundations

This project is grounded in:

- UNICEF Guidance on AI and Children v3
- NIST AI Risk Management Framework / NIST AI 600-1
- UNESCO AI Competency Framework for Students
- Harvard Center on the Developing Child (Executive Function)
- OECD Children in the Digital Environment
- NCERT / National Curriculum Framework for School Education 2023
- Digital Personal Data Protection Act 2023 (India)
- Common Sense Media AI Census 2026

---

## Status

> Phase 1 — Project scaffold and initial setup.  
> See `docs/` for research, architecture, and specification documents.

---

*EduStart — A personalized map of discovery, not an AI destination.*