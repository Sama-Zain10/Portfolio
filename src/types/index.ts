export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  bullets: string[];
  tech: string[];
  github?: string;
  live?: string;
  githubPlaceholder?: boolean;
}

export interface CertificationItem {
  name: string;
  org: string;
  date: string;
  detail?: string;
  link?: string;
}
