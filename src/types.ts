export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveDemoUrl: string;
  metrics?: { label: string; value: string }[];
  technologies: string[];
  keyHighlights: string[];
}

export interface Skill {
  id: string;
  title: string;
  category?: string;
  description?: string;
  icon: string;
  isLarge?: boolean;
  bgImage?: string;
  tags?: string[];
  proficiency?: number;
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  role: string;
  description: string;
  skills: string[];
  location?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
  credentialId?: string;
  verificationUrl?: string;
  topics: string[];
}

export interface TerminalLog {
  id: string;
  type: 'system' | 'user' | 'output' | 'error' | 'success';
  text: string;
  timestamp?: string;
}
