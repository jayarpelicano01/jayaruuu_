export type Project = {
  slug: string
  number: string
  title: string
  category: string
  description: string
  role: string
  year: string
  stack: string[]
  image: string
  imageAlt: string
  liveDemo?: string
  liveDemoLabel?: string
  liveNote?: string
  source?: string
  highlights: string[]
  caseStudy: {
    overview: string
    problem: string[]
    solution: string[]
    role: string[]
    features: string[]
    architecture: string[]
    challenges: { title: string; detail: string }[]
    outcome: string[]
    screenshots: { image: string; alt: string; caption: string }[]
  }
}

export const projects: Project[] = [
  {
    slug: "gsu-system",
    number: "01",
    title: "GSU System",
    category: "University Management Platform",
    description:
      "A full-stack job request and ordering system for the university's General Services Unit.",
    role: "Full-Stack Developer",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL"],
    image: "/images/projects/gsu.png",
    imageAlt: "GSU System dashboard interface",
    liveDemo: "https://generalservicesunitsystem.vercel.app/",
    liveDemoLabel: "Live Demo",
    source: "https://github.com/jayarpelicano01",
    highlights: ["Full-stack system", "Automated workflows", "Accomplishment reports"],
    caseStudy: {
      overview:
        "GSU System is a full-stack job request and ordering system developed during my OJT internship at the University of the Eastern Philippines' General Services Unit and ICT Department. It digitizes manual clerical workflows for job requests, procurement, and accomplishment reporting.",
      problem: [
        "The General Services Unit relied on paper-based and manual processes for job requests and procurement.",
        "Job orders, requisitions, and accomplishment reports were error-prone and slow to track.",
        "Manual tracking introduced inaccuracies and delayed internal reporting.",
      ],
      solution: [
        "I engineered a full-stack job request and ordering system that automates the core clerical workflows.",
        "The system generates job orders and accomplishment reports automatically, reducing manual tracking errors by approximately 40%.",
        "I built a responsive frontend that works across devices and improves data processing times.",
      ],
      role: [
        "I developed and deployed the full-stack system using Node.js, Express.js, and MySQL.",
        "I built the responsive frontend with Next.js and TypeScript to optimize the user experience across devices.",
        "I also handled data management and verified administrative records for Purchase Requests and Requisition and Issue Slips.",
      ],
      features: [
        "Automated job request and ordering workflow",
        "Automatic job order generation",
        "Accomplishment report generation",
        "Role-based access for staff and administrators",
        "Record management for PRs and RIS forms",
        "Responsive data management interface",
      ],
      architecture: [
        "Frontend (Next.js + TypeScript)",
        "REST API",
        "Backend (Node.js + Express.js)",
        "MySQL Database",
      ],
      challenges: [
        {
          title: "Modeling windshield workflows",
          detail:
            "I designed a MySQL schema that correctly represented job requests, requisitions, and accomplishment reports to preserve relational integrity across the unit's processes.",
        },
        {
          title: "Generating reports automatically",
          detail:
            "I implemented automated job order and accomplishment report generation so records stayed accurate, cutting manual tracking errors by roughly 40%.",
        },
        {
          title: "Building a responsive frontend",
          detail:
            "I used Next.js and TypeScript to keep the interface fast and consistent across many devices while improving data processing time.",
        },
      ],
      outcome: [
        "Delivered a working end-to-end job request and ordering system during OJT.",
        "Automated clerical workflows and improved operational efficiency.",
        "Reduced manual tracking errors by approximately 40%.",
      ],
      screenshots: [
        {
          image: "/images/projects/gsu.png",
          alt: "GSU System dashboard",
          caption: "The dashboard where staff manage job requests and reports.",
        },
      ],
    },
  },
  {
    slug: "campuschoice",
    number: "02",
    title: "CampusChoice",
    category: "Electronic Voting System",
    description:
      "A secure electronic voting system for the University of the Eastern Philippines.",
    role: "Lead Full-Stack Developer",
    year: "2026",
    stack: ["JavaScript", "HTML/CSS", "MySQL"],
    image: "/images/projects/campuschoice.png",
    imageAlt: "CampusChoice voting interface",
    liveDemoLabel: "LAN Demo",
    liveNote: "This system runs on the campus local network and is not publicly deployed.",
    source: "https://github.com/jayarpelicano01",
    highlights: ["Voter anonymity", "Real-time tallying", "Database design"],
    caseStudy: {
      overview:
        "CampusChoice is a secure, full-stack electronic voting platform for the University of the Eastern Philippines' student elections. It enforces strict voter anonymity and reliable, real-time result tallying during high-traffic election periods.",
      problem: [
        "Manual counting made elections slow and error-prone.",
        "Voter credentials and vote anonymity needed careful, secure handling.",
        "The system had to stay reliable and responsive during election peaks.",
      ],
      solution: [
        "I engineered a secure full-stack voting platform ensuring strict vote anonymity and system reliability during student elections.",
        "I developed the dynamic frontend with HTML, CSS, and JavaScript for a seamless, responsive voting experience.",
        "I architected the MySQL backend with normalization and relational integrity to manage credentials and tally results in real time.",
      ],
      role: [
        "As lead full-stack developer I built both the frontend and the backend.",
        "I developed the client-side voting experience in HTML, CSS, and JavaScript.",
        "I architected the MySQL schema and the real-time tally logic.",
      ],
      features: [
        "Secure voter authentication and credential management",
        "Strict voter anonymity",
        "Real-time election tallying",
        "Responsive and accessible voting interface",
        "Normalized relational database schema",
      ],
      architecture: [
        "Frontend (HTML/CSS/JS)",
        "Voting and authentication flow",
        "Backend",
        "MySQL Database",
      ],
      challenges: [
        {
          title: "Guaranteeing anonymity",
          detail:
            "I kept voter identity separate from ballot data so votes cannot know be traced back, preserving strict anonymity.",
        },
        {
          title: "Real-time tallying",
          detail:
            "I structured queries and results logic so election counts could update in real time without exposing individual votes.",
        },
        {
          title: "Normalizing the schema",
          detail:
            "I applied strict data normalization and relational constraints to secure credentials and prevent duplication.",
        },
      ],
      outcome: [
        "Delivered a reliable electronic voting platform for student elections.",
        "Preserved voter anonymity and real-time tallying under load.",
        "Showed rigorous database and security thinking.",
      ],
      screenshots: [
        {
          image: "/images/projects/campuschoice.png",
          alt: "CampusChoice electronic voting interface",
          caption: "The voting interface used by students during elections.",
        },
      ],
    },
  },
  {
    slug: "urds-system",
    number: "03",
    title: "URDS",
    category: "University Records & Documents System",
    description: "A full-stack university records and documents system.",
    role: "Full-Stack Developer",
    year: "2025",
    stack: ["Node.js", "Express.js", "MySQL"],
    image: "/images/projects/urds.png",
    imageAlt: "URDS System interface",
    liveDemo: "https://urds-system-v2.vercel.app/urds/home",
    liveDemoLabel: "Live Demo",
    source: "https://github.com/jayarpelicano01",
    highlights: ["API development", "Document workflows", "Database architecture"],
    caseStudy: {
      overview:
        "URDS is a full-stack university records and documents system built with Node.js, Express.js, and MySQL. It manages records and document workflows through a clean REST API.",
      problem: [
        "University records and documents were scattered and laborious to manage.",
        "Staff needed a centralized, structured way to track records and document workflows.",
      ],
      solution: [
        "I built a full-stack platform with a Node.js and Express.js backend and a MySQL database.",
        "I exposed consistent REST APIs and designed the schema to keep record-keeping organized.",
      ],
      role: [
        "I developed the backend APIs with Node.js and Express.js.",
        "I designed the database schema and the underlying record and document workflows.",
      ],
      features: [
        "REST API endpoints",
        "Records and document management",
        "Structured database schema",
        "Workflow support",
      ],
      architecture: [
        "Frontend",
        "REST API",
        "Node.js / Express backend",
        "MySQL Database",
      ],
      challenges: [
        {
          title: "Designing the API",
          detail:
            "I structured routes and controllers to keep the system cohesive and consistent across record operations.",
        },
        {
          title: "Structuring the database",
          detail:
            "I modeled relations so records and document workflows stayed clean and normalized.",
        },
      ],
      outcome: [
        "Delivered a structured, working records and documents system.",
        "Demonstrated strong API design and database modeling.",
        "Deployed a public demo for review.",
      ],
      screenshots: [
        {
          image: "/images/projects/urds.png",
          alt: "URDS records interface",
          caption: "The records and document management interface.",
        },
      ],
    },
  },
  {
    slug: "smart-farming",
    number: "04",
    title: "Smart Farming",
    category: "IoT Agricultural Monitoring System",
    description:
      "Soil nutrient monitoring and automatic irrigation using Arduino.",
    role: "Full-Stack / IoT Developer",
    year: "2025",
    stack: ["React", "Java", "Spring Boot", "Node.js", "Arduino", "C++", "MySQL"],
    image: "/images/projects/smart-farming.png",
    imageAlt: "Smart Farming IoT dashboard",
    liveDemoLabel: "Archived",
    liveNote:
      "This capstone project was adapted by a co-developer for their own thesis and is now archived. It is not publicly deployed.",
    source: "https://github.com/jayarpelicano01",
    highlights: ["IoT + Arduino", "Sensor integration", "Automated irrigation"],
    caseStudy: {
      overview:
        "SmartFarming is an IoT agricultural system that monitors soil nutrition and moisture and automates irrigation. I developed the full-stack web layer and sensor telemetry pipeline, and it won the UEP 2nd Arduino Innovator Challenge in 2025.",
      problem: [
        "Farmers lacked timely insight into soil nutrient and moisture levels.",
        "Manual irrigation was inefficient and not triggered by actual soil conditions.",
        "Sensor data needed to be captured, stored, and visualized in one place.",
      ],
      solution: [
        "I co-developed the IoT automation system, programming sensor logic in C++ on the Arduino IDE for real-time soil monitoring.",
        "I architected a secure backend with Java Spring Boot, Node.js, and Express.js to process hardware telemetry and manage the schema in MySQL.",
        "I engineered a responsive React dashboard with TypeScript to visualize analytics and control irrigation remotely.",
      ],
      role: [
        "I architected the backend that ingests hardware telemetry and persists it to MySQL.",
        "I engineered the React dashboard and remote irrigation controls.",
        "I implemented the seriel communication that feeds sensor readings to the API.",
      ],
      features: [
        "Real-time soil nutrient and moisture monitoring",
        "Threshold-based automatic irrigation",
        "Sensor telemetry via Arduino",
        "Remote control of irrigation triggers",
        "Data dashboard visualization",
      ],
      architecture: [
        "Sensors",
        "Arduino",
        "Serial / Node communication",
        "Backend API",
        "MySQL",
        "React Dashboard",
      ],
      challenges: [
        {
          title: "Reading serial sensor data",
          detail:
            "I parsed sensor readings from the Arduino through serial communication before forwarding them to the backend API.",
        },
        {
          title: "Connecting telemetry to the backend",
          detail:
            "I wired the backend to ingest hardware telemetry reliably and persist it consistently into MySQL.",
        },
        {
          title: "Remote scheduling",
          detail:
            "I designed dashboard controls so users could trigger irrigation remotely based on live thresholds.",
        },
      ],
      outcome: [
        "Built an end-to-end IoT monitoring and automation system.",
        "Won the UEP 2nd Arduino Innovator Challenge (2025).",
        "Proved full-stack development plus hardware and sensor integration.",
      ],
      screenshots: [
        {
          image: "/images/projects/smart-farming.png",
          alt: "Smart Farming monitoring dashboard",
          caption: "The dashboard monitoring soil analytics and irrigation controls.",
        },
      ],
    },
  },
  {
    slug: "portfolio",
    number: "05",
    title: "This Portfolio",
    category: "Developer Portfolio Website",
    description:
      "The website you are viewing, built with Next.js, TypeScript, Tailwind, and Framer Motion.",
    role: "Designer & Developer",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio.png",
    imageAlt: "This portfolio website",
    liveNote: "This website.",
    source: "https://github.com/jayarpelicano01",
    highlights: ["Modern stack", "Editorial design", "Responsive + accessible"],
    caseStudy: {
      overview:
        "This portfolio is itself a portfolio project: an editorial, monochrome developer website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It presents my projects as case studies, and it proves my frontend capabilities.",
      problem: [
        "Recruiters need to quickly understand what a junior developer can actually build.",
        "A portfolio should prove skills through real projects, not generic claims.",
      ],
      solution: [
        "I built the site so that identity, role, and proof are understandable in seconds.",
        "I used a black-and-white design with strong typography to keep the focus on content and readability.",
      ],
      role: [
        "I designed, built, and deployed the entire portfolio.",
        "I structured it as data-driven React with a clean architecture.",
      ],
      features: [
        "Editorial monochrome design system",
        "Data-driven project case studies",
        "Mobile-first responsive layout",
        "SEO and Open Graph metadata",
        "Accessibility and reduced-motion support",
        "Restrained animated interactions",
      ],
      architecture: [
        "Next.js pages",
        "React components",
        "TypeScript data layer",
        "Tailwind CSS + Framer Motion",
      ],
      challenges: [
        {
          title: "Editorial identity",
          detail:
            "I designed a restrained black-and-white system with thin borders and strong hierarchy to feel professional, not corporate or generic.",
        },
        {
          title: "Building for performance",
          detail:
            "I kept dependencies minimal and used Next.js image optimization to keep the site fast.",
        },
        {
          title: "Accessibility and motion",
          detail:
            "I supported reduced-motion and used semantic, accessible HTML to respect all users.",
        },
      ],
      outcome: [
        "Delivered a polished, deploy-ready developer portfolio.",
        "Demonstrates modern frontend development end-to-end.",
        "Serves as a living portfolio project for Next.js and design skills.",
      ],
      screenshots: [
        {
          image: "/images/projects/portfolio.png",
          alt: "This portfolio homepage",
          caption: "The homepage of this portfolio.",
        },
      ],
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}