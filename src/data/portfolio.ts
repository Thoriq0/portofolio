import type {
  ExperiencePoint,
  FeaturedProject,
  HeroStat,
  NavItem,
  ProjectCard,
  TechItem,
} from "@/types/portfolio";

export const navigation: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "featured-projects", label: "Projects" },
  { id: "other-projects", label: "More Work" },
  { id: "contact", label: "Contact" },
];

export const heroStats: HeroStat[] = [
  { label: "Experience", value: "1y 5m" },
  { label: "Systems", value: "ERP / WMS / POS / HRIS" },
  { label: "Focus", value: "Maintenance, features, and workflow logic" },
];

export const experiencePoints: ExperiencePoint[] = [
  {
    title: "Fixing bugs across active enterprise systems",
    description:
      "Stepped into mature products, traced issues across frontends, APIs, and data flows, and delivered dependable fixes under production pressure.",
  },
  {
    title: "Maintaining business-critical workflows",
    description:
      "Kept ERP, warehouse, point-of-sale, and HRIS systems stable while adapting the UI and logic to evolving operational requirements.",
  },
  {
    title: "Shipping new features with tight deadlines",
    description:
      "Built new capabilities on top of existing architecture, balancing polish, speed, and practical delivery for fast-moving business teams.",
  },
  {
    title: "Handling complex dynamic business logic",
    description:
      "Worked closely with coordinator Rafael and stakeholders to translate non-trivial operational rules into maintainable product behavior.",
  },
];

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend", level: "Core", accent: "from-cyan-400/60 to-sky-500/60" },
  { name: "React", category: "Frontend", level: "Working", accent: "from-sky-400/60 to-blue-500/60" },
  { name: "TypeScript", category: "Language", level: "Working", accent: "from-blue-400/60 to-indigo-500/60" },
  { name: "Tailwind CSS", category: "Styling", level: "Working", accent: "from-teal-400/60 to-cyan-500/60" },
  { name: "Laravel", category: "Backend", level: "Core", accent: "from-rose-400/60 to-orange-500/60" },
  { name: "CodeIgniter", category: "Backend", level: "Core", accent: "from-orange-400/60 to-amber-500/60" },
  { name: "PostgreSQL", category: "Database", level: "Working", accent: "from-emerald-400/60 to-cyan-500/60" },
  { name: "MySQL", category: "Database", level: "Working", accent: "from-blue-400/60 to-violet-500/60" },
  { name: "Docker", category: "Ops", level: "Working", accent: "from-cyan-300/60 to-blue-500/60" },
  { name: "Git", category: "Workflow", level: "Core", accent: "from-orange-300/60 to-rose-500/60" },
  { name: "REST API", category: "Integration", level: "Core", accent: "from-fuchsia-400/60 to-pink-500/60" },
];

export const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Laravel",
  "CodeIgniter",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "REST API",
  "Framer Motion",
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Thorz Digital",
    description:
      "A marketing website for Thorz Digital built as a modern company profile with a responsive homepage, a contact page, and a demo-ready contact flow.",
    summary:
      "This project was designed as an agency-style landing page focused on strong first impressions, clean CTA flow, and polished business-facing presentation.",
    impact: [
      "Structured the company profile homepage with hero, services, portfolio, process, testimonials, pricing, and CTA sections.",
      "Added a contact page with matching visual language and a demo contact submission flow through an internal endpoint.",
      "Created a solid base for future backend, CRM, email, or lead management integration.",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "API Route", "ESLint 9"],
    demoUrl: "https://thorz-digital.vercel.app",
    githubUrl: "https://github.com/Thoriq0/ThorzDigital",
    imageSrc: "/thorz-digital-featured.png",
    imageAlt: "Homepage screenshot of the Thorz Digital live website",
    visual: "thorz",
  },
  {
    title: "Nagih Digital",
    description:
      "A presentation-focused landing page and login screen for NagihClient, an invoicing and payment reminder product for freelancers, small businesses, and lean teams in Indonesia.",
    summary:
      "The visual direction leans into a local SaaS product feel with dark UI, glassmorphism, dashboard previews, pricing, testimonials, and product-led CTA structure.",
    impact: [
      "Combined a marketing landing page and a UI-only login screen into one consistent presentation experience.",
      "Built dashboard preview and pricing flows that fit invoice-product demos more naturally.",
      "Kept the experience lightweight, responsive, and focused on product positioning for demos or pitching.",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "App Router", "ESLint 9"],
    demoUrl: "https://nagih-digital.vercel.app",
    githubUrl: "https://github.com/Thoriq0/nagih-digital",
    imageSrc: "/nagih-digital-featured.png",
    imageAlt: "Homepage screenshot of the NagihClient live landing page",
    visual: "nagih",
  },
];

export const otherProjects: ProjectCard[] = [
  {
    title: "Shiba Project",
    description:
      "A live web project published as a standalone product-facing experience with a cleaner presentation and direct public access.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    status: "Shipped",
    demoUrl: "https://shiba-project.vercel.app/",
    visual: "shiba",
  },
  {
    title: "ERP Management System",
    description: "Operational workflows, approvals, and reporting designed for internal business teams.",
    stack: ["Laravel", "PostgreSQL", "Blade", "REST API"],
    status: "Stable",
    visual: "erp",
  },
  {
    title: "Warehouse Management System",
    description: "Inventory movement tracking, stock visibility, and process support for warehouse operations.",
    stack: ["CodeIgniter", "MySQL", "jQuery", "REST API"],
    status: "Shipped",
    visual: "wms",
  },
  {
    title: "POS Application",
    description: "Point-of-sale interfaces with transaction flow support and retail-friendly operational speed.",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "Docker"],
    status: "Scaling",
    visual: "pos",
  },
  {
    title: "Human Resource Information System",
    description: "Employee data, internal process handling, and admin workflows for HR operations.",
    stack: ["Laravel", "PostgreSQL", "Alpine.js", "REST API"],
    status: "Stable",
    visual: "hres",
  },
  {
    title: "Inventory Monitoring Dashboard",
    description: "A monitoring surface for stock health, movement snapshots, and operational visibility.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Charts"],
    status: "Internal",
    visual: "inventory",
  },
  {
    title: "Finance Reporting System",
    description: "Business-facing financial summaries with workflow structure for recurring reporting needs.",
    stack: ["React", "PostgreSQL", "REST API", "Docker"],
    status: "Shipped",
    visual: "finance",
  },
];

export const aboutHighlights = [
  "I work mostly on existing production systems, so I spend a lot of time understanding old flows before changing anything.",
  "My day-to-day work has included ERP, warehouse, POS, and HRIS applications with business rules that change fast and rarely stay simple.",
  "I am comfortable fixing bugs, tracing issues across frontend and backend layers, and shipping features without losing sight of maintainability.",
  "I care about clear interfaces, predictable behavior, and code that is practical for teams to keep working on after release.",
];

export const contactLinks = [
  {
    label: "Email",
    value: "thoriq.ahmad1301@gmail.com",
    href: "mailto:thoriq.ahmad1301@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Thoriq0",
    href: "https://github.com/Thoriq0",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thoriq",
    href: "https://www.linkedin.com/in/ahmad-thoriq-61136b245/",
  },
];
