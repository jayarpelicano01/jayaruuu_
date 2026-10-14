# AGENTS.md

## Permission
IF IN PLAN MODE DONT DARE TO DO ANY WRITING, ASK PERMISSION TO EXECUTE A TODO LIST BEFORE DOING SO

## Commands
- `npm install`, `npm run dev` (http://localhost:3000), `npm run build`, `npm run start`, `npm run lint`
- Verify with `npm run lint` + `npx tsc --noEmit`. No test script, no CI.
- Do not auto-run `npm run build`; suggest it. Known pre-existing `<img>` warnings in `app/opengraph-image.tsx` and `components/ui/accordion-gallery/AccordionGallery.jsx` stay untouched unless asked.
- Contact form needs `RESEND_API_KEY` in `.env.local` (and Vercel env). Never read `.env*`.

## Structure
- `app/`: `page.tsx` sections, `layout.tsx` fonts + metadata, `globals.css` tokens, `projects/[slug]/page.tsx`, `api/contact/route.ts`, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`.
- `components/<feature>/*.tsx`, `components/ui/*` (`cursor`, `theme-toggle`, `welcome-intro`, `reveal`, `section-heading`).
- `data/`: `site.ts` identity/links, `projects.ts` (`Project` type, `getProject`, `featuredProjectSlugs`). Single content source.
- `public/images/projects/` + gallery subfolders. `next.config.ts` is empty default.

## Conventions
- Server Components default. `"use client"` only for `navigation`, `hero`, `contact` form, `cursor`, `theme-toggle`, `welcome-intro`.
- Tailwind v4 via `@tailwindcss/postcss`, no `tailwind.config`. Use tokens `bg/ink/muted/line/paper` from `app/globals.css`. No ad-hoc hex.
- Dark mode via `.dark` class + `localStorage`, default dark in `app/layout.tsx`. Fonts via `next/font` variables (Space Grotesk, JetBrains Mono, Cormorant).
- Use `next/image`, `next/font`, `next/link`, alias `@/*`. TypeScript strict, functional components.
- Add projects via `.opencode/commands/add-project.md`: keep `Project` type intact, set status enum (`Live demo` / `Public demo` / `Public UI demo` / `Archived` / `This site`) + `statusNote`/`sourceNote`/`limitations`, add image + alt + gallery, never invent a live URL.
- Contact API (`app/api/contact/route.ts`, `runtime nodejs`): validates name/email/message, default `from onboarding@resend.dev` only delivers to own account; update `from` with verified domain for prod.

## Guards
- Native `build` agent only (see `opencode.json` `default_agent` + `agents.build`, with `subagent` allow for native `explore`/`general`). Role detail lives in `.agents/agents/` (`01-portfolio-builder`, `02-content-curator`, `03-design-reviewer`, `04-refactor-architect`) as single source — `/pm` injects one file into one native subagent per task, worker commands (`/build-ui`, `/add-project`, `/review-ui`, `/refactor`) read the same file on implementation.
- `opencode.json`: `edit ask`, `.env*` deny read, `git push` deny, `rm -rf` deny. No auto-push.

## Taste
- Concise solutions. No over-engineering, no redundancy unless it helps usability. Least privilege with data.
- Match existing style. Review files before refactor, flag oversized files and blast radius. Run major changes by user first.
- Comments one-liner, no emojis. Markdown files use kebab-case names. Confused? Write `docs/activity-log.md` and re-read.

## Response
- Beginner-level terms, short and direct. Start every response with `Jayar`.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
