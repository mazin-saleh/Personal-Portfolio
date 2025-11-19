import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo, socialLinks } from '../data/portfolio'

const Home = () => {
  return (
    <div className="min-h-screen">
  {/* Hero Section */}
  <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 home-hero">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4">
              {personalInfo.title}
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/projects" className="btn btn-primary group">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
              
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Download className="w-5 h-5 mr-2 inline" />
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.slice(0, 4).map((social) => {
                const iconMap: Record<string, any> = {
                  Github: Github,
                  Linkedin: Linkedin,
                }
                const Icon = iconMap[social.icon]
                return Icon ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ) : null
              })}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title mb-8">What I Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              I specialize in creating modern, responsive web applications with a focus on performance, 
              accessibility, and user experience. Let's build something amazing together!
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
