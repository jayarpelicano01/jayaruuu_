export type ProjectLink = {
  href: string
  label: string
}

export type ProjectStatus =
  | "Live demo"
  | "Public demo"
  | "Public UI demo"
  | "Archived"
  | "This site"

export type ProjectAvailability = {
  status: ProjectStatus
  statusNote: string
  demo?: ProjectLink
  source?: ProjectLink
  sourceNote: string
}

export type ArchitectureStep = {
  label: string
  detail: string
}

export type Project = {
  slug: string
  number: string
  title: string
  category: string
  description: string
  shortDescription?: string
  role: string
  year: string
  stack: string[]
  image: string
  imageAlt: string
  availability: ProjectAvailability
  highlights: string[]
  gallery: { image: string; alt: string }[]
  caseStudy: {
    overview: string
    problem: string[]
    solution: string[]
    contribution: string[]
    features: string[]
    architecture: ArchitectureStep[]
    challenges: { title: string; detail: string }[]
    outcome: string[]
    limitations: string[]
  }
}

export const projects: Project[] = [
  {
    slug: "gsu-system",
    number: "01",
    title: "GSU Job Request and Job Ordering System",
    category: "University Management Platform",
    description:
      "A full-stack job request and ordering system for the university's General Services Unit.",
    shortDescription:
      "Digitized the university's General Services Unit workflows, from job requests and purchase requisitions to accomplishment reports.",
    role: "Full-Stack Developer",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL"],
    image: "/images/projects/gsu.png",
    imageAlt: "GSU System dashboard interface",
    availability: {
      status: "Live demo",
      statusNote: "Public review deployment for the workflow.",
      demo: {
        href: "https://generalservicesunitsystem.vercel.app/",
        label: "Live demo",
      },
      source: {
        href: "https://github.com/jayarpelicano01/GSU-General-Services-Unit",
        label: "Frontend source",
      },
      sourceNote:
        "The frontend repository is public; the backend repository remains private.",
    },
    highlights: [
      "Job request workflow",
      "Generated reports",
      "MySQL records",
    ],
    gallery: [
      { image: "/images/projects/gallery/gsusystem/landingpage1.png", alt: "GSU System landing page" },
      { image: "/images/projects/gallery/gsusystem/landingpage2.png", alt: "GSU System landing page variant" },
      { image: "/images/projects/gallery/gsusystem/landingpage3.png", alt: "GSU System landing page variant" },
      { image: "/images/projects/gallery/gsusystem/loginpage.png", alt: "GSU System login page" },
      { image: "/images/projects/gallery/gsusystem/dashboard.png", alt: "GSU System dashboard" },
      { image: "/images/projects/gallery/gsusystem/jobrequestsection.png", alt: "GSU System job request section" },
      { image: "/images/projects/gallery/gsusystem/accomplishmentreport.png", alt: "GSU System accomplishment report" },
      { image: "/images/projects/gallery/gsusystem/pr-ris-print.png", alt: "GSU System PR and RIS print view" },
      { image: "/images/projects/gallery/gsusystem/inspectionprint.png", alt: "GSU System inspection print view" },
      { image: "/images/projects/gallery/gsusystem/lightmode.png", alt: "GSU System light mode" },
    ],
    caseStudy: {
      overview:
        "GSU System is a full-stack job request and ordering system developed during my OJT internship with the University of the Eastern Philippines' General Services Unit and ICT Department. It brings job requests, procurement records, and accomplishment reporting into one workflow.",
      problem: [
        "The General Services Unit relied on paper-based and manual processes for job requests and procurement.",
        "Job orders, requisitions, and accomplishment reports were slow to track across separate steps.",
        "The department needed a clearer way to keep records connected from request to report.",
      ],
      solution: [
        "I built a full-stack job request and ordering system to connect the core clerical workflows.",
        "The system generates job orders and accomplishment reports from recorded request and procurement details.",
        "I built the interface around the department's working processes so staff can review and manage records in one place.",
      ],
      contribution: [
        "Built the Next.js and TypeScript interface.",
        "Built and deployed the Node.js, Express, and MySQL application flow.",
        "Modeled job requests, inspections, procurement records, job orders, and accomplishment reports.",
        "Implemented generated forms and reporting workflows.",
      ],
      features: [
        "Job request and ordering workflow",
        "Job order generation",
        "Accomplishment report generation",
        "Role-based access for staff and administrators",
        "Purchase Request and Requisition and Issue Slip records",
        "Responsive data management interface",
      ],
      architecture: [
        { label: "Next.js + TypeScript UI", detail: "Responsive screens for staff and administrators." },
        { label: "REST API", detail: "Connects interface actions to the application workflow." },
        { label: "Node.js + Express services", detail: "Processes requests, inspections, procurement, and reports." },
        { label: "MySQL records", detail: "Stores the connected operational records." },
        { label: "Generated job orders and accomplishment reports", detail: "Turns recorded workflow data into usable documents." },
      ],
      challenges: [
        {
          title: "Mapping the department workflow",
          detail:
            "I shaped the data model around job requests, inspections, procurement records, job orders, and accomplishment reports so each stage stayed connected.",
        },
        {
          title: "Generating consistent documents",
          detail:
            "I connected recorded request and procurement details to generated job orders and accomplishment reports.",
        },
        {
          title: "Connecting the full stack",
          detail:
            "I linked the Next.js and TypeScript interface to Node.js, Express, and MySQL services for a complete workflow.",
        },
      ],
      outcome: [
        "Automated job order generation and accomplishment reporting, reducing reliance on manual record tracking and improving workflow consistency.",
        "Built and deployed the workflow during the OJT period.",
      ],
      limitations: [
        "The workflow reflects requirements gathered during the OJT period and would need adaptation for other offices.",
        "The public deployment is a review environment and is not presented as proof of current department-wide operation.",
      ],
    },
  },
  {
    slug: "faura-farmer",
    number: "02",
    title: "Faura-Farmer: Personal Finance Tracker",
    category: "Personal Finance Tracker",
    description:
      "A full-stack personal finance tracker for manually recorded income and expenses.",
    shortDescription:
      "A personal finance app with credentials sign-in, user-scoped records, and Recharts dashboards.",
    role: "Solo Full-Stack Developer",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Auth.js", "Recharts"],
    image: "/images/projects/faura-farmer.png",
    imageAlt: "Faura-Farmer finance dashboard",
    availability: {
      status: "Live demo",
      statusNote: "Public deployment with credentials sign-in for review.",
      demo: {
        href: "https://faura-farmer.vercel.app",
        label: "Live demo",
      },
      sourceNote: "The source repository is private.",
    },
    highlights: [
      "Credentials sign-in",
      "User-scoped data",
      "Recharts dashboards",
    ],
    gallery: [
      { image: "/images/projects/gallery/faura-farmer/login%20page.png", alt: "Faura-Farmer login page" },
      { image: "/images/projects/gallery/faura-farmer/dashboard.png", alt: "Faura-Farmer dashboard" },
      { image: "/images/projects/gallery/faura-farmer/transaction%20page.png", alt: "Faura-Farmer transaction page" },
      { image: "/images/projects/gallery/faura-farmer/reports%20page.png", alt: "Faura-Farmer reports page" },
      { image: "/images/projects/gallery/faura-farmer/Faura%20dark%20mode.png", alt: "Faura-Farmer dark mode" },
    ],
    caseStudy: {
      overview:
        "Faura-Farmer is a full-stack personal finance web application for manually tracking income and expenses. It combines a PostgreSQL and Prisma data model with credentials sign-in, user-scoped records, and Recharts dashboards.",
      problem: [
        "Manual finance tracking makes it difficult to see where money goes over time.",
        "Accounts, transactions, and categories need to stay scoped to the person using them.",
        "Spending patterns are easier to understand through summaries and visual breakdowns than through transaction lists alone.",
      ],
      solution: [
        "I built a finance tracker where each signed-in user can manage their own accounts, transactions, and categories.",
        "Auth.js credentials sign-in supports email and password access for the current public deployment.",
        "Recharts dashboards show balance summaries, income and expense breakdowns, monthly trends, and spending by category.",
      ],
      contribution: [
        "Designed the PostgreSQL and Prisma data model.",
        "Built account, transaction, category, search, filter, and dashboard flows.",
        "Implemented Auth.js credentials sign-in and user-scoped data access.",
        "Built Recharts analytics.",
      ],
      features: [
        "Credentials sign-in",
        "User-scoped accounts and transactions",
        "Customizable financial accounts",
        "Transactions with hierarchical categories",
        "Interactive Recharts dashboards",
        "Search and filtering across transactions",
      ],
      architecture: [
        { label: "Next.js + React UI", detail: "Screens for accounts, transactions, and dashboard views." },
        { label: "Auth.js credentials sign-in", detail: "Handles the current email and password access flow." },
        { label: "Next.js API routes", detail: "Carries user-scoped application requests." },
        { label: "Prisma ORM", detail: "Maps application records to the relational model." },
        { label: "PostgreSQL", detail: "Stores users, accounts, transactions, and categories." },
      ],
      challenges: [
        {
          title: "Keeping records user-scoped",
          detail:
            "I carried the authenticated user through account, transaction, and category queries so records stay separated by account.",
        },
        {
          title: "Building a useful finance model",
          detail:
            "I modeled accounts, transactions, and hierarchical categories in Prisma and PostgreSQL to support both entry and reporting.",
        },
        {
          title: "Turning records into insight",
          detail:
            "I shaped the aggregation logic behind the Recharts dashboards, search, and filters so the interface answers common finance questions.",
        },
      ],
      outcome: [
        "Built and deployed the current MVP for manual income and expense tracking.",
        "Created a foundation for later bank sync, mobile support, and offline behavior, which are outside the current MVP.",
      ],
      limitations: [
        "The public deployment currently exposes credentials sign-in; optional social providers are not enabled.",
        "Transactions are entered manually. Bank sync, mobile support, and offline behavior are outside the current MVP.",
      ],
    },
  },
  {
    slug: "campuschoice",
    number: "03",
    title: "CampusChoice",
    category: "Election Workflow Demo",
    description:
      "A public UI demo of a student-election workflow originally designed for local deployment.",
    shortDescription:
      "A public interface demo covering voter access, election setup, administration, and result tallying.",
    role: "Full-Stack Developer",
    year: "2026",
    stack: ["JavaScript", "HTML/CSS", "MySQL"],
    image: "/images/projects/campuschoice.png",
    imageAlt: "CampusChoice voting interface",
    availability: {
      status: "Public UI demo",
      statusNote:
        "The public link presents the interface; the original system was designed for local deployment.",
      demo: {
        href: "https://campus-choice.vercel.app",
        label: "Public UI demo",
      },
      sourceNote: "The source repository is private.",
    },
    highlights: [
      "Voting workflow",
      "Election setup",
      "MySQL records",
    ],
    gallery: [
      { image: "/images/projects/gallery/campuschoice/landingpage.png", alt: "CampusChoice landing page" },
      { image: "/images/projects/gallery/campuschoice/loginpage.png", alt: "CampusChoice login page" },
      { image: "/images/projects/gallery/campuschoice/dashboard.png", alt: "CampusChoice dashboard" },
      { image: "/images/projects/gallery/campuschoice/candidatelist.png", alt: "CampusChoice candidate list" },
      { image: "/images/projects/gallery/campuschoice/electionconfig.png", alt: "CampusChoice election configuration" },
      { image: "/images/projects/gallery/campuschoice/resultspage.png", alt: "CampusChoice results page" },
    ],
    caseStudy: {
      overview:
        "CampusChoice is a full-stack electronic voting project originally designed for student elections at the University of the Eastern Philippines. This portfolio page presents a public UI demo of the workflow; the original system was designed for local deployment.",
      problem: [
        "Manual counting made election workflows slow and difficult to coordinate.",
        "Voter access codes and ballot workflows needed careful handling across the application.",
        "Election administrators needed clear setup, candidate, and result views.",
      ],
      solution: [
        "I built the voting and administration interfaces for the election workflow.",
        "I implemented backend and MySQL workflows for voters, access codes, election setup, and result tallying.",
        "The implementation used cryptographic access-code generation, hashing, and parameterized database operations without presenting the project as formally audited.",
      ],
      contribution: [
        "Built the frontend voting and administration interfaces.",
        "Implemented backend and MySQL workflows for voters, access codes, election setup, and result tallying.",
        "Used cryptographic access-code generation, hashing, and parameterized database operations.",
      ],
      features: [
        "Voter access-code workflow",
        "Election setup interface",
        "Candidate and administration views",
        "Result tallying workflow",
        "Normalized MySQL records",
      ],
      architecture: [
        { label: "HTML/CSS/JavaScript UI", detail: "Public-facing voting and administration screens." },
        { label: "Voter and election workflow", detail: "Coordinates access, setup, voting, and results." },
        { label: "Application backend", detail: "Handles the application rules and database requests." },
        { label: "MySQL", detail: "Stores voters, elections, access codes, and result records." },
      ],
      challenges: [
        {
          title: "Handling access codes",
          detail:
            "I used generated and hashed access codes with parameterized database operations for the voter access flow.",
        },
        {
          title: "Connecting the election workflow",
          detail:
            "I linked election setup, candidate records, voting screens, and result tallying across the interface and backend.",
        },
        {
          title: "Keeping the demo honest",
          detail:
            "I present the public deployment as a UI demo because the original system was designed for local deployment and has not had an independent security or load review.",
        },
      ],
      outcome: [
        "Built the voting and administration workflow represented in the public UI demo.",
        "Implemented election setup, access-code, and result tallying flows.",
      ],
      limitations: [
        "The public link presents the interface; the original system was designed for local deployment.",
        "The project has not undergone an independent security audit or formal load test.",
      ],
    },
  },
  {
    slug: "urds-system",
    number: "04",
    title: "URDS",
    category: "University Records & Documents System",
    description: "A full-stack university records and document workflow system.",
    shortDescription:
      "A records and document workflow system with a Node.js and Express API backed by MySQL.",
    role: "Full-Stack Developer",
    year: "2025",
    stack: ["Node.js", "Express.js", "MySQL"],
    image: "/images/projects/urds.png",
    imageAlt: "URDS System interface",
    availability: {
      status: "Public demo",
      statusNote:
        "The public deployment demonstrates the interface and workflow, not verified institutional adoption.",
      demo: {
        href: "https://urds-system-v2.vercel.app/urds/home",
        label: "Public demo",
      },
      sourceNote: "No public source repository is available.",
    },
    highlights: [
      "API development",
      "Document workflows",
      "MySQL records",
    ],
    gallery: [
      { image: "/images/projects/gallery/urds/landingpage.png", alt: "URDS landing page" },
      { image: "/images/projects/gallery/urds/loginpage.png", alt: "URDS login page" },
      { image: "/images/projects/gallery/urds/dashboard.png", alt: "URDS dashboard" },
      { image: "/images/projects/gallery/urds/about.png", alt: "URDS about page" },
    ],
    caseStudy: {
      overview:
        "URDS is a full-stack university records and documents system built with Node.js, Express.js, and MySQL. It organizes records and document workflows through a REST API and a public interface demo.",
      problem: [
        "University records and documents were scattered and laborious to manage.",
        "Staff needed a centralized, structured way to track records and document workflows.",
      ],
      solution: [
        "I built a full-stack platform with a Node.js and Express.js backend and a MySQL database.",
        "I exposed consistent REST APIs and designed the records model around the document workflow.",
        "I built the interface represented in the public demo.",
      ],
      contribution: [
        "Built Node.js and Express API routes and controllers.",
        "Designed the MySQL records and document workflow.",
        "Built the interface represented in the public demo.",
      ],
      features: [
        "REST API endpoints",
        "Records and document management",
        "Structured MySQL records",
        "Document workflow support",
      ],
      architecture: [
        { label: "Records UI", detail: "Interface for viewing and working with records." },
        { label: "REST API", detail: "Provides consistent routes for record operations." },
        { label: "Node.js + Express", detail: "Runs the application routes and controllers." },
        { label: "MySQL", detail: "Stores the records and document workflow data." },
      ],
      challenges: [
        {
          title: "Designing the API",
          detail:
            "I structured routes and controllers to keep the system cohesive across record operations.",
        },
        {
          title: "Structuring the records",
          detail:
            "I modeled relations so records and document workflows stayed organized and consistent.",
        },
      ],
      outcome: [
        "Built the records and document workflow represented in the public demo.",
        "Implemented the API routes, controllers, and MySQL data model for the system.",
      ],
      limitations: [
        "The public deployment demonstrates the interface and workflow, not verified institutional adoption.",
        "No public source repository is available for recruiter review.",
      ],
    },
  },
  {
    slug: "smart-farming",
    number: "05",
    title: "SmartFarming",
    category: "IoT Agricultural Monitoring System",
    description:
      "An IoT agriculture project connecting soil sensors, Arduino telemetry, backend services, and a React dashboard.",
    shortDescription:
      "A team IoT project combining sensor telemetry, irrigation controls, and a web dashboard.",
    role: "Lead Full-Stack Web Developer",
    year: "2025",
    stack: ["React", "Java", "Spring Boot", "Node.js", "Arduino", "C++", "MySQL"],
    image: "/images/projects/smart-farming.png",
    imageAlt: "Smart Farming IoT dashboard",
    availability: {
      status: "Archived",
      statusNote: "Archived project with no standalone public demo.",
      sourceNote:
        "The team repository is not linked while its public files are being cleaned up.",
    },
    highlights: [
      "IoT + Arduino",
      "Sensor telemetry",
      "Team award project",
    ],
    gallery: [
      { image: "/images/projects/gallery/smartfarming/dashboard-smartfarming.png", alt: "Smart Farming dashboard" },
      { image: "/images/projects/gallery/smartfarming/dashboard-smartfarming2.png", alt: "Smart Farming dashboard variant" },
      { image: "/images/projects/gallery/smartfarming/dashboard-smartfarming3.png", alt: "Smart Farming dashboard variant" },
      { image: "/images/projects/gallery/smartfarming/dashboard-smartfarming-nightmode.png", alt: "Smart Farming dashboard in night mode" },
      { image: "/images/projects/gallery/smartfarming/charts-smartfarming.png", alt: "Smart Farming analytics charts" },
      { image: "/images/projects/gallery/smartfarming/records-smartfarming.png", alt: "Smart Farming records" },
      { image: "/images/projects/gallery/smartfarming/userrecords-smartfarming.png", alt: "Smart Farming user records" },
      { image: "/images/projects/gallery/smartfarming/champion-picture.jpg", alt: "Team with Smart Farming at the Arduino challenge" },
      { image: "/images/projects/gallery/smartfarming/champion-picture2.jpg", alt: "Smart Farming champion award photo" },
    ],
    caseStudy: {
      overview:
        "SmartFarming is an IoT agriculture project that connects soil monitoring and irrigation hardware to a web application. I led the web development layer and worked with the team on sensor integration. Champion, UEP 2nd Arduino Innovator Challenge (2025).",
      problem: [
        "Farmers lacked timely insight into soil nutrient and moisture levels.",
        "Manual irrigation was difficult to coordinate with changing soil conditions.",
        "Sensor readings needed to be captured, stored, and visualized in one place.",
      ],
      solution: [
        "I led development of the React dashboard and web application layer for the IoT workflow.",
        "I built backend services that received and stored sensor telemetry through API and database workflows.",
        "I collaborated with the team on Arduino sensor and irrigation integration.",
      ],
      contribution: [
        "Led development of the React dashboard and web application layer.",
        "Built backend services that received and stored sensor telemetry.",
        "Connected serial sensor readings to API and database workflows.",
        "Collaborated with the team on Arduino sensor and irrigation integration.",
      ],
      features: [
        "Soil nutrient and moisture monitoring",
        "Threshold-based irrigation workflow",
        "Arduino sensor telemetry",
        "Irrigation control interface",
        "Dashboard data visualization",
      ],
      architecture: [
        { label: "Soil sensors", detail: "Capture soil conditions for the monitoring workflow." },
        { label: "Arduino", detail: "Reads sensor inputs and supports controller behavior." },
        { label: "Serial telemetry", detail: "Carries readings from hardware into the application layer." },
        { label: "Spring Boot / Node.js / Express services", detail: "Receives, processes, and stores telemetry." },
        { label: "MySQL", detail: "Stores sensor records and application data." },
        { label: "React dashboard and controls", detail: "Visualizes readings and exposes irrigation controls." },
      ],
      challenges: [
        {
          title: "Reading serial sensor data",
          detail:
            "I connected serial sensor readings from the Arduino to the application workflow before forwarding them to backend services.",
        },
        {
          title: "Connecting telemetry to the backend",
          detail:
            "I wired backend services to receive hardware telemetry and persist it consistently in MySQL.",
        },
        {
          title: "Coordinating hardware and web work",
          detail:
            "I worked with the team to connect the React dashboard and web services with the Arduino sensor and irrigation pieces.",
        },
      ],
      outcome: [
        "Led the web development layer of a team IoT agriculture project.",
        "Connected sensor telemetry to backend, database, and dashboard workflows.",
        "Champion, UEP 2nd Arduino Innovator Challenge (2025).",
      ],
      limitations: [
        "The project is archived and depends on physical sensors and controllers, so it has no standalone public demo.",
        "The team repository is withheld from the portfolio until its public files are cleaned up.",
      ],
    },
  },
  {
    slug: "portfolio",
    number: "06",
    title: "Personal Portfolio Website",
    category: "Developer Portfolio Website",
    description:
      "The website you are viewing, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    shortDescription:
      "An editorial portfolio that presents project work through typed case-study data.",
    role: "Designer & Developer",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio.png",
    imageAlt: "This portfolio website",
    availability: {
      status: "This site",
      statusNote: "Current portfolio deployment.",
      demo: {
        href: "https://jayaruuu.vercel.app",
        label: "Visit site",
      },
      source: {
        href: "https://github.com/jayarpelicano01/jayaruuu_",
        label: "Source code",
      },
      sourceNote: "Public repository for this portfolio.",
    },
    highlights: [
      "Editorial design",
      "Typed case studies",
      "Responsive layouts",
    ],
    gallery: [
      { image: "/images/projects/gallery/portfolio/portfolio1.png", alt: "Portfolio homepage" },
      { image: "/images/projects/gallery/portfolio/portfolio2.png", alt: "Portfolio project section" },
      { image: "/images/projects/gallery/portfolio/portfolio3.png", alt: "Portfolio case study page" },
      { image: "/images/projects/gallery/portfolio/lightmode.png", alt: "Portfolio in light mode" },
    ],
    caseStudy: {
      overview:
        "This portfolio is an editorial developer website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It presents project work as case studies through typed data.",
      problem: [
        "Recruiters need to quickly understand what a junior developer can build.",
        "A portfolio should make the work and the developer's contribution easy to review.",
      ],
      solution: [
        "I built the site so identity, role, project proof, and availability are readable in a short scan.",
        "I used a monochrome visual system with strong typography and clear project sections to keep attention on the work.",
      ],
      contribution: [
        "Designed the editorial visual system.",
        "Built the Next.js App Router application and reusable components.",
        "Structured all project content through typed data.",
        "Added metadata, responsive layouts, and reduced-motion handling already present in the repository.",
      ],
      features: [
        "Editorial monochrome design system",
        "Typed project case studies",
        "Responsive case-study layouts",
        "Metadata and Open Graph configuration",
        "Reduced-motion handling",
        "Restrained animated interactions",
      ],
      architecture: [
        { label: "Browser", detail: "Presents the portfolio interface and project routes." },
        { label: "Next.js App Router", detail: "Renders the homepage and static case-study routes." },
        { label: "React components", detail: "Composes reusable sections, cards, and project views." },
        { label: "Typed project data", detail: "Keeps project content and availability consistent." },
        { label: "Tailwind CSS + Framer Motion", detail: "Provides the visual system and existing motion treatment." },
        { label: "Vercel", detail: "Hosts the current portfolio deployment." },
      ],
      challenges: [
        {
          title: "Making project data reusable",
          detail:
            "I structured the case studies as typed data so the homepage, project index, and individual routes share one content source.",
        },
        {
          title: "Keeping the visual system coherent",
          detail:
            "I used a restrained monochrome palette, thin borders, and a clear type hierarchy across the portfolio sections.",
        },
        {
          title: "Handling motion preferences",
          detail:
            "I kept the existing reduced-motion path in the shared animated components so motion can be reduced when requested.",
        },
      ],
      outcome: [
        "Built the current portfolio to present project work through typed case studies.",
        "Published a working deployment for ongoing iteration.",
      ],
      limitations: [
        "The site is actively maintained.",
        "Contact hardening, broader accessibility repairs, image optimization, and automated release checks belong to later optimization phases.",
      ],
    },
  },
]

export const featuredProjectSlugs = [
  "gsu-system",
  "campuschoice",
  "smart-farming",
  "urds-system",
] as const satisfies readonly Project["slug"][]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
