import React from 'react'

const SERVICES = [
  { id: 1, title: 'Frontend Web Development', desc: 'Creating beautiful and functional web experiences using React, Vue and the latest technologies with best practices.' },
  { id: 2, title: 'Technology Stack', desc: 'Expertise in HTML5, CSS3, JavaScript, React, Node.js, PHP and modern frontend frameworks and libraries.' },
  { id: 3, title: 'Web Optimization & SEO', desc: 'Performance optimization for speed, SEO rankings and user satisfaction. I ensure fast and responsive experiences.' },
  { id: 4, title: 'Backend Development', desc: 'Building robust APIs and server-side solutions using Node.js, Express, PHP, MySQL, and MongoDB.' },
  { id: 5, title: 'Testing and QA', desc: 'Rigorous testing and debugging for bug-free and secure environments where your peace of mind is guaranteed.' }
]

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 text-center">What I Do</h2>
        <p className="text-slate-600 text-center mt-4 max-w-2xl mx-auto">I'm not just a developer; I'm a digital dreamweaver. Discover below how I can help you turn your ideas into reality.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(s => (
            <div key={s.id} className="p-8 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">✓</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
