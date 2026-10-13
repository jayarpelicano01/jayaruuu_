export type ExperienceRole = {
  title: string
  role: string
  points: string[]
}

export type ExperienceGroup = {
  year: string
  org: string
  roles: ExperienceRole[]
}

export const experience: ExperienceGroup[] = [
  {
    year: "Feb 2026 – May 2026",
    org: "University of the Eastern Philippines",
    roles: [
      {
        title: "Full Stack Developer",
        role: "ICT Department",
        points: [
          "Built and deployed a full-stack Job Request and Ordering System (Node.js, Express.js, MySQL).",
          "Developed responsive Next.js/TypeScript frontend with role-based access and structured data management.",
          "Integrated automated job order generation and accomplishment reports, reducing manual tracking.",
        ],
      },
      {
        title: "Administrative Support",
        role: "General Services Unit",
        points: [
          "Coordinated job request workflows: documentation, record-keeping, and department head support.",
          "Managed data entry and verified procurement records (Purchase Requests, Requisition and Issue Slips).",
        ],
      },
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
