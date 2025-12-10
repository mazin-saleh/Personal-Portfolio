// Dynamic Color Palettes - Phase 1: Monochrome Only
export const colorPalettes = [
  { name: 'Monochrome', primary: '#1a1a1a', secondary: '#404040' },
]

// Personal Information
export const personalInfo = {
  name: 'Mazin Saleh',
  title: '5th-year Computer Science major at the University of Florida with a minor in Arabic Literature and Language',
  email: 'mazinsameersaleh@gmail.com',
  bio: 'Passionate full-stack developer with a love for creating elegant, user-friendly web applications. I specialize in React, TypeScript, and modern web technologies.',
  tagline: 'Building the future, one line of code at a time.',
  resumeUrl: '/assets/Mazin_Saleh_SWE_Resume.pdf', // default resume link (points to SWE resume in assets)
  resumeSWE: '/assets/Mazin_Saleh_SWE_Resume.pdf',
  resumeTPM: '/assets/Mazin_Saleh_TPM_Resume.pdf',
  // Temporary flag: when true the site shows a single landing page and navigation is disabled
  tempLanding: true,
  // Optional contact fields used by Contact page
  phone: '+1 (555) 123-4567',
  location: 'Gainesville, FL',
}

// Social Links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/mazin-saleh',
    icon: 'Github',
    username: '@yourusername'
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
export const skills = {
  'Frontend': [
    'React', 'TypeScript', 'JavaScript', 'Next.js', 'Vue.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Redux'
  ],
  'Backend': [
    'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL',
    'MongoDB', 'GraphQL', 'REST APIs', 'Firebase'
  ],
  'Tools & Others': [
    'Git', 'Docker', 'AWS', 'Vercel', 'Vite',
    'Webpack', 'Jest', 'Figma', 'CI/CD'
  ]
}

// Services/Expertise Areas
export const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, performant web applications with modern frameworks and best practices.',
    icon: 'Code2'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful user interfaces that delight users and drive engagement.',
    icon: 'Palette'
  },
  {
    title: 'API Development',
    description: 'Designing and implementing scalable RESTful and GraphQL APIs for seamless data flow.',
    icon: 'Database'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, SEO, and user experience across all devices.',
    icon: 'Zap'
  },
]

// Experience Timeline
export const experience = [
  {
    company: 'Tech Company Inc.',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise SaaS platform serving 10K+ users.',
    achievements: [
      'Reduced initial load time by 40% through code splitting and optimization',
      'Implemented comprehensive testing suite increasing code coverage to 90%',
      'Mentored 3 junior developers and established best practices'
    ]
  },
  {
    company: 'Startup Studio',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Built multiple MVPs from scratch for various clients across different industries.',
    achievements: [
      'Developed 5+ production applications using React and Node.js',
      'Integrated third-party APIs and payment systems',
      'Collaborated with designers to create pixel-perfect implementations'
    ]
  },
  {
    company: 'Digital Agency',
    role: 'Junior Developer',
    period: '2018 - 2020',
    description: 'Contributed to client projects and learned modern web development practices.',
    achievements: [
      'Maintained and improved existing client websites',
      'Implemented responsive designs and accessibility features',
      'Participated in code reviews and agile ceremonies'
    ]
  },
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
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Tech Company Inc.',
    content: 'An exceptional developer who consistently delivers high-quality work. Their attention to detail and ability to solve complex problems is outstanding.',
    avatar: '/testimonials/jane.jpg',
    rating: 5
  },
  {
    name: 'John Doe',
    role: 'CEO',
    company: 'Startup Studio',
    content: 'Working with them was a pleasure. They brought our vision to life and exceeded our expectations in every way.',
    avatar: '/testimonials/john.jpg',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Designer',
    company: 'Digital Agency',
    content: 'A fantastic collaborator who understands both the technical and design aspects of web development. Highly recommended!',
    avatar: '/testimonials/sarah.jpg',
    rating: 5
  },
]

// Navigation Links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Scrapbook', path: '/scrapbook' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
