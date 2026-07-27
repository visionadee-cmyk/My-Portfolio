import { Link } from 'react-router-dom'
import './ContentCreator.css'

function ContentCreator() {
  const contentItems = [
    {
      image: '/Images/Blender_Image_(1).jpg',
      title: '3D Architectural Design',
      description: 'Visualizing spaces with Blender & CorelDRAW',
      link: '/architecture-3d'
    },
    {
      image: '/Images/logo_(1).jpg',
      title: 'Graphic Design Services',
      description: 'Logos, banners, and marketing materials',
      link: '/graphic-design'
    },
    {
      image: '/Images/FRESH_TRACK_PRO.jpg',
      title: 'FreshTrack Pro Web App',
      description: 'Produce business management system',
      link: '/webapps'
    },
    {
      image: '/Images/Audience.jpg',
      title: 'Engaging Videography',
      description: 'Showcasing events and experiences',
      link: '/videography'
    },
    {
      image: '/Images/Landscape_(1).jpg',
      title: 'Creative Photography',
      description: 'Landscapes, portraits, and event captures',
      link: '/photography'
    },
    {
      image: '/Images/International_Womens_Day_(11).jpg',
      title: 'Content Creation',
      description: 'Engaging digital content and storytelling',
      link: '/projects'
    }
  ]

  const externalProjects = [
    {
      image: '/Images/banners.jpg',
      title: 'Maldivian Independence Site',
      description: 'Website for the 60th Anniversary',
      externalLink: '#'
    },
    {
      image: '/Images/SSOM.jpg',
      title: 'Whistleblower Protection Site',
      description: 'Secure platform for reporting',
      externalLink: '#'
    },
    {
      image: '/Images/Sebs_Shack.png',
      title: 'Ungu Viyafaari',
      description: 'Online marketplace platform',
      externalLink: 'https://un-gu-viyafaari.web.app'
    },
    {
      image: '/Images/Sebs_farm.jpg',
      title: 'Gaaahaka Returns 1446',
      description: 'Festival ticketing system',
      externalLink: 'https://gaahaka-returns-1446.web.app/'
    },
    {
      image: '/Images/Worldbuilding-Mindmap.jpg',
      title: 'Fuel Express Time & Attendance',
      description: 'Time and attendance tracking system',
      externalLink: 'https://fuel-express-time-attendance.web.app/dashboard.html'
    },
    {
      image: '/Images/Rettey_(1).jpg',
      title: 'Junior Joy HR Pro',
      description: 'Happy Teams, Smarter HR',
      externalLink: 'https://juniorjoy-hr-pro.netlify.app/'
    }
  ]

  const facebookPages = [
    {
      id: '61591869200851',
      title: 'JoyfulReCreative',
      description: 'T-shirts, mugs & more!',
      link: 'https://www.facebook.com/profile.php?id=61591869200851'
    },
    {
      id: '61575611513593',
      title: 'Creative Hub',
      description: 'Digital content & design',
      link: 'https://www.facebook.com/profile.php?id=61575611513593'
    },
    {
      id: '61591447331907',
      title: 'Design Studio',
      description: 'Professional design services',
      link: 'https://www.facebook.com/profile.php?id=61591447331907'
    },
    {
      id: '61591142210184',
      title: 'Content Creator',
      description: 'Engaging digital storytelling',
      link: 'https://www.facebook.com/profile.php?id=61591142210184'
    },
    {
      id: '61590504496612',
      title: 'Portfolio Showcase',
      description: 'Featured works & projects',
      link: 'https://www.facebook.com/profile.php?id=61590504496612'
    }
  ]

  return (
    <div className="content-creator-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Content Creation Portfolio</h1>
          <p className="page-subtitle">Sharing expertise in hospitality, food & beverage, and design through engaging content</p>
        </div>

        <div className="platform-section">
          <h2 className="section-title">Social Media Presence</h2>
          <div className="platform-grid">
            <div className="platform-card tiktok-card animate-scale-in">
              <div className="platform-header">
                <i className="fab fa-tiktok platform-icon"></i>
                <h3>TikTok</h3>
              </div>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">3.2K</div>
                  <div className="stat-label">Followers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3.9K</div>
                  <div className="stat-label">Likes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">182K</div>
                  <div className="stat-label">Video Views</div>
                </div>
              </div>
              <p className="platform-description">JoyfulReCreative: T-shirts, mugs & more! Explore on Etsy.</p>
              <a href="https://vt.tiktok.com/ZSkeS58kf/" className="cta-button" target="_blank" rel="noopener noreferrer">
                Visit Channel <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Featured Content Highlights</h2>
          <div className="content-grid">
            {contentItems.map((item, index) => (
              <Link key={index} to={item.link} className="content-item-link animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="content-item">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="content-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="view-more-cta">View More <i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="external-projects-section">
          <h2 className="section-title">External Projects & Websites</h2>
          <div className="content-grid">
            {externalProjects.map((item, index) => (
              <a 
                key={index} 
                href={item.externalLink} 
                className="content-item-link animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-item">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="content-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="view-more-cta">Visit Site <i className="fas fa-external-link-alt"></i></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="facebook-section">
          <h2 className="section-title">Facebook Pages</h2>
          <div className="facebook-grid">
            {facebookPages.map((page, index) => (
              <a 
                key={index} 
                href={page.link} 
                className="facebook-card animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="facebook-icon">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="facebook-content">
                  <h4>{page.title}</h4>
                  <p>{page.description}</p>
                  <span className="facebook-cta">Visit Page <i className="fas fa-external-link-alt"></i></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCreator
