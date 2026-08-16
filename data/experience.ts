export type ExperienceItem = {
  year: string
  kind: string
  title: string
  org?: string
  role: string
  highlight: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    year: "2026",
    kind: "OJT INTERNSHIP",
    title: "GSU & ICT Department",
    org: "University of the Eastern Philippines",
    role: "OJT Trainee / Full-Stack Developer",
    highlight:
      "Engineered a production job request and ordering system that automated clerical workflows and cut manual tracking errors by ~40%.",
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
    highlight:
      "Built a secure electronic voting platform that kept ballots anonymous and tallied results in real time during student elections.",
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
    highlight:
      "Co-developed an IoT agriculture system that won the UEP 2nd Arduino Innovator Challenge.",
    points: [
      "Co-developed an IoT system integrating Arduino sensors with a web dashboard.",
      "Architected a data-driven backend with Spring Boot, Node.js, Express.js, and MySQL.",
      "Champion · UEP 2nd Arduino Innovator Challenge (2025).",
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
    "Magna Cum Laude · GWA 1.41",
    "Focused on full-stack development: building complete systems from database design to deployment.",
  ],
}

export type Honor = {
  title: string
  description: string
}

export const honors: Honor[] = [
  {
    title: "Magna Cum Laude - GWA 1.41",
    description:
      "Graduated with distinction from BS Information Technology at University of the Eastern Philippines with a cumulative GWA of 1.41.",
  },
  {
    title: "Champion · UEP 2nd Arduino Innovator Challenge",
    description:
      "Led the development of SmartFarming, an IoT agricultural monitoring system that won first place in the 2025 competition.",
  },
]