/**
 * @fileOverview Centralized portfolio data. 
 * Edit this file to update your personal information across the entire site.
 */

export const PORTFOLIO_DATA = {
  name: "Sujeet Deo",
  firstName: "Sujeet",
  lastName: "Deo",
  role: "Full Stack Developer & CS Student",
  email: "sujitkumardeo31@gmail.com",
  phone: "+91 7978060382",
  location: "Bhubaneswar, IN",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/SujeetDeo-31",
    linkedin: "https://www.linkedin.com/in/sujeet31in/",
    twitter: "#",
  },
  hero: {
    title: "Building Modern Full-Stack",
    titleAccent: "Web Applications",
    description: "I am a Computer Science student passionate about full-stack web development and building modern responsive applications using React, Node.js, and MongoDB.",
    stats: [
      { label: "Projects Built", value: "5+" },
      { label: "Web Development", value: "Full Stack" },
      { label: "Learning Journey", value: "Open Source" },
    ],
    currentFocus: "Full Stack Development"
  },
  about: {
    description: "I am a Computer Science student who enjoys building practical web applications and learning how real products are designed, developed, and deployed. My focus is on full-stack development, clean UI, and solving problems through code.",
    cards: [
      {
        title: "Background",
        desc: "B.Tech student in Computer Science and Technology with a strong interest in web development, software engineering, and machine learning.",
      },
      {
        title: "What I Build",
        desc: "Modern responsive websites and applications using React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and Tailwind CSS.",
      },
      {
        title: "Learning Focus",
        desc: "Continuously improving through projects, DSA practice, and hands-on work with frontend, backend, APIs, and deployment.",
      },
    ]
  },
  education: [
    {
      degree: "B.Tech in Computer Science and Technology",
      institution: "C.V. Raman Global University",
      location: "Bhubaneswar, Odisha",
      period: "Aug 2024 — Present",
      gpa: "8.90"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Travel AI – Predictive Intelligence Engine",
      desc: "An AI-powered travel analysis dashboard that uses Google Gemini API to generate structured travel insights, compare trip options, and help users plan trips more efficiently through interactive data panels.",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Gemini API"],
      github: "https://github.com/SujeetDeo-31/travel-intelligence-engine",
      demo: "https://travel-web-intelligence-engine.vercel.app/",
    },
    {
      id: "project-2",
      title: "Health Insurance Cost Prediction",
      desc: "A machine learning web application that predicts health insurance charges using demographic and lifestyle data. Built with feature engineering, model evaluation, and deployed with Streamlit for real-time predictions.",
      techs: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Machine Learning"],
      github: "https://github.com/SujeetDeo-31/Health-Insurance-Charges-Predictor-AI",
      demo: "https://insurance-charges-predictor.streamlit.app/",
    },
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "Firebase"],
    tools: ["C", "C++", "Java", "Python", "Git", "GitHub", "VS Code", "Postman"],
    ml: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"]
  },
  coursework: [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Database Management System",
    "Computer Networks",
  ]
};
