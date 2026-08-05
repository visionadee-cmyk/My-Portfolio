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
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Personal Documents</h1>
          <p className="page-subtitle">Important personal identification and travel documents</p>
        </div>

        <div className="documents-grid">
          {documents.map((doc, index) => (
            <div key={doc.id} className="document-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
