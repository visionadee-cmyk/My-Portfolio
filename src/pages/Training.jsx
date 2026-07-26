import { useState } from 'react'
import './Training.css'
import ImageLightbox from '../components/ImageLightbox'

function Training() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const trainingImages = Array.from({ length: 86 }, (_, i) => ({
    src: `/Images/training (${i + 1}).optimized.jpg`,
    alt: `Training Image ${i + 1}`,
    title: `Training Session ${i + 1}`
  }))

  const handleImageClick = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <div className="training-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Training Programs</h1>
          <p className="page-subtitle">Comprehensive hospitality training and staff development sessions</p>
        </div>

        <div className="training-section">
          <h2 className="section-title">Multiple Training Sessions</h2>
          <div className="gallery">
            {trainingImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.03}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index)}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="training-info">
          <div className="info-card animate-fade-in">
            <div className="info-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Training Excellence</h3>
            <p>
              Comprehensive training programs covering F&B operations, service standards,
              team leadership, and professional development. Each session is designed
              to enhance skills and improve operational efficiency.
            </p>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={trainingImages}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
      />
    </div>
  )
}

export default Training
