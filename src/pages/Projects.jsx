import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  const projectLinks = [
    {
      title: '3D Architecture',
      icon: 'fa-building',
      path: '/architecture-3d',
      images: [
        '/Images/website images/3D architecture.optimized.jpg',
        '/Images/Blender Image (1).optimized.jpg',
        '/Images/sketch image (1).optimized.jpg',
        '/Images/Floor Plan (1).optimized.jpg'
      ],
      stats: { images: 53, videos: 1 }
    },
    {
      title: 'Training',
      icon: 'fa-chalkboard-teacher',
      path: '/training',
      images: [
        '/Images/training (1).optimized.jpg',
        '/Images/training (2).optimized.jpg',
        '/Images/training (3).optimized.jpg',
        '/Images/training (4).optimized.jpg'
      ],
      stats: { images: 86 }
    },
    {
      title: 'Videography',
      icon: 'fa-video',
      path: '/videography',
      images: [
        '/Images/website images/Videography.optimized.jpg',
        '/Images/Golf bar_01.optimized.jpg',
        '/Images/Golf bar_02.optimized.jpg',
        '/Images/Golf bar_03.optimized.jpg'
      ],
      stats: { videos: 12 }
    },
    {
      title: 'Photography',
      icon: 'fa-camera',
      path: '/photography',
      images: [
        '/Images/website images/Photography.optimized.jpg',
        '/Images/Landscape (1).optimized.jpg',
        '/Images/portrait (1).optimized.jpg',
        '/Images/Landscape (2).optimized.jpg'
      ],
      stats: { images: 195 }
    },
    {
      title: 'Graphic Design',
      icon: 'fa-palette',
      path: '/graphic-design',
      images: [
        '/Images/logo.optimized.jpg',
        '/Images/logo (5).optimized.jpg',
        '/Images/flyers (1).optimized.jpg',
        '/Images/brochures (1).optimized.jpg'
      ],
      stats: { images: 148 }
    }
  ]

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">Explore my work across different domains</p>
        </div>

        <div className="services">
          {projectLinks.map((project, index) => (
            <Link key={index} to={project.path} className="services-cell animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-images">
                {project.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="project-image-item">
                    <img src={img} alt={`${project.title} ${imgIndex + 1}`} />
                  </div>
                ))}
                <div className="icon-wrapper">
                  <i className={`fas ${project.icon}`}></i>
                </div>
              </div>
              <div className="services-cell-text">
                <span className="proj_text">{project.title}</span>
                <div className="project-stats">
                  {project.stats.images && (
                    <span className="stat-item">
                      <i className="fas fa-image"></i>
                      {project.stats.images} Images
                    </span>
                  )}
                  {project.stats.videos && (
                    <span className="stat-item">
                      <i className="fas fa-video"></i>
                      {project.stats.videos} Videos
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
