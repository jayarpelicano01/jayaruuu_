import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const skills = [
  {
    name: "Full-Stack Development",
    description:
      "I design and build complete systems end-to-end, from relational schemas and APIs to responsive interfaces that people actually use.",
  },
  {
    name: "Frontend Engineering",
    description:
      "I craft clean, responsive interfaces with React, Next.js, and TypeScript, keeping performance and accessibility in mind.",
  },
  {
    name: "Backend & APIs",
    description:
      "I build RESTful APIs with Node.js, Express.js, and Spring Boot, and I keep data consistent with normalized MySQL schemas.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <SectionHeading index="05" title="About" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-xl font-medium leading-snug tracking-tight sm:text-2xl">
            I&apos;m Jay Ar, a junior software developer who enjoys turning
            ideas into functional, well-designed digital products.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-base text-muted lg:text-lg">
            I focus on full-stack development, understanding both the
            frontend and the backend so I can build complete systems from idea
            to deployment. I care about clean architecture, data integrity,
            and how each part fits together.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 text-base text-muted lg:text-lg">
            My background includes an OJT internship with the General Services
            Unit and ICT Department of the University of the Eastern
            Philippines, where I built and deployed a job request system during
            OJT. My other work includes academic projects such as CampusChoice,
            an electronic voting platform, and SmartFarming, an IoT agriculture
            project. I graduated with a degree in Information Technology and
            ranked Magna Cum Laude.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={0.05 * i}>
              <div className="group flex h-full flex-col border border-line p-6 rounded-[30px] transition-colors duration-300 hover:border-ink/40">
                <span className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 group-hover:text-ink">
                  {String(i + 1).padStart(2, "0")} · Skill
                </span>
                <h3 className="mt-3 text-xl font-medium tracking-tight">
                  {skill.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
