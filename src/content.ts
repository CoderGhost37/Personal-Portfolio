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
  role: 'Software Engineer',
  location: 'Bengaluru, India',
  timeZone: 'Asia/Kolkata',
  avatar: '/images/profile/kushagra-portrait.jpg',
  email: 'kushagram2002@gmail.com',
  bio: 'I like owning the whole system, from *data models and APIs* to *distributed services* and the *interface on top*. Lately most of what I ship has a model doing real work inside it.',
};

export const about = {
  paragraphs: [
    'I have been shipping full-stack products since college, and the fundamentals still do most of the work. I think in *data models, service boundaries and failure modes*, and I enjoy making systems faster, like raising microservice throughput by 28% at TCS.',
    'Nearly everything I build now has a model in the loop. That means agents that call tools and recover from errors, chat over your own documents, streaming conversations with memory and outputs structured enough to use in code. Knowing *how retrieval, embeddings and context limits actually behave* is what turns these from demos into features people rely on.',
    'I build with AI too, and I stay the engineer while I do. I write the spec, run coding agents in parallel, then *read every diff and test it in the real app* before anything ships. Recently that produced *Vizora*, which turns a chat into a YouTube thumbnail, and a *Lovable clone* that turns a chat into a working app.',
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
    live: 'https://lms.kushagramathur.com/',
    code: 'https://github.com/CoderGhost37/Lms',
    image: '/projects/cinnavo-lms.png',
    wallpaper: ['#5a2a12', '#e0894a', '#f7dcb8'],
  },
  {
    slug: 'lovable-clone',
    title: 'Lovable Clone',
    tagline: 'AI app builder',
    summary:
      'Describe an app in chat and get working code in an in-browser editor with a live preview.',
    year: 2026,
    live: 'https://lovable.kushagramathur.com',
    code: 'https://github.com/CoderGhost37/lovable-clone',
    image: '/projects/lovable-clone.png',
    wallpaper: ['#1b1446', '#6d5dfc', '#f0a6ca'],
  },
];

export const moreProjectsHref =
  'https://github.com/CoderGhost37?tab=repositories';

export const experience: Role[] = [
  {
    company: 'WiseMonk',
    title: 'Software Engineer',
    start: '2026-10',
    end: 'present',
    location: 'Bengaluru',
    logo: '/logos/wisemonk-mark.png',
    points: [
      'Build dashboards end to end, from the APIs and data queries behind them to the interface.',
      'Help improve the customer funnel with changes across the frontend and backend.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    title: 'Systems Engineer',
    start: '2025-02',
    end: '2026-09',
    location: 'Hyderabad',
    logo: '/logos/tcs-mark.png',
    points: [
      'Optimized the product and pricing microservices, raising API throughput by 28% and cutting response times on critical e-commerce flows.',
      'Built event-driven communication between the pricing and inventory services to decouple them.',
      'Built and maintained 30+ reusable frontend components for a large e-commerce platform.',
      'Cut product page load time by 4% with rendering optimizations and lazy loading.',
    ],
  },
  {
    company: 'Osmosys Software Solutions',
    title: 'Software Engineer Intern',
    start: '2024-01',
    end: '2024-03',
    location: 'Hyderabad',
    logo: '/logos/osmosys-mark.png',
    points: [
      'Built apps across the stack, wiring component-based interfaces to backend services through REST APIs.',
      'Cut API response times by 13% through query tuning and async processing.',
      'Improved page rendering speed by 6% and handled forms, routing and state management on the frontend.',
    ],
  },
  {
    company: 'ThinkRoman Ventures',
    title: 'Software Developer Intern',
    start: '2023-03',
    end: '2024-08',
    location: 'Remote',
    logo: '/logos/thinkroman-mark.png',
    points: [
      'Built the company’s full-stack website on my own, from the data model and CMS to the pages.',
      'Built the frontend for several of the company’s live websites.',
      'Worked across SQL and NoSQL databases and a headless CMS behind the company’s sites.',
    ],
  },
];

export const connect = {
  headline: 'Let’s build something.',
  copy: 'Have an idea, a role or a question? Email is the quickest way to reach me.',
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
