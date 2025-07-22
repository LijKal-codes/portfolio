'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Eye, Sparkles, Zap, Leaf, Heart, TrendingUp, Map } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      }))
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-dark"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Particle effects */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-center space-x-2 text-primary-400"
              >
                <Leaf size={20} className="animate-pulse" />
                <span className="text-sm font-medium tracking-wider uppercase">Agri-Tech Innovator</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                Kalabe Mulugeta{' '}
                <span className="holographic">Abegaz</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-primary-400 font-semibold neon-text"
              >
                Tech Professional & Agri-Tech Founder
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Driving food security through AI technology
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 leading-relaxed"
            >
              Experienced Tech professional with a master's degree in computer science. Proficient in data analytics, 
              visualization, and BI software. Over 14+ years of hands-on experience in data collection, analysis, 
              and visualization. Founder of Azmera Technologies, passionate about ensuring food security through technology.
            </motion.p>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass rounded-xl p-4 border border-primary-500/30">
                <div className="text-2xl font-bold text-primary-400">10%</div>
                <div className="text-sm text-gray-300">Crop Productivity Goal by 2027</div>
              </div>
              <div className="glass rounded-xl p-4 border border-primary-500/30">
                <div className="text-2xl font-bold text-primary-400">6%</div>
                <div className="text-sm text-gray-300">AI Farms Productivity Target</div>
              </div>
            </motion.div>

            {/* Current Project Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="space-y-4"
            >
              <div className="glass rounded-xl p-4 border border-primary-500/30">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart size={20} className="text-primary-400 animate-pulse" />
                  <div>
                    <div className="text-sm font-medium text-primary-400">Current Projects</div>
                    <div className="text-white font-semibold">Active Development</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Leaf size={12} className="text-primary-400" />
                    <span className="text-gray-300">AI Farms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={12} className="text-primary-400" />
                    <span className="text-gray-300">WEYE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart size={12} className="text-primary-400" />
                    <span className="text-gray-300">LESUA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Map size={12} className="text-primary-400" />
                    <span className="text-gray-300">FAST PARK</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/portfolio"
                className="btn-primary flex items-center justify-center space-x-2 group relative overflow-hidden"
              >
                <Eye size={20} />
                <span>View Portfolio</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Link>
              
              <a
                href="/Kalabe_Mulugeta_CV_2025_latest.pdf"
                download="Kalabe_Mulugeta_CV_2025_latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2 group"
              >
                <Download size={20} />
                <span>Download CV</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Zap size={16} className="text-primary-400" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-dark rounded-3xl p-8 border-glow">
              {/* Holographic display */}
              <div className="relative bg-gradient-to-br from-primary-900/20 to-primary-800/20 rounded-2xl p-6 border border-primary-500/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <motion.div 
                      className="h-4 bg-gradient-to-r from-primary-400 to-primary-300 rounded"
                      animate={{ width: ['60%', '100%', '60%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="h-6 bg-gradient-to-r from-primary-500 to-primary-400 rounded"
                      animate={{ width: ['80%', '100%', '80%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div 
                      className="h-4 bg-gradient-to-r from-primary-300 to-primary-200 rounded"
                      animate={{ width: ['40%', '100%', '40%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                  <div className="space-y-4">
                    <motion.div 
                      className="h-6 bg-gradient-to-r from-primary-400 to-primary-300 rounded"
                      animate={{ width: ['70%', '100%', '70%'] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="h-4 bg-gradient-to-r from-primary-500 to-primary-400 rounded"
                      animate={{ width: ['90%', '100%', '90%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, delay: 0.8 }}
                    />
                    <motion.div 
                      className="h-4 bg-gradient-to-r from-primary-300 to-primary-200 rounded"
                      animate={{ width: ['50%', '100%', '50%'] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
                    />
                  </div>
                </div>
                
                {/* Data visualization elements */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-primary-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-2 h-2 bg-primary-300 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 gradient-primary rounded-full neon-glow"
              />
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 gradient-secondary rounded-full neon-glow"
              />
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 20 20 L 80 80"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 