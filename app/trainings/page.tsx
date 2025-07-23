'use client'

import { 
  BarChart3, 
  Map, 
  Bot, 
  Zap, 
  Database, 
  Users, 
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react'

export default function Trainings() {
  const trainingPrograms = [
    {
      icon: BarChart3,
      title: 'Power BI & Tableau Mastery',
      duration: '3-5 Days',
      level: 'Intermediate to Advanced',
      description: 'Comprehensive training in business intelligence and data visualization using Power BI and Tableau. Learn to create impactful dashboards and drive data-driven decision making.',
      topics: [
        'Dashboard design principles',
        'Data modeling and relationships',
        'Advanced visualizations',
        'DAX formulas and calculations',
        'Real-time data integration',
        'Performance optimization'
      ],
      outcomes: [
        'Create professional dashboards',
        'Implement KPI tracking systems',
        'Drive 25% increase in KPIs',
        'Enable data-driven decision making'
      ]
    },
    {
      icon: Map,
      title: 'GIS & Spatial Analytics',
      duration: '4-6 Days',
      level: 'Beginner to Advanced',
      description: 'Master QGIS and ArcGIS for spatial data analysis, remote sensing, and satellite imagery processing for climate resilience.',
      topics: [
        'QGIS fundamentals and interface',
        'Spatial data analysis techniques',
        'Remote sensing applications',
        'Satellite imagery processing',
        'Climate resilience mapping',
        'GIS platform integration'
      ],
      outcomes: [
        'Conduct spatial data analysis',
        'Process satellite imagery',
        'Integrate GIS with existing systems',
        'Support climate resilience decision making'
      ]
    },
    {
      icon: Bot,
      title: 'Data Science with Python & R',
      duration: '5-7 Days',
      level: 'Intermediate to Advanced',
      description: 'Comprehensive data science training covering Python (Pandas, NumPy), R, regression, clustering, and time-series forecasting.',
      topics: [
        'Python for data analysis (Pandas, NumPy)',
        'R programming fundamentals',
        'Regression and clustering analysis',
        'Time-series forecasting',
        'Predictive modeling techniques',
        'Agricultural and climate applications'
      ],
      outcomes: [
        'Build predictive models',
        'Implement time-series forecasting',
        'Apply ML to agriculture and climate',
        'Develop data science workflows'
      ]
    },
    {
      icon: Zap,
      title: 'Advanced SQL & Data Modeling',
      duration: '3-4 Days',
      level: 'Intermediate to Advanced',
      description: 'Training on advanced SQL techniques, dbt-style data modeling, and cloud-based data management systems.',
      topics: [
        'Advanced SQL (joins, CTEs, window functions)',
        'dbt-style data modeling',
        'Cloud-based data management',
        'Database design and administration',
        'ETL pipeline development',
        'Data quality assurance'
      ],
      outcomes: [
        'Master advanced SQL techniques',
        'Implement dbt-style data modeling',
        'Design cloud-based data systems',
        'Ensure data quality and integrity'
      ]
    },
    {
      icon: Database,
      title: 'MEAL Systems & Data Validation',
      duration: '4-5 Days',
      level: 'Intermediate to Advanced',
      description: 'Comprehensive training on Monitoring, Evaluation, Accountability, and Learning (MEAL) systems with data validation workflows.',
      topics: [
        'MEAL framework development',
        'Data validation workflows',
        'Production-level data modeling',
        'Stakeholder engagement',
        'Impact assessment methodologies',
        'Real-time monitoring systems'
      ],
      outcomes: [
        'Develop MEAL frameworks',
        'Implement data validation processes',
        'Create production-level data models',
        'Build stakeholder engagement systems'
      ]
    },
    {
      icon: Users,
      title: 'Strategic Leadership & Capacity Building',
      duration: '3-4 Days',
      level: 'Intermediate to Advanced',
      description: 'Training on strategic leadership, capacity building, and cross-functional team management in data-driven environments.',
      topics: [
        'Strategic leadership principles',
        'Capacity building methodologies',
        'Cross-functional team management',
        'Technical training delivery',
        'Change management strategies',
        'Data-driven decision making'
      ],
      outcomes: [
        'Lead cross-functional teams',
        'Implement capacity building programs',
        'Deliver technical training',
        'Drive data-driven organizational change'
      ]
    }
  ]

  const trainingApproach = [
    {
      title: 'Hands-On Learning',
      description: 'Practical, project-based training with real-world applications and case studies.',
      icon: BookOpen
    },
    {
      title: 'Customized Content',
      description: 'Tailored training programs adapted to your organization\'s specific needs and context.',
      icon: Target
    },
    {
      title: 'Expert Mentoring',
      description: 'Direct guidance from experienced professionals with proven track records.',
      icon: Users
    },
    {
      title: 'Measurable Outcomes',
      description: 'Focus on achieving specific, measurable improvements in performance and capabilities.',
      icon: TrendingUp
    }
  ]

  const successMetrics = [
    { metric: '30-35%', label: 'Data Security Enhancement' },
    { metric: '35-50%', label: 'Training Impact for Organizations' },
    { metric: '30-40%', label: 'Operational Efficiency Improvement' },
    { metric: '35-45%', label: 'Predictive Analytics Gains' }
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
              Training & Capacity Building
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to build organizational capacity in data analytics, 
              enterprise systems, and strategic leadership with proven measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Training Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results from capacity building initiatives across diverse organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successMetrics.map((item, index) => (
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

      {/* Training Programs */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Training Programs
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized training programs covering data analytics, enterprise systems, and strategic leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={program.title} className="card group relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 glass rounded-xl border border-primary-500/30 group-hover:border-primary-400 transition-all duration-300">
                      <program.icon size={24} className="text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300 mb-2">
                        {program.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{program.duration}</span>
                        <span>•</span>
                        <span>{program.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {program.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Topics</h4>
                      <ul className="space-y-1">
                        {program.topics.slice(0, 4).map((topic, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-primary-400 mb-2">Expected Outcomes</h4>
                      <ul className="space-y-1">
                        {program.outcomes.slice(0, 2).map((outcome, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Training Approach
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven methodology for effective capacity building and knowledge transfer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingApproach.map((approach, index) => (
              <div key={approach.title} className="card group text-center">
                <div className="space-y-4">
                  <div className="p-4 glass rounded-xl border border-primary-500/30 mx-auto w-fit">
                    <approach.icon size={32} className="text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {approach.description}
                  </p>
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
              Ready to Build Your Team's Capacity?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Let's discuss how customized training programs can enhance your organization's 
              data analytics capabilities and drive measurable performance improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="glass border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow"
              >
                Schedule Training
              </a>
              <a
                href="/services"
                className="glass border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 