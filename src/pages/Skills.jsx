import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Core Competencies',
      icon: 'fa-briefcase',
      skills: [
        { name: 'Pre-opening & Reopening', level: 98 },
        { name: 'F&B Operations Management', level: 95 },
        { name: 'Menu Development & Cost Control', level: 92 },
        { name: 'Team Leadership & Training', level: 94 },
        { name: 'Guest Experience Enhancement', level: 93 },
        { name: 'Budgeting & Financial Analysis', level: 88 },
        { name: 'HACCP & Food Safety', level: 95 },
        { name: 'Supplier Negotiation & Procurement', level: 90 },
        { name: 'Event Planning & Promotions', level: 85 }
      ]
    },
    {
      title: 'Technical Skills',
      icon: 'fa-laptop-code',
      skills: [
        { name: 'Blender 3D', level: 85 },
        { name: 'AutoCAD', level: 75 },
        { name: 'Adobe Illustrator', level: 80 },
        { name: 'Web Design', level: 70 },
        { name: 'Microsoft Office', level: 95 }
      ]
    },
    {
      title: 'Languages',
      icon: 'fa-language',
      skills: [
        { name: 'English', level: 95 },
        { name: 'Dhivehi', level: 100 }
      ]
    }
  ]

  const certifications = [
    { name: 'HACCP Levels 1, 2, & 3', issuer: 'Food Safety Authority', year: 'Multiple' },
    { name: 'Luxury Hospitality Standards', issuer: 'Leading Hotels', year: '2021' },
    { name: 'Transformational Leadership', issuer: 'Leadership Training', year: '2022' },
    { name: 'Bartending', issuer: 'Hospitality Training', year: '2018' },
    { name: 'Customer Care Level 2', issuer: 'Service Excellence', year: '2019' },
    { name: 'Team Building', issuer: 'Management Training', year: '2020' },
    { name: 'Handicraft Certification', issuer: 'Craft Council', year: '2017' }
  ]

  return (
    <div className="skills-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">My Skills & Expertise</h1>
          <p className="page-subtitle">Comprehensive capabilities across hospitality, design, and technology</p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.15}s` }}>
              <div className="category-header">
                <div className="category-icon">
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="cert-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
