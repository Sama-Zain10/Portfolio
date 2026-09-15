import type {
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
} from "../types";

// All content below is sourced directly from Sama's CV.
// LinkedIn (linkedin.com/in/sama-sayed-801189386) could not be automatically
// retrieved (login-gated), so it was not used as a source. If it contains
// information the CV doesn't, replace the TODO placeholders below.

export const personal = {
  name: "Sama Sayed Zain",
  title: "Software Engineering Student & Backend Developer",
  location: "Cairo, Egypt",
  email: "smasyd237@gmail.com",
  phone: "+20 114 672 3454",
  linkedin: "https://linkedin.com/in/sama-sayed-801189386",
  github: "https://github.com/Sama-Zain",
  resumeFile: "Sama_Sayed_Zain_Resume.pdf", // TODO: Add the actual CV file to /public and confirm this filename
  summary:
    "Software Engineering student at Helwan University (GPA 3.5/4.0, expected May 2027) with practical experience in full-stack and backend development using Node.js, Express.js, NestJS, React.js, and MongoDB. Completed 100+ hours of backend training with top honors (98% score). Proven track record in API design, database architecture, team collaboration, and technical mentoring.",
};

export const aboutFacts = [
  { label: "Education", value: "B.Sc. Computer Science & AI — Software Engineering" },
  { label: "University", value: "Helwan University (FCIH)" },
  { label: "GPA", value: "3.5 / 4.0" },
  { label: "Graduation", value: "Expected May 2027" },
  { label: "Location", value: "Cairo, Egypt" },
  { label: "Languages", value: "Arabic (Native), English (Professional)" },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "RESTful APIs",
      "JWT Authentication",
      "bcrypt",
      "Microservices",
      "Middleware",
      "ASP.NET Core",
    ],
  },
  {
    name: "Databases & ORM",
    skills: ["MongoDB", "Mongoose", "MySQL", "Sequelize", "SQL Server", "Entity Framework Core"],
  },
  {
    name: "Frontend",
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Angular",
    ],
  },
  {
    name: "Languages & Core CS",
    skills: [
      "TypeScript",
      "JavaScript",
      "C++",
      "C#",
      "Java",
      "C",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Design Patterns",
    ],
  },
  {
    name: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Webpack",
      "RxJS",
      "PySpark",
      "Agile Methodology",
      "CI/CD",
    ],
  },
  {
    name: "Professional Skills",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Team Leadership",
      "Adaptability",
      "Time Management",
      "Conflict Resolution",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Backend Development Trainee",
    org: "Route Academy",
    location: "Cairo",
    date: "2025",
    bullets: [
      "Mastered Node.js, Express.js, NestJS, and MongoDB across 3+ production-ready projects utilizing MVC architecture and clean code principles.",
      "Engineered 5+ RESTful API endpoints featuring JWT authentication, bcrypt hashing, custom middleware, and schema validation; reduced auth error rate by 40%.",
      "Implemented automated email verification and secure password reset workflows, cutting manual account recovery steps by 3.",
      "Documented and tested 10+ API collections using Postman, achieving 100% endpoint coverage with structured error handling.",
    ],
  },
  {
    title: "MEAN Stack Web Development Trainee",
    org: "National Telecommunication Institute (NTI)",
    location: "Egypt",
    date: "Summer 2025",
    bullets: [
      "Graduated with a 98% final score — top of cohort — after constructing 2 full-stack applications with MongoDB, Express.js, Angular, and Node.js.",
      "Developed authenticated RESTful APIs with full CRUD operations, integrating 4+ modules within a Git/GitHub collaborative workflow.",
      "Gained core competencies in technical scoping, deliverable management, and freelancing best practices.",
    ],
  },
  {
    title: "Frontend Committee Member & Mentor",
    org: "IEEE FCIH Student Branch",
    location: "Cairo",
    date: "2024 – 2025",
    bullets: [
      "Mentored 20+ participants at TechVerse Bootcamp 3.0 (Sep 2025) across 14 days, delivering 5+ structured sessions in JavaScript and React.js.",
      "Awarded Certificate of Appreciation and recognized as one of the Best Members of IEEE FCIH for Season 25.",
    ],
  },
  {
    title: "AI Training — Intro to AI through Deep Learning",
    org: "Information Technology Institute (ITI)",
    location: "Egypt",
    date: "1 month",
    bullets: [
      "Completed a one-month training program covering AI fundamentals through deep learning.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Sara7a App",
    description: "Anonymous messaging REST API with end-to-end encrypted messages.",
    bullets: [
      "Architected a secure Node.js/Express REST API supporting end-to-end encrypted anonymous messaging.",
      "Implemented bcrypt hashing and AES-256-CBC encryption for user data protection alongside optimized Mongoose schemas.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "bcrypt", "AES-256-CBC"],
    github: "https://github.com/Sama-Zain/Sara7a_App",
  },
  {
    name: "Social Media ",
    description: "Scalable backend API for a social media platform.",
    bullets: [
      "Engineered a scalable TypeScript/Express/MongoDB backend handling user sessions, authentication, and database modeling.",
    ],
    tech: ["TypeScript", "Express", "MongoDB"],
    github: "https://github.com/Sama-Zain/Social-Media",
  },
  {
    name: "E-Commerce Platform ",
    description: "Modular backend for real-time order processing.",
    bullets: [
      "Built a modular NestJS/TypeScript backend integrating Socket.IO for real-time order processing and instant notification pipelines.",
    ],
    tech: ["NestJS", "TypeScript", "Socket.IO"],
    github: "https://github.com/Sama-Zain/E-commerce",
  },
  {
    name: "SkillBridge",
    description: "Full-stack freelance marketplace with a provider dashboard.",
    bullets: [
      "Collaborated with a 2-person team on a full-stack platform (React/Vite frontend, .NET Core backend), shipping a provider dashboard managing 3+ order lifecycle stages.",
    ],
    tech: ["React", "Vite", "ASP.NET Core", "SQL Server"],
    live: "https://skill-bridge-phi-one.vercel.app",
    githubPlaceholder: true, // TODO: Add GitHub link for SkillBridge
  },
  {
    name: "Portal-Student",
    description: "Full-stack student portal application.",
    bullets: [
      "Built a full-stack student portal with separate Backend and Frontend/studentPortal codebases.",
      "Resolved a Git repository issue caused by an accidentally deleted .git folder and an embedded nested repository inside Frontend/studentPortal.",
    ],
    tech: ["React", "JavaScript"],
    github: "https://github.com/Sama-Zain/Portal-Student",
  },
  {
    name: "Library Management System",
    description: "Full-stack app for managing books, users, and borrowing.",
    bullets: [
      "Built a full-stack library management system with a React frontend and Spring Boot backend for managing books, users, and borrowing.",
    ],
    tech: ["React", "Java", "Spring Boot"],
    github: "https://github.com/Sama-Zain/Library-_Management-_System-",
  },
];

export const education = {
  degree: "B.Sc. Computer Science & AI — Software Engineering",
  university: "Helwan University (FCIH)",
  date: "Expected May 2027",
  gpa: "3.5 / 4.0",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Software Architecture",
  ],
};

export const certifications: CertificationItem[] = [
  {
    name: "Backend Development Certificate",
    org: "Route Academy",
    date: "2025",
    detail: "Node.js, Express.js, NestJS, MongoDB, JWT",
    link: "https://drive.google.com/file/d/1eo11SCgWcVJG-4iGYK6WYh-PcCmn3U9n/view?usp=sharing",
  },
  {
    name: "MEAN Stack Web Development Certification",
    org: "National Telecommunication Institute (NTI)",
    date: "Summer 2025",
    detail: "Final Score: 98%",
    link: "https://drive.google.com/file/d/1iN6Ts5luEXSoimn6u2rYD9_dzi8ZUiY9/view?usp=sharing",
  },
  {
    name: "Freelance Training Program",
    org: "ITIDA & EYouth",
    date: "TODO: Add date",
    detail: "Client Management & Deliverable Scoping",
    link: "https://drive.google.com/file/d/1ANPa926ATx9mS-7EamluPIn9vlCPYV4-/view?usp=sharing",
  },
  {
    name: "Certificate of Excellence & Best Member, Season 25",
    org: "IEEE FCIH",
    date: "2025",
    link: "https://drive.google.com/file/d/1cgZd5hgPjJJ4Gr-U5XzqCCNJgl4mfFGy/view?usp=sharing",
  },
  {
    name: "Virtual Summer Internship Program",
    org: "Commercial International Bank (CIB)",
    date: "July 2026",
    link: "https://drive.google.com/file/d/12nZaRlmXm6np5WefYDt2AevICKZJfqIX/view?usp=sharing",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
