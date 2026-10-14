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
  availabilityNote: string
  demo?: ProjectLink
  source?: ProjectLink
}

export type ArchitectureStep = {
  label: string
  detail: string
}

export type Project = {
  slug: string
  title: string
  description: string
  shortDescription?: string
  role: string
  year: string
  stack: string[]
  image: string
  imageAlt: string
  availability: ProjectAvailability
  gallery: { image: string; alt: string }[]
  caseStudy: {
    overview: string
    problem: string
    solution: string
    features: string[]
    architecture: ArchitectureStep[]
  }
}

export const projects: Project[] = [
  {
    slug: "gsu-system",
    title: "GSU Job Request and Job Ordering System",
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
      availabilityNote:
        "Public review deployment for the workflow. Frontend repository is public; backend repository remains private.",
      demo: {
        href: "https://generalservicesunitsystem.vercel.app/",
        label: "Live demo",
      },
      source: {
        href: "https://github.com/jayarpelicano01/GSU-General-Services-Unit",
        label: "Frontend source",
      },
    },
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
      problem:
        "The General Services Unit relied on paper-based and manual processes for job requests and procurement.",
      solution:
        "I built a full-stack job request and ordering system to connect the core clerical workflows.",
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
    },
  },
  {
    slug: "faura-farmer",
    title: "Faura-Farmer: Personal Finance Tracker",
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
      availabilityNote:
        "Public deployment with credentials sign-in for review. Source repository is private.",
      demo: {
        href: "https://faura-farmer.vercel.app",
        label: "Live demo",
      },
    },
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
      problem:
        "Manual finance tracking makes it difficult to see where money goes over time.",
      solution:
        "I built a finance tracker where each signed-in user can manage their own accounts, transactions, and categories.",
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
    },
  },
  {
    slug: "campuschoice",
    title: "CampusChoice",
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
      availabilityNote:
        "Public link presents the interface; original system was designed for local deployment. Source repository is private.",
      demo: {
        href: "https://campus-choice.vercel.app",
        label: "Public UI demo",
      },
    },
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
      problem:
        "Manual counting made election workflows slow and difficult to coordinate.",
      solution:
        "I built the voting and administration interfaces for the election workflow.",
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
    },
  },
  {
    slug: "urds-system",
    title: "URDS",
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
      availabilityNote:
        "Public deployment demonstrates the interface and workflow, not verified institutional adoption. No public source repository is available.",
      demo: {
        href: "https://urds-system-v2.vercel.app/urds/home",
        label: "Public demo",
      },
    },
    gallery: [
      { image: "/images/projects/gallery/urds/landingpage.png", alt: "URDS landing page" },
      { image: "/images/projects/gallery/urds/loginpage.png", alt: "URDS login page" },
      { image: "/images/projects/gallery/urds/dashboard.png", alt: "URDS dashboard" },
      { image: "/images/projects/gallery/urds/about.png", alt: "URDS about page" },
    ],
    caseStudy: {
      overview:
        "URDS is a full-stack university records and documents system built with Node.js, Express.js, and MySQL. It organizes records and document workflows through a REST API and a public interface demo.",
      problem:
        "University records and documents were scattered and laborious to manage.",
      solution:
        "I built a full-stack platform with a Node.js and Express.js backend and a MySQL database.",
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
    },
  },
  {
    slug: "smart-farming",
    title: "SmartFarming",
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
      availabilityNote:
        "Archived project with no standalone public demo. Team repository is not linked while its public files are being cleaned up.",
    },
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
      problem:
        "Farmers lacked timely insight into soil nutrient and moisture levels.",
      solution:
        "I led development of the React dashboard and web application layer for the IoT workflow.",
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
    },
  },
  {
    slug: "fleur-de-rosa",
    title: "Fleur dé Rosa",
    description:
      "A local crafts shop marketing site with a custom order builder that turns visitor choices into a structured request for the shop owner.",
    shortDescription:
      "Crafts shop marketing site with a guided custom order builder.",
    role: "Designer & Developer",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Playwright"],
    image: "/images/projects/fleur-de-rosa.png",
    imageAlt:
      "Fleur de Rosa homepage hero with the headline Cute Crafts, Made With Care and the script logo card on a blush background",
    availability: {
      status: "Live demo",
      availabilityNote:
        "The marketing site is live on Vercel with all four routes, and the contact form delivers requests to the shop owner's live intake workflow. Ordering is handled by contact request only, with no cart or payments. Source repository is private.",
      demo: {
        href: "https://fleur-de-rosa.vercel.app",
        label: "Live demo",
      },
    },
    gallery: [
      { image: "/images/projects/gallery/fleur-de-rosa/home-mobile.png", alt: "Fleur de Rosa homepage on mobile" },
      { image: "/images/projects/gallery/fleur-de-rosa/featured-works.png", alt: "Fleur de Rosa featured works section" },
      { image: "/images/projects/gallery/fleur-de-rosa/gallery.png", alt: "Fleur de Rosa filterable gallery" },
      { image: "/images/projects/gallery/fleur-de-rosa/gallery-mobile.png", alt: "Fleur de Rosa gallery on mobile" },
      { image: "/images/projects/gallery/fleur-de-rosa/custom-order.png", alt: "Fleur de Rosa custom order builder" },
      { image: "/images/projects/gallery/fleur-de-rosa/custom-order-2.png", alt: "Fleur de Rosa custom order builder second step" },
      { image: "/images/projects/gallery/fleur-de-rosa/custom-order-mobile.png", alt: "Fleur de Rosa custom order builder on mobile" },
      { image: "/images/projects/gallery/fleur-de-rosa/gift-bundles.png", alt: "Fleur de Rosa gift bundles section" },
      { image: "/images/projects/gallery/fleur-de-rosa/contact.png", alt: "Fleur de Rosa contact form" },
      { image: "/images/projects/gallery/fleur-de-rosa/contact-mobile.png", alt: "Fleur de Rosa contact form on mobile" },
    ],
    caseStudy: {
      overview:
        "Fleur de Rosa is the marketing site for a local handcrafted fuzzy wire shop in Biri, Northern Samar, selling bouquets, keychains, garlands, table displays, and ornaments. It serves local gift buyers who discover the shop on Facebook and want to request a custom piece without a high-pressure sales process. I designed the brand system and built the four-route site, including a filterable gallery, a guided custom order builder, and a contact form that delivers structured requests to the shop owner.",
      problem:
        "Every order and inquiry arrived through Facebook Messenger as unstructured chat, so the owner chased piece, colors, budget, and date in back-and-forth messages. The shop needed a web presence that felt handmade and local, not corporate.",
      solution:
        "I built a static Next.js site that turns visitor choices into one formatted request: the custom order builder serializes piece, occasion, colors, budget tier, and preferred date, then hands them to a contact form that posts to a Make.com webhook, which logs the request to Google Sheets and alerts the owner on Telegram and email.",
      features: [
        "Filterable gallery with category tabs and a lightbox viewer",
        "Five-step custom order builder with per-piece budget tiers",
        "Contact form with Question and Order modes",
        "Token-driven design system with self-hosted fonts",
        "Responsive layout verified across mobile, tablet, and desktop",
        "Honeypot spam protection with inline validation",
      ],
      architecture: [
        { label: "Next.js App Router UI", detail: "Landing, gallery, customize builder, and contact screens." },
        { label: "Custom order brief builder", detail: "Serializes choices into a structured request." },
        { label: "Contact form logic", detail: "Validates input, filters spam, sets inquiry type." },
        { label: "Make.com webhook", detail: "Logs to Google Sheets and alerts the owner on Telegram and email." },
        { label: "Vercel", detail: "Serves the public site from the main branch." },
      ],
    },
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio Website",
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
      availabilityNote: "Current portfolio deployment. Public repository for this portfolio.",
      demo: {
        href: "https://jayaruuu.vercel.app",
        label: "Visit site",
      },
      source: {
        href: "https://github.com/jayarpelicano01/jayaruuu_",
        label: "Source code",
      },
    },
    gallery: [
      { image: "/images/projects/gallery/portfolio/portfolio1.png", alt: "Portfolio homepage" },
      { image: "/images/projects/gallery/portfolio/portfolio2.png", alt: "Portfolio project section" },
      { image: "/images/projects/gallery/portfolio/portfolio3.png", alt: "Portfolio case study page" },
      { image: "/images/projects/gallery/portfolio/lightmode.png", alt: "Portfolio in light mode" },
    ],
    caseStudy: {
      overview:
        "This portfolio is an editorial developer website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It presents project work as case studies through typed data.",
      problem:
        "Recruiters need to quickly understand what a junior developer can build.",
      solution:
        "I built the site so identity, role, project proof, and availability are readable in a short scan.",
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
