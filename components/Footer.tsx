'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Linkedin, Github, BarChart3, Sparkles, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kalabemulugeta/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/LijKal-codes',
      icon: Github,
    },
    {
      name: 'Tableau',
      href: 'https://public.tableau.com/app/profile/kalabe.mulugeta3947/vizzes',
      icon: BarChart3,
    },
    {
      name: 'Email',
      href: 'mailto:kaleabma@gmail.com',
      icon: Mail,
    },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Trainings', href: '/trainings' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-dark"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="relative z-10 glass-dark border-t border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="text-2xl font-black futuristic-text neon-text"
                    animate={{ textShadow: [
                      "0 0 10px rgba(14, 165, 233, 0.8)",
                      "0 0 20px rgba(14, 165, 233, 0.4)",
                      "0 0 10px rgba(14, 165, 233, 0.8)"
                    ] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    KMA
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={20} className="text-primary-400" />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-white">
                  Kalabe Mulugeta Abegaz
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Strategic data leader with 14+ years of experience in digital transformation, 
                  GIS, AI automation, and ICT governance across diverse sectors.
                </p>
                
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-xl border border-primary-500/30 hover:border-primary-400 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:scale-110"
                      whileHover={{ rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Zap size={20} className="text-primary-400" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:neon-text"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Mail size={20} className="text-primary-400" />
                <span>Contact</span>
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:kaleabma@gmail.com"
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  kaleabma@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+251911452256"
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  +251 911 452256
                </motion.a>
                <motion.p
                  className="text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  Addis Ababa, Ethiopia
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-primary-500/20 mt-8 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Kalabe Mulugeta Abegaz. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Sparkles size={16} className="text-primary-400 animate-pulse" />
                <span>Built with Next.js & Framer Motion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 