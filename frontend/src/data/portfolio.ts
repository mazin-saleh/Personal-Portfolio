// Dynamic Color Palettes - one will be randomly selected on page load
export const colorPalettes = [
  { name: 'Ocean Blue', primary: '#3b82f6', secondary: '#0ea5e9' },
  { name: 'Purple Haze', primary: '#8b5cf6', secondary: '#ec4899' },
  { name: 'Emerald Green', primary: '#10b981', secondary: '#14b8a6' },
  { name: 'Sunset Orange', primary: '#f59e0b', secondary: '#ef4444' },
  { name: 'Royal Purple', primary: '#7c3aed', secondary: '#a855f7' },
  { name: 'Teal Mint', primary: '#14b8a6', secondary: '#06b6d4' },
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
  tempLanding: false,
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

// Projects
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
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and team features.',
    longDescription: 'A Trello-like application for managing projects and tasks with real-time collaboration, drag-and-drop interface, and team management features.',
    image: '/projects/taskmanager.jpg',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/taskmanager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts, maps, and location search.',
    longDescription: 'Interactive weather dashboard displaying current conditions, 7-day forecast, radar maps, and detailed weather metrics for any location worldwide.',
    image: '/projects/weather.jpg',
    techStack: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather',
    liveUrl: 'https://weather-demo.vercel.app',
    featured: false
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Content management system for portfolios with drag-and-drop editor.',
    longDescription: 'A headless CMS specifically designed for portfolio websites with an intuitive drag-and-drop editor, media management, and API endpoints.',
    image: '/projects/cms.jpg',
    techStack: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/portfolio-cms',
    featured: false
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout plans and progress charts.',
    longDescription: 'Comprehensive fitness application for tracking workouts, nutrition, and progress over time with customizable workout plans and detailed analytics.',
    image: '/projects/fitness.jpg',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    featured: false
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat with channels, direct messages, and file sharing.',
    longDescription: 'Slack-inspired chat application with real-time messaging, channels, direct messages, file uploads, and user presence indicators.',
    image: '/projects/chat.jpg',
    techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://chat-demo.vercel.app',
    featured: false
  },
]

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
