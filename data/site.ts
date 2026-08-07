export const site = {
  name: "Jay Ar Pelicano",
  fullName: "Agustin Ronato Pelicano Jr.",
  handle: "jayaruuu_",
  roles: ["Junior Software Developer", "Full-Stack Developer"],
  tagline:
    "I build practical digital products from idea to deployment. From designing the database and wiring up the backend to crafting the interfaces people actually use, I carry a feature all the way to production and ship things that work.",
  location: "Philippines",
  city: "Paranaque City, Philippines",
  email: "jayarpelicano01@gmail.com",
  phone: "+63 985 618 0039",
  github: "https://github.com/jayarpelicano01",
  linkedin: "https://www.linkedin.com/in/agustin-pelicano-jr-77062a3a6/",
  resume: "/resume/AGUSTIN_RONATO_PELICANO_JR_CV.pdf",
  domain: "https://jayarpelicano.dev",
  ogImage: "/opengraph-image",
} as const

export type Site = typeof site