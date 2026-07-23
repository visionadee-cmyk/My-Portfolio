import './WebApps.css'

function WebApps() {
  const webApps = [
    {
      name: 'FreshTrack Pro',
      description: 'Comprehensive inventory management system for F&B operations. Track stock levels, expiry dates, supplier information, and generate automated reports.',
      image: '/Images/FRESH TRACK PRO.jpg',
      category: 'Business Management',
      features: ['Real-time Inventory Tracking', 'Expiry Alerts', 'Supplier Management', 'Automated Reporting'],
      status: 'Live',
      link: '#'
    },
    {
      name: 'FurniCraft Pro',
      description: 'Furniture design and customization tool for interior designers. Create 3D models, customize dimensions, and generate professional renders.',
      image: '/Images/logo (5).jpg',
      category: 'Design Tool',
      features: ['3D Modeling', 'Custom Dimensions', 'Material Library', 'Export Options'],
      status: 'Beta',
      link: '#'
    },
    {
      name: 'Pantry Recipe Pro',
      description: 'Recipe management and meal planning application for culinary professionals. Organize recipes, plan menus, and calculate nutritional information.',
      image: '/Images/logo (7).png',
      category: 'Culinary App',
      features: ['Recipe Database', 'Menu Planning', 'Nutritional Analysis', 'Shopping Lists'],
      status: 'Development',
      link: '#'
    }
  ]

  return (
    <div className="webapps-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Web Applications</h1>
          <p className="page-subtitle">Innovative digital solutions for business and creative challenges</p>
        </div>

        <div className="webapps-grid">
          {webApps.map((app, index) => (
            <div key={index} className="webapp-card animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="webapp-image">
                <img src={app.image} alt={app.name} />
                <div className={`status-badge status-${app.status.toLowerCase()}`}>
                  {app.status}
                </div>
              </div>
              <div className="webapp-content">
                <span className="webapp-category">{app.category}</span>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <div className="webapp-features">
                  {app.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      <i className="fas fa-check"></i>
                      {feature}
                    </span>
                  ))}
                </div>
                <a href={app.link} className="webapp-link">
                  <span>View Application</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="info-section">
          <div className="info-card animate-fade-in">
            <div className="info-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Custom Development</h3>
            <p>Need a custom web application for your business? I specialize in creating tailored solutions that address specific operational challenges and improve efficiency.</p>
            <button className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebApps
