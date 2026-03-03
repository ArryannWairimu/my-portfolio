import React from 'react'

const SKILLS = [
  'React', 'Vue.js', 'Next.js', 'JavaScript', 'TypeScript',
  'Tailwind CSS', 'HTML5', 'CSS3', 'Node.js', 'Express',
  'PHP', 'MySQL', 'MongoDB', 'SQL', 'Figma', 'Vite'
]

export default function About() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 text-center">MY SKILLS</h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS.map((skill, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center hover:shadow-md transition">
              <span className="font-medium text-slate-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
