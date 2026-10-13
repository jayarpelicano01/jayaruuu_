# CI/CD Pipeline

Simple guide to how checks and deploys work here.

## The short version

- **CI = robot checks your code.** Runs on every push to `main` and every pull request.
- **CD = robot deploys your code.** Vercel deploys `main` automatically. You do nothing extra.

## What runs in CI

File: `.github/workflows/ci.yml`

1. `npm ci` — clean install, same as your lockfile.
2. `npm run lint` — finds code style and error risks.
3. `npx tsc --noEmit` — finds type errors without building.
4. `npm run build` — proves Vercel will not fail to build.

Green = all passed. Red = fix before merge.

## What Vercel does

- Push to `main` with green CI -> live at `jayaruuu.vercel.app`.
- Pull request -> preview link, no live change.
- No extra config. CI never deploys, it only checks.

## If CI is red

1. Click the failed check in GitHub.
2. See which step failed: lint, typecheck, or build.
3. Fix it on your computer, push again.

Common fixes:

- Lint fail -> run `npm run lint` locally.
- Type fail -> run `npx tsc --noEmit` locally.
- Build fail -> run `npm run build` locally (only when asked, it is slow).

## Contact form note

The form uses `RESEND_API_KEY`.

- Local: put it in `.env.local`, never commit it.
- Live: set it in Vercel env settings.
- CI does not need it. Do not put keys in CI logs.

## Files to know

- `.github/workflows/ci.yml` — the checks.
- `app/api/contact/route.ts` — the only backend edge.
- `data/` — site content, not part of CI/CD.
