import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful, user-centered designs that balance aesthetics with functionality."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional user experiences."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-secondary">
      <div className="portfolio-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer and designer with over 5 years of experience creating digital solutions. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Started as a self-taught developer, I've grown into a full-stack engineer who bridges 
                the gap between design and development. My background in both fields allows me to 
                create cohesive, user-focused products.
              </p>
              <p>
                I specialize in React, TypeScript, Node.js, and modern design tools. When I'm not 
                coding, you'll find me exploring new technologies, contributing to open source, 
                or mentoring aspiring developers.
              </p>
              <p>
                I believe great software is not just functional, but also delightful to use. 
                Every project is an opportunity to craft something meaningful and impactful.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="gradient-card p-6 rounded-xl shadow-card hover-lift hover-glow transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="gradient-primary p-3 rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;