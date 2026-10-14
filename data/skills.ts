export type SkillCategory = {
  name: string
  skills: { name: string; icon: string }[]
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Java", icon: "SiOpenjdk" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Spring Boot", icon: "SiSpringboot" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "SQL", icon: "SiMysql" },
    ],
  },
  {
    name: "Tools & Deployment",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
  {
    name: "AI Tools & Agents",
    skills: [
      { name: "OpenCode CLI", icon: "TbTerminal2" },
      { name: "Hermes Agent", icon: "TbAiAgent" },
      { name: "ChatGPT", icon: "TbBrandOpenai" },
      { name: "Claude", icon: "SiClaude" },
      { name: "Gemini", icon: "SiGooglegemini" },
    ],
  },
]
