'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Sparkles, Zap } from 'lucide-react'

interface ProjectCardProps {
  title: string
  role: string
  tech: string[]
  description: string
  index: number
}

export default function ProjectCard({ title, role, tech, description, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="card relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 grid-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
        
        {/* Header */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                className="p-2 glass rounded-xl border border-primary-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Sparkles size={20} className="text-primary-400" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                  {title}
                </h3>
                <p className="text-primary-400 font-medium text-sm">
                  {role}
                </p>
              </div>
            </div>
            <motion.div
              className="p-2 glass rounded-xl border border-primary-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <ExternalLink size={16} className="text-primary-400" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Tech stack */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((technology, techIndex) => (
                <motion.span
                  key={technology}
                  className="px-3 py-1 text-xs font-medium glass border border-primary-500/30 text-primary-300 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300">
          <motion.path
            d="M 20 20 L 80 80"
            stroke="url(#cardGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileHover={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          <defs>
            <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
} 