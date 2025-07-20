'use client'

import { useEffect } from 'react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      {/* Hero Content */}
      <div className="text-center max-w-4xl z-10 px-5">
        <p className="text-2xl mb-2 text-white/90">
          We provide
        </p>
        <h1 className="hero-title">
          CREATIVE DESIGNS
        </h1>
        <p className="text-xl mb-10 text-accent-light italic">
          that reflects your vision
        </p>
        <button 
          onClick={scrollToContact}
          className="btn-primary"
        >
          Start Your Project
        </button>
      </div>
    </section>
  )
} 