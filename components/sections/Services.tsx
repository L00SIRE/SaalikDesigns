'use client'

import { useEffect } from 'react'

const services = [
  {
    icon: '🎨',
    title: 'Brand Design',
    description: 'Create stunning brand identities that capture your essence and resonate with your target audience through innovative visual storytelling.'
  },
  {
    icon: '📱',
    title: 'Digital Marketing',
    description: 'Boost your online presence with strategic social media campaigns, SEO optimization, and targeted advertising solutions.'
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Build responsive, modern websites that not only look amazing but also deliver exceptional user experiences across all devices.'
  },
  {
    icon: '📊',
    title: 'Analytics & Strategy',
    description: 'Data-driven insights and strategic planning to optimize your marketing efforts and maximize your return on investment.'
  },
  {
    icon: '🎥',
    title: 'Content Creation',
    description: 'Engaging visual content, videos, and graphics that tell your story and connect with your audience on an emotional level.'
  },
  {
    icon: '🚀',
    title: 'Growth Marketing',
    description: 'Accelerate your business growth with innovative marketing strategies designed to scale your brand and increase revenue.'
  }
]

export default function Services() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
      const cardElement = card as HTMLElement
      cardElement.style.opacity = '0'
      cardElement.style.transform = 'translateY(50px)'
      cardElement.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 px-12 max-w-7xl mx-auto">
      <h2 className="section-title">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="text-5xl mb-5">
              {service.icon}
            </div>
            <h3 className="text-2xl mb-4 text-white font-semibold">
              {service.title}
            </h3>
            <p className="text-accent-light leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
} 