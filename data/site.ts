export const site = {
  name: "Jay Ar Pelicano",
  fullName: "Agustin Pelicano Jr.",
  handle: "jayarpelicano01",
  roles: ["Junior Software Developer", "Full-Stack Developer"],
  tagline:
    "I build practical full-stack systems for organizations replacing manual workflows.",
  taglineSecond: "I currently build new projects with generative AI, from first draft to working demo.",
  location: "Philippines",
  city: "Paranaque City, Philippines",
  email: "jayarpelicano01@gmail.com",
  phone: "+63 985 618 0039",
  github: "https://github.com/jayarpelicano01",
  linkedin: "https://www.linkedin.com/in/agustin-pelicano-jr-77062a3a6/",
  resume: "/resume/AGUSTIN_RONATO_PELICANO_JR_CV.pdf",
  domain: "https://jayaruuu.vercel.app",
  ogImage: "/opengraph-image",
} as const

export type Site = typeof site
