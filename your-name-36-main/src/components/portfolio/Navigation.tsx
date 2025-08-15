import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="portfolio-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className={`text-xl font-bold transition-smooth ${
                isScrolled ? 'text-primary' : 'text-white'
              } hover:scale-105`}
            >
              {portfolioConfig.name}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-smooth hover:scale-105 ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                size="sm"
                className={`transition-smooth ${
                  isScrolled
                    ? 'gradient-primary text-white hover:shadow-primary'
                    : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
                }`}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-white shadow-lg">
            <div className="py-6 px-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-smooth"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full gradient-primary text-white hover:shadow-primary transition-smooth"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;