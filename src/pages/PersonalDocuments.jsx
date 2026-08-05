import './PersonalDocuments.css'

function PersonalDocuments() {
  const documents = [
    {
      id: 1,
      title: 'Driving Licence',
      description: 'Valid driving licence document',
      image: '/personal-docs/Driving_Licence.jpg',
      category: 'Identification'
    },
    {
      id: 2,
      title: 'ID Card - Front',
      description: 'National ID card front side',
      image: '/personal-docs/ID_Card_Front.png',
      category: 'Identification'
    },
    {
      id: 3,
      title: 'ID Card - Back',
      description: 'National ID card back side',
      image: '/personal-docs/ID_Card_Back.png',
      category: 'Identification'
    },
    {
      id: 4,
      title: 'Passport',
      description: 'Passport document',
      image: '/personal-docs/Rettey_Passport.jpg',
      category: 'Travel'
    },
    {
      id: 5,
      title: 'Portrait Photo',
      description: 'Professional portrait photograph',
      image: '/personal-docs/portrait_(14).jpg',
      category: 'Photography'
    },
    {
      id: 6,
      title: 'Personal Photo 1',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(1).jpg',
      category: 'Personal'
    },
    {
      id: 7,
      title: 'Personal Photo 2',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(2).jpg',
      category: 'Personal'
    },
    {
      id: 8,
      title: 'Personal Photo 3',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(3).jpg',
      category: 'Personal'
    },
    {
      id: 9,
      title: 'Personal Photo 4',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(4).jpg',
      category: 'Personal'
    },
    {
      id: 10,
      title: 'Personal Photo 5',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(6).jpg',
      category: 'Personal'
    },
    {
      id: 11,
      title: 'Personal Photo 6',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(7).jpg',
      category: 'Personal'
    },
    {
      id: 12,
      title: 'Personal Photo 7',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(9).jpg',
      category: 'Personal'
    },
    {
      id: 13,
      title: 'Personal Photo 8',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(10).jpg',
      category: 'Personal'
    },
    {
      id: 14,
      title: 'Personal Photo 9',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(11).jpg',
      category: 'Personal'
    },
    {
      id: 15,
      title: 'Personal Photo 10',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(12).jpg',
      category: 'Personal'
    },
    {
      id: 16,
      title: 'Personal Photo 11',
      description: 'Personal photograph',
      image: '/personal-docs/Rettey_(13).jpg',
      category: 'Personal'
    }
  ]

  const handleDownload = (document) => {
    const link = document.createElement('a')
    link.href = document.image
    link.download = document.title.replace(/\s+/g, '_') + document.image.split('.').pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="personal-documents-page">
      <div className="page-header-bg">
        <img src="/personal-docs/Rettey_(8).jpg" alt="Header Background" className="header-bg-image" />
        <div className="header-overlay"></div>
      </div>
      
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Personal Documents</h1>
          <p className="page-subtitle">Important personal identification and travel documents</p>
        </div>

        {/* Featured Display Image */}
        <div className="featured-display animate-fade-in">
          <div className="featured-image">
            <img src="/personal-docs/Rettey_(5).jpg" alt="Featured" />
          </div>
          <div className="featured-content">
            <h2>Featured Photo</h2>
            <p>A glimpse into my personal collection</p>
          </div>
        </div>

        <div className="documents-grid">
          {documents.map((doc, index) => (
            <div key={doc.id} className="document-card animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="document-image">
                <img src={doc.image} alt={doc.title} />
              </div>
              <div className="document-content">
                <div className="document-category">{doc.category}</div>
                <h3>{doc.title}</h3>
                <p className="document-description">{doc.description}</p>
                <button 
                  className="btn btn-primary download-btn"
                  onClick={() => handleDownload(doc)}
                >
                  <i className="fas fa-download"></i>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonalDocuments
