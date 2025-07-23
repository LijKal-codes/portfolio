import Hero from '@/components/Hero'
import { BarChart3, Map, Bot, Zap, Database, Users, Sparkles, ArrowRight, TrendingUp, Award, Code, FileText, ExternalLink, Github, Building2, Globe, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const stats = [
    { label: 'Program Effectiveness', value: '25-30%' },
    { label: 'KPI Improvement', value: '25%' },
    { label: 'Agricultural Yield', value: '40%' },
    { label: 'Program Engagement', value: '25%' },
    { label: 'Operational Efficiency', value: '20-30%' },
  ]

  const highlights = [
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Power BI, Tableau, Metabase dashboards driving 25% increase in KPIs and real-time monitoring.',
    },
    {
      icon: Map,
      title: 'Geospatial & Remote Sensing',
      description: 'QGIS, ArcGIS, satellite imagery processing for climate resilience and sustainable development.',
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Python, R, regression, clustering, time-series forecasting for predictive analytics.',
    },
    {
      icon: Zap,
      title: 'Data Infrastructure & ETL',
      description: 'Advanced SQL, dbt-style data modeling, cloud-based data management systems.',
    },
    {
      icon: Database,
      title: 'MEL Systems & Platforms',
      description: 'Data validation workflows, production-level data modeling, stakeholder engagement.',
    },
    {
      icon: Users,
      title: 'Strategic Leadership',
      description: 'Leading cross-functional teams, capacity building, and data-driven solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Agriculture, climate, and environmental forecasting with scenario analysis.',
    },
    {
      icon: Award,
      title: 'Digital Finance Solutions',
      description: 'Analyzed digital finance applications increasing farmer income by 25%.',
    },
    {
      icon: Database,
      title: 'Cloud & Data Infrastructure',
      description: 'Microsoft Azure, cloud-based data management, database design and administration.',
    },
  ]

  const coreSkills = [
    {
      icon: BarChart3,
      title: 'Advanced Data Analysis',
      description: 'Expert in Python (Pandas, NumPy), R, Excel automation with advanced SQL skills including joins, CTEs, and window functions. Skilled in dbt-style data modeling from staging to analytics to production.',
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence & Visualization',
      description: 'Proficient in Power BI, Tableau, and Metabase for creating interactive dashboards and real-time monitoring systems. Experienced in data validation workflows and production-level data modeling.',
    },
    {
      icon: Map,
      title: 'Geospatial & Remote Sensing',
      description: 'Advanced skills in QGIS, ArcGIS, satellite imagery processing for climate resilience and sustainable development applications. Experienced in spatial analysis and environmental forecasting.',
    },
    {
      icon: Bot,
      title: 'Machine Learning & Predictive Analytics',
      description: 'Expertise in regression, clustering, time-series forecasting for agriculture, climate, and environmental applications. Skilled in developing AI-enabled solutions for strategic decision-making.',
    },
    {
      icon: Database,
      title: 'Cloud & Data Infrastructure',
      description: 'Proficient in Microsoft Azure, cloud-based data management systems, database design and administration. Experienced in ETL frameworks and data quality assurance workflows.',
    },
    {
      icon: Users,
      title: 'Strategic Leadership & MEAL',
      description: 'Strong understanding of Monitoring and Evaluation frameworks, stakeholder engagement, and capacity building. Experienced in leading cross-functional teams and data-driven solutions.',
    },
  ]

  const projects = [
    {
      title: 'MOYESH Program - Data Management Platform',
      techStack: ['Power BI', 'Tableau', 'Advanced SQL', 'Python', 'Data Modeling'],
      description: 'Created and sustained complex data models facilitating strategic decision-making. Developed interactive dashboards with Power BI and Tableau providing real-time monitoring, contributing to 25% increase in KPIs. Managed scalable Data Management strategy enhancing data availability to 116,000+ youth and 11,000+ businesses.',
      impact: '25% KPI Increase',
      category: 'Data Management',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'AI FARMS - Award-Winning Agri-Tech Platform',
      techStack: ['Python', 'Machine Learning', 'AI', 'Climate Analytics', 'Predictive Modeling'],
      description: 'Headed creation of award-winning Agri-tech platform promoting stakeholders across supply chains through AI-enabled climate-smart farming. Designed solutions for market clarity, resource utilization, and sustainable agricultural practices. Won UNDP and LG-KOICA competition with $5,000 grant.',
      impact: '40% Crop Yield',
      category: 'AI/ML',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'MaYEA Program - National Apiculture Database',
      techStack: ['Database Design', 'SQL', 'Data Modeling', 'Stakeholder Management'],
      description: 'Leading development of National Apiculture Database for the MaYEA Programme. Managing comprehensive data systems for apiculture sector with stakeholder engagement and data validation workflows.',
      impact: 'National Database',
      category: 'Database Systems',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'AI in Ethiopia Study - National Analysis',
      techStack: ['Research Analysis', 'Strategic Planning', 'Policy Development'],
      description: 'Produced in-depth analysis of Ethiopia\'s AI ecosystem, influencing national AI development strategies. Conducted scenario planning and strategic forecasts for AI adoption in Ethiopia, developing 45-page national analysis.',
      impact: 'Policy Influence',
      category: 'Strategic Analysis',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Digital Finance for Ethiopian Beekeepers',
      techStack: ['Financial Analytics', 'Data Analysis', 'Stakeholder Research'],
      description: 'Analyzed digital finance applications for Ethiopian beekeepers, increasing farmer income by 25%. Provided comprehensive analysis of digital finance solutions and their impact on agricultural communities.',
      impact: '25% Income Increase',
      category: 'Financial Analytics',
      demoLink: '#',
      codeLink: '#'
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
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
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-black futuristic-text neon-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles size={24} className="text-primary-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-black text-white neon-text">
                Core Skills
              </h2>
              <Sparkles size={24} className="text-primary-400 animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise in data analytics, business intelligence, and technology solutions 
              delivering measurable impact across diverse sectors and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="card group relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 glass rounded-xl border border-primary-500/30 group-hover:border-primary-400 transition-all duration-300 group-hover:scale-110">
                      <skill.icon 
                        size={24} 
                        className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code size={24} className="text-primary-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-black text-white neon-text">
                Tech Stack
              </h2>
              <Code size={24} className="text-primary-400 animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology expertise across data analytics, business intelligence, and enterprise systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Business Intelligence */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary-400 text-center">Business Intelligence</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Power BI</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Tableau</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Excel</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">DAX</span>
              </div>
            </div>

            {/* Data Science */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary-400 text-center">Data Science</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Python</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">R</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Stata</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">SQL</span>
              </div>
            </div>

            {/* Data Collection */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary-400 text-center">Data Collection</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">KOBO Toolbox</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">CSPro</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">ODK</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">CommCare</span>
              </div>
            </div>

            {/* Geospatial */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary-400 text-center">Geospatial</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">QGIS</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">ArcGIS</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Remote Sensing</span>
              </div>
            </div>

            {/* Development */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary-400 text-center">Development</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">React Native</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Node.js</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">Next.js</span>
                <span className="px-3 py-1 text-sm glass border border-primary-500/30 rounded-full text-gray-300">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building2 size={24} className="text-primary-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-black text-white neon-text">
                Companies I've Worked With
              </h2>
              <Building2 size={24} className="text-primary-400 animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trusted by leading organizations across public, private, and development sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Development Sector */}
            <div className="card group text-center">
              <div className="space-y-4">
                <div className="p-4 glass rounded-xl border border-primary-500/30 mx-auto w-fit">
                  <Globe size={32} className="text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300">
                  Development Sector
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• CGIAR - International Agricultural Research</p>
                  <p>• ILRI - International Livestock Research Institute</p>
                  <p>• icipe - International Centre of Insect Physiology</p>
                  <p>• ICARDA - International Center for Agricultural Research</p>
                </div>
              </div>
            </div>

            {/* Private Sector */}
            <div className="card group text-center">
              <div className="space-y-4">
                <div className="p-4 glass rounded-xl border border-primary-500/30 mx-auto w-fit">
                  <Building2 size={32} className="text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300">
                  Private Sector
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Fettan Solutions - Technology Solutions</p>
                  <p>• DAB Consultancy - Strategic Advisory</p>
                  <p>• Azmera Technologies - Agri-Tech Innovation</p>
                </div>
              </div>
            </div>

            {/* Public Sector */}
            <div className="card group text-center">
              <div className="space-y-4">
                <div className="p-4 glass rounded-xl border border-primary-500/30 mx-auto w-fit">
                  <Shield size={32} className="text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300">
                  Public Sector
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Ministry of Education </p>
                  <p>• Entoto Polytechnic College </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award size={24} className="text-primary-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-black text-white neon-text">
                Featured Projects
              </h2>
              <Award size={24} className="text-primary-400 animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A showcase of impactful projects demonstrating expertise in data analytics, AI, and enterprise systems 
              with measurable outcomes and strategic value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card group relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300 mb-2">
                          {project.title}
                        </h3>
                        <div className="text-sm text-primary-400 bg-primary-500/20 px-2 py-1 rounded-full inline-block">
                          {project.category}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-400">{project.impact}</div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium glass border border-primary-500/30 rounded-full text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">View Demo</span>
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 group/link"
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="btn-primary flex items-center justify-center space-x-2 mx-auto w-fit group"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles size={24} className="text-primary-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-black text-white neon-text">
                Core Expertise
              </h2>
              <Sparkles size={24} className="text-primary-400 animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Business Analytics Leader and Data Scientist with 14+ years delivering enterprise data systems, 
              digital strategy, and analytics innovation across public, private, and development sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="card group relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 glass rounded-xl border border-primary-500/30 group-hover:border-primary-400 transition-all duration-300 group-hover:scale-110">
                      <highlight.icon 
                        size={24} 
                        className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Let's discuss how I can help you leverage enterprise data systems, AI analytics, and strategic insights 
              to drive measurable impact in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="glass border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow flex items-center justify-center space-x-2 group"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/portfolio"
                className="glass border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow flex items-center justify-center space-x-2 group"
              >
                <span>View Projects</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 