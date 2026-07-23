import './Projects.css'

function Projects() {
  const projects = [
    {
      title: '3D Architecture Design',
      category: '3D Design',
      image: '/Images/website images/3D architecture.jpg',
      description: 'Stunning architectural visualizations and interior designs using Blender and 3D modeling software.',
      technologies: ['Blender', 'SketchUp', 'AutoCAD'],
      year: '2024'
    },
    {
      title: 'Hospitality Training Programs',
      category: 'Training',
      image: '/Images/training (1).jpg',
      description: 'Comprehensive training programs for F&B staff, focusing on service excellence and operational efficiency.',
      technologies: ['Training Design', 'SOP Development', 'Quality Assurance'],
      year: '2023'
    },
    {
      title: 'Professional Photography',
      category: 'Photography',
      image: '/Images/website images/Photography.jpg',
      description: 'High-quality photography for events, promotions, and marketing materials in luxury hospitality settings.',
      technologies: ['Adobe Lightroom', 'Photoshop', 'DSLR Photography'],
      year: '2024'
    },
    {
      title: 'Video Production',
      category: 'Videography',
      image: '/Images/website images/Videography.png',
      description: 'Creative video content for promotional campaigns, event coverage, and social media marketing.',
      technologies: ['Premiere Pro', 'After Effects', 'Final Cut Pro'],
      year: '2023'
    },
    {
      title: 'Content Creation',
      category: 'Digital Marketing',
      image: '/Images/International Womens Day (11).jpg',
      description: 'Engaging digital content including social media posts, blog articles, and marketing collateral.',
      technologies: ['Canva', 'Social Media', 'Copywriting'],
      year: '2024'
    },
    {
      title: 'Graphic Design',
      category: 'Design',
      image: '/Images/Logo making.png',
      description: 'Brand identity design, logos, flyers, and marketing materials for hospitality businesses.',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      year: '2024'
    }
  ]

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">A showcase of my work across hospitality, design, and technology</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <div className="project-year">{project.year}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
