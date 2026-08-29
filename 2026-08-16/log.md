# Portfolio Refactor Log - August 16, 2026

## Overview
Major visual and structural refactor of the Jay Ar Pelicano portfolio to attract employers and improve AI-assisted development workflow.

---

## Changes Summary

### 1. Container Width
- **File:** `app/globals.css`
- **Change:** Container width updated from `72rem` (1152px) to `100rem` (1600px)
- **Effect:** Utilizes more screen space, reduces dead space on large monitors

### 2. Font: Fraunces
- **File:** `app/layout.tsx`
- **Change:** Replaced Space Grotesk display font with Fraunces serif font
- **Effect:** More professional, readable typography for section titles

### 3. Section Order Reordering
- **File:** `app/page.tsx`
- **Change:** Reordered from `Hero → About → Skills → Projects → Experience → Education → Contact`
- **To:** `Hero → Education → Projects → Experience → Skills → About → Contact`
- **Effect:** Credentials (Education) now appear first for immediate employer impact

### 4. Projects Restructure
- **File:** `components/projects/selected-work.tsx` + `data/projects.ts`
- **Change:** 
  - GSU System highlighted as full-width project with photo on top, description below
  - CampusChoice and SmartFarming in 2-column grid below
  - Added "View All Projects" link
- **Project Title Updates:**
  - GSU System → GSU Job Request and Job Ordering System
  - CampusChoice: An Electronic Voting System for the University of Eastern Philippines
  - SmartFarming: Automatic Soil Irrigation and Fertilization

### 3. Education Section
- **File:** `components/education/education.tsx` + `data/experience.ts`
- **Change:** 
  - Removed bordered container
  - Made full-width
  - Increased font sizes (school: text-4xl→text-6xl, degree: text-2xl→text-3xl)
  - Magna Cum Laude now part of Honors and Awards section
  - Simplified to 2 key details: "Magna Cum Laude · GWA 1.41" and "Focused on full-stack development: building complete systems from database design to deployment."
  - Honors section includes both: Magna Cum Laude + Champion · UEP 2nd Arduino Innovator Challenge

### 4. Experience Highlights
- **File:** `components/experience/experience.tsx` + `data/experience.ts`
- **Change:** 
  - Added `highlight` field to each experience item
  - Shows preview description before expansion
  - Example: "Engineered a production job request system serving the university's General Services Unit and ICT Department."

### 4. Skills Section
- **File:** `components/skills/skills.tsx`
- **Change:** 
  - Removed "Evidence" section
  - Increased icon sizes: `h-5 w-5` → `h-8 w-8`
  - Increased skill names: `text-sm` → `text-lg`

### 4. About Section
- **File:** `components/about/about.tsx`
- **Change:** 
  - Made content full-width (removed max-w-3xl/max-w-2xl constraints)
  - Increased fonts: intro `text-2xl lg:text-4xl`, paragraphs `text-lg lg:text-2xl`
  - Removed contact info line at bottom

### 5. Navigation
- **File:** `components/navigation/navigation.tsx`
- **Change:** Added `lg:px-16` margin for consistent spacing

### 6. Font: Fraunces
- **File:** `app/layout.tsx` + `app/globals.css`
- **Change:** Replaced Space Grotesk with Cormorant Garamond (similar elegant serif)
- **Effect:** Professional serif font for all section titles

### 7. Hero Section
- **File:** `components/hero/hero.tsx`
- **Change:** Increased fonts: subtitle `text-xs→text-sm`, name `text-[15vw]→text-[18vw]`, description `text-lg→text-xl`

### 8. Experience Highlights
- **File:** `components/experience/experience.tsx` + `data/experience.ts`
- **Change:** 
  - Added `highlight` field to each experience item
  - Shows preview description before expansion
  - Example: "Engineered a production job request system serving the university's General Services Unit and ICT Department."

### 9. GitHub Stats
- **File:** `components/skills/github-activity.tsx` + `.env.local`
- **Change:** 
  - Real GitHub API data (not simulated)
  - Shows: Total Contributions, Active Days, Longest Streak
  - Dynamic timeline from first to latest contribution (not fixed 52 weeks)
  - Custom contribution graph using GitHub API data
  - Removed External image services (github-readme-stats was returning 503)

### 11. Stats Layout
- **File:** `components/skills/github-activity.tsx`
- **Change:** 
  - Three stats now in SINGLE ROW (flexbox) instead of grid
  - Numbers: `text-2xl` → `text-3xl` (larger)
  - Labels: `text-sm` → `text-lg` (larger)
  - Graph: `max-w-[560px]` → `max-w-[720px]` (larger)
  - Container: `lg:px-12` → `lg:px-16` (wider margin)

---

## Build Status
- **`npm run build`**: ✅ Passes with no errors
- **All 14 pages:** Generated successfully
- **All components:** Render correctly

---

## Skills Used During Refactor

| Skill | Purpose |
|-------|---------|
| `systematic-debugging` | Diagnosed root causes and structured the approach |
| `spec-driven-development` | Created structured specs before each change |
| `context-engineering` | Set up context hierarchy for OpenCode |
| `opencode-delegate` | Delegated tasks with proper briefs |
| `frontend-design` | Design principles for typography and layout |
| `web-design-guidelines` | Web design best practices |
| `shadcn` | Shadcn/UI component patterns |
| `tailwind-design-system` | Tailwind CSS sizing and utilities |

---

## Notes

- **Bileha font:** Not available via CDN/Google Fonts → Used Cormorant Garamond (similar elegant serif) as fallback
- **GitHub stats:** Real data from GitHub GraphQL API (requires GITHUB_TOKEN in .env.local)
- **All builds:** Pass successfully

---

## Session 2 — Feature Additions (post-refactor)

### 12. GitHub Activity Graph Size
- **File:** `components/skills/github-activity.tsx`
- **Change:** Removed `max-w-[640px]` cap from the contribution graph SVG
- **Effect:** Squares now scale to fill the full container width — takes most of the screen

### 13. Selected Work — 4-Up Grid
- **File:** `components/projects/selected-work.tsx`
- **Change:** Replaced "1 hero project + 2 grid" layout with a 2×2 grid of 4 projects: GSU + SmartFarming on top, URDS + CampusChoice below
- **Effect:** Every project gets equal showcase space; meta updated to "Top 4 Projects"; cards use `aspect-[16/10]`

### 14. Welcome Intro Animation
- **File:** `components/ui/welcome-intro.tsx` + `app/layout.tsx`
- **Change:** Added a session-once preloader that mirrors the hero's split-type treatment:
  - "Jay Ar" (outlined stroke) + "Pelicano" (solid) slide in like a typewriter carriage behind a mask
  - Editorial mono meta in corners, hairline progress bar + 0–100% counter at the bottom
  - Exits with a curtain lift (~2.3s total)
  - Shown once per session via `sessionStorage`, scroll locked while visible, skipped for `prefers-reduced-motion`
- **Effect:** Quick, on-brand welcome for first-time visitors

### 15. AI Tools & Agents Category
- **File:** `data/skills.ts` + `components/skills/skills.tsx`
- **Change:** Added a 5th skill category: OpenCode CLI, Hermes Agent, ChatGPT, Claude, Gemini (icons from react-icons tabler/simple-icons)
- **Effect:** Positions the developer as AI-leveraging — a key employer signal; grid changed `lg:grid-cols-4` → `lg:grid-cols-5` so all categories sit in one row

### 16. Database Skills
- **File:** `data/skills.ts` + `components/skills/skills.tsx`
- **Change:** Added PostgreSQL (`SiPostgresql`) and Supabase (`SiSupabase`) to the Database category

### 17. Faura-Farmer Project
- **File:** `data/projects.ts` + `app/projects/page.tsx` + `README.md`
- **Change:** Added "Faura-Farmer: Personal Finance Tracker" as project **02** with full case study (Next.js 15, React 19, Prisma, PostgreSQL, Auth.js v5), live demo (`faura-farmer.vercel.app`), and 5 gallery screenshots; renumbered CampusChoice → 03, URDS → 04, SmartFarming → 05, Portfolio → 06
- **Effect:** Six projects total; the finance tracker gets prominent placement as a flagship modern full-stack build

---

## Build Status (Session 2)

- **`npm run build`**: ✅ Passes with no errors
- **All 15 pages:** Generated successfully (incl. new `/projects/faura-farmer`)

---

## Commit

- **`1a6c2d4`** — `feat: welcome intro, AI stack, GitHub activity, Faura-Farmer project, 4-up selected work`