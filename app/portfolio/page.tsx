'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Map, 
  Bot, 
  Database, 
  Users, 
  TrendingUp, 
  Award, 
  Code, 
  FileText, 
  ExternalLink, 
  Github, 
  Building2, 
  Globe, 
  Shield,
  Calendar,
  Target,
  Zap,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-analytics', label: 'Data Analytics' },
    { id: 'gis', label: 'GIS & Remote Sensing' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'systems', label: 'Data Systems' },
    { id: 'leadership', label: 'Leadership' },
  ]

  const projects = [
    {
      id: 'moyesh',
      title: 'MOYESH Program - Data Management Platform',
      category: 'data-analytics',
      techStack: ['Power BI', 'Tableau', 'Advanced SQL', 'Python', 'Data Modeling', 'KOBO Toolbox', 'ODK', 'CSPro'],
      description: 'Created and sustained complex data models facilitating strategic decision-making. Developed interactive dashboards with Power BI and Tableau providing 25% increase in KPIs. Managed scalable Data Management strategy including data collection systems using KOBO Toolbox, ODK, and CSPro, enhancing data availability to 116,000+ youth and 11,000+ businesses.',
      impact: '25% KPI Increase',
      duration: '2022-2024',
      role: 'Senior Data Analyst',
      organization: 'International Centre of Insect Physiology & Ecology (icipe)',
      highlights: [
        'Created complex data models for strategic decision-making',
        'Developed interactive dashboards with Power BI and Tableau',
        'Managed scalable Data Management strategy',
        'Enhanced data availability to 116,000+ youth and 11,000+ businesses',
        'Implemented data collection systems with KOBO Toolbox, ODK, and CSPro'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'ai-farms',
      title: 'AI FARMS - Award-Winning Agri-Tech Platform',
      category: 'ai-ml',
      techStack: ['Python', 'Machine Learning', 'AI', 'Climate Analytics', 'Predictive Modeling'],
      description: 'Headed creation of award-winning Agri-tech platform promoting stakeholders across supply chains through AI-enabled climate-smart farming. Designed solutions for market clarity, resource utilization, and sustainable agricultural practices.',
      impact: '40% Crop Yield',
      duration: '2022-2024',
      role: 'Founder & Technical Director',
      organization: 'Azmera Technologies',
      highlights: [
        'Won UNDP and LG-KOICA competition with $5,000 grant',
        'State and National Competition first place winner',
        'AI-enabled climate-smart farming solutions',
        'Sustainable agricultural practices design'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'mayea',
      title: 'MaYEA Program - National Apiculture Database',
      category: 'systems',
      techStack: ['Database Design', 'SQL', 'Data Modeling', 'Stakeholder Management'],
      description: 'Leading development of National Apiculture Database for the MaYEA Programme. Managing comprehensive data systems for apiculture sector with stakeholder engagement and data validation workflows.',
      impact: 'National Database',
      duration: '2023-2024',
      role: 'Data Management Lead',
      organization: 'International Centre of Insect Physiology & Ecology (icipe)',
      highlights: [
        'Leading National Apiculture Database development',
        'Managing comprehensive data systems',
        'Stakeholder engagement and coordination',
        'Data validation workflows implementation'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'ai-ethiopia',
      title: 'Department Head, CTO & Tech Team Lead',
      category: 'leadership',
      techStack: ['Strategic Leadership', 'Technical Management', 'Team Leadership', 'Project Management'],
      description: 'Department Head at Entoto Polytechnic College, CTO at Fettan Solutions, and Tech Team Lead on Fast Park project. Leading cross-functional teams, managing technical operations, and driving innovation across multiple organizations.',
      impact: 'Leadership Excellence',
      duration: '2020-2024',
      role: 'Department Head / CTO / Tech Team Lead',
      organization: 'Entoto Polytechnic College / Fettan Solutions / Fast Park',
      highlights: [
        'Department Head managing ICT systems and operations',
        'CTO at Fettan Solutions driving technical strategy',
        'Tech Team Lead on Fast Park project development',
        'Cross-functional team leadership and capacity building'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'moyesh-systems',
      title: 'MOYESH Program - DMS Platform & Administration',
      category: 'systems',
      techStack: ['Database Management', 'Web Administration', 'SMS Platform', 'System Administration', 'Data Security'],
      description: 'Developed and administered MOYESH Program Data Management System (DMS) platform, managed program website administration, and oversaw BULK SMS platform administration for program communications.',
      impact: 'Enhanced Program Operations',
      duration: '2022-2024',
      role: 'System Administrator & Platform Manager',
      organization: 'International Centre of Insect Physiology & Ecology (icipe)',
      highlights: [
        'Developed and maintained MOYESH Program DMS platform',
        'Managed program website administration and updates',
        'Administered BULK SMS platform for program communications',
        'Ensured data security and system reliability'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'gis-moyesh-mayea',
      title: 'GIS & Remote Sensing - MOYESH & MaYEA Projects',
      category: 'gis',
      techStack: ['QGIS', 'ArcGIS', 'Remote Sensing', 'Spatial Analysis', 'Intervention Mapping', 'Satellite Imagery'],
      description: 'Created comprehensive maps for intervention areas for MOYESH and MaYEA projects. Conducted detailed geospatial analysis for MaYEA project including spatial data processing, remote sensing applications, and intervention area mapping.',
      impact: 'Enhanced Spatial Decision Making',
      duration: '2022-2024',
      role: 'GIS Specialist & Spatial Analyst',
      organization: 'International Centre of Insect Physiology & Ecology (icipe)',
      highlights: [
        'Created intervention area maps for MOYESH project',
        'Developed spatial analysis for MaYEA project',
        'Applied remote sensing techniques for area mapping',
        'Enhanced spatial decision-making capabilities'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'digital-finance',
      title: 'Digital Finance for Ethiopian Beekeepers',
      category: 'data-analytics',
      techStack: ['Financial Analytics', 'Data Analysis', 'Stakeholder Research'],
      description: 'Analyzed digital finance applications for Ethiopian beekeepers, increasing farmer income by 25%. Provided comprehensive analysis of digital finance solutions and their impact on agricultural communities.',
      impact: '25% Income Increase',
      duration: '2023-2024',
      role: 'Financial Analytics Consultant',
      organization: 'Agricultural Finance Institution',
      highlights: [
        'Analyzed digital finance applications',
        'Increased farmer income by 25%',
        'Comprehensive impact analysis',
        'Agricultural community financial inclusion'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'prosead',
      title: 'PROSEAD Program - Data Visualization & Reporting',
      category: 'data-analytics',
      techStack: ['Power BI', 'Microsoft Forms', 'Data Validation', 'Training', 'KOBO Toolbox', 'Survey Solution'],
      description: 'Created data visualizations and dashboards using Power BI and other tools tracking key outputs of the PROSEAD program. Provided training sessions on Power BI, data analysis tools, Survey Solution, and KOBO Toolbox for comprehensive data collection and analysis.',
      impact: 'Enhanced Data Visibility',
      duration: '2024',
      role: 'Data Analytics Consultant',
      organization: 'DAB Development Research and Training PLC',
      highlights: [
        'Created data visualizations and dashboards',
        'Tracked key outputs of PROSEAD program',
        'Provided training on Power BI and data tools',
        'Technical support and troubleshooting',
        'Training on Survey Solution and KOBO Toolbox'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'linkup-addis',
      title: 'Linkup Addis – Smart Matchmaking Telegram Bot',
      category: 'ai-ml',
      techStack: ['Python', 'Aiogram 3.x', 'PostgreSQL', 'Telegram API', 'Asynchronous Programming', 'FSM'],
      description: 'Location-based matchmaking bot built for Telegram, tailored to help users in Ethiopia connect meaningfully through shared interests, proximity, and profile compatibility. Features user registration, location-aware matching, smart like/dislike system, subscription management, and admin panel.',
      impact: 'Smart Matchmaking Platform',
      duration: '2023-2024',
      role: 'Full-Stack Developer & Bot Architect',
      organization: 'Azmera Technologies',
      highlights: [
        'Built location-based matchmaking system with Telegram integration',
        'Implemented user registration with live location sharing',
        'Developed subscription management with payment verification',
        'Created comprehensive admin panel for platform management'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'lesua',
      title: 'LESUA – Smart Pregnancy Companion Platform',
      category: 'systems',
      techStack: ['Node.js', 'PostgreSQL', 'Mobile App Development', 'Web Development', 'RESTful API', 'Google OAuth'],
      description: 'Integrated digital health platform designed to support expectant mothers and their partners throughout the pregnancy journey. Comprises mobile app, web portal, and admin panel with personalized pregnancy tracking, expert health tips, appointment booking, and maternity product store.',
      impact: 'Digital Health Innovation',
      duration: '2023-2024',
      role: 'Full-Stack Developer & Platform Architect',
      organization: 'Azmera Technologies',
      highlights: [
        'Developed comprehensive pregnancy tracking platform',
        'Built mobile and web apps with synchronized partner features',
        'Integrated appointment booking with location-based hospital recommendations',
        'Created admin panel for platform management and analytics'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'liyu-eta',
      title: 'LiYU ETA – Ethiopia\'s Trusted Telegram Lottery Bot',
      category: 'ai-ml',
      techStack: ['Telegram Bot Development', 'Payment Integration', 'Prize Management', 'User Engagement', 'Security'],
      description: 'Secure and fun Telegram-based prize draw platform where users can win real rewards like electronics, home appliances, and cash by buying tickets and inviting friends. Features transparent ticket-based draws, payment verification, and 24/7 support.',
      impact: 'Entertainment Platform',
      duration: '2023-2024',
      role: 'Bot Developer & Platform Manager',
      organization: 'Azmera Technologies',
      highlights: [
        'Built secure lottery platform with Telegram integration',
        'Implemented payment verification system with Telebirr integration',
        'Developed transparent ticket-based prize draw system',
        'Created user engagement features with invite-to-earn program'
      ],
      image: '',
      link: '#',
      github: '#'
    },
    {
      id: 'data-collection-surveys',
      title: 'Data Collection & Survey Design Expertise',
      category: 'systems',
      techStack: ['KOBO Toolbox', 'CSPro', 'ODK', 'CommCare', 'Survey Design', 'Mobile Data Collection'],
      description: 'Expert in designing comprehensive data collection questionnaires and mobile data collection systems using KOBO Toolbox, CSPro, ODK, and CommCare. Created surveys for agricultural research, program monitoring, and impact assessment across multiple development projects.',
      impact: 'Enhanced Data Quality',
      duration: '2020-2024',
      role: 'Survey Design Specialist & Data Collection Expert',
      organization: 'Multiple Organizations',
      highlights: [
        'Designed questionnaires for agricultural research and program monitoring',
        'Implemented mobile data collection systems with offline capabilities',
        'Created data validation and quality control mechanisms',
        'Provided training on survey tools and data collection best practices'
      ],
      image: '',
      link: '#',
      github: '#'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { label: 'Projects Completed', value: '30+' },
    { label: 'Years Experience', value: '14+' },
    { label: 'Team Members Led', value: '30+' },
    { label: 'Trainings Conducted', value: '100+' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Showcasing 14+ years of transformative data projects, innovative solutions, and measurable impact across agriculture, development, and technology sectors.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="glass text-center p-6 rounded-2xl border border-primary-500/30"
                >
                  <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'glass border border-primary-500/50 text-primary-600 neon-text'
                    : 'glass-dark border border-primary-500/30 text-gray-600 dark:text-gray-300 hover:border-primary-500/50 hover:text-primary-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found for this category.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl border border-primary-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's collaborate on your next data-driven project. From analytics to AI, I bring proven expertise and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="btn-primary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start a Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/services"
                className="btn-secondary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Services</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 