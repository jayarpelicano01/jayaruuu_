export type SkillCategory = {
  name: string
  skills: { name: string; note?: string }[]
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", note: "CampusChoice" },
      { name: "CSS", note: "CampusChoice" },
      { name: "JavaScript", note: "GSU, CampusChoice" },
      { name: "TypeScript", note: "GSU, Portfolio" },
      { name: "React", note: "GSU, Smart Farming" },
      { name: "Next.js", note: "GSU, Portfolio" },
      { name: "Tailwind CSS", note: "Portfolio" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", note: "GSU, URDS, Smart Farming" },
      { name: "Express.js", note: "GSU, URDS, Smart Farming" },
      { name: "Java", note: "Smart Farming" },
      { name: "Spring Boot", note: "Smart Farming" },
      { name: "REST APIs", note: "URDS, Smart Farming" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", note: "GSU, CampusChoice, URDS, Smart Farming" },
      { name: "SQL", note: "GSU, CampusChoice" },
    ],
  },
  {
    name: "Tools & Deployment",
    skills: [
      { name: "Git", note: "All projects" },
      { name: "GitHub", note: "All projects" },
      { name: "Vercel", note: "GSU, URDS, Portfolio" },
      { name: "Render", note: "Backend services" },
      { name: "Postman", note: "API testing" },
      { name: "Arduino IDE", note: "Smart Farming" },
    ],
  },
]