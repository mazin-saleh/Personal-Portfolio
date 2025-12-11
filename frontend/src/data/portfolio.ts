// Dynamic Color Palettes - Phase 1: Monochrome Only
export const colorPalettes = [
  { name: 'Monochrome', primary: '#1a1a1a', secondary: '#404040' },
]

// Personal Information
export const personalInfo = {
  name: 'Mazin Saleh',
  title: '5th-year Computer Science major at the University of Florida with a minor in Arabic Literature and Language',
  email: 'mazinsameersaleh@gmail.com',
  bio: '',
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
  // 'Frontend': [
  //   'React', 'TypeScript', 'JavaScript', 'Next.js', 'Vue.js',
  //   'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Redux'
  // ],
  // 'Backend': [
  //   'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL',
  //   'MongoDB', 'GraphQL', 'REST APIs', 'Firebase'
  // ],
  // 'Tools & Others': [
  //   'Git', 'Docker', 'AWS', 'Vercel', 'Vite',
  //   'Webpack', 'Jest', 'Figma', 'CI/CD'
  // ]
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
}

// Experience Timeline
export const experience: Experience[] = [
  /*
  {
    company: 'Company Name',
    role: 'Job Title',
    period: '202X - Present',
    description: 'Description of your role and contributions.',
    achievements: [
      'Achievement 1',
      'Achievement 2'
    ]
  },
  */
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

// Testimonials
export const testimonials = [
  /*
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Tech Company Inc.',
    content: 'An exceptional developer who consistently delivers high-quality work. Their attention to detail and ability to solve complex problems is outstanding.',
    avatar: '/testimonials/jane.jpg',
    rating: 5
  },
  */
]

// Navigation Links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Scrapbook', path: '/scrapbook' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
