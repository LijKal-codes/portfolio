'use client'

import { motion } from 'framer-motion'
import { LucideIcon, Sparkles, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
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
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="card relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 grid-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
        
        <div className="relative z-10 space-y-4">
          {/* Icon and title */}
          <div className="flex items-start space-x-4">
            <motion.div
              className="p-3 glass rounded-xl border border-primary-500/30 group-hover:border-primary-400 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon 
                size={24} 
                className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" 
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300 mb-2">
                {title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Hover indicator */}
          <motion.div
            className="flex items-center space-x-2 text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Learn More</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>
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
            stroke="url(#serviceGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileHover={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          <defs>
            <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
} 