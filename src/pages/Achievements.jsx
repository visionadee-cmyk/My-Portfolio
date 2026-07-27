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
      image: '/Images/port_certi_(10).jpg'
    },
    {
      name: 'Food Safety Manager',
      issuer: 'ServSafe',
      year: '2019',
      image: '/Images/port_certi_(13).jpg'
    },
    {
      name: 'Luxury Hospitality Standards',
      issuer: 'Leading Hotels',
      year: '2021',
      image: '/Images/port_certi_(12).jpg'
    },
    {
      name: 'Certificate 1',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(1).jpg'
    },
    {
      name: 'Certificate 2',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(2).jpg'
    },
    {
      name: 'Certificate 3',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(3).jpg'
    },
    {
      name: 'Certificate 4',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(11).jpg'
    },
    {
      name: 'Certificate 5',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(14).jpg'
    },
    {
      name: 'Certificate 6',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(15).jpg'
    },
    {
      name: 'Certificate 7',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(16).jpg'
    },
    {
      name: 'Certificate 8',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(17).jpg'
    },
    {
      name: 'Certificate 9',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(18).jpg'
    },
    {
      name: 'Certificate 10',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(19).jpg'
    },
    {
      name: 'Certificate 11',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(20).jpg'
    },
    {
      name: 'Certificate 12',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(30).jpg'
    },
    {
      name: 'Certificate 13',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(31).jpg'
    },
    {
      name: 'Certificate 14',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(32).jpg'
    },
    {
      name: 'Certificate 15',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(33).jpg'
    },
    {
      name: 'Certificate 16',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(34).jpg'
    },
    {
      name: 'Certificate 17',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(35).jpg'
    },
    {
      name: 'Certificate 18',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(36).jpg'
    },
    {
      name: 'Certificate 19',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(37).jpg'
    },
    {
      name: 'Certificate 20',
      issuer: 'Professional Certification',
      year: '2018',
      image: '/Images/port_certi_(38).jpg'
    },
    {
      name: 'Language Certificate 1',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(1).jpg'
    },
    {
      name: 'Language Certificate 2',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(2).jpg'
    },
    {
      name: 'Language Certificate 3',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(3).jpg'
    },
    {
      name: 'Language Certificate 4',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(4).jpg'
    },
    {
      name: 'Language Certificate 5',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(5).jpg'
    },
    {
      name: 'Language Certificate 6',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(6).jpg'
    },
    {
      name: 'Language Certificate 7',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(7).jpg'
    },
    {
      name: 'Language Certificate 8',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(8).jpg'
    },
    {
      name: 'Language Certificate 9',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(9).jpg'
    },
    {
      name: 'Language Certificate 10',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(10).jpg'
    },
    {
      name: 'Language Certificate 11',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(11).jpg'
    },
    {
      name: 'Language Certificate 12',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(12).jpg'
    },
    {
      name: 'Language Certificate 13',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(13).jpg'
    },
    {
      name: 'Language Certificate 14',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(14).jpg'
    },
    {
      name: 'Language Certificate 15',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(15).jpg'
    },
    {
      name: 'Language Certificate 16',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(16).jpg'
    },
    {
      name: 'Language Certificate 17',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(17).jpg'
    },
    {
      name: 'Language Certificate 18',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(18).jpg'
    },
    {
      name: 'Language Certificate 19',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(19).jpg'
    },
    {
      name: 'Language Certificate 20',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(20).jpg'
    },
    {
      name: 'Language Certificate 21',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(21).jpg'
    },
    {
      name: 'Language Certificate 22',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(22).jpg'
    },
    {
      name: 'Language Certificate 23',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(23).jpg'
    },
    {
      name: 'Language Certificate 24',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(24).jpg'
    },
    {
      name: 'Language Certificate 25',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(25).jpg'
    },
    {
      name: 'Language Certificate 26',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(26).jpg'
    },
    {
      name: 'Language Certificate 27',
      issuer: 'Language Institute',
      year: '2017',
      image: '/Images/lan_certi_(27).jpg'
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
              <div className="stat-number">50</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
