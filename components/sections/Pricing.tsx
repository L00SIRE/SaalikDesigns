'use client'

import { useEffect } from 'react'

const pricingPlans = [
  {
    name: 'Starter',
    price: 'NPR 25,000',
    description: 'Perfect for small businesses and startups',
    features: [
      'Custom Website Design',
      'Responsive Layout',
      'Basic SEO Optimization',
      'Contact Form',
      'Social Media Integration',
      '1 Month Support'
    ],
    popular: false,
    icon: '🚀'
  },
  {
    name: 'Professional',
    price: 'NPR 50,000',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'Advanced SEO Optimization',
      'Content Management System',
      'E-commerce Integration',
      'Analytics Setup',
      '3 Months Support',
      'Performance Optimization'
    ],
    popular: true,
    icon: '⭐'
  },
  {
    name: 'Enterprise',
    price: 'NPR 100,000',
    description: 'For large businesses and organizations',
    features: [
      'Everything in Professional',
      'Custom Functionality',
      'Advanced Security',
      'Multi-language Support',
      'API Integration',
      'Priority Support',
      'Performance Monitoring',
      'Regular Maintenance'
    ],
    popular: false,
    icon: '🏢'
  }
]

const additionalServices = [
  {
    name: 'Logo Design',
    price: 'NPR 5,000',
    description: 'Professional logo design with multiple concepts'
  },
  {
    name: 'Brand Identity',
    price: 'NPR 15,000',
    description: 'Complete brand identity package'
  },
  {
    name: 'Digital Marketing',
    price: 'NPR 20,000',
    description: 'Social media and SEO services'
  },
  {
    name: 'UI/UX Design',
    price: 'NPR 30,000',
    description: 'User interface and experience design'
  }
]

export default function Pricing() {
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
    document.querySelectorAll('.pricing-card, .service-item').forEach((card, index) => {
      const cardElement = card as HTMLElement
      cardElement.style.opacity = '0'
      cardElement.style.transform = 'translateY(50px)'
      cardElement.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-24 px-12 max-w-7xl mx-auto">
      <h2 className="section-title">Pricing Plans</h2>
      
      {/* Main Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card service-card relative ${plan.popular ? 'border-accent-purple/50 scale-105' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent-purple to-accent-blue text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold gradient-text mb-2">{plan.price}</div>
              <p className="text-accent-light">{plan.description}</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-accent-light">
                  <span className="text-accent-purple mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full btn-primary">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div>
        <h3 className="text-3xl font-bold text-center gradient-text mb-12">Additional Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="service-item service-card text-center">
              <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
              <div className="text-2xl font-bold gradient-text mb-2">{service.price}</div>
              <p className="text-accent-light text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
        <p className="text-accent-light mb-8 max-w-2xl mx-auto">
          We understand every business is unique. Contact us for a personalized quote 
          tailored to your specific needs and requirements.
        </p>
        <button className="btn-primary">
          Get Custom Quote
        </button>
      </div>
    </section>
  )
} 