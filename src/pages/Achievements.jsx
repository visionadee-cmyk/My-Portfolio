import './Achievements.css'

function Achievements() {
  const achievements = [
    {
      title: 'Resort Pre-opening Success',
      description: 'Led pre-openings for Amari Raaya Maldives and Sun Siyam Olhuveli Dream Island, establishing complete F&B operations from scratch.',
      icon: 'fa-rocket',
      year: '2023-2024',
      category: 'Career Milestone'
    },
    {
      title: 'Post-COVID Reopening',
      description: 'Successfully managed the post-COVID reopening of Innahura Maldives, implementing enhanced safety protocols and operational excellence.',
      icon: 'fa-sync-alt',
      year: '2020',
      category: 'Leadership'
    },
    {
      title: 'First Place - Wine World',
      description: 'Awarded First Place in "Highlight of Wine World" competition for exceptional wine knowledge and service.',
      icon: 'fa-trophy',
      year: '2004',
      category: 'Award'
    },
    {
      title: 'First Place - Fire Fighting',
      description: 'Awarded First Place in "Resort Advanced Fire Fighting" for excellence in safety and emergency response.',
      icon: 'fa-shield-alt',
      year: '2004',
      category: 'Safety'
    },
    {
      title: 'Second Place - Wine Seller',
      description: 'Achieved Second Place for Best Wine Seller recognition in May 2004.',
      icon: 'fa-medal',
      year: '2004',
      category: 'Award'
    },
    {
      title: 'Scout Association Member',
      description: 'Invested Member of the Scout Association of Maldives, contributing to youth development and community service.',
      icon: 'fa-hand-holding-heart',
      year: 'Ongoing',
      category: 'Community'
    }
  ]

  const certifications = [
    {
      name: 'HACCP Certification',
      issuer: 'Food Safety Authority',
      year: '2020',
      image: '/Images/port certi (10).optimized.jpg'
    },
    {
      name: 'Food Safety Manager',
      issuer: 'ServSafe',
      year: '2019',
      image: '/Images/port certi (13).optimized.jpg'
    },
    {
      name: 'Luxury Hospitality Standards',
      issuer: 'Leading Hotels',
      year: '2021',
      image: '/Images/port certi (12).optimized.jpg'
    }
  ]

  return (
    <div className="achievements-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Achievements & Recognition</h1>
          <p className="page-subtitle">Celebrating milestones and professional accomplishments throughout my career</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="achievement-icon">
                <i className={`fas ${achievement.icon}`}></i>
              </div>
              <div className="achievement-category">{achievement.category}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <div className="achievement-year">{achievement.year}</div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="cert-image">
                  <img src={cert.image} alt={cert.name} />
                </div>
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card animate-fade-in">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="stat-icon">
                <i className="fas fa-hotel"></i>
              </div>
              <div className="stat-number">8</div>
              <div className="stat-label">Resort Openings</div>
            </div>
            <div className="stat-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Team Members Led</div>
            </div>
            <div className="stat-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="stat-number">12</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
