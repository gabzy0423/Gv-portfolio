export type Project = {
  slug: string;
  title: string;
  category?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  outcome: string;
  projectUrl?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type EducationItem = {
  institution: string;
  program: string;
  period: string;
  description: string;
};
