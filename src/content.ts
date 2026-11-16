export type SocialKind = 'x' | 'linkedin' | 'github' | 'email';

export type Social = {
  kind: SocialKind;
  label: string;
  handle: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  year: number;
  stack: string[];
  live: string;
  code: string;
  image: `/projects/${string}.png`;
  wallpaper: readonly [from: string, via: string, to: string];
};

export type YearMonth = `${number}-${number}`;

export type Role = {
  company: string;
  title: string;
  start: YearMonth;
  end: YearMonth | 'present';
  location: string;
  logo?: string;
  points: string[];
  stack: string[];
};

export type School = {
  name: string;
  degree: string;
  start: number;
  end: number;
  location: string;
  detail: string;
};

export type SectionId = 'about' | 'projects' | 'experience' | 'education' | 'connect';

export const sections: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'connect', label: 'Connect' },
];

export const profile = {
  name: 'Kushagra Mathur',
  role: 'Full-stack developer',
  location: 'India',
  timeZone: 'Asia/Kolkata',
  openToWork: true,
  avatar: '/images/profile/developer-pic-2.jpg',
  email: 'kushagram2002@gmail.com',
  resume: '/Kushagra_Mathur_Resume.pdf',
  bio: 'I build web products end to end, from the database schema and API to the interface people click on. Lately most of them have a model somewhere in the loop.',
};

export const about = {
  paragraphs: [
    'I started with React side projects in college and never stopped shipping. These days I work across the stack with Next.js, TypeScript, Postgres and Java, and I like owning a feature from the first migration to the last hover state.',
    'Recently I have been building AI products. Vizora turns a prompt into a ready-to-post YouTube thumbnail, and Notebook RAG lets you chat with your own PDFs, docs and websites.',
  ],
  stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Vercel AI SDK'],
};

export const projects: Project[] = [
  {
    slug: 'vizora',
    title: 'Vizora',
    tagline: 'AI thumbnail generator',
    summary: 'Turns a prompt into a click-worthy YouTube thumbnail for content creators.',
    year: 2026,
    stack: ['Next.js', 'Prisma', 'Vercel AI SDK'],
    live: 'https://vizora.kushagramathur.com/',
    code: 'https://github.com/CoderGhost37/thumbnail-generator',
    image: '/projects/vizora.png',
    wallpaper: ['#3b1d5e', '#c26bd8', '#f4c6a5'],
  },
  {
    slug: 'ticketr',
    title: 'Ticketr',
    tagline: 'Event ticketing platform',
    summary: 'Real-time ticket queues, smart waiting lists, automatic refunds and instant payouts with Stripe Connect.',
    year: 2025,
    stack: ['Next.js', 'Convex', 'Clerk', 'Stripe Connect'],
    live: 'https://ticket-r.vercel.app/',
    code: 'https://github.com/CoderGhost37/Ticketr',
    image: '/projects/ticketr.png',
    wallpaper: ['#0f2a4a', '#4f8fd6', '#cfe3f7'],
  },
  {
    slug: 'cinnavo-lms',
    title: 'Cinnavo LMS',
    tagline: 'Learning platform',
    summary: 'A full learning management system for learners and admins, with paid courses and progress tracking.',
    year: 2025,
    stack: ['Next.js', 'shadcn/ui', 'Stripe'],
    live: 'https://lms.kushagramathur.com/',
    code: 'https://github.com/CoderGhost37/Lms',
    image: '/projects/cinnavo-lms.png',
    wallpaper: ['#5a2a12', '#e0894a', '#f7dcb8'],
  },
  {
    slug: 'notebook-rag',
    title: 'Notebook RAG',
    tagline: 'Chat with your documents',
    summary: 'Upload PDFs, CSVs, docs, a website URL or raw text, then ask questions in plain language.',
    year: 2025,
    stack: ['Next.js', 'OpenAI', 'Qdrant', 'Postgres'],
    live: 'https://notebook-llm-rag.vercel.app',
    code: 'https://github.com/CoderGhost37/Notebook-LLM-RAG',
    image: '/projects/notebook-rag.png',
    wallpaper: ['#12352a', '#4fae83', '#d3efe1'],
  },
];

export const moreProjectsHref = 'https://github.com/CoderGhost37?tab=repositories';

export const experience: Role[] = [
  {
    company: 'C3A Labs',
    title: 'Software Engineer',
    start: '2025-08',
    end: 'present',
    location: 'India',
    points: [
      'Build KaraxAI, including the template manager admin panel and the affiliate web app.',
      'Work across the Next.js frontends and the Django backend.',
    ],
    stack: ['Next.js', 'TypeScript', 'Django', 'PostgreSQL'],
  },
  {
    company: 'ThinkRoman Ventures',
    title: 'Software Developer Intern',
    start: '2023-03',
    end: '2024-08',
    location: 'Remote',
    logo: '/logos/thinkroman.png',
    points: [
      'Built the frontend for several of the company’s live websites.',
      'Designed and built the company’s full-stack website on my own.',
      'Shipped responsive, accessible interfaces with design and product teams.',
    ],
    stack: ['Next.js', 'Sanity', 'MongoDB', 'Tailwind CSS'],
  },
  {
    company: 'Osmosys Software Solutions',
    title: 'Software Engineer Intern',
    start: '2024-01',
    end: '2024-03',
    location: 'India',
    logo: '/logos/osmosys.png',
    points: [
      'Built reusable components for a large production codebase.',
      'Connected backend services to frontend screens and tuned their performance.',
    ],
    stack: ['React', 'TypeScript'],
  },
];

export const education: School[] = [
  {
    name: 'Kalinga University',
    degree: 'B.Tech, Computer Science',
    start: 2020,
    end: 2024,
    location: 'India',
    detail: 'CGPA 9.18',
  },
  {
    name: 'Seth Anandram Jaipuria School',
    degree: 'Class XII, CBSE',
    start: 2019,
    end: 2020,
    location: 'Ghaziabad, India',
    detail: '94.2%',
  },
];

export const socials: Social[] = [
  { kind: 'linkedin', label: 'LinkedIn', handle: 'kushagramathur37', href: 'https://www.linkedin.com/in/kushagramathur37/' },
  { kind: 'x', label: 'X', handle: '@CoderGhost37', href: 'https://x.com/CoderGhost37' },
  { kind: 'github', label: 'GitHub', handle: 'CoderGhost37', href: 'https://github.com/CoderGhost37' },
  { kind: 'email', label: 'Email', handle: 'kushagram2002@gmail.com', href: 'mailto:kushagram2002@gmail.com' },
];
