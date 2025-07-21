import Hero from '@/components/Hero'
import { BarChart3, Map, Bot, Zap, Database, Users, Sparkles, ArrowRight, TrendingUp, Award, Code, FileText, ExternalLink, Github, Building2, Globe, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const stats = [
    { label: 'Program Effectiveness', value: '25-30%' },
    { label: 'Analytics Adoption', value: '40%' },
    { label: 'Agricultural Yield', value: '40%' },
    { label: 'Farmer Income', value: '25%' },
    { label: 'Data Security', value: '30%' },
  ]

  const highlights = [
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Power BI, Tableau, Excel dashboards driving 25-30% gains in program effectiveness across 10+ programs.',
    },
    {
      icon: Map,
      title: 'Geospatial & Remote Sensing',
      description: 'QGIS, ArcGIS, and spatial analytics for location-based insights and agricultural applications.',
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Python, R, Stata for ML models improving agricultural yield by 40% and plant disease detection.',
    },
    {
      icon: Zap,
      title: 'Data Governance & Compliance',
      description: 'GDPR/PII compliance frameworks, ETL processes, and data modeling with 30% security improvements.',
    },
    {
      icon: Database,
      title: 'MEL Systems & Platforms',
      description: 'SurveyCTO, Kobo, DHIS2 integration with cross-functional dashboards and real-time insights.',
    },
    {
      icon: Users,
      title: 'Team Leadership & Capacity Building',
      description: 'Leading cross-functional data teams, mentoring 20+ staff, and 40% improvement in analytics adoption.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Planning & KPIs',
      description: 'Balanced Scorecard implementation, scenario planning, and evidence-based impact reporting.',
    },
    {
      icon: Award,
      title: 'Digital Finance & Fintech',
      description: 'Fintech tracking systems enhancing farmer income by 25% and sustainable market access.',
    },
    {
      icon: Database,
      title: 'Enterprise Data Systems',
      description: 'End-to-end MEL frameworks, stakeholder engagement, and multi-country program support.',
    },
  ]

  const coreSkills = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Skilled in transforming raw data into actionable insights using statistical methods, exploratory data analysis, and data visualization. Experienced in using tools like Python, R, and SQL to uncover trends, anomalies, and support data-driven decision making across diverse sectors.',
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Expertise in designing and deploying interactive dashboards and reports with platforms such as Power BI, Tableau, and Excel. Enables organizations to monitor key performance indicators (KPIs), optimize operations, and align strategies through real-time data visualization and automated reporting.',
    },
    {
      icon: FileText,
      title: 'Data Collection Tools (KOBO, CSPro, ODK)',
      description: 'Proficient in deploying and managing digital data collection platforms including KOBO Toolbox, CSPro, and Open Data Kit (ODK). Skilled at designing survey forms, managing field data capture, and ensuring data quality for monitoring, evaluation, and research projects.',
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Experienced in developing tailored software solutions that automate workflows, integrate systems, and address specific organizational challenges. Skilled with backend technologies (Node.js, Django), frontend frameworks (React, Next.js), and API design for scalable and maintainable applications.',
    },
    {
      icon: Map,
      title: 'Geospatial Analysis',
      description: 'Proficient in leveraging GIS tools like QGIS, ArcGIS, and PostGIS for spatial data analysis and visualization. Applies geospatial techniques to support land use planning, resource management, and impact assessment through mapping, spatial modeling, and remote sensing integration.',
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Advanced expertise in machine learning algorithms, predictive modeling, and AI applications for agricultural and business contexts. Skilled in developing ML models that improve yield by 40%, detect plant diseases, and provide intelligent decision support systems.',
    },
  ]

  const projects = [
    {
      title: 'MOYESH Program - Cross-Functional MEL System',
      techStack: ['Power BI', 'Tableau', 'Python', 'SQL', 'SurveyCTO', 'Kobo'],
      description: 'Led the integration of MEL and BI systems for 10+ programs, designing Power BI/Tableau dashboards that drove 25-30% gains in program effectiveness. **My role** included architecting data pipelines, building cross-functional dashboards, and implementing real-time monitoring solutions that improved reporting efficiency by 30%.',
      impact: '30% Efficiency Gain',
      category: 'MEL Systems',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'AI FARMS - Climate-Smart Agriculture Platform',
      techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'QGIS'],
      description: 'Directed AI-driven platform development supporting climate-smart agriculture with ML models improving agricultural yield by 40%. **My role** as Founder & Technical Director included designing scalable data systems, developing plant disease detection algorithms, and creating sustainable market access solutions.',
      impact: '40% Yield Improvement',
      category: 'AI/ML',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'WEYE Platform - Youth Engagement & Task Marketplace',
      techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Next.js', 'REST APIs'],
      description: 'Developed comprehensive digital platform connecting youth for peer-to-peer service exchange with secure wallet-based commission system. **My role** as Platform Developer included building React Native mobile app, Node.js backend, PostgreSQL database, Firebase integration, and Next.js admin panel for task posting, applications, and commission management.',
      impact: 'Youth Employment',
      category: 'Digital Platform',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'KPI Tracking & Balanced Scorecard System',
      techStack: ['Power BI', 'Excel', 'SQL', 'Dashboard Development', 'KPI Framework'],
      description: 'Integrated KPI tracking systems into institutional dashboards improving operational metrics by 30%. **My role** as Head of ICT included developing digital platforms aligned with Balanced Scorecard framework, leading cross-departmental M&E initiatives, and mentoring 20+ data staff.',
      impact: '30% Operational Improvement',
      category: 'Enterprise',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Student Outcome Tracking Dashboard',
      techStack: ['Power BI', 'Excel', 'SQL', 'Data Visualization', 'Performance Analytics'],
      description: 'Developed comprehensive student outcome tracking dashboards increasing performance visibility by 25%. **My role** as Instructor & Systems Developer included creating data-driven educational improvements, implementing performance tracking systems, and supporting institutional learning through analytics.',
      impact: '25% Performance Visibility',
      category: 'Education',
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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