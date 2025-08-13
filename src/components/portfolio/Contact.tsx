import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { portfolioConfig } from "@/config/portfolio";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: portfolioConfig.contact.email,
      href: `mailto:${portfolioConfig.contact.email}`
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: portfolioConfig.contact.phone,
      href: `tel:${portfolioConfig.contact.phone.replace(/\D/g, '')}`
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: portfolioConfig.contact.location,
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="portfolio-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card p-8 shadow-card hover-glow transition-smooth">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="transition-smooth focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="transition-smooth focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="transition-smooth focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-primary text-white hover:shadow-primary transition-smooth"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and design. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 gradient-card rounded-lg shadow-card hover-lift hover-glow transition-smooth group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="gradient-primary p-3 rounded-lg text-white group-hover:scale-110 transition-smooth">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">{info.title}</h4>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="gradient-card p-6 rounded-lg shadow-card">
              <h4 className="font-semibold mb-3 text-primary">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to call or text me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;