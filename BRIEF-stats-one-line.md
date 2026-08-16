# Brief for OpenCode: Stats One-Line Layout

## Goal
Show Total Contributions, Active Days, Longest Streak ALL IN ONE LINE only. Make them bigger.

## What to Change

### 1. Stats Layout (components/skills/github-activity.tsx)
Replace the three separate stat blocks with a SINGLE ROW using flexbox:
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

Remove the old `grid grid-cols-3 gap-6 sm:max-w-[560px]` container.

Run npm run build at the end.