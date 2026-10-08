export const SITE = {
  name: 'Penghou',
  title: 'Penghou — infrastructure for agent-authored adaptive workflows',
  tagline: 'Infrastructure for agent-authored adaptive workflows.',
  description:
    'Penghou is an open-source ecosystem that lets a model design and revise a workflow while durable execution, authority, evidence, and recovery stay outside the model.',
  github: 'https://github.com/jenolaszlo-sketch',
  founder: 'Jenő László',
  builtSince: '2026',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Philosophy', href: '/philosophy/' },
  { label: 'Architecture', href: '/architecture/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Milestones', href: '/milestones/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Evidence', href: '/evidence/' },
  { label: 'About', href: '/about/' },
];

export interface FounderProfile {
  name: string;
  role: string;
  years: number;
  bio: string;
  focus: string[];
  github: string;
  linkedin: string | null;
}

export const FOUNDER: FounderProfile = {
  name: 'Jenő László',
  role: 'Founder and principal engineer, Penghou',
  years: 27,
  bio: 'I have spent around 27 years as a software engineer and architect, working on production software, distributed systems, platform architecture, and integration systems. Penghou applies that experience to a new question: what reliable infrastructure should look like when probabilistic models become active participants in software systems.',
  focus: [
    'production software',
    'distributed systems',
    'platform architecture',
    'integration systems',
  ],
  github: 'https://github.com/jenolaszlo-sketch',
  linkedin: 'https://www.linkedin.com/in/jeno-laszlo-712a895/',
};
