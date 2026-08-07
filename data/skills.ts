export type SkillCategory = {
  name: string
  skills: { name: string; icon: string; note?: string }[]
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: "SiHtml5", note: "CampusChoice" },
      { name: "CSS", icon: "SiCss", note: "CampusChoice" },
      { name: "JavaScript", icon: "SiJavascript", note: "GSU, CampusChoice" },
      { name: "TypeScript", icon: "SiTypescript", note: "GSU, Portfolio" },
      { name: "React", icon: "SiReact", note: "GSU, Smart Farming" },
      { name: "Next.js", icon: "SiNextdotjs", note: "GSU, Portfolio" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", note: "Portfolio" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", note: "GSU, URDS, Smart Farming" },
      { name: "Express.js", icon: "SiExpress", note: "GSU, URDS, Smart Farming" },
      { name: "Java", icon: "SiOpenjdk", note: "Smart Farming" },
      { name: "Spring Boot", icon: "SiSpringboot", note: "Smart Farming" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: "SiMysql", note: "GSU, CampusChoice, URDS, Smart Farming" },
      { name: "SQL", icon: "SiMysql", note: "GSU, CampusChoice" },
    ],
  },
  {
    name: "Tools & Deployment",
    skills: [
      { name: "Git", icon: "SiGit", note: "All projects" },
      { name: "GitHub", icon: "SiGithub", note: "All projects" },
      { name: "Vercel", icon: "SiVercel", note: "GSU, URDS, Portfolio" },
      { name: "Render", icon: "SiRender", note: "Backend services" },
      { name: "Postman", icon: "SiPostman", note: "API testing" },
      { name: "Arduino IDE", icon: "SiArduino", note: "Smart Farming" },
    ],
  },
]