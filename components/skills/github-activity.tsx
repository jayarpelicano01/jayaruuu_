type ContributionDay = {
  contributionCount: number;
  date: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

type GitHubUser = {
  weeks: Week[];
};

const USERNAME = "jayarpelicano01";
const GRID_ROWS = 7;
const CELL = 20;
const GAP = 5;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const LEVELS = [
  "var(--color-line)",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

const height = GRID_ROWS * CELL + (GRID_ROWS - 1) * GAP;

function parseDate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatMonthYear(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function ContributionGraph({ weeks }: { weeks: Week[] }) {
  // Build a map of date -> count and find first/last contribution dates
  const dateMap = new Map<string, number>();
  let first: Date | null = null;
  let latest: Date | null = null;

  for (const week of weeks) {
    for (const day of week.contributionDays) {
      const date = parseDate(day.date);
      dateMap.set(day.date, day.contributionCount);
      if (day.contributionCount > 0) {
        if (!first || date < first) first = date;
        if (!latest || date > latest) latest = date;
      }
    }
  }

  if (!first || !latest) return null;

  // Align grid to full weeks (Sunday start) spanning first to latest
  const start = new Date(first);
  start.setDate(start.getDate() - start.getDay());
  const end = new Date(latest);
  end.setDate(end.getDate() + (6 - end.getDay()));

  const dayDiff = Math.round((end.getTime() - start.getTime()) / 86400000);
  const numWeeks = Math.floor(dayDiff / 7) + 1;
  const width = numWeeks * CELL + (numWeeks - 1) * GAP;

  // Generate squares for every day in the dynamic range
  const squares = [];
  for (let x = 0; x < numWeeks; x++) {
    for (let y = 0; y < GRID_ROWS; y++) {
      const date = new Date(start);
      date.setDate(date.getDate() + x * 7 + y);
      const dateStr = toISO(date);
      const count = dateMap.get(dateStr) ?? 0;
      const level = getLevel(count);

      squares.push(
        <rect
          key={`${x}-${y}`}
          x={x * (CELL + GAP)}
          y={y * (CELL + GAP)}
          width={CELL}
          height={CELL}
          rx={2}
          fill={LEVELS[level]}
          data-tooltip={`${dateStr}: ${count} contributions`}
        />
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Contribution graph"
      className="h-auto w-full max-w-[100%]"
    >
      {squares}
    </svg>
  );
}

async function getGitHubData(): Promise<GitHubUser | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const query = `query {
    user(login: "${USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 86400 }, // Revalidate daily
    });

    if (!res.ok) return null;
    
    const data = await res.json();
    const user = data?.data?.user;
    if (!user) return null;

    return {
      weeks: user.contributionsCollection.contributionCalendar.weeks,
    };
  } catch {
    return null;
  }
}

export default async function GitHubActivity() {
  const stats = await getGitHubData();

  const weeks = stats?.weeks ?? [];

  let totalContributions = 0;
  let activeDays = 0;
  let longestStreak = 0;
  let currentStreak = 0;
  let first: Date | null = null;
  let latest: Date | null = null;

  for (const week of weeks) {
    for (const day of week.contributionDays) {
      totalContributions += day.contributionCount;
      const date = parseDate(day.date);
      if (day.contributionCount > 0) {
        activeDays++;
        currentStreak++;
        if (currentStreak > longestStreak) longestStreak = currentStreak;
        if (!first || date < first) first = date;
        if (!latest || date > latest) latest = date;
      } else {
        currentStreak = 0;
      }
    }
  }

  const rangeLabel =
    first && latest
      ? `${formatMonthYear(first)} — ${formatMonthYear(latest)}`
      : null;

  return (
    <div className="mt-20 border border-line p-8 lg:px-16">
      <div className="flex items-baseline justify-between">
        <h3 className="font-mono text-lg uppercase tracking-widest text-muted">
          GitHub Activity
        </h3>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-base text-muted transition-colors hover:text-ink"
        >
          github.com/{USERNAME}
        </a>
      </div>

      <div className="mt-6 flex items-center gap-8">
        <div>
          <p className="text-3xl tracking-tight text-ink">
            {stats ? totalContributions : "—"}
          </p>
          <p className="text-lg uppercase tracking-widest text-muted">
            Total Contributions
          </p>
        </div>
        <div>
          <p className="text-3xl tracking-tight text-ink">
            {stats ? activeDays : "—"}
          </p>
          <p className="text-lg uppercase tracking-widest text-muted">
            Active Days
          </p>
        </div>
        <div>
          <p className="text-3xl tracking-tight text-ink">
            {stats ? longestStreak : "—"}
          </p>
          <p className="text-lg uppercase tracking-widest text-muted">
            Longest Streak
          </p>
        </div>
      </div>

      {weeks.length > 0 && (
        <div className="mt-10">
          <p className="mb-3 font-mono text-base text-muted">
            {rangeLabel}
          </p>
          <ContributionGraph weeks={weeks} />
          <div className="mt-3 flex items-center justify-end gap-2 font-mono text-xl text-muted">
            <span>Less</span>
            {LEVELS.map((level) => (
              <span
                key={level}
                className="h-3 w-3 rounded-[2px]"
                style={{ backgroundColor: level }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      )}
    </div>
  );
}
