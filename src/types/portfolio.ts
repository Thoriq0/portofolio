export type NavItem = {
  id: string;
  label: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type ExperiencePoint = {
  title: string;
  description: string;
};

export type TechItem = {
  name: string;
  category: string;
  level: "Core" | "Advanced" | "Working";
  accent: string;
};

export type FeaturedProject = {
  title: string;
  description: string;
  summary: string;
  impact: string[];
  stack: string[];
  demoUrl: string;
  githubUrl: string;
  imageSrc: string;
  imageAlt: string;
  visual: "thorz" | "nagih";
};

export type ProjectCard = {
  title: string;
  description: string;
  stack: string[];
  status: "Internal" | "Stable" | "Shipped" | "Scaling";
  demoUrl?: string;
  githubUrl?: string;
  visual:
    | "erp"
    | "wms"
    | "pos"
    | "hres"
    | "inventory"
    | "finance"
    | "shiba"
    | "journal";
};
