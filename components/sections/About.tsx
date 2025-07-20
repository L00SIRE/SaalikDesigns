'use client'

import { useEffect } from 'react'

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & Creative Director',
    experience: '8+ years',
    expertise: 'Brand Strategy, UI/UX Design',
    avatar: '👨‍🎨'
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Web Developer',
    experience: '6+ years',
    expertise: 'React, Node.js, Full-stack Development',
    avatar: '👩‍💻'
  },
  {
    name: 'Amit Patel',
    role: 'Graphic Designer',
    experience: '4+ years',
    expertise: 'Logo Design, Print Design, Branding',
    avatar: '👨‍🎨'
  }
]

const stats = [
  { number: '150+', label: 'Happy Clients' },
  { number: '300+', label: 'Projects Completed' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
]

const values = [
  {
    icon: '❤️',
    title: 'Passion for Design',
    description: 'We pour our heart into every project, ensuring each design tells your unique story.'
  },
  {
    icon: '⏰',
    title: 'Timely Delivery',
    description: 'We respect your time and always deliver projects on schedule, no exceptions.'
  },
  {
    icon: '👥',
    title: 'Client Collaboration',
    description: 'We work closely with you throughout the process to ensure your vision comes to life.'
  },
  {
    icon: '🏆',
    title: 'Quality Excellence',
    description: 'We maintain the highest standards of quality in every design we create.'
  }
]

export default function About() {
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
    document.querySelectorAll('.about-card, .team-card, .value-card').forEach((card, index) => {
      const cardElement = card as HTMLElement
      cardElement.style.opacity = '0'
      cardElement.style.transform = 'translateY(50px)'
      cardElement.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-12 max-w-7xl mx-auto">
      <h2 className="section-title">About Us</h2>
      
      {/* Company Story */}
      <div className="about-card text-center mb-20">
        <p className="text-xl text-accent-light leading-relaxed max-w-4xl mx-auto mb-8">
          Founded in 2019, SaalikDesigns has been at the forefront of creative design solutions in Nepal. 
          We started with a simple mission: to help businesses create meaningful connections with their 
          audience through exceptional design.
        </p>
        <p className="text-xl text-accent-light leading-relaxed max-w-4xl mx-auto">
          Today, we're proud to have worked with over 150 clients across various industries, 
          delivering projects that not only look great but also drive real business results. 
          Our team combines creativity with strategic thinking to create designs that convert.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
            <div className="text-accent-light">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center gradient-text mb-12">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="team-card service-card text-center">
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
              <p className="text-accent-purple font-medium mb-2">{member.role}</p>
              <p className="text-accent-light text-sm mb-2">{member.experience}</p>
              <p className="text-accent-light text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div>
        <h3 className="text-3xl font-bold text-center gradient-text mb-12">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="value-card text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
              <p className="text-accent-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 