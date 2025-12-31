// ============================================================
// CONFIGURE YOUR PERSONAL INFO HERE
// Replace the placeholder values with your actual information
// ============================================================

// Personal info placeholders - replace these with your actual values
export const PERSONAL = {
  name: "Jacob Wong",
  tagline: "Software Engineer | Full-Stack Developer",
  location: "Bristol, UK",
  // TODO: Replace with your actual domain
  domain: "jacob-wong.dev",
} as const;

// Resume placeholders - replace these with your actual values
export const RESUME = {
  companyName: "Comply365",
  startDate: "Jan 2023",
  previousCompany: "Hong Kong Economic Times",
  prevStartDate: "Oct 2021",
  prevEndDate: "Oct 2022",
  degree: "Computing BSc (Hons)",
  university: "Coventry University",
  graduationYear: "2021",
  // TODO: Add certifications if applicable
  // certification1: "{{CERTIFICATION_1}}",
  // certification2: "{{CERTIFICATION_2}}",
} as const;

// Site configuration
export const SITE = {
  title: `${PERSONAL.name} | Portfolio`,
  description: PERSONAL.tagline,
  url: `https://${PERSONAL.domain}`,
  author: PERSONAL.name,
};

// Social links - replace these with your actual URLs
export const SOCIAL = {
  email: "jacobwfk@gmail.com",
  github: "https://github.com/Jacob-Wong",
  linkedin: "https://www.linkedin.com/in/jacob-fung-kak-wong/",
};

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

// Skills & Technologies
export const SKILLS = {
  backend: {
    label: "Backend & System Design",
    items: [
      "Java",
      "Spring",
      "Spring Boot",
      "TypeScript",
      "Node.js",
      "Python",
      "REST APIs",
      "GraphQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  frontend: {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Astro", "Tailwind CSS"],
  },
  devops: {
    label: "DevOps & Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Jenkins"],
  },
  aiml: {
    label: "AI & ML",
    items: ["LLM APIs", "Vector Databases"],
  },
} as const;
