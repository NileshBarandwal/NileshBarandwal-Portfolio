export const siteConfig = {
  name: 'Nilesh Barandwal',
  initials: 'NB.',
  title: 'Full Stack Security Architect',
  tagline: 'Building things that work. Securing things that matter.',
  bio: 'Pioneering the intersection of distributed systems and artificial intelligence security. Engineering digital resilience for the future.',
  email: 'nbarandwal@gmail.com',
  github: 'https://github.com/NileshBarandwal',
  linkedin: 'https://linkedin.com/in/nileshbarandwal',
  cvUrl: '#',
  footerCredit: 'ENGINEERED BY NILESH BARANDWAL.',
  copyright: '© 2025 NILESH BARANDWAL. ALL RIGHTS RESERVED.',
}

export type ExperienceItem = {
  period: string
  role: string
  company: string
  description: string
  active: boolean
}

export const experience: ExperienceItem[] = [
  {
    period: '2023 — PRESENT',
    role: 'Lead Engineer',
    company: 'Avegen India',
    description:
      'Spearheading critical healthcare infrastructure development, focusing on high-concurrency systems and data privacy architectures.',
    active: true,
  },
  {
    period: '2022 — 2023',
    role: 'Software Engineer',
    company: 'Intellect Mind USA',
    description:
      'Designed and implemented scalable AI-driven solutions for enterprise logistics and intelligent routing protocols.',
    active: false,
  },
  {
    period: '2021 — 2022',
    role: 'Research Intern',
    company: 'IIT Bombay',
    description:
      'Conducted research on robotics swarm intelligence and automated navigation systems in constrained environments.',
    active: false,
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  span: string
  backgroundWord: string
  status?: string
  progress?: number
}

export const projects: Project[] = [
  {
    title: 'Distributed Ledger for AI Agents',
    description:
      'A decentralized framework ensuring verifiable execution logs for autonomous LLM agents in hostile environments.',
    tags: ['Solidity', 'React'],
    span: 'md:col-span-7',
    backgroundWord: 'NODE.JS',
  },
  {
    title: 'ZK-Privacy Vault',
    description:
      'Zero-knowledge proof implementation for medical record sharing without exposing sensitive PII.',
    tags: ['Rust', 'WASM'],
    span: 'md:col-span-5',
    backgroundWord: 'SECURITY',
  },
  {
    title: 'Project Sentinel',
    description:
      'Autonomous vulnerability detection engine for smart contracts using custom fine-tuned transformer models.',
    tags: [],
    span: 'md:col-span-12',
    backgroundWord: '',
    status: 'IN DEVELOPMENT',
    progress: 66,
  },
]

export type SkillCategory = {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Core Languages',
    skills: ['TypeScript', 'Rust', 'Python', 'Go'],
  },
  {
    label: 'Intelligence',
    skills: ['PyTorch', 'LangChain', 'Pinecone', 'Transformers'],
  },
  {
    label: 'Web3 & Crypto',
    skills: ['Solidity', 'zk-SNARKs', 'TEE', 'Hardhat'],
  },
]

export const navLinks = [
  { label: 'Work', href: '#work', active: true },
  { label: 'Experience', href: '#experience' },
  { label: 'Lab', href: '#lab' },
  { label: 'About', href: '#about' },
]

export const footerLinks = [
  { label: '[ Source ]', href: siteConfig.github },
  { label: '[ Github ]', href: siteConfig.github },
  { label: '[ LinkedIn ]', href: siteConfig.linkedin },
]

export const researchQuote = {
  label: 'Academic Insight',
  quote: '"Architecting Secure AI Execution through TEEs, ZKPs, and Distributed Ledger Technology."',
  cta: 'READ MANUSCRIPT',
  href: '#',
}

export const backgroundImageUrl =
  'https://lh3.googleusercontent.com/aida/ADBb0ui8wXiS1ESycJX4IfF3NkLFPbb6qm9rRHd22s386eCjM6AhtySVfF9BvtRjcuJbUJihh5Gt0F0BIyTI05ZVksFqbBAy6oWmfhBEi8Ar1Cs4f69m3EUm6H1BrPp18Uq2v_RORfXlYfh6KGRTcFoLqLW35wFPO3X8kHnLbZFGcQbEKyufMHEXHZ96uIEopUU5JKtXbp7huRRkGGimRP2eRZlBY6lTjYQ-fTtOt2Q1717zPOqnkVdsWf48PP0'
