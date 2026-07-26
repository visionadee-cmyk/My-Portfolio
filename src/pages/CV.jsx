import { useState } from 'react'
import './CV.css'

function CV() {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }
  const experience = [
    {
      title: 'Director of Operation',
      company: 'Madihaa Company',
      period: 'July 2025 – Present',
      description: 'Led operations for the Maldives\' largest importer/distributor of fruits, vegetables, and poultry, supporting seven retail/wholesale outlets and two guest houses (100 rooms).',
      responsibilities: [
        'Oversee all operational aspects of import/distribution business',
        'Manage 200+ staff workforce across multiple locations',
        'Coordinate logistics for 32 units of 40-foot containers',
        'Maintain quality control standards for perishable goods',
        'Implement inventory management and stock rotation systems',
        'Support expansion through new supermarket setups',
        'Manage generator and storage facility operations',
        'Ensure compliance with food safety regulations'
      ],
      achievements: [
        'Oversaw a 200+ staff workforce, ensuring high standards in quality control and customer service',
        'Managed logistics for 32 units of 40-foot containers, four generators, and five major godown stores',
        'Implemented systems to reduce wastage and improve stock rotation for perishables',
        'Supported the setup of three new supermarkets to streamline company expansion'
      ]
    },
    {
      title: 'Food & Beverage Manager',
      company: 'Raaya by Atmosphere',
      period: 'March 2024 – July 2025',
      description: 'Oversee 182 rooms, one buffet restaurant, five à la carte restaurants, four bars, and one bug farm.',
      responsibilities: [
        'Manage all F&B operations for 182-room resort',
        'Supervise buffet restaurant and five à la carte outlets',
        'Oversee four bars and bug farm operations',
        'Lead and train team of 54 staff members',
        'Develop F&B concepts and menu design',
        'Manage budgeting and procurement processes',
        'Monitor financial performance and implement cost controls',
        'Ensure high standards of guest service'
      ],
      achievements: [
        'Lead a team of 54 staff, implementing training programs for service excellence',
        'Develop F&B concepts, including menu design, budgeting, and procurement',
        'Monitor financial performance and implement cost-control measures'
      ]
    },
    {
      title: 'Food & Beverage Manager',
      company: 'Amari Raaya Maldives (Onyx Hospitality)',
      period: 'March 2023 – March 2024',
      description: 'Spearheaded the full pre-opening of the resort with 181 rooms.',
      responsibilities: [
        'Lead complete pre-opening of resort F&B operations',
        'Manage buffet restaurant and three à la carte restaurants',
        'Oversee three bars and room service operations',
        'Recruit and train team of 49 staff members',
        'Establish supplier relationships and procurement processes',
        'Develop SOPs and operational standards',
        'Implement quality assurance systems',
        'Coordinate with other departments for seamless operations'
      ],
      achievements: [
        'Managed one buffet restaurant, three à la carte restaurants, and three bars',
        'Recruited and trained a team of 49 staff',
        'Established supplier relationships and optimized procurement processes'
      ]
    },
    {
      title: 'Food & Beverage Manager',
      company: 'Rahaa Maldives',
      period: 'October 2022 – March 2023',
      description: 'Managed 100 rooms with multiple dining outlets.',
      responsibilities: [
        'Manage F&B operations for 100-room resort',
        'Oversee buffet restaurant and two à la carte outlets',
        'Supervise bar operations and room service',
        'Lead team of 25 staff members',
        'Implement new SOPs for operational efficiency',
        'Plan and execute seasonal events',
        'Analyze revenue trends and optimize performance',
        'Maintain high guest satisfaction standards'
      ],
      achievements: [
        'Led a team of 25 staff, introducing new SOPs to improve efficiency',
        'Planned and executed seasonal events and analyzed revenue trends'
      ]
    },
    {
      title: 'Food & Beverage Manager',
      company: 'Sun Siyam Olhuveli & Dream Island',
      period: 'September 2021 – October 2022',
      description: 'Led the full pre-opening of Dream Island with 327 rooms.',
      responsibilities: [
        'Lead pre-opening of Dream Island resort',
        'Manage three buffet restaurants and five à la carte outlets',
        'Oversee eight bars across the property',
        'Design romantic-themed menus and concepts',
        'Implement guest engagement strategies',
        'Train and develop F&B team',
        'Coordinate with culinary team for menu execution',
        'Ensure exceptional guest dining experiences'
      ],
      achievements: [
        'Managed three buffet restaurants, five à la carte restaurants, and eight bars',
        'Designed romantic-themed menus and managed guest engagement strategies'
      ]
    },
    {
      title: 'Assistant Food & Beverage Manager',
      company: 'Kuredu Island Resort',
      period: 'July 2017 – September 2021',
      description: 'Managed the full post-COVID reopening of the resort with 383 rooms.',
      responsibilities: [
        'Manage post-COVID reopening of 383-room resort',
        'Oversee four buffet restaurants and three à la carte outlets',
        'Supervise seven bars across the property',
        'Lead team of 122 staff members',
        'Implement new F&B concepts and SOPs',
        'Ensure compliance with health and safety protocols',
        'Monitor operational efficiency and guest satisfaction',
        'Coordinate with management on strategic initiatives'
      ],
      achievements: [
        'Oversaw four buffet restaurants, three à la carte restaurants, and seven bars',
        'Led a team of 122 staff and implemented new F&B concepts and SOPs'
      ]
    },
    {
      title: 'Food & Beverage Manager',
      company: 'Innahura Maldives',
      period: 'November 2019 – March 2020',
      description: 'Led the full post-COVID reopening of the resort.',
      responsibilities: [
        'Manage post-COVID reopening of 78-room resort',
        'Oversee buffet restaurant and two à la carte outlets',
        'Supervise bar operations',
        'Lead team of 25 staff members',
        'Implement enhanced safety protocols',
        'Train staff on new operational procedures',
        'Maintain quality standards during transition',
        'Ensure guest confidence and safety'
      ],
      achievements: [
        'Managed 78 rooms, one buffet restaurant, and two à la carte restaurants',
        'Led a team of 25 staff'
      ]
    },
    {
      title: 'Food & Beverage Manager',
      company: 'Kuredu Island Resort',
      period: 'July 2016 – July 2017',
      description: 'Chaired HACCP meetings, managed the Micros system, and supervised daily operations.',
      responsibilities: [
        'Chair HACCP meetings and ensure food safety compliance',
        'Manage Micros POS system and reporting',
        'Supervise daily F&B operations',
        'Monitor staff performance and provide training',
        'Implement quality control measures',
        'Coordinate with kitchen and service teams',
        'Handle guest feedback and complaints',
        'Maintain operational standards'
      ],
      achievements: []
    },
    {
      title: 'F&B Supervisor / Head Waiter / Assistant Head Waiter / Waiter / Room boy',
      company: 'Kuredu Island Resort',
      period: 'January 2001 – July 2016',
      description: 'Progressive career growth through various F&B positions.',
      responsibilities: [
        'Progressive advancement through F&B positions',
        'Supervise restaurant operations and staff',
        'Train new team members on service standards',
        'Ensure exceptional guest service delivery',
        'Handle guest inquiries and special requests',
        'Maintain cleanliness and presentation standards',
        'Coordinate with kitchen for efficient service',
        'Support management in daily operations'
      ],
      achievements: []
    }
  ]

  const education = [
    {
      degree: 'MBA',
      institution: 'British School of Commerce',
      year: 'July 2022 – December 2023',
      description: 'Master of Business Administration'
    },
    {
      degree: 'Certificate 3 in F&B',
      institution: 'Maldives National University',
      year: 'July 2013 – January 2014',
      description: 'Food & Beverage certification'
    },
    {
      degree: 'London GCSE "O" Level',
      institution: 'LH. Atoll Center',
      year: 'July 2000',
      description: 'General Certificate of Secondary Education'
    }
  ]

  const certifications = [
    'HACCP Levels 1, 2, & 3',
    'Luxury Hospitality Standards',
    'Transformational Leadership',
    'Bartending',
    'Customer Care Level 2',
    'Team Building',
    'Handicraft Certification'
  ]

  return (
    <div className="cv-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Curriculum Vitae</h1>
          <p className="page-subtitle">Professional experience and qualifications in hospitality management</p>
        </div>

        <div className="cv-content">
          {/* Experience Section */}
          <section className="cv-section">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="experience-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="experience-content">
                    <div className="experience-header" onClick={() => toggleExpand(index)}>
                      <div className="header-left">
                        <h3>{exp.title}</h3>
                        <span className="company-name">{exp.company}</span>
                      </div>
                      <div className="header-right">
                        <span className="experience-period">{exp.period}</span>
                        <button className="expand-toggle" aria-expanded={expandedItems[index]}>
                          <i className={`fas fa-chevron-${expandedItems[index] ? 'up' : 'down'}`}></i>
                        </button>
                      </div>
                    </div>
                    <div className={`experience-details ${expandedItems[index] ? 'expanded' : ''}`}>
                      <p className="experience-description">{exp.description}</p>
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="responsibilities-section">
                          <h4>Key Responsibilities</h4>
                          <ul className="experience-responsibilities">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="achievements-section">
                          <h4>Key Achievements</h4>
                          <ul className="experience-achievements">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="cv-section">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="education-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                    <span className="education-year">{edu.year}</span>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="cv-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <i className="fas fa-certificate"></i>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Download Section */}
          <section className="download-section">
            <div className="download-card animate-scale-in">
              <div className="download-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <h3>Download Full CV</h3>
              <p>Get the complete version of my CV in PDF format with detailed work history and references.</p>
              <button className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download PDF
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CV
