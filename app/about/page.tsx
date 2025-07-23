import { 
  BarChart3, 
  Map, 
  Bot, 
  Zap, 
  Database, 
  Users, 
  Download,
  Linkedin,
  Github,
  Mail,
  TrendingUp,
  Award,
  Shield,
  BookOpen,
  Target,
  Heart,
  Code,
  Leaf,
  ArrowRight,
  FileText
} from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const skills = [
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
      description: 'Python (Pandas, NumPy), R, regression, clustering, time-series forecasting for predictive analytics.',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development, web applications, mobile apps, and custom software solutions for business needs.',
    },
    {
      icon: Bot,
      title: 'Prompt Engineering',
      description: 'Advanced AI prompt design, LLM optimization, and AI system integration for enhanced productivity.',
    },
    {
      icon: Zap,
      title: 'Data Infrastructure & ETL',
      description: 'Advanced SQL (joins, CTEs, window functions), dbt-style data modeling, cloud-based systems.',
    },
    {
      icon: Database,
      title: 'MEL Systems & Platforms',
      description: 'Data validation workflows, production-level data modeling, stakeholder engagement.',
    },
    {
      icon: FileText,
      title: 'Data Collection & Survey Design',
      description: 'KOBO Toolbox, CSPro, ODK, CommCare questionnaire design and mobile data collection systems.',
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
  ]

  const experience = [
    {
      role: 'Senior Data Analyst and Consultant (Information Management Officer III/ M&E Officer II)',
      organization: 'The International Centre of Insect Physiology & Ecology (icipe)',
      period: 'October 2022 – Present',
      achievements: [
        'Created and sustained complex data models facilitating strategic decision-making, enhancing data integrity and accessibility across business and development functions',
        'Created and implemented interactive dashboards with Power BI and Tableau providing 25% increase in key performance indicators (KPIs)',
        'Utilized statistical analysis and predictive modelling to highlight trends leading to 20-30% improvement in operational efficiency and stakeholder engagement',
        'Managed scalable Data Management strategy enhancing data availability to over 116,000 youth and 11,000 businesses, resulting in 25% expansion in program engagement',
        'Developed and managed Data Management Platform for the MOYESH Programme and leading National Apiculture Database for the MaYEA Programme',
        'Generated over 30 knowledge products leading to 20% increase in evidence-based decision-making and stakeholder alignment'
      ]
    },
    {
      role: 'Consultant',
      organization: 'DAB Development Research and Training PLC',
      period: 'September 2024',
      achievements: [
        'Created data visualizations and dashboards using Power BI and other tools tracking key outputs of the PROSEAD program',
        'Tested and validated data visualizations with the DAB MEL team ensuring data accuracy and consistency',
        'Provided half-day training sessions on Power BI and data analysis tools (Survey Solution, KOBO Toolbox)',
        'Continued technical support and troubleshooting to ensure optimal use of data analysis tools'
      ]
    },
    {
      role: 'Founder',
      organization: 'Azmera Technologies',
      period: 'January 2022 – Present',
      achievements: [
        'Headed creation of AI FARMS, an award-winning Agri-tech platform promoting stakeholders across supply chains through AI-enabled climate-smart farming',
        'Designed solutions for market clarity, resource utilization, and sustainable agricultural practices',
        'Won UNDP and LG-KOICA sponsored competition with $5,000 grant and state and National Competition first place'
      ]
    },
    {
      role: 'Department Head',
      organization: 'Entoto Polytechnic College',
      period: 'October 2020 – September 2022',
      achievements: [
        'Managed and implemented ICT systems while maintaining data management tools enhancing system performance',
        'Monitored all KPIs to assess system performance, resource utilization, and operational efficiency',
        'Collaborated with internal teams and external stakeholders to roll-out data-driven ICT systems',
        'Implemented AI-enabled Plant Disease Detection System contributing to 40% increase in crop yield'
      ]
    },
    {
      role: 'IT Support Specialist (Part-time)',
      organization: 'App\'s mason IT Solutions',
      period: 'June 2016 - May 2019',
      achievements: [
        'Oversaw network installation and provided technical support to clients for successful ICT Systems',
        'Fixed hardware and software problems improving clients\' system downtime by 20%',
        'Developed materials detailing troubleshooting and use of software decreasing support needs by 25%',
        'Created upgrades and patches improving system security resulting in 15% decrease in faults'
      ]
    },
    {
      role: 'Instructor',
      organization: 'Entoto Polytechnic College',
      period: '2012 – 2020',
      achievements: [
        'Created and implemented ICT-based data systems enhancing collections and improving student participation by 30%',
        'Facilitated staff and student training sessions on data management processes improving digital competency by 20%',
        'Managed technology initiatives for integrated use improving curriculum delivery and achieving 15% improved learning outcomes',
        'Oversaw student-led ICT innovation projects providing data-driven mentorship approach'
      ]
    }
  ]

  const education = [
    {
      degree: 'Master\'s degree in Computer Science',
      institution: 'Ambo University',
      year: '2022'
    },
    {
      degree: 'Bachelor\'s degree in Computer Science',
      institution: 'Addis Ababa University',
      year: '2017'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Nifas-silk Polytechnic College',
      year: '2011'
    }
  ]

  const certifications = [
    'Data Science and Machine Learning',
    'Data Analysis with Python and R',
    'GIS and Geospatial Analysis',
    'Project Cycle Management',
    'Evaluation for Resilience',
    'Fundraising Specialization – Philanthropy University',
    'Advanced training in SQL optimization and Python programming',
    'Cloud computing technologies and data governance best practices',
    'Applied Data Science at World Quant University (In Progress)'
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kalabemulugeta/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/LijKal-codes',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:kaleabma@gmail.com',
      icon: Mail,
    },
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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced Tech professional with a master's degree in computer science, 
              passionate about data analytics, AI, and Agri-Tech innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-black text-white neon-text mb-6">
              Professional Journey
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Experienced Tech professional with a master's degree in computer science. Proficient in data analytics, 
                visualization, and BI software, particularly Power BI and Tableau. Over 14+ years of hands-on experience 
                in data collection, analysis, and visualization, including 2+ years work in humanitarian and development programs. 
                Skilled in digital data collection tools and data management software. Strong interpersonal, organizational, 
                and communication skills, committed to teamwork and data security.
              </p>
              
              <p>
                <strong>Founder of Azmera Technologies</strong>, with a big passion for ensuring food security & Technology. 
                I aspire to be one of the leaders in the "Agri-Tech" area, with a goal to increase crop productivity by 10% 
                in 2027 through the help of AI technology.
              </p>
              
              <p>
                I have a strong enthusiasm for software development and strive for technical excellence in achieving business goals. 
                I do best in warm, compassionate settings that have challenging objectives. I have worked on desktop, web, UI and 
                backend development, serving as a full stack developer on more than 5 projects, and I loved coding and teaching 
                code throughout my professional life for about 12 years.
              </p>
              
              <p>
                Currently working on <strong>AI Farms</strong> project that enables farmers to increase productivity by at least 6% 
                in 2 years by delivering disease detection platform and data driven supply distribution. I call upon interested 
                potential investors and partners to join us in this mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Project Highlight */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Current Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Active development projects showcasing diverse expertise in Agri-Tech, HealthTech, 
              Fintech, and Smart City solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Farms */}
            <div className="card group relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 glass rounded-xl border border-primary-500/30">
                    <Leaf size={32} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                      AI Farms
                    </h3>
                    <p className="text-primary-300">Agri-Tech Innovation Platform</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    <strong>Mission:</strong> Enable farmers to increase productivity by at least 6% in 2 years through 
                    disease detection platform and data-driven supply distribution.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">6%</div>
                      <div className="text-sm text-gray-300">Productivity Increase Target</div>
                    </div>
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">10%</div>
                      <div className="text-sm text-gray-300">Crop Productivity Goal by 2027</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WEYE */}
            <div className="card group relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 glass rounded-xl border border-primary-500/30">
                    <TrendingUp size={32} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                      WEYE
                    </h3>
                    <p className="text-primary-300">Task Marketplace Platform</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    <strong>Platform:</strong> Comprehensive task marketplace app featuring integrated wallet functionality, 
                    commission management, and automated task workflows for seamless task assignment and payment processing.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">Full Stack</div>
                      <div className="text-sm text-gray-300">React, Node.js, PostgreSQL</div>
                    </div>
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">E-commerce</div>
                      <div className="text-sm text-gray-300">Wallet Integration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LESUA */}
            <div className="card group relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 glass rounded-xl border border-primary-500/30">
                    <Heart size={32} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                      LESUA
                    </h3>
                    <p className="text-primary-300">Digital Health Platform</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    <strong>HealthTech:</strong> Mobile-first health platform supporting pregnant women and their partners 
                    throughout pregnancy with personalized health tracking, provider recommendations, and e-commerce integration.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">React Native</div>
                      <div className="text-sm text-gray-300">Mobile App</div>
                    </div>
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">Health APIs</div>
                      <div className="text-sm text-gray-300">Secure Data</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAST PARK */}
            <div className="card group relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 glass rounded-xl border border-primary-500/30">
                    <Map size={32} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                      FAST PARK
                    </h3>
                    <p className="text-primary-300">Smart Parking System</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    <strong>Smart City:</strong> Comprehensive parking management solution with real-time monitoring, 
                    automated billing, and IoT integration for modern urban parking management.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">IoT</div>
                      <div className="text-sm text-gray-300">Real-time Monitoring</div>
                    </div>
                    <div className="glass rounded-xl p-4 border border-primary-500/30">
                      <div className="text-2xl font-bold text-primary-400">React</div>
                      <div className="text-sm text-gray-300">Node.js Backend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-2 text-primary-400 mb-4">
              <Heart size={20} className="animate-pulse" />
              <span className="text-lg font-medium">Seeking investors and partners to join our mission!</span>
            </div>
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center space-x-2 mx-auto w-fit group"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Progressive leadership roles delivering measurable impact across diverse sectors.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.role} className="card group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-primary-400 font-medium">{exp.organization}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                    <div className="p-3 glass rounded-xl border border-primary-500/30">
                      <Award size={24} className="text-primary-400" />
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white neon-text mb-4">
              Core Skills & Competencies
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise in data analytics, enterprise systems, and strategic technology leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="card group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass rounded-xl border border-primary-500/30 group-hover:border-primary-400 transition-all duration-300">
                    <skill.icon 
                      size={24} 
                      className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-black text-white neon-text mb-6 flex items-center space-x-2">
                <BookOpen size={32} className="text-primary-400" />
                <span>Education</span>
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={edu.degree} className="card group">
                    <h3 className="text-lg font-bold text-white group-hover:neon-text transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-400">{edu.institution}</p>
                    <p className="text-gray-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-black text-white neon-text mb-6 flex items-center space-x-2">
                <Shield size={32} className="text-primary-400" />
                <span>Certifications</span>
              </h2>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div key={cert} className="glass rounded-xl p-4 border border-primary-500/30 group hover:border-primary-400 transition-all duration-300">
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white neon-text">
              Let's Connect
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Kalabe_Mulugeta_CV_2025_latest.pdf"
                download="Kalabe_Mulugeta_CV_2025_latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl border border-primary-500/30 hover:border-primary-400 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 