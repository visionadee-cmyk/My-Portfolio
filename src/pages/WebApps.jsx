import './WebApps.css'

function WebApps() {
  const webApps = [
    {
      name: 'Park BBQ Kitchen',
      description: 'Booking system for Park BBQ Kitchen events. Reserve the venue for your special occasions with easy online booking.',
      image: 'https://parkbbqkitchen.hawadaily.com/logo.png',
      category: 'Booking System',
      features: ['Online Booking', 'Event Management', 'User Manual', 'FAQ Support'],
      status: 'Live',
      link: 'https://parkbbqkitchen.hawadaily.com/'
    },
    {
      name: 'Hawainn Khabaru',
      description: 'Modern Maldives news portal with full Dhivehi RTL support and PWA experience for the Maldivian community.',
      image: 'https://ahdhamu-news.vercel.app/favicon.svg',
      category: 'News & Media',
      features: ['Dhivehi RTL Support', 'PWA Experience', 'Modern Design', 'Daily Updates'],
      status: 'Live',
      link: 'https://ahdhamu-news.vercel.app/'
    },
    {
      name: 'Maa Wadi Mv',
      description: 'Smart furniture planning tool with precise measurements, material optimization, and instant pricing for custom furniture.',
      image: 'https://maa-wadi-mv.vercel.app/logo.png',
      category: 'Design Tool',
      features: ['Material Optimization', 'Instant Pricing', 'Custom Designs', 'Quote Generation'],
      status: 'Live',
      link: 'https://maa-wadi-mv.vercel.app/'
    },
    {
      name: 'Loavashi Hub',
      description: 'Modern cafe and restaurant management system with POS, admin dashboard, inventory, staff, reports, and PWA support.',
      image: 'https://loavashihub-cafe.vercel.app/logo.jpeg',
      category: 'Restaurant Management',
      features: ['POS System', 'Inventory Management', 'Staff Management', 'PWA Support'],
      status: 'Live',
      link: 'https://loavashihub-cafe.vercel.app/'
    },
    {
      name: 'Hawaiin Elevation',
      description: 'Complete tender and procurement management system for Hawaiin Elevation Pvt Ltd with PWA support.',
      image: 'https://hawaiin-elevation.vercel.app/logo/icon-192.png',
      category: 'Business Management',
      features: ['Tender Management', 'Procurement Tracking', 'PWA Support', 'Reporting'],
      status: 'Live',
      link: 'https://hawaiin-elevation.vercel.app/'
    },
    {
      name: 'Ungu Viyafaari',
      description: 'Business management system for comprehensive business operations and administration.',
      image: 'https://ungu-viyafaari-mv.vercel.app/favicon.svg',
      category: 'Business Management',
      features: ['Business Operations', 'Administration', 'PWA Support', 'Modern UI'],
      status: 'Live',
      link: 'https://ungu-viyafaari-mv.vercel.app/'
    },
    {
      name: 'HR Factory',
      description: 'Comprehensive HR management platform for employee management, payroll, and HR operations.',
      image: 'https://hawaain-hr-pro.vercel.app/logo.png',
      category: 'HR Management',
      features: ['Employee Management', 'Payroll', 'HR Operations', 'PWA Support'],
      status: 'Live',
      link: 'https://hawaain-hr-pro.vercel.app/'
    },
    {
      name: 'Park Pro-Active',
      description: 'Engineering operations management system for efficient project and operations tracking.',
      image: 'https://park-pro-active-eta.vercel.app/logo.png',
      category: 'Engineering',
      features: ['Operations Management', 'Project Tracking', 'PWA Support', 'Reporting'],
      status: 'Live',
      link: 'https://park-pro-active-eta.vercel.app/'
    },
    {
      name: 'Fixora',
      description: 'Computerized Maintenance Management System built for zero downtime with comprehensive asset tracking.',
      image: 'https://fixora-topaz.vercel.app/logo/logo.png',
      category: 'Maintenance',
      features: ['Asset Management', 'Maintenance Tracking', 'Zero Downtime', 'PWA Support'],
      status: 'Live',
      link: 'https://fixora-topaz.vercel.app/'
    },
    {
      name: 'MNDF Toolkit Pro',
      description: 'Tool and asset management system designed for MNDF operations with comprehensive tracking capabilities.',
      image: 'https://mndf-toolkit-pro.vercel.app/logo.png',
      category: 'Asset Management',
      features: ['Tool Management', 'Asset Tracking', 'PWA Support', 'Reporting'],
      status: 'Live',
      link: 'https://mndf-toolkit-pro.vercel.app/'
    },
    {
      name: 'Fannu Bazaar',
      description: 'Service marketplace connecting customers with skilled workers for various services.',
      image: 'https://fannu-bazaar.vercel.app/logo.png',
      category: 'Marketplace',
      features: ['Service Booking', 'Worker Profiles', 'PWA Support', 'Reviews'],
      status: 'Live',
      link: 'https://fannu-bazaar.vercel.app/'
    },
    {
      name: 'Exam Lab MV',
      description: 'O Level & A Level exam practice platform for students in the Maldives with comprehensive study materials.',
      image: 'https://exam-lab-maldives.vercel.app/logo.png',
      category: 'Education',
      features: ['Exam Practice', 'Study Materials', 'PWA Support', 'Progress Tracking'],
      status: 'Live',
      link: 'https://exam-lab-maldives.vercel.app/'
    },
    {
      name: 'Hawa Daily',
      description: 'Modern Maldives news portal with full Dhivehi RTL support and PWA experience. Provides daily news updates and content for the Maldivian community.',
      image: 'https://www.hawadaily.com/logo.png',
      category: 'News & Media',
      features: ['Dhivehi RTL Support', 'PWA Experience', 'Modern Mobile Design', 'Daily News Updates'],
      status: 'Live',
      link: 'https://www.hawadaily.com/'
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
