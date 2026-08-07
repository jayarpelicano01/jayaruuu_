import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const values = [
  "Interested in full-stack development",
  "Enjoys building complete systems",
  "Values practical problem solving",
  "Always learning",
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="02" title="About" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            I&apos;m Jay Ar, a junior software developer who enjoys turning
            ideas into functional, well-designed digital products.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            I focus on full-stack development, understanding both the
            frontend and the backend so I can build complete systems from idea
            to deployment. I care about clean architecture, data integrity,
            and how each part fits together.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <Reveal key={item} delay={0.05 * i}>
              <div className="border border-line px-5 py-4">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-medium tracking-tight">
                  {item}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}