import { Navbar } from "@/components/portfolio/Navbar";
import { MobileBottomNav } from "@/components/portfolio/MobileBottomNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <h1 className="sr-only">
        Muhammad Zain-ul-Abdin — Web Developer and AI & Data Science Student at SMIT
      </h1>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <MobileBottomNav />
    </main>
  );
};

export default Index;
