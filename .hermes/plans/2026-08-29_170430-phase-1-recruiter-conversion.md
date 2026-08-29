# Phase 1 Recruiter Conversion Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task. The approved implementation lane is one Codex CLI `workspace-write` run using `gpt-5.6-luna` with `model_reasoning_effort=max`, followed by Hermes spec review, code review, and independent verification before any commit.

**Goal:** Make the portfolio explain Jay Ar's value, strongest proof, and project credibility within the first screen and first scroll, while rewriting all six case studies around verified contributions, honest status, limitations, architecture, and safe links.

**Architecture:** Keep `data/projects.ts` as the single source of truth, but replace ambiguous status/link fields with typed availability data and richer case-study fields. Render a reusable semantic architecture flow from typed data. Keep the existing visual system and project routes while changing homepage hierarchy and copy.

**Tech Stack:** Next.js 16.3 App Router, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion 13, existing project components only. No new dependencies.

---

## 1. Approved decisions

This plan treats the following as fixed requirements:

1. Implement all of Phase 1 in one approval-gated batch.
2. Keep the hero name-first. `Jay Ar Pelicano` remains the dominant visual element.
3. Use one hero CTA only: `View selected work`, targeting `#work`.
4. Use this hero value proposition:

   > I build practical full-stack systems for organizations replacing manual workflows.

5. Use this hero proof:

   > Magna Cum Laude · Champion, UEP 2nd Arduino Innovator Challenge (2025)

6. Feature four homepage projects in this exact order:
   1. GSU Job Request and Job Ordering System
   2. CampusChoice
   3. SmartFarming
   4. URDS
7. Faura-Farmer stays on `/projects` but is not featured on the homepage.
8. Homepage order becomes:

   `Hero → Education → Experience → Selected Work → Skills → About → Contact`

9. Rewrite and verify all six case studies.
10. Link project source code only when the repository is safe and recruiter-accessible:
    - GSU frontend repository
    - Portfolio repository
11. SmartFarming role: `Lead Full-Stack Web Developer`.
12. CampusChoice role: `Full-Stack Developer`.
13. Remove the unsupported GSU 40% metric everywhere.
14. Do not advertise Google or Facebook OAuth as active in Faura-Farmer's public deployment.
15. Describe CampusChoice as a public UI demo of a system originally designed for local deployment.
16. Do not claim CampusChoice has passed a security audit, anonymity audit, load test, or production election validation.
17. SmartFarming remains archived and has no public demo or source link in this phase.
18. URDS retains its public demo but has no source link or production-adoption claims.
19. Show only GSU in the Experience section because it is Jay Ar's only formal work experience.
20. Keep CampusChoice and SmartFarming in Projects and Honors where relevant, not in formal Experience.
21. Render the GSU experience as static content, not an accordion or expandable row.
22. Preserve the canonical domain commit `8428a8e`.
23. Preserve the unrelated local edit to `2026-08-16/log.md`.

## 2. Scope boundaries

### Included

- Hero copy and CTA hierarchy
- Homepage project order
- Section order and numbering
- Navigation order
- Static GSU-only formal Experience section
- All six case-study rewrites
- Honest project statuses and status notes
- Exact contribution sections
- Limitations sections
- Safe repository and demo links
- Reusable accessible architecture flow
- Project-list status presentation
- Content and link verification
- Responsive browser verification

### Excluded

- Contact API security
- Contact-form accessibility changes
- Mobile-menu focus management
- Welcome-intro changes
- Gallery image optimization
- Animation-library consolidation
- Font cleanup
- Invalid Tailwind-class cleanup unrelated to edited behavior
- Structured data and project Open Graph expansion
- Sitemap date changes
- Test-framework installation
- GitHub Actions
- Deployment

Do not add dependencies or modify `package.json`.

## 3. Current repository state

- Branch: `master`
- `master` is one commit ahead of `origin/master`.
- Current Phase 0 commit: `8428a8e fix: use live portfolio canonical domain`
- Existing unrelated worktree modification: `2026-08-16/log.md`
- There is no project-owned automated test script yet.
- Baseline validation from the canonical-domain task:
  - ESLint: 0 errors, 2 existing image warnings
  - TypeScript: pass
  - Production build: pass, 15/15 static pages generated

## 4. Proposed data contract

Modify `data/projects.ts` so status, demo, and source availability cannot be confused.

```ts
export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectStatus =
  | "Live demo"
  | "Public demo"
  | "Public UI demo"
  | "Archived"
  | "This site";

export type ProjectAvailability = {
  status: ProjectStatus;
  statusNote: string;
  demo?: ProjectLink;
  source?: ProjectLink;
  sourceNote: string;
};

export type ArchitectureStep = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  shortDescription?: string;
  role: string;
  year: string;
  stack: string[];
  image: string;
  imageAlt: string;
  availability: ProjectAvailability;
  highlights: string[];
  gallery: { image: string; alt: string }[];
  caseStudy: {
    overview: string;
    problem: string[];
    solution: string[];
    contribution: string[];
    features: string[];
    architecture: ArchitectureStep[];
    challenges: { title: string; detail: string }[];
    outcome: string[];
    limitations: string[];
  };
};

export const featuredProjectSlugs = [
  "gsu-system",
  "campuschoice",
  "smart-farming",
  "urds-system",
] as const satisfies readonly Project["slug"][];
```

Remove the old `highlight`, `liveDemo`, `liveDemoLabel`, `liveNote`, and generic `source` fields after every renderer has migrated.

## 5. Approved content matrix

### GSU Job Request and Job Ordering System

- Role: `Full-Stack Developer`
- Status: `Live demo`
- Demo: `https://generalservicesunitsystem.vercel.app/`
- Source: `https://github.com/jayarpelicano01/GSU-General-Services-Unit`
- Source label: `Frontend source`
- Source note: The frontend repository is public; the backend repository remains private.
- Contribution focus:
  - Built the Next.js and TypeScript interface.
  - Built and deployed the Node.js, Express, and MySQL application flow.
  - Modeled job requests, inspections, procurement records, job orders, and accomplishment reports.
  - Implemented generated forms and reporting workflows.
- Evidence-safe outcome:

  > Automated job order generation and accomplishment reporting, reducing reliance on manual record tracking and improving workflow consistency.

- Limitations:
  - The workflow reflects requirements gathered during the OJT period and would need adaptation for other offices.
  - The public deployment is a review environment and is not presented as proof of current department-wide operation.
- Architecture:
  1. Next.js + TypeScript UI
  2. REST API
  3. Node.js + Express services
  4. MySQL records
  5. Generated job orders and accomplishment reports

### Faura-Farmer: Personal Finance Tracker

- Role: `Solo Full-Stack Developer`
- Status: `Live demo`
- Demo: `https://faura-farmer.vercel.app`
- Source: none
- Source note: The source repository is private.
- Contribution focus:
  - Designed the PostgreSQL and Prisma data model.
  - Built account, transaction, category, search, filter, and dashboard flows.
  - Implemented Auth.js credentials sign-in and user-scoped data access.
  - Built Recharts analytics.
- Limitations:
  - The public deployment currently exposes credentials sign-in; optional social providers are not enabled.
  - Transactions are entered manually. Bank sync, mobile support, and offline behavior are outside the current MVP.
- Architecture:
  1. Next.js + React UI
  2. Auth.js credentials sign-in
  3. Next.js API routes
  4. Prisma ORM
  5. PostgreSQL

### CampusChoice

- Title: shorten the public card title to a recruiter-readable name while keeping UEP context in the overview.
- Role: `Full-Stack Developer`
- Status: `Public UI demo`
- Demo: `https://campus-choice.vercel.app`
- Demo label: `Public UI demo`
- Source: none
- Source note: The source repository is private.
- Contribution focus:
  - Built frontend voting and administration interfaces.
  - Implemented backend and MySQL workflows for voters, access codes, election setup, and result tallying.
  - Used cryptographic access-code generation, hashing, and parameterized database operations without claiming a formal security certification.
- Remove these claims:
  - `secure electronic voting platform`
  - `strict voter anonymity`
  - `reliable under high traffic`
  - `under load`
  - confirmed production election usage
- Limitations:
  - The public link presents the interface; the original system was designed for local deployment.
  - The project has not undergone an independent security audit or formal load test.
- Architecture:
  1. HTML/CSS/JavaScript UI
  2. Voter and election workflow
  3. Application backend
  4. MySQL

### URDS

- Role: `Full-Stack Developer`
- Status: `Public demo`
- Demo: `https://urds-system-v2.vercel.app/urds/home`
- Source: none
- Source note: No public source repository is available.
- Contribution focus:
  - Built Node.js and Express API routes and controllers.
  - Designed the MySQL records and document workflow.
  - Built the interface represented in the public demo.
- Do not claim verified users, production adoption, or operational metrics.
- Limitations:
  - The public deployment demonstrates the interface and workflow, not verified institutional adoption.
  - No public source repository is available for recruiter review.
- Architecture:
  1. Records UI
  2. REST API
  3. Node.js + Express
  4. MySQL

### SmartFarming

- Role: `Lead Full-Stack Web Developer`
- Status: `Archived`
- Demo: none
- Source: none
- Source note: The team repository is not linked while its public files are being cleaned up.
- Award wording:

  > Champion, UEP 2nd Arduino Innovator Challenge (2025)

- Contribution focus:
  - Led development of the React dashboard and web application layer.
  - Built backend services that received and stored sensor telemetry.
  - Connected serial sensor readings to API and database workflows.
  - Collaborated with the team on Arduino sensor and irrigation integration.
- Do not claim sole ownership of the hardware system.
- Limitations:
  - The project is archived and depends on physical sensors and controllers, so it has no standalone public demo.
  - The team repository is withheld from the portfolio until its public files are cleaned up.
- Architecture:
  1. Soil sensors
  2. Arduino
  3. Serial telemetry
  4. Spring Boot / Node.js / Express services
  5. MySQL
  6. React dashboard and controls

### Personal Portfolio Website

- Rename `jayaruuu_` to `Personal Portfolio Website` in public project content.
- Role: `Designer & Developer`
- Status: `This site`
- Demo: `https://jayaruuu.vercel.app`
- Source: `https://github.com/jayarpelicano01/jayaruuu_`
- Source label: `Source code`
- Source note: Public repository for this portfolio.
- Contribution focus:
  - Designed the editorial visual system.
  - Built the Next.js App Router application and reusable components.
  - Structured all project content through typed data.
  - Added metadata, responsive layouts, and reduced-motion handling already present in the repository.
- Remove claims of completed accessibility, measured performance, deploy readiness, or release quality.
- Limitations:
  - The site is actively maintained.
  - Contact hardening, broader accessibility repairs, image optimization, and automated release checks belong to later optimization phases.
- Architecture:
  1. Browser
  2. Next.js App Router
  3. React components
  4. Typed project data
  5. Tailwind CSS + Framer Motion
  6. Vercel

## 6. Implementation tasks

### Task 1: Migrate the project data contract

**Objective:** Introduce typed status, availability, contribution, limitation, and architecture fields before changing renderers.

**Files:**
- Modify: `data/projects.ts:1-31`

**Steps:**
1. Add `ProjectLink`, `ProjectStatus`, `ProjectAvailability`, and `ArchitectureStep`.
2. Replace the old link/status fields with `availability`.
3. Rename `caseStudy.role` to `caseStudy.contribution`.
4. Add required `caseStudy.limitations`.
5. Replace architecture strings with typed steps.
6. Add the ordered `featuredProjectSlugs` tuple.
7. Run `npm exec tsc -- --noEmit` and confirm expected renderer errors identify every migration point.

### Task 2: Rewrite all six project records

**Objective:** Replace unsupported claims and populate the new data contract using the approved content matrix.

**Files:**
- Modify: `data/projects.ts:33-516`

**Steps:**
1. Rewrite GSU and remove all percentage metrics.
2. Rewrite Faura-Farmer around credentials sign-in and current MVP limitations.
3. Rewrite CampusChoice around a public UI demo and evidence-safe implementation claims.
4. Rewrite URDS without adoption or user metrics.
5. Rewrite SmartFarming around the confirmed web-development lead role and team contribution.
6. Rename and rewrite the portfolio project without claiming future-phase quality work is complete.
7. Set exact demo and source links.
8. Add status notes, source notes, contributions, limitations, and architecture steps to all projects.

### Task 3: Separate formal experience from academic projects

**Objective:** Make the Experience section represent formal work only and present the single GSU internship without accordion behavior.

**Files:**
- Modify: `data/experience.ts:11-54,81-91`
- Modify: `components/experience/experience.tsx`
- Modify: `components/about/about.tsx:35-59`

**Steps:**
1. Keep only the GSU & ICT Department OJT entry in `experience`.
2. Remove CampusChoice and SmartFarming from the formal `experience` array. Their project records and SmartFarming honor remain elsewhere.
3. Replace both GSU 40% statements with evidence-safe workflow wording.
4. Rewrite `components/experience/experience.tsx` as a static server component with no `useState`, hover expansion, click handler, or accordion animation.
5. Display the GSU year, organization, formal role, highlight, and points directly.
6. Keep the exact SmartFarming award wording in `honors`, but do not present SmartFarming as employment.
7. Replace `shipped a production job request system` in About with `built and deployed a job request system during OJT`.
8. Describe CampusChoice and SmartFarming as academic projects in About, not professional experience.

### Task 4: Build the reusable architecture flow

**Objective:** Turn architecture strings into a readable and semantic diagram without adding image assets or dependencies.

**Files:**
- Create: `components/projects/architecture-flow.tsx`

**Required API:**

```tsx
import type { ArchitectureStep } from "@/data/projects";

export default function ArchitectureFlow({
  steps,
}: {
  steps: ArchitectureStep[];
}) {
  return (
    <ol className="mt-6 flex flex-col">
      {steps.map((step, index) => (
        <li key={`${step.label}-${index}`}>
          {/* number, node, detail, and connector */}
        </li>
      ))}
    </ol>
  );
}
```

**Acceptance:**
- Direct `<ol>` and `<li>` semantics remain intact.
- Each node displays a label and short detail.
- Visible connectors preserve the flow on mobile and desktop.
- Existing `Reveal` behavior may be reused; do not add motion.

### Task 5: Upgrade the case-study route

**Objective:** Render the new data contract consistently on all six pages.

**Files:**
- Modify: `app/projects/[slug]/page.tsx`

**Steps:**
1. Replace old demo/source field reads with `project.availability`.
2. Add Status to the role/year/stack summary.
3. Rename `My Role` to `My Contribution`.
4. Render `ArchitectureFlow`.
5. Add a `Limitations` section before Links.
6. Always render the status and source notes, even when no source link exists.
7. Render only approved demo/source links.
8. Keep async `params`, static generation, current gallery behavior, and metadata generation intact.

**Section order:**

1. Overview
2. The Problem
3. The Solution
4. My Contribution
5. Key Features
6. Technical Architecture
7. Development Challenges
8. Outcome
9. Limitations
10. Links and Availability

### Task 6: Update project-list rendering

**Objective:** Make `/projects` present honest status without changing the overall grid design.

**Files:**
- Modify: `app/projects/page.tsx`

**Steps:**
1. Display `project.availability.status` on each card.
2. Keep all six projects visible.
3. Preserve the current data order and numbering on `/projects`.
4. Confirm Faura-Farmer remains present.

### Task 7: Make Selected Work deterministic

**Objective:** Render the approved four projects in the exact approved order.

**Files:**
- Modify: `components/projects/selected-work.tsx`

**Implementation rule:** Do not use `.filter()` against a slug list because `.filter()` preserves `projects` order.

Use an explicit ordered lookup:

```ts
const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
const selected = featuredProjectSlugs.map((slug) => {
  const project = projectBySlug.get(slug);
  if (!project) throw new Error(`Missing featured project: ${slug}`);
  return project;
});
```

Pass a local homepage display number to each card so cards show `01` to `04` without changing `/projects` numbering.

Update the heading to:

```tsx
<SectionHeading index="03" title="Selected Work" meta="Four flagship projects" />
```

### Task 8: Reorder the homepage and section indexes

**Objective:** Lead with education and formal experience before showing selected projects.

**Files:**
- Modify: `app/page.tsx:18-24`
- Modify: `components/education/education.tsx:10`
- Modify: `components/experience/experience.tsx`
- Modify: `components/projects/selected-work.tsx`

**Steps:**
1. Render `<Education />`, then `<Experience />`, then `<SelectedWork />` after the hero.
2. Keep Education & Honors at index `01`.
3. Set Experience to index `02`.
4. Set Selected Work to index `03`.
5. Keep Tech Stack and About at indexes `04` and `05`.

### Task 9: Implement the approved name-first hero

**Objective:** Preserve the current visual identity while clarifying value, proof, and the next action.

**Files:**
- Modify: `data/site.ts:5-7`
- Modify: `components/hero/hero.tsx:18-107`

**Exact content:**

```text
Junior Software Developer · Philippines
Jay Ar Pelicano
Full-Stack Developer
I build practical full-stack systems for organizations replacing manual workflows.
Magna Cum Laude · Champion, UEP 2nd Arduino Innovator Challenge (2025)
View selected work
```

**Steps:**
1. Keep the name as the `<h1>`.
2. Replace the long tagline in `data/site.ts` with the approved value proposition.
3. Remove the secondary `Get in touch` CTA.
4. Keep only the `#work` CTA with exact visible text `View selected work`.
5. Replace the redundant full-name/handle line with the approved proof line.
6. Preserve portrait, Open to work indicator, motion reduction, responsive layout, and current visual treatment.

### Task 10: Reorder navigation

**Objective:** Match navigation priority with the recruiter-first page order.

**Files:**
- Modify: `components/navigation/navigation.tsx:9-14`

**Order:**

```ts
const links = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
```

Do not include the mobile focus-management work from Phase 3.

### Task 11: Run claim and link guard checks

**Objective:** Prove unsupported language and generic source links are gone.

Run read-only searches excluding `node_modules`, `.next`, `.git`, `.env*`, and the unrelated log.

Expected content search results:

- No `~40%`, `approximately 40%`, `roughly 40%`, or GSU outcome `40%` claim.
- Do not treat the navigation observer's CSS `-40%` root margin as a content claim.
- No generic project `source: "https://github.com/jayarpelicano01"` value.
- Exactly two project source repositories:
  - `GSU-General-Services-Unit`
  - `jayaruuu_`
- No positive claims for:
  - strict anonymity
  - high-traffic reliability
  - under-load performance
  - current Google/Facebook OAuth deployment
  - deploy-ready portfolio quality
  - complete accessibility
  - production election use

Qualified limitation text may mention missing audits or disabled providers.

### Task 12: Validate and review the complete batch

**Objective:** Verify static correctness, content integrity, links, routes, responsive layout, and scope discipline.

**Commands:**

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
```

**Expected:**
- Lint exits `0` with no new errors.
- Existing image warnings may remain, but no new warnings are introduced.
- TypeScript exits `0`.
- Build exits `0` and generates `/`, `/projects`, and all six project routes.

**External link checks:**

Confirm valid 2xx responses or expected redirects for:

- `https://jayaruuu.vercel.app`
- `https://generalservicesunitsystem.vercel.app/`
- `https://faura-farmer.vercel.app`
- `https://campus-choice.vercel.app`
- `https://urds-system-v2.vercel.app/urds/home`
- `https://github.com/jayarpelicano01/GSU-General-Services-Unit`
- `https://github.com/jayarpelicano01/jayaruuu_`

Do not invent replacement URLs when a link fails.

**Production runtime checks:**

1. Start `npm run start -- -p <available-port>` after the build.
2. Confirm `/`, `/projects`, and all six `/projects/<slug>` routes return `200`.
3. Confirm direct homepage section order:

```js
[...document.querySelectorAll("main > section")].map((element) => element.id)
```

Expected:

```js
["top", "education", "experience", "work", "skills", "about", "contact"]
```

4. Confirm exactly one hero anchor has text `View selected work` and `href="#work"`.
5. Confirm Selected Work titles appear in this exact order:
   - GSU
   - CampusChoice
   - SmartFarming
   - URDS
6. Confirm Education, Experience, and Work appear in that order before About in desktop and mobile navigation.
7. Confirm Experience displays exactly one formal entry: GSU & ICT Department.
8. Confirm the GSU experience content is fully visible without click, hover, or accordion controls.
9. Confirm each case study displays status, contribution, limitations, architecture, and source availability.
10. Confirm SmartFarming has no source or demo link.
11. Confirm CampusChoice has a Public UI Demo link.

**Responsive visual checks:**

- Mobile: approximately `375 × 812`
- Desktop: approximately `1440 × 900`
- No horizontal overflow.
- Name remains the hero's dominant element.
- The value proposition and proof remain readable without crowding the portrait.
- The CTA remains visible and unambiguous.
- Architecture flows remain ordered and legible.
- No regression in reduced-motion behavior.

## 7. Files expected to change

### Create

- `components/projects/architecture-flow.tsx`

### Modify

- `data/site.ts`
- `data/projects.ts`
- `data/experience.ts`
- `app/page.tsx`
- `app/projects/page.tsx`
- `app/projects/[slug]/page.tsx`
- `components/hero/hero.tsx`
- `components/navigation/navigation.tsx`
- `components/experience/experience.tsx`
- `components/projects/selected-work.tsx`
- `components/education/education.tsx`
- `components/about/about.tsx`

### Must not change

- `2026-08-16/log.md`
- `app/layout.tsx`
- `package.json`
- `.env*`
- project images
- contact files
- welcome intro
- gallery implementation
- animation dependencies
- GitHub Actions

## 8. Codex execution contract

Run one Codex CLI implementation process:

```bash
codex exec \
  --ephemeral \
  --sandbox workspace-write \
  -m gpt-5.6-luna \
  -c model_reasoning_effort=max \
  - < phase-1-implementation-prompt.txt
```

Codex must:

1. Read this plan and relevant project instructions.
2. Check git status before editing.
3. Preserve the unrelated log modification.
4. Implement only the listed tasks.
5. Avoid `.env` files and secret values.
6. Avoid commits and pushes.
7. Run lint, TypeScript, and build.
8. Report exact files changed and check results.

Hermes must then:

1. Review the diff for spec compliance.
2. Reject and correct any unsupported claim or extra scope.
3. Run the verification commands independently.
4. Start the production build and inspect real routes.
5. Run responsive browser checks.
6. Present the result to Jay Ar before committing.
7. Commit only after explicit approval.

## 9. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Data-model migration breaks renderers | Migrate type first, use TypeScript errors as a checklist, then run full build |
| Featured projects render in the wrong order | Use ordered lookup instead of `.filter()` |
| Homepage project numbers conflict with `/projects` | Use local `01` to `04` numbers on Selected Work cards |
| Copy still overclaims outcomes | Run claim searches and manually inspect all six records |
| Private or unsafe repositories leak into the site | Allow only two typed project source URLs |
| Status labels remain misleading | Require status and status note for every project |
| Architecture diagram harms semantics | Use `<ol>` and direct `<li>` elements with visible connectors |
| The batch drifts into later phases | Enforce the must-not-change list during diff review |
| External link changes after implementation | Recheck links immediately before commit and again before deployment |

## 10. Rollback boundary

If verification fails, revert only the Phase 1 files listed in this plan. Do not reset the repository, alter commit `8428a8e`, or touch `2026-08-16/log.md`.

No Phase 1 commit will be created until:

- Codex finishes the scoped batch.
- Hermes completes independent verification.
- Jay Ar reviews the result and explicitly approves the commit.

## 11. Definition of done

Phase 1 is complete when:

- The hero is name-first and has one CTA.
- The hero states what Jay Ar builds, who it is for, and the approved proof.
- Education appears first after the hero, followed by formal Experience, then Selected Work.
- Experience contains only the GSU & ICT Department OJT entry.
- The Experience section is static and fully visible without accordion behavior.
- The four approved flagship projects appear in the exact approved order.
- All six case studies contain accurate status, contribution, architecture, limitations, and source availability.
- GSU has no unsupported percentage metric.
- Faura-Farmer does not claim deployed social OAuth.
- CampusChoice does not claim audited security, strict anonymity, or tested load reliability.
- SmartFarming reflects the confirmed lead web-development role without claiming sole system ownership.
- Only GSU and the portfolio expose project source links.
- All routes build and render.
- Lint, TypeScript, build, link checks, and browser checks pass.
- No files outside the approved scope change.
