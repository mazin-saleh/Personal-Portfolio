import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio'

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured)

  const allTechs = Array.from(
    new Set(projects.flatMap(p => p.techStack))
  ).sort()

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects I've built, showcasing my skills and passion for web development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          <button
            type="button"
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === 'featured'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 overflow-hidden">
                {project.featured && (
                  <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {/* Placeholder - Replace with actual images */}
                  <span className="text-6xl">🚀</span>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="tag text-xs">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="tag text-xs">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Technologies I Use</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allTechs.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="tag"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Projects
