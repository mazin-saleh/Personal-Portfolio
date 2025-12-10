import { personalInfo, skills, experience } from '../data/portfolio'

const About = () => {
  return (
    <div className="space-y-16 pb-20">
      <header className="space-y-4 mt-8 border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary">About Me</h1>
      </header>

      {/* Bio */}
      <section className="prose prose-lg prose-gray">
        <p className="text-xl font-serif text-gray-600 leading-relaxed">
          {personalInfo.bio}
        </p>
        {/* Add more paragraphs here if we had them in data, for now just the bio */}
      </section>

      {/* Experience */}
      <section className="space-y-8">
        <h2 className="text-xl font-sans font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
          Experience
        </h2>
        <div className="space-y-10">
          {experience.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4">
              <div className="text-sm font-sans text-gray-400 pt-1">
                {exp.period}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-serif font-bold text-gray-900">
                  {exp.role}
                </h3>
                <div className="text-sm font-sans font-medium text-primary">
                  {exp.company}
                </div>
                <p className="text-gray-600 font-serif leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-8">
        <h2 className="text-xl font-sans font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
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
