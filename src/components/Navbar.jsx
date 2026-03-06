import React, { useState, useRef, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" ref={navRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a className="text-2xl font-bold text-blue-600" href="#">
              Mary Wairimu
            </a>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#hero" className="text-slate-700 hover:text-blue-600 transition">Home</a>
            <a href="#skills" className="text-slate-700 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-slate-700 hover:text-blue-600 transition">Projects</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition">Services</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition">Contact</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t bg-white pb-4">
          <div className="container mx-auto px-4 space-y-2 pt-2">
            <a href="#hero" onClick={() => setOpen(false)} className="block text-slate-700 py-2">Home</a>
            <a href="#skills" onClick={() => setOpen(false)} className="block text-slate-700 py-2">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block text-slate-700 py-2">Projects</a>
            <a href="#services" onClick={() => setOpen(false)} className="block text-slate-700 py-2">Services</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-slate-700 py-2">Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}
