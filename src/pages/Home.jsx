import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const featuredProjects = [
    {
      title: '3D Architecture',
      image: '/Images/website images/3D architecture.jpg',
      icon: 'fa-cube',
      description: 'Stunning architectural visualizations and 3D designs'
    },
    {
      title: 'Training Programs',
      image: '/Images/training (1).jpg',
      icon: 'fa-chalkboard-teacher',
      description: 'Comprehensive hospitality training solutions'
    },
    {
      title: 'Photography',
      image: '/Images/website images/Photography.jpg',
      icon: 'fa-camera',
      description: 'Professional photography for events and promotions'
    },
    {
      title: 'Videography',
      image: '/Images/website images/Videography.png',
      icon: 'fa-video',
      description: 'Creative video production and editing'
    },
    {
      title: 'Content Creation',
      image: '/Images/International Womens Day (11).jpg',
      icon: 'fa-pen-fancy',
      description: 'Engaging digital content and storytelling'
    }
  ]

  const skills = [
    { name: 'Food & Beverage Management', level: 95, icon: 'fa-utensils' },
    { name: '3D Design', level: 85, icon: 'fa-cube' },
    { name: 'Web Development', level: 75, icon: 'fa-code' },
    { name: 'Graphic Design', level: 80, icon: 'fa-palette' },
    { name: 'Training & Development', level: 90, icon: 'fa-chalkboard-teacher' },
    { name: 'Project Management', level: 88, icon: 'fa-tasks' }
  ]

  const webApps = [
    {
      name: 'FreshTrack Pro',
      image: '/Images/FRESH TRACK PRO.jpg',
      description: 'Inventory management system for F&B operations',
      category: 'Web Application'
    },
    {
      name: 'FurniCraft Pro',
      image: '/Images/logo (5).jpg',
      description: 'Furniture design and customization tool',
      category: 'Design Tool'
    },
    {
      name: 'Pantry Recipe Pro',
      image: '/Images/logo (7).png',
      description: 'Recipe management and meal planning app',
      category: 'Culinary App'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <i className="fas fa-star"></i>
              <span>20+ Years Experience</span>
            </div>
            <h1 className="hero-title animate-fade-in">
              Hi, I'm <span className="gradient-text">Abdul Rahman Gasim</span>
            </h1>
            <p className="hero-subtitle animate-fade-in">
              Food & Beverage Manager • 3D Designer • Web Developer
            </p>
            <p className="hero-description animate-fade-in">
              Passionate hospitality professional with extensive experience in luxury resorts. 
              Specializing in pre-opening, reopening, and operations management. 
              Also a skilled web developer, graphic designer, and 3D artist.
            </p>
            <div className="hero-actions animate-fade-in">
              <Link to="/projects" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                View My Work
              </Link>
              <Link to="/cv" className="btn btn-secondary">
                <i className="fas fa-file-alt"></i>
                Download CV
              </Link>
            </div>
            <div className="hero-stats animate-fade-in">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore my diverse portfolio across multiple disciplines</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-icon">
                      <i className={`fas ${project.icon}`}></i>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Expertise across hospitality, design, and technology</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-icon">
                  <i className={`fas ${skill.icon}`}></i>
                </div>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Apps Section */}
      <section className="section webapps-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Applications</h2>
            <p className="section-subtitle">Innovative solutions for business challenges</p>
          </div>
          <div className="webapps-grid">
            {webApps.map((app, index) => (
              <div key={index} className="webapp-card animate-slide-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="webapp-image">
                  <img src={app.image} alt={app.name} />
                </div>
                <div className="webapp-content">
                  <span className="webapp-category">{app.category}</span>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <Link to="/webapps" className="webapp-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kuredu Feature Section */}
      <section className="section kuredu-section">
        <div className="container">
          <div className="kuredu-card animate-fade-in">
            <div className="kuredu-image">
              <img src="/Images/Rettey (6).jpg" alt="Featured on Kuredu" />
            </div>
            <div className="kuredu-content">
              <div className="kuredu-badge">
                <i className="fas fa-award"></i>
                <span>Featured</span>
              </div>
              <h2>Kuredu Celebrities</h2>
              <p>
                Featured on Kuredu's official website for exceptional contributions to hospitality excellence. 
                Recognized for dedication to guest experience and operational excellence.
              </p>
              <a 
                href="https://www.kuredu.com/kuredu-celebrities-rettey/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <i className="fas fa-external-link-alt"></i>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card animate-scale-in">
            <h2>Ready to Work Together?</h2>
            <p>
              Let's collaborate on your next project. Whether it's hospitality consulting, 
              3D design, or web development, I'm here to help bring your vision to life.
            </p>
            <div className="cta-actions">
              <Link to="/cv" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Get in Touch
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                <i className="fas fa-folder-open"></i>
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
