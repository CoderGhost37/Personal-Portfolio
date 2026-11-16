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

export type SectionId = 'about' | 'experience' | 'projects' | 'connect';

export const sections: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Connect' },
];

// Text wrapped in *asterisks* renders as emphasized (full-contrast) words.
export const profile = {
  name: 'Kushagra Mathur',
  role: 'Full-stack developer',
  location: 'India',
  timeZone: 'Asia/Kolkata',
  openToWork: true,
  availability: 'Open to new roles',
  avatar: '/images/profile/developer-pic-2.jpg',
  email: 'kushagram2002@gmail.com',
  resume: '/Kushagra_Mathur_Resume.pdf',
  bio: 'I build web products end to end, from the *database schema and API* to the *interface people click on*. Lately most of them have a model somewhere in the loop.',
};

export const about = {
  paragraphs: [
    'I started with React side projects in college and never stopped shipping. These days I work across the stack with *Next.js, TypeScript, Postgres and Java*, and I like owning a feature from the first migration to the last hover state.',
    'Recently I have been building AI products. *Vizora* turns a prompt into a ready-to-post YouTube thumbnail, and *Notebook RAG* lets you chat with your own PDFs, docs and websites.',
  ],
  stack: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Vercel AI SDK',
  ],
};

export const projects: Project[] = [
  {
    slug: 'vizora',
    title: 'Vizora',
    tagline: 'AI thumbnail generator',
    summary:
      'Describe your video in a chat and get a ready-to-post YouTube thumbnail, then refine it by asking for changes.',
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
    summary:
      'Event ticketing with a live queue and waiting list. Organizers get paid through Stripe Connect, and refunds are automatic.',
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
    summary:
      'Admins build courses from chapters and video lessons. Learners pay with Stripe and track progress lesson by lesson.',
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
    summary:
      'Upload PDFs and docs, or paste a URL or raw text, then ask questions. Answers are grounded in your own sources.',
    year: 2025,
    stack: ['Next.js', 'OpenAI', 'Qdrant', 'Postgres'],
    live: 'https://notebook-llm-rag.vercel.app',
    code: 'https://github.com/CoderGhost37/Notebook-LLM-RAG',
    image: '/projects/notebook-rag.png',
    wallpaper: ['#12352a', '#4fae83', '#d3efe1'],
  },
];

export const moreProjectsHref =
  'https://github.com/CoderGhost37?tab=repositories';

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

export const connect = {
  headline: 'Let’s build something.',
  copy: 'Open to new roles and freelance work. Email is the quickest way to reach me.',
};

export const socials: Social[] = [
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    handle: 'kushagramathur37',
    href: 'https://www.linkedin.com/in/kushagramathur37/',
  },
  {
    kind: 'x',
    label: 'X',
    handle: '@CoderGhost37',
    href: 'https://x.com/CoderGhost37',
  },
  {
    kind: 'github',
    label: 'GitHub',
    handle: 'CoderGhost37',
    href: 'https://github.com/CoderGhost37',
  },
  {
    kind: 'email',
    label: 'Email',
    handle: 'kushagram2002@gmail.com',
    href: 'mailto:kushagram2002@gmail.com',
  },
];
