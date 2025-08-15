import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import { portfolioConfig } from "@/config/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="gradient-primary py-8 text-white">
        <div className="portfolio-container text-center">
          <p className="text-white/90">
            © 2024 {portfolioConfig.name}. Built with ❤️ using React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
