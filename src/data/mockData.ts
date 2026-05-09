export const siteConfig = {
  name: 'Nilesh Barandwal',
  initials: 'NB.',
  title: 'M.Tech. CS, IIT Dharwad',
  tagline: 'Building things that work. Securing things that matter.',
  bio: 'Full-stack engineer and AI security researcher. I build products end-to-end, from APIs to interfaces, and research how to make AI systems verifiably secure.',
  email: 'nilesh.barandwal@iitdh.ac.in',
  github: 'https://github.com/NileshBarandwal',
  linkedin: 'https://www.linkedin.com/in/nilesh-barandwal-8403ab182/',
  cvUrl: 'resume.pdf',
  footerCredit: 'BUILT BY NILESH BARANDWAL.',
  copyright: '© 2026 NILESH BARANDWAL. ALL RIGHTS RESERVED.',
}

export const typewriterRoles = [
  'Full Stack Engineer',
  'AI Security Researcher',
  'Web3 Builder',
  'Product Thinker',
]

export type ExperienceItem = {
  period: string
  role: string
  company: string
  description: string
  active: boolean
}

export const experience: ExperienceItem[] = [
  {
    period: 'AUG 2021 — APR 2022',
    role: 'Web Application Developer',
    company: 'Avegen India Pvt. Ltd.',
    description:
      'Built and maintained REST APIs and data pipelines for scalable digital health products. Conducted sprint planning and tracking via JIRA in an agile team. Designed test plans and authored technical documentation.',
    active: false,
  },
  {
    period: 'AUG 2020 — JAN 2021',
    role: 'Full Stack Developer Intern (Remote)',
    company: 'IMATMI LLC, USA',
    description:
      'Built responsive UI modules in React.js and an admin dashboard. Developed secure backend APIs using Node.js and Express.js. Implemented authentication workflows and deployed full-stack applications on cloud servers.',
    active: false,
  },
  {
    period: 'MAY 2020 — JUN 2020',
    role: 'Summer Intern',
    company: 'IIT Bombay, E-Yantra',
    description:
      'Co-developed the MHRD-sponsored Rakshak App. Built reusable React.js components and integrated Google Maps API for real-time COVID data visualization. Optimized real-time navigation algorithms and co-authored a research paper.',
    active: false,
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  span: string
  backgroundWord: string
  liveUrl?: string
  repoUrl?: string
  status?: string
  progress?: number
}

export const projects: Project[] = [
  {
    title: 'Bolna Voice AI Lead Qualifier',
    description:
      'Agentic voice system that autonomously conducts outbound sales calls and qualifies leads as Hot, Warm, or Cold without human involvement. Multi-turn AI conversation with real-time webhook processing and a live dashboard.',
    tags: ['Next.js 14', 'Express', 'SQLite', 'Bolna Voice AI'],
    span: 'md:col-span-7',
    backgroundWord: 'VOICE.AI',
    liveUrl: 'https://bolna-lead-qualifier.vercel.app',
    repoUrl: 'https://github.com/NileshBarandwal/bolna-lead-qualifier',
  },
  {
    title: 'AMM-DEX Platform',
    description:
      'Constant-product AMM (x × y = k) with LP tokens, 0.3% fee accrual, and slippage protection deployed on Sepolia testnet.',
    tags: ['Solidity', 'Hardhat', 'React', 'Ethers.js v6'],
    span: 'md:col-span-5',
    backgroundWord: 'WEB3',
    liveUrl: 'https://amm-dex-orcin.vercel.app',
    repoUrl: 'https://github.com/NileshBarandwal/AMM-DEX',
  },
  {
    title: 'VectorShift AI Pipeline Builder',
    description:
      'Visual LLM workflow builder enabling chaining of AI components including prompts, models, and data sources.',
    tags: ['React', 'Node.js', 'FastAPI'],
    span: 'md:col-span-5',
    backgroundWord: 'LLM',
    repoUrl: 'https://github.com/NileshBarandwal/vectorshift-pipeline-builder',
  },
  {
    title: 'Armatrix Team Directory',
    description:
      'Team directory REST API with 17 pytest unit tests, deployed on Railway and Vercel.',
    tags: ['FastAPI', 'Next.js', 'TypeScript'],
    span: 'md:col-span-7',
    backgroundWord: 'API',
    repoUrl: 'https://github.com/NileshBarandwal/armatrix-team',
  },
]

export type SkillCategory = {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Solidity'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'React.js', 'Next.js', 'REST APIs', 'Git', 'JIRA'],
  },
  {
    label: 'AI & ML',
    skills: ['LLM APIs', 'LangChain', 'Prompt Engineering', 'NumPy', 'Pandas', 'Scikit-learn'],
  },
  {
    label: 'Databases & Cloud',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Docker', 'Vercel', 'Railway', 'Render'],
  },
  {
    label: 'Web3',
    skills: ['Hardhat', 'Web3.js', 'Ethers.js', 'IPFS'],
  },
]

export const navLinks = [
  { label: 'Work', href: '#work', active: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const footerLinks = [
  { label: '[ GitHub ]', href: 'https://github.com/NileshBarandwal' },
  { label: '[ LinkedIn ]', href: 'https://www.linkedin.com/in/nilesh-barandwal-8403ab182/' },
  { label: '[ Email ]', href: 'mailto:nilesh.barandwal@iitdh.ac.in' },
]

export const researchData = {
  label: 'M.Tech. Thesis (MTP-2) — IIT Dharwad',
  title: 'Post-Quantum Security for Artemis zkML',
  subtitle:
    'Replacing KZG Polynomial Commitments with FRI-Poseidon for Post-Quantum Secure Verifiable Machine Learning Inference',
  guide: 'Guide: Dr. Siba Narayan Swain, Dept. of CSE, IIT Dharwad',
  status: 'Completed — April 2026',
  description:
    "Identified a critical quantum vulnerability in the Artemis zkML framework: the KZG polynomial commitment scheme is broken by Shor's algorithm. Proposed and implemented a post-quantum replacement using FRI-Poseidon (hash-based polynomial commitments). Demonstrated the BSGS attack recovering the KZG trapdoor in 10.90 hours on a 64-bit curve with real MNIST MLP weights, and confirmed full post-quantum resistance of the FRI-Poseidon replacement.",
  cta: 'View on GitHub',
  href: 'https://github.com/NileshBarandwal/mtp2-post-quantum-artemis-zkml',
}

export const achievements = [
  {
    label: 'E-YIC',
    title: 'e-Yantra Ideas Competition',
    subtitle: 'IIT Bombay, MHRD-NMEICT',
    description: 'Regional Finalist — Top 49 teams among 300+ nationwide entries.',
  },
  {
    label: 'E-YRC',
    title: 'e-Yantra Robotics Challenge',
    subtitle: 'IIT Bombay',
    description: 'Top 25 teams in India to successfully submit the final solution.',
  },
]

export const backgroundImageUrl =
  'https://lh3.googleusercontent.com/aida/ADBb0ui8wXiS1ESycJX4IfF3NkLFPbb6qm9rRHd22s386eCjM6AhtySVfF9BvtRjcuJbUJihh5Gt0F0BIyTI05ZVksFqbBAy6oWmfhBEi8Ar1Cs4f69m3EUm6H1BrPp18Uq2v_RORfXlYfh6KGRTcFoLqLW35wFPO3X8kHnLbZFGcQbEKyufMHEXHZ96uIEopUU5JKtXbp7huRRkGGimRP2eRZlBY6lTjYQ-fTtOt2Q1717zPOqnkVdsWf48PP0'
