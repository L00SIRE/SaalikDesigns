'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title">Let's Create Together</h2>
        <p className="text-xl text-accent-light mb-10">
          Ready to transform your digital presence? Get in touch with us today!
        </p>
        
        <div className="flex justify-center gap-16 mb-10 flex-wrap">
          <div className="contact-item">
            <span className="contact-item-icon">📞</span>
            <span>+977 984-0836892</span>
          </div>
          <div className="contact-item">
            <span className="contact-item-icon">✉️</span>
            <span>saalikdesigns@gmail.com</span>
          </div>
        </div>
        
        <div className="mt-10">
          <a 
            href="mailto:saalikdesigns@gmail.com" 
            className="btn-primary"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
} 