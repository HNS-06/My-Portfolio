export const portfolioConfig = {
  // Personal Information
  name: "Alex Johnson",
  title: "Full-Stack Developer & UI/UX Designer",
  tagline: "A passionate Full-Stack Developer and UI/UX Designer crafting beautiful digital experiences that users love.",
  
  // Contact Information
  contact: {
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
  },

  // About Section
  about: {
    introduction: `I'm a passionate developer and designer with over 5 years of experience creating digital solutions. 
    I love turning complex problems into simple, beautiful, and intuitive designs.`,
    
    journey: [
      `Started as a self-taught developer, I've grown into a full-stack engineer who bridges 
      the gap between design and development. My background in both fields allows me to 
      create cohesive, user-focused products.`,
      
      `I use AI to specialize in React, TypeScript, Node.js, and modern design tools. When I'm not 
      coding, you'll find me exploring new technologies, contributing to open source, 
      or mentoring aspiring developers.`,
      
      `I believe great software is not just functional, but also delightful to use. 
      Every project is an opportunity to craft something meaningful and impactful.`
    ]
  },

  // Projects
  projects: [
    {
      title: "Crisis Genie AI Bot",
      description: "An AI-powered chatbot designed to assist users in crisis situations, providing real-time support and resources.",
      tech: ["HTML", "CSS", "Javascript", "Gemini API","AI"],
      liveUrl: "https://crisisgenie-1.onrender.com",
      githubUrl: "https://github.com/HNS-06/CrisisGenie.git"
    },
    {
      title: "Weather App", 
      description: "A weather application that provides real-time weather updates and forecasts using the OpenWeather API.",
      tech: ["HTML", "CSS", "Javascript", "OpenWeather API"],
      liveUrl: "https://meteozone.vercel.app/",
      githubUrl: "https://github.com/HNS-06/Weatherapp.git"
    },
    {
      title: "Skill Swap Platform",
      description: "A platform that connects individuals looking to exchange skills and knowledge, fostering a community of learning.",
      tech: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://peer2learn.netlify.app/",
      githubUrl: "https://github.com/HNS-06/Skill-Swap.git"
    },
    {
      title: "AI Health Kiosk",
      description: "An AI-driven health kiosk that provides users with health information and advice based on their symptoms.",
      tech: ["HTML", "CSS", "Javascript, Mongo DB, Node.js"],
      liveUrl: "https://health-kiosk-seven.vercel.app/",
      githubUrl: "https://github.com/HNS-06/health-kiosk.git"
    },
    {
      title: "Eco Food Waste Reducer",
      description: "A web application aimed at reducing food waste by connecting users with surplus food to those in need.",
      tech: ["HTML", "CSS", "Javascript", "API"],
      liveUrl: "https://eco-food-waste-reducer.vercel.app/",
      githubUrl:"https://github.com/HNS-06/eco-food-waste-reducer.git" 
    },
    
    {
      title: "Emoji Fortune Teller",
      description: "A fun web application that uses emojis to predict fortunes and provide entertainment.",
      tech: ["HTML", "CSS", "Javascript", "React", "Next.js"],
      liveUrl: "https://emoji-fort-2.onrender.com/",
      githubUrl: "https://github.com/HNS-06/Emoji-forT.git"
    },
    {
      title: "Cyberpunk CCTV (Demo)",
      description: "A demo application showcasing a cyberpunk-themed CCTV interface with real-time video streaming.",
      tech: ["HTML", "CSS", "Javascript", "React", "Node.js"],
      liveUrl: "https://eco-eyes-polished-frontend.vercel.app/",
      githubUrl: "https://github.com/HNS-06/Eco-Eyes-polished-frontend-.git",
      githubUrl2: "https://github.com/HNS-06/Eco-Eyes-polished-backend-.git"
    }

    
  ],
  // Skills
  skills: {
    "Frontend Development": [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "CSS/Tailwind", level: 92 },
      { name: "Vue.js", level: 85 }
    ],
    "Backend Development": [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 86 },
      { name: "MongoDB", level: 84 }
    ],
    "Design & Tools": [
      { name: "Figma", level: 93 },
      { name: "Adobe Creative Suite", level: 87 },
      { name: "UI/UX Design", level: 90 },
      { name: "Prototyping", level: 88 }
    ]
  },

  // Tech Stack
  techStack: [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", 
    "Tailwind CSS", "Figma", "Docker", "AWS", "Git", "Webpack"
  ]
};