'use client'

import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  BarChart3,
  Map,
  Bot,
  Database,
  Users,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        organization: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kaleabma@gmail.com',
      href: 'mailto:kaleabma@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 911 452256',
      href: 'tel:+251911452256'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kalabemulugeta',
      href: 'https://www.linkedin.com/in/kalabemulugeta/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/LijKal-codes',
      href: 'https://github.com/LijKal-codes'
    }
  ]

  const expertiseAreas = [
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Power BI, Tableau, Metabase dashboards driving 25% increase in KPIs and real-time monitoring.'
    },
    {
      icon: Map,
      title: 'Geospatial & Remote Sensing',
      description: 'QGIS, ArcGIS, satellite imagery processing for climate resilience and sustainable development.'
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Python (Pandas, NumPy), R, regression, clustering, time-series forecasting for predictive analytics.'
    },
    {
      icon: Zap,
      title: 'Data Infrastructure & ETL',
      description: 'Advanced SQL, dbt-style data modeling, cloud-based data management systems with Microsoft Azure.'
    },
    {
      icon: Database,
      title: 'MEL Systems & Platforms',
      description: 'Data validation workflows, production-level data modeling, stakeholder engagement.'
    },
    {
      icon: Users,
      title: 'Strategic Leadership',
      description: 'Leading cross-functional teams, capacity building, and data-driven solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Agriculture, climate, and environmental forecasting with scenario analysis.'
    },
    {
      icon: Award,
      title: 'Digital Finance Solutions',
      description: 'Analysis of digital finance applications increasing farmer income by 25%.'
    }
  ]

  const serviceOptions = [
    'Business Intelligence & Analytics',
    'Geospatial & Remote Sensing',
    'AI & Machine Learning',
    'Data Infrastructure & ETL',
    'MEL Systems & Platforms',
    'Strategic Leadership & Capacity Building',
    'Predictive Analytics & Forecasting',
    'Digital Finance Solutions',
    'Cloud & Data Infrastructure',
    'Database Design & Administration',
    'Training & Capacity Building',
    'Consulting & Advisory',
    'Investment Opportunities',
    'Other'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-black text-white neon-text">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your data strategy or invest in Agri-Tech innovation? Let's discuss how I can help you leverage 
              enterprise data systems, AI analytics, and strategic insights for measurable impact. 
              Currently seeking investors for AI Farms and other innovative projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-white neon-text mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-8">
                  Senior Data Analyst & Data Management Consultant with 14+ years of experience in 
                  enterprise data systems, AI analytics, and strategic insights across public, private, 
                  and development sectors. Currently leading AI Farms project and other innovative 
                  Agri-Tech solutions.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 glass rounded-xl border border-primary-500/30 hover:border-primary-400 transition-all duration-300 group"
                  >
                    <div className="p-3 glass rounded-lg border border-primary-500/30 group-hover:border-primary-400 transition-all duration-300">
                      <info.icon size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white group-hover:text-primary-400 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Professional Summary</h3>
                <div className="p-4 glass rounded-lg border border-primary-500/30">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Passionate Agri-Tech enthusiast and software developer with 14+ years of experience in 
                    data analytics, enterprise systems, and digital transformation. Currently leading 
                    innovative projects including AI Farms, WEYE, LESUA, and FAST PARK. 
                    Proven track record of delivering measurable impact: 25-30% program effectiveness gains, 
                    40% agricultural yield improvement, 25% farmer income increase, and 30% data security enhancement.
                  </p>
                </div>
              </div>

              {/* Expertise Areas */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Areas of Expertise</h3>
                <div className="grid gap-3">
                  {expertiseAreas.map((area, index) => (
                    <div key={area.title} className="flex items-start space-x-3 p-3 glass rounded-lg border border-primary-500/30">
                      <div className="p-2 glass rounded-lg border border-primary-500/30 flex-shrink-0">
                        <area.icon size={16} className="text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{area.title}</div>
                        <div className="text-xs text-gray-400">{area.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                id="contact-form"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-all duration-300"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg text-white focus:border-primary-400 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <div className="text-green-400">✓</div>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 glass border border-green-500/30 rounded-lg text-green-400 text-center">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 glass border border-red-500/30 rounded-lg text-red-400 text-center">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </div>
                )}
              </form>

              {/* Service Interest Categories */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Service Interest Categories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {serviceOptions.slice(0, 12).map((service, index) => (
                    <div
                      key={service}
                      className="glass border border-primary-500/30 rounded-lg p-3 text-center hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 cursor-pointer group"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, service }));
                        // Scroll to form
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="text-xs font-medium text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                        {service}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-400">
                    Click on any category above to pre-select it in the form
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white neon-text">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Let's discuss how enterprise data systems, AI analytics, and strategic insights 
              can drive measurable impact in your organization. Also exploring investment 
              opportunities for innovative Agri-Tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kaleabma@gmail.com"
                className="glass border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Email Directly</span>
              </a>
              <a
                href="/portfolio"
                className="glass border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 