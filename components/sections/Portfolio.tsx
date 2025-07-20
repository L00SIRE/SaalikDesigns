'use client'

import { useEffect, useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Website Design',
    category: 'web',
    description: 'Modern e-commerce website with responsive design and seamless user experience.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    client: 'Fashion Retailer',
    duration: '6 weeks',
    image: '🛍️'
  },
  {
    id: 2,
    title: 'Restaurant Brand Identity',
    category: 'branding',
    description: 'Complete brand identity design including logo, menu design, and marketing materials.',
    technologies: ['Adobe Illustrator', 'Photoshop'],
    client: 'Local Restaurant',
    duration: '3 weeks',
    image: '🍽️'
  },
  {
    id: 3,
    title: 'Corporate Website Redesign',
    category: 'web',
    description: 'Professional website redesign for a technology company with improved UX/UI.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    client: 'Tech Startup',
    duration: '4 weeks',
    image: '💼'
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'marketing',
    description: 'Comprehensive social media marketing campaign with engaging content and graphics.',
    technologies: ['Canva', 'Facebook Ads', 'Instagram'],
    client: 'Beauty Brand',
    duration: '2 months',
    image: '📱'
  },
  {
    id: 5,
    title: 'Product Packaging Design',
    category: 'graphic',
    description: 'Eye-catching packaging design for a new product launch with sustainable materials.',
    technologies: ['Adobe Illustrator', 'InDesign'],
    client: 'Food Company',
    duration: '2 weeks',
    image: '📦'
  },
  {
    id: 6,
    title: 'Mobile App UI Design',
    category: 'web',
    description: 'User interface design for a fitness tracking mobile application.',
    technologies: ['Figma', 'Adobe XD'],
    client: 'Health Tech',
    duration: '5 weeks',
    image: '📱'
  }
]

const filters = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Design' },
  { id: 'branding', name: 'Branding' },
  { id: 'graphic', name: 'Graphic Design' },
  { id: 'marketing', name: 'Digital Marketing' }
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(project => project.category === activeFilter)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe elements
    document.querySelectorAll('.portfolio-card, .filter-btn').forEach((card, index) => {
      const cardElement = card as HTMLElement
      cardElement.style.opacity = '0'
      cardElement.style.transform = 'translateY(50px)'
      cardElement.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-24 px-12 max-w-7xl mx-auto">
      <h2 className="section-title">Our Portfolio</h2>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`filter-btn px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                : 'bg-dark-800/60 text-accent-light hover:bg-dark-700/60 border border-accent-purple/20'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card service-card">
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-6xl">{project.image}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-dark-900/90 text-accent-light px-3 py-1 rounded-full text-xs font-medium">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-accent-light mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="flex justify-between text-xs text-accent-light mb-4">
                <span>Client: {project.client}</span>
                <span>Duration: {project.duration}</span>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-accent-purple/20 text-accent-purple px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full btn-primary text-sm py-2">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
        <p className="text-accent-light mb-8 max-w-2xl mx-auto">
          Let's create something amazing together. Get in touch with us to discuss your project 
          and receive a personalized quote.
        </p>
        <button className="btn-primary">
          Start Your Project
        </button>
      </div>
    </section>
  )
} 