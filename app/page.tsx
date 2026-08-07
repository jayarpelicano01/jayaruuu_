import Navigation from "@/components/navigation/navigation";
import Hero from "@/components/hero/hero";
import SelectedWork from "@/components/projects/selected-work";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Education from "@/components/education/education";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Cursor from "@/components/ui/cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}