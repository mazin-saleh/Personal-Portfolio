import { Link } from 'react-router-dom'
import { personalInfo, skills, experience, leadership } from '../data/portfolio'
import { Download, ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-6 mt-8">
        <h1 className="text-3xl font-serif font-bold text-primary">About Me</h1>
        
        <div className="prose prose-lg prose-gray">
          <p className="text-lg font-serif text-gray-600 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Resume Downloads */}
        <div className="flex gap-5">
          <a
            href={personalInfo.resumeSWE}
            download
            className="flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors whitespace-nowrap"
          >
            <Download size={16} />
            SWE Resume
          </a>
          <a
            href={personalInfo.resumeTPM}
            download
            className="flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors whitespace-nowrap"
          >
            <Download size={16} />
            TPM Resume
          </a>
        </div>
      </header>

      {/* Experience */}
      <section className="space-y-8">
        <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider border-b border-gray-300 pb-2">
          Experience
        </h2>
        <div className="space-y-10">
          {experience.map((exp, index) => (
            <div key={index} className="space-y-2 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <h3 className="text-lg font-serif font-bold text-gray-900">
                  {exp.role}
                </h3>
                <span className="text-sm font-sans text-gray-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <div className="text-sm font-sans font-medium text-primary">
                {exp.company}
              </div>
              <p className="text-gray-600 font-serif leading-relaxed">
                {exp.description}
              </p>
              {exp.link && (
                <div className="flex pt-1">
                  <span className="grow"></span>
                  <Link 
                    to={exp.link}
                    className="text-sm font-sans font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Involvement */}
      <section className="space-y-8">
        <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider border-b border-gray-300 pb-2">
          Leadership & Involvement
        </h2>
        <div className="space-y-10">
          {leadership.map((role, index) => (
            <div key={index} className="space-y-2 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <h3 className="text-lg font-serif font-bold text-gray-900">
                  {role.role}
                </h3>
                <span className="text-sm font-sans text-gray-400 whitespace-nowrap">
                  {role.period}
                </span>
              </div>
              <div className="text-sm font-sans font-medium text-primary">
                {role.organization}
              </div>
              <p className="text-gray-600 font-serif leading-relaxed">
                {role.description}
              </p>
              {role.link && (
                <div className="flex pt-1">
                  <span className="grow"></span>
                  <Link 
                    to={role.link}
                    className="text-sm font-sans font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-8">
        <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider border-b border-gray-300 pb-2">
          Skills
        </h2>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-base font-serif font-bold text-gray-700">
                {category}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {skillList.map((skill) => (
                  <span key={skill} className="text-gray-600 font-serif border-b border-gray-200 pb-0.5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
