import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Projects />
          <Services />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </main>
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg">Mary Wairimu</h3>
              <p className="text-slate-400 text-sm mt-2">Web Developer & SEO Specialist</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#hero" className="hover:text-white">Home</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow Me</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://github.com/arryannwairimu" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/mary-wairimu-7945133a2/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
                <li><a href="https://wa.me/0112323696" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-sm text-slate-400"><a href="mailto:marywairimuk024@gmail.com" className="hover:text-white">marywairimuk024@gmail.com</a></p>
              <p className="text-sm text-slate-400 mt-2"><a href="tel:0112323696" className="hover:text-white">0112323696</a></p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Mary Wairimu. Built with React, Vite & Tailwind CSS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
