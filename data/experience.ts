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
      "Built and deployed a job request and ordering system that automated clerical workflows and improved record consistency.",
    points: [
      "Built and deployed the full-stack Job Request and Ordering System with Node.js, Express.js, and MySQL.",
      "Developed the Next.js and TypeScript interface for request, inspection, procurement, and report workflows.",
      "Automated job order generation and accomplishment reporting, reducing reliance on manual record tracking.",
      "Entered data and verified administrative records for Purchase Requests (PRs) and Requisition and Issue Slips (RIS).",
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
    title: "Champion, UEP 2nd Arduino Innovator Challenge (2025)",
    description:
      "SmartFarming was the team project recognized as champion in the 2025 competition.",
  },
]
