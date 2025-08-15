import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-primary animate-gradient-shift bg-[length:400%_400%] opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="portfolio-container relative z-10 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-300">{portfolioConfig.name}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {portfolioConfig.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-smooth px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-white/50 hover:border-white transition-smooth px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href={portfolioConfig.contact.github} 
              className="text-white/80 hover:text-white transition-smooth hover:scale-110 transform"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href={portfolioConfig.contact.linkedin} 
              className="text-white/80 hover:text-white transition-smooth hover:scale-110 transform"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${portfolioConfig.contact.email}`} 
              className="text-white/80 hover:text-white transition-smooth hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={24} 
            className="text-white/70 cursor-pointer hover:text-white transition-smooth"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;