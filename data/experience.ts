export type ExperienceItem = {
  year: string
  kind: string
  title: string
  org?: string
  role: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    year: "2026",
    kind: "OJT INTERNSHIP",
    title: "GSU & ICT Department",
    org: "University of the Eastern Philippines",
    role: "OJT Trainee — Full-Stack Developer",
    points: [
      "Engineered and deployed a full-stack Job Request and Ordering System using Node.js, Express.js, and MySQL.",
      "Developed a responsive frontend with Next.js and TypeScript, improving data processing times.",
      "Automated job order generation and accomplishment reports, cutting manual tracking errors by ~40%.",
      "Managed data entry and verified administrative records for Purchase Requests (PRs) and Requisition and Issue Slips (RIS).",
    ],
  },
  {
    year: "2026",
    kind: "CAPSTONE PROJECT",
    title: "CampusChoice",
    org: "University of the Eastern Philippines",
    role: "Lead Full-Stack Developer",
    points: [
      "Developed a secure electronic voting platform for university student elections.",
      "Built the dynamic frontend in HTML, CSS, and JavaScript.",
      "Architected the MySQL schema with normalization and real-time election tallying.",
    ],
  },
  {
    year: "2025",
    kind: "SYSTEM DEVELOPMENT",
    title: "Smart Farming",
    org: "IoT Agricultural Monitoring System",
    role: "Full-Stack / IoT Developer",
    points: [
      "Co-developed an IoT system integrating Arduino sensors with a web dashboard.",
      "Architected a data-driven backend with Spring Boot, Node.js, Express.js, and MySQL.",
      "Champion — UEP 2nd Arduino Innovator Challenge (2025).",
    ],
  },
]

export type Education = {
  school: string
  location: string
  degree: string
  years: string
  details: string[]
}

export const education: Education = {
  school: "University of the Eastern Philippines",
  location: "University Town, Northern Samar",
  degree: "Bachelor of Science in Information Technology",
  years: "2022–2026",
  details: [
    "Cumulative GPA: 1.414 — Magna Cum Laude",
    "Relevant coursework: Data Structures & Algorithms, Database Management, Web Development, OOP, Networking, Information Assurance & Security.",
  ],
}

export const honors: string[] = [
  "Magna Cum Laude — BS Information Technology (2026)",
  "Champion — UEP 2nd Arduino Innovator Challenge, SmartFarming (2025)",
]