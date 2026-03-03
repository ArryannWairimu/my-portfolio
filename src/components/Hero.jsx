import React from 'react'
import AnimatedText from './AnimatedText'

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight animate-fade-in-down">
              <AnimatedText 
                text="Welcome to my Web Development Portfolio!" 
                className="block"
                staggerDelay={0.05}
              />
            </h1>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed animate-fade-in-up">
              <AnimatedText 
                text="I'm a passionate web developer and SEO specialist. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality."
                staggerDelay={0.03}
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up">
              <a href="#projects" className="btn-gradient px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg">View Projects</a>
              <a href="#contact" className="btn-outline-gradient px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium">Get Started</a>
            </div>
          </div>
          <div className="flex justify-center animate-zoom-in">
            <div className="w-64 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-200 to-indigo-200 shadow-2xl animate-float relative group">
              <img alt="Your portrait" src="/src/assets/portrait.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
