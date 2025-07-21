'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Download, Sparkles } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Trainings', href: '/trainings' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="glass-dark border-b border-primary-500/20 sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="text-2xl font-black futuristic-text neon-text">
                KMA
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  pathname === item.href
                    ? 'text-primary-400 neon-text'
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 glass rounded-lg -z-10 border border-primary-500/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-300 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass border border-primary-500/30 hover:border-primary-400 transition-all duration-300 hover:scale-110"
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} className="text-primary-400" /> : <Sun size={20} className="text-primary-400" />}
            </motion.button>
            <a
              href="/Kalabe_Mulugeta_CV_2025.pdf"
              download="Kalabe_Mulugeta_CV_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2 group"
            >
              <Download size={16} />
              <span>CV</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles size={14} className="text-white" />
              </motion.div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass border border-primary-500/30 hover:border-primary-400 transition-all duration-300"
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} className="text-primary-400" /> : <Sun size={20} className="text-primary-400" />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass border border-primary-500/30 hover:border-primary-400 transition-all duration-300"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} className="text-primary-400" /> : <Menu size={20} className="text-primary-400" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary-500/20 glass-dark"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-base font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'glass border border-primary-500/30 text-primary-400 neon-text'
                      : 'text-gray-300 hover:glass hover:border-primary-500/30 hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/Kalabe_Mulugeta_CV_2025.pdf"
                download="Kalabe_Mulugeta_CV_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-xl text-base font-medium btn-primary mt-4"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
} 