# Spec: Stats Labels in One Line

## Objective
Show Total Contributions, Active Days, Longest Streak ALL IN ONE LINE only. Make them bigger.

## Success Criteria
- [ ] Three stats show in ONE LINE (not separate paragraphs)
- [ ] Fonts are bigger than before
- [ ] Layout maintains responsiveness
- [ ] Build passes: `npm run build`

## Changes

### 1. Stats Container (components/skills/github-activity.tsx)
Replace the three separate `<div>` blocks with a SINGLE row:
```tsx
<div className="flex items-center gap-8">
  <div>
    <p className="font-mono text-2xl tracking-tight text-ink">
      {stats?.totalContributions ?? "—"}
    </p>
    <p className="font-mono text-sm uppercase tracking-widest text-muted">
      Total Contributions
    </p>
  </div>
  <div>
    <p className="font-mono text-2xl tracking-tight text-ink">
      {stats?.activeDays ?? "—"}
    </p>
    <p className="font-mono text-sm uppercase tracking-widest text-muted">
      Active Days
    </p>
  </div>
  <div>
    <p className="font-mono text-2xl tracking-tight text-ink">
      {stats?.longestStreak ?? "—"}
    </p>
    <p className="font-mono text-sm uppercase tracking-widest text-muted">
      Longest Streak
    </p>
  </div>
</div>
```

### 2. Grid Removed
Remove the `grid grid-cols-3 gap-6 sm:max-w-[560px]` container since we're now in one line.

Run npm run build at the end.