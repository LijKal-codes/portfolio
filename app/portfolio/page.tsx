import ProjectCard from '@/components/ProjectCard'
import { TrendingUp, Award, Zap } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'Senior Data Analyst - icipe',
      role: 'Information Management Officer III',
      tech: ['Power BI', 'Tableau', 'Python', 'MEL Systems', 'Data Governance'],
      description: 'Led integration of MEL and BI systems for 10+ programs, designed Power BI/Tableau dashboards driving 25-30% gains in program effectiveness, and built data pipelines with 30% security improvements.',
      category: 'Leadership',
    },
    {
      title: 'AI Ecosystem Study - Ethiopia',
      role: 'Consultant & Strategic Analyst',
      tech: ['Scenario Planning', 'Strategic Forecasting', 'Policy Analysis', 'Stakeholder Engagement'],
      description: 'Conducted comprehensive scenario planning and strategic forecasts for AI adoption in Ethiopia, developing 45-page national analysis that influenced government policy and stakeholder decision-making.',
      category: 'Consulting',
    },
    {
      title: 'Data Analytics & Visualization Platform',
      role: 'Consultant & Systems Developer',
      tech: ['Power BI', 'Microsoft Forms', 'KoboToolbox', 'Data Collection', 'Training'],
      description: 'Created comprehensive data collection and visualization systems using Power BI & Microsoft Forms, trained MEL staff in analytics and reporting, enhancing organizational data capabilities.',
      category: 'Data Systems',
    },
    {
      title: 'AI FARMS Platform',
      role: 'Founder & Technical Director',
      tech: ['AI/ML', 'Climate-Smart Agriculture', 'Data Systems', 'Market Access'],
      description: 'Directed AI-driven platform development supporting climate-smart agriculture, designed scalable data systems for sustainable market access and decision intelligence.',
      category: 'AI/Analytics',
    },
    {
      title: 'KPI Tracking & Balanced Scorecard System',
      role: 'Head of ICT Department',
      tech: ['KPI Systems', 'Balanced Scorecard', 'Operational Metrics', 'Digital Platforms'],
      description: 'Integrated KPI tracking systems into institutional dashboards improving operational metrics by 30%, developed digital platforms aligned with Balanced Scorecard framework for strategic monitoring.',
      category: 'Enterprise',
    },
    {
      title: 'Cross-Functional MEL Data Initiatives',
      role: 'Data Team Leader',
      tech: ['M&E Systems', 'Cross-Departmental', 'Team Leadership', 'Capacity Building'],
      description: 'Led cross-departmental M&E data initiatives and mentored over 20 data staff, achieving 40% improvement in analytics adoption and team performance.',
      category: 'Leadership',
    },
    {
      title: 'Student Outcome Tracking Dashboard',
      role: 'Instructor & Systems Developer',
      tech: ['Dashboard Development', 'Student Analytics', 'Performance Tracking', 'Data Visualization'],
      description: 'Developed comprehensive student outcome tracking dashboards, increasing performance visibility by 25% and supporting data-driven educational improvements.',
      category: 'Education',
    },
    {
      title: 'Digital Infrastructure & Analytics Support',
      role: 'IT Support Specialist',
      tech: ['Digital Infrastructure', 'Analytics Systems', 'Multi-Site Support', 'System Maintenance'],
      description: 'Maintained digital infrastructure and supported analytics systems across multiple sites, ensuring reliable data operations and system performance.',
      category: 'Infrastructure',
    },
  ]

  const notableProjects = [
    {
      title: 'MOYESH Program',
      description: 'Developed cross-functional dashboards and MEL frameworks that improved reporting efficiency by 30%.',
      impact: '30% Efficiency Gain',
      category: 'MEL Systems'
    },
    {
      title: 'WEYE Platform',
      description: 'Developed youth engagement & task marketplace platform connecting skilled peers for service exchange with secure wallet-based commission system.',
      impact: 'Youth Employment',
      category: 'Digital Platform'
    },
    {
      title: 'BI Development Service',
      description: 'Developed comprehensive business intelligence dashboards and analytics solutions driving 25-30% gains in program effectiveness.',
      impact: '55-60% Improved Effectiveness',
      category: 'BI'
    },
    {
      title: 'Plant Disease Detection AI',
      description: 'Built ML models improving agricultural yield by 40% through early disease detection and intervention.',
      impact: '40% Yield Improvement',
      category: 'AI/ML'
    }
  ]

  const categories = [
    { name: 'All', count: projects.length },
    { name: 'Leadership', count: projects.filter(p => p.category === 'Leadership').length },
    { name: 'Consulting', count: projects.filter(p => p.category === 'Consulting').length },
    { name: 'Data Systems', count: projects.filter(p => p.category === 'Data Systems').length },
    { name: 'AI/Analytics', count: projects.filter(p => p.category === 'AI/Analytics').length },
    { name: 'Enterprise', count: projects.filter(p => p.category === 'Enterprise').length },
    { name: 'Education', count: projects.filter(p => p.category === 'Education').length },
    { name: 'Infrastructure', count: projects.filter(p => p.category === 'Infrastructure').length },
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
              Portfolio & Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of impactful projects across enterprise data systems, AI analytics, 
              and strategic leadership spanning 14+ years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Notable Projects Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Notable Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              High-impact initiatives delivering measurable results and strategic value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {notableProjects.map((project, index) => (
              <div key={project.title} className="card group relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 glass rounded-lg border border-primary-500/30">
                        <Award size={20} className="text-primary-400" />
                      </div>
                      <span className="text-sm font-medium text-primary-400 bg-primary-500/20 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-400">{project.impact}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white neon-text mb-4">
              Project Categories
            </h2>
            <p className="text-gray-300">
              Diverse portfolio spanning multiple sectors and technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="px-4 py-2 glass border border-primary-500/30 rounded-full text-sm font-medium text-gray-300 hover:text-primary-400 hover:border-primary-400 transition-all duration-300"
              >
                {category.name} ({category.count})
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From enterprise data systems to AI-powered analytics, each project demonstrates 
              the intersection of technical expertise and strategic impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                role={project.role}
                tech={project.tech}
                description={project.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Project Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Measurable outcomes and strategic value delivered across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-black futuristic-text neon-text group-hover:scale-110 transition-transform duration-300">
                25-30%
              </div>
              <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Program Effectiveness Gains
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black futuristic-text neon-text group-hover:scale-110 transition-transform duration-300">
                40%
              </div>
              <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Analytics Adoption Improvement
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black futuristic-text neon-text group-hover:scale-110 transition-transform duration-300">
                40%
              </div>
              <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Agricultural Yield Improvement
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black futuristic-text neon-text group-hover:scale-110 transition-transform duration-300">
                25%
              </div>
              <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Farmer Income Increase
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 