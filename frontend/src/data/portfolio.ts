// Dynamic Color Palettes - Phase 1: Monochrome Only
export const colorPalettes = [
  { name: 'Monochrome', primary: '#1a1a1a', secondary: '#404040' },
]

// Personal Information
export const personalInfo = {
  name: 'Mazin Saleh',
  title: '5th-year Computer Science major at the University of Florida with a minor in Arabic Literature and Language',
  email: 'mazinsameersaleh@gmail.com',
  bio: 'I am a 5th-year Computer Science student at the University of Florida, minoring in Arabic Literature & Language and pursuing a certificate in AI.',
  tagline: 'Building the future, one line of code at a time.',
  resumeUrl: '/assets/Mazin_Saleh_SWE_Resume.pdf', // default resume link (points to SWE resume in assets)
  resumeSWE: '/assets/Mazin_Saleh_SWE_Resume.pdf',
  resumeTPM: '/assets/Mazin_Saleh_TPM_Resume.pdf',
  // Temporary flag: when true the site shows a single landing page and navigation is disabled
  tempLanding: false,
  // Optional contact fields used by Contact page
  phone: '',
  location: 'Gainesville, FL',
}

// Social Links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/mazin-saleh',
    icon: 'Github',
    username: '@mazin-saleh'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mazin-saleh/',
    icon: 'Linkedin',
    username: 'Mazin Saleh'
  },
  {
    name: 'Email',
    url: 'mailto:mazinsameersaleh@gmail.com',
    icon: 'Mail',
    username: 'mazinsameersaleh@gmail.com'
  },
]

// Skills organized by category
export const skills: Record<string, string[]> = {
  'Programming & AI': [
    'Python', 'C++', 'Swift', 'SQL', 'JavaScript', 'React', 'LLMs (GPT, Qwen)', 
    'RAG Pipelines', 'TransformerLens', 'Ollama', 'Java', 'HTML', 'CSS', 'Tailwind'
  ],
  'Cloud & Tools': [
    'AWS', 'Azure', 'Docker', 'Linux', 'Jira', 'Power BI', 'Flask', 'GraphQL', 
    'Apollo', 'Git', 'Figma', 'Pandas', 'Ghidra', 'VirtualBox', 'Unity'
  ],
  'Reverse Engineering': [
    'Ghidra', 'PEStudio', 'x32dbg', 'Process Monitor', 'Wireshark', 'YARA'
  ],
  'Project Management': [
    'Agile', 'Scrum', 'Sprint Planning', 'Roadmapping', 'Risk Tracking'
  ],
  'Languages': [
    'English (Fluent)', 'Spanish (Learning)', 'Arabic (Learning)'
  ]
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

// Services/Expertise Areas
export const services: Service[] = [
  /*
  {
    title: 'Web Development',
    description: 'Building responsive, performant web applications with modern frameworks and best practices.',
    icon: 'Code2'
  },
  */
]

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  link?: string; // Optional link to a Scrapbook post
}

// Experience Timeline
export const experience: Experience[] = [
  {
    company: 'Microsoft',
    role: 'Software Engineering Intern',
    period: 'May 2025 - August 2025',
    description: 'Built a nanosecond-level tracing system for Xandr\'s ad platform that pinpoints performance bottlenecks across billions of daily auctions.',
    achievements: [],
    link: '' 
  },
  {
    company: 'Microsoft',
    role: 'Product Management & SWE (Explore) Intern',
    period: 'May 2024 - August 2024',
    description: 'Shipped unified Power BI dashboards and GPT-based classification pipelines that optimized ad performance tracking for 14 categories.',
    achievements: [],
    link: ''
  },
  {
    company: 'UF Media Effects & Technology Lab',
    role: 'Research Assistant',
    period: 'September 2025 - Present',
    description: 'Developing "Memory Box," an AI-powered app using Google Vision and Dialogflow to help dementia patients recognize loved ones and recall memories.',
    achievements: [],
    link: ''
  },
  {
    company: 'ZapIntern',
    role: 'Founder',
    period: 'January 2023 - August 2024',
    description: 'Founded a platform hosting 7,600+ listings and an AI autofill engine that reduced student application time from hours to minutes.',
    achievements: [],
    link: ''
  },
  {
    company: 'P.F. Chang\'s Asian Bistro',
    role: 'Waiter',
    period: 'May 2022 - Present',
    description: 'Consistently exceeded sales targets by ~35% while delivering exceptional guest experiences in a high-volume dining environment.',
    achievements: [],
    link: ''
  }
]

export interface Leadership {
  organization: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

export const leadership: Leadership[] = [
  {
    organization: 'LeetGator',
    role: 'President',
    period: 'October 2024 - August 2025',
    description: 'Founded UF\'s premier interview prep club, leading weekly algorithms workshops that directly accelerated internship placements for 50+ members.',
    link: ''
  },
  {
    organization: 'Society of Hispanic Professional Engineers (SHPE)',
    role: 'SHPE Tank Director',
    period: 'September 2023 - April 2024',
    description: 'Directed a product case competition for 7 teams, securing Accenture sponsorship and defining scope for innovative venture proposals.',
    link: ''
  },
  {
    organization: 'Society of Hispanic Professional Engineers (SHPE)',
    role: 'Internal Event Director',
    period: 'September 2023 - December 2023',
    description: 'Orchestrated social events and community initiatives that boosted new member retention by 17% through inclusive engagement strategies.',
    link: ''
  },
  {
    organization: 'Society of Hispanic Professional Engineers (SHPE)',
    role: 'Operating Systems Tutor',
    period: 'January 2025 - May 2025',
    description: 'Mentored peers in complex Operating Systems concepts through weekly office hours and custom-developed study guides.',
    link: ''
  },
  {
    organization: 'Society of Hispanic Professional Engineers (SHPE)',
    role: 'Peer Mentor (MentorSHPE)',
    period: 'January 2024 - Present',
    description: 'Guided 9+ CS students through academic planning and career development, fostering their success in coursework and internships.',
    link: ''
  }
]

// Projects - DEPRECATED: Now fetching from Sanity CMS
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const projects: any[] = []
/*
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, checkout, and admin dashboard.',
    longDescription: 'Built a complete e-commerce solution with product management, shopping cart, secure checkout, order tracking, and admin dashboard. Integrated Stripe for payments and implemented advanced filtering and search.',
    image: '/projects/ecommerce.jpg', // Add images to public/projects folder
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true
  },
  // ... (rest of projects)
]
*/


// Navigation Links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Scrapbook', path: '/scrapbook' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
