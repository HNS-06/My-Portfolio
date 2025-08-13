import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React, Node.js, and Stripe integration. Features include real-time inventory, advanced search, and mobile-first design.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A stunning portfolio website with smooth animations, responsive design, and optimized performance. Built with modern web technologies.",
      tech: ["React", "TypeScript", "Framer Motion"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="portfolio-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="gradient-card rounded-xl shadow-card hover-lift hover-glow transition-smooth overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted/20 rounded-t-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary/60 font-medium">Project Screenshot</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="gradient-primary text-white hover:shadow-primary transition-smooth flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="hover:bg-primary/10 hover:text-primary transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;