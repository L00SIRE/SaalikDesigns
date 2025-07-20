'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full py-5 px-12 backdrop-blur-nav z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-950/95' : 'bg-dark-950/80'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold gradient-text uppercase tracking-wider">
          Saalik Designs
        </div>
        
        <ul className="flex gap-8">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="nav-link"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="nav-link"
            >
              Pricing
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
} 