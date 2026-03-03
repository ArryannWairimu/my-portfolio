import React from 'react'

const PROJECTS = [
  {
    id: 1,
    title: 'React Web Application',
    desc: 'Full-stack React application with Node.js backend. Built with modern tooling, responsive design, and optimized performance.',
    github: 'https://github.com/your-github/react-project',
    preview: 'https://your-hosted-link/react-project',
    image: '/src/assets/project1.png',
    category: 'React'
  },
  {
    id: 2,
    title: 'PHP Web Development',
    desc: 'PHP-based web application with MySQL database. Features include user authentication, database management, and SEO optimization.',
    github: 'https://github.com/ArryannWairimu/traffic-accident',
    preview: 'https://traffic-accident-35kz.onrender.com',
    image: '/src/assets/project2.png',
    category: 'PHP'
  },
  {
    id: 3,
    title: 'SEO Optimization & Analytics',
    desc: 'SEO strategy implementation, keyword research, on-page optimization, and performance analytics. Improved rankings and organic traffic.',
    preview: 'https://perfumelux.co.ke/ladies-perfumes',
    image: '/src/assets/seo-screenshot.png',
    category: 'SEO'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 text-center">My Projects</h2>
        <p className="text-slate-600 text-center mt-4 max-w-2xl mx-auto">Whether you have a web app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map(p => (
            <article key={p.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="h-48 bg-slate-100 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{p.category}</span>
                <h3 className="font-bold text-lg text-slate-900 mt-2">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-3">{p.desc}</p>
                <div className="mt-6 flex items-center gap-4">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-700">VIEW CODE →</a>}
                  <a href={p.preview} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-700">PREVIEW →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
