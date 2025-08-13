import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/Tailwind", level: 92 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 86 },
        { name: "MongoDB", level: 84 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 93 },
        { name: "Adobe Creative Suite", level: 87 },
        { name: "UI/UX Design", level: 90 },
        { name: "Prototyping", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-secondary">
      <div className="portfolio-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I work with modern technologies and tools to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="gradient-card p-6 rounded-xl shadow-card hover-lift transition-smooth"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted/30"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", 
              "Tailwind CSS", "Figma", "Docker", "AWS", "Git", "Webpack"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white shadow-card rounded-lg text-sm font-medium text-primary hover-lift transition-smooth cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;