'use client'

import ServiceCard from '@/components/ServiceCard'
import { 
  BarChart3, 
  Map, 
  Bot, 
  Zap, 
  Database, 
  Users, 
  TrendingUp,
  Award,
  Shield,
  BookOpen,
  Target,
  Globe
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Power BI, Tableau, and Excel dashboard development driving 25-30% gains in program effectiveness. Real-time insights and KPI tracking for data-driven decision making.',
      features: [
        'Custom dashboard development',
        'Real-time KPI monitoring',
        'Data visualization & reporting',
        'Performance analytics',
        'Cross-functional insights'
      ],
      category: 'Analytics'
    },
    {
      icon: Map,
      title: 'Geospatial & Remote Sensing',
      description: 'QGIS, ArcGIS, and spatial analytics for location-based insights and agricultural applications. Spatial data integration and mapping solutions.',
      features: [
        'Spatial data analysis',
        'Remote sensing applications',
        'Agricultural mapping',
        'Resource distribution analysis',
        'GIS platform integration'
      ],
      category: 'Spatial'
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Python, R, Stata for ML models improving agricultural yield by 40%. Plant disease detection and predictive analytics for sustainable agriculture.',
      features: [
        'Predictive modeling',
        'Plant disease detection',
        'Yield optimization',
        'Climate-smart agriculture',
        'AI-powered decision support'
      ],
      category: 'AI/ML'
    },
    {
      icon: Zap,
      title: 'Data Governance & Compliance',
      description: 'GDPR/PII compliance frameworks, ETL processes, and data modeling with 30% security improvements. Enterprise data governance and privacy protection.',
      features: [
        'Data privacy compliance',
        'ETL pipeline development',
        'Data modeling & architecture',
        'Security framework implementation',
        'Audit trail management'
      ],
      category: 'Governance'
    },
    {
      icon: Database,
      title: 'MEL Systems & Platforms',
      description: 'SurveyCTO, Kobo, DHIS2 integration with cross-functional dashboards and real-time insights. End-to-end monitoring and evaluation systems.',
      features: [
        'MEL system design',
        'Data collection platforms',
        'Real-time monitoring',
        'Impact assessment',
        'Stakeholder reporting'
      ],
      category: 'MEL'
    },
    {
      icon: Users,
      title: 'Team Leadership & Capacity Building',
      description: 'Leading cross-functional data teams, mentoring 20+ staff, and 40% improvement in analytics adoption. Training and knowledge transfer programs.',
      features: [
        'Team leadership & mentoring',
        'Capacity building workshops',
        'Technical training delivery',
        'Change management',
        'Institutional learning'
      ],
      category: 'Leadership'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Planning & KPIs',
      description: 'Balanced Scorecard implementation, scenario planning, and evidence-based impact reporting. Strategic alignment and performance measurement.',
      features: [
        'Strategic planning',
        'KPI framework design',
        'Scenario analysis',
        'Impact measurement',
        'Performance optimization'
      ],
      category: 'Strategy'
    },
    {
      icon: Award,
      title: 'Digital Finance & Fintech',
      description: 'Fintech tracking systems enhancing farmer income by 25% and sustainable market access. Digital payment and financial inclusion solutions.',
      features: [
        'Digital payment systems',
        'Financial inclusion',
        'Market access platforms',
        'Income tracking',
        'Sustainable finance'
      ],
      category: 'Fintech'
    },
    {
      icon: Globe,
      title: 'Enterprise Data Systems',
      description: 'End-to-end MEL frameworks, stakeholder engagement, and multi-country program support. Scalable enterprise solutions for global impact.',
      features: [
        'Enterprise architecture',
        'Multi-country support',
        'Stakeholder engagement',
        'Scalable solutions',
        'Global program management'
      ],
      category: 'Enterprise'
    }
  ]

  const expertise = [
    {
      title: 'Strategic & Analytical Leadership',
      items: [
        'Data-Driven Strategy Alignment with MEL/BI Goals',
        'Balanced Scorecard Implementation & KPI Tracking',
        'Scenario Planning, Forecasting, and Decision Analytics',
        'Stakeholder Engagement & Donor Reporting'
      ]
    },
    {
      title: 'Advanced Analytics & Technology',
      items: [
        'BI & Dashboards: Power BI, Tableau, Excel',
        'Data Science: Python, R, Stata, SQL',
        'Geospatial & Remote Sensing: QGIS, ArcGIS',
        'Monitoring Platforms: SurveyCTO, Kobo, DHIS2',
        'ETL, Data Modeling, Data Governance, GDPR/PII Compliance'
      ]
    },
    {
      title: 'Team & Capacity Building',
      items: [
        'Leading Cross-Functional Data Teams',
        'Agile Project Management & Mentoring Analysts',
        'Technical Documentation & Training Delivery',
        'Fostering Data Culture and Institutional Learning'
      ]
    }
  ]

  const impactMetrics = [
    { metric: '25-30%', label: 'Program Effectiveness Gains' },
    { metric: '40%', label: 'Analytics Adoption Improvement' },
    { metric: '40%', label: 'Agricultural Yield Improvement' },
    { metric: '25%', label: 'Farmer Income Increase' },
    { metric: '30%', label: 'Data Security Enhancement' }
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
              Services & Expertise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data analytics, enterprise systems, and strategic leadership services 
              delivering measurable impact across public, private, and development sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Proven Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Measurable outcomes and strategic value delivered across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {impactMetrics.map((item, index) => (
              <div key={item.label} className="text-center group">
                <div className="text-2xl md:text-3xl font-black futuristic-text neon-text group-hover:scale-110 transition-transform duration-300">
                  {item.metric}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Core Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized expertise in data analytics, enterprise systems, and strategic technology leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive skill sets across strategic leadership, advanced analytics, and team development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={area.title} className="card group">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 glass rounded-xl border border-primary-500/30">
                      {index === 0 && <Target size={24} className="text-primary-400" />}
                      {index === 1 && <BarChart3 size={24} className="text-primary-400" />}
                      {index === 2 && <Users size={24} className="text-primary-400" />}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                      {area.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
              Let's discuss how I can help you leverage enterprise data systems, AI analytics, and strategic insights 
              to drive measurable impact in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="glass border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow"
              >
                Get In Touch
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