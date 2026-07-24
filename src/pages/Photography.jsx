import { useState } from 'react'
import './Photography.css'
import ImageLightbox from '../components/ImageLightbox'

function Photography() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const landscapeImages = Array.from({ length: 152 }, (_, i) => ({
    src: `/Images/Landscape (${i + 1}).optimized.jpg`,
    alt: `Landscape ${i + 1}`,
    title: `Landscape ${i + 1}`
  }))

  const portraitImages = Array.from({ length: 43 }, (_, i) => ({
    src: `/Images/portrait (${i + 1}).optimized.jpg`,
    alt: `Portrait ${i + 1}`,
    title: `Portrait ${i + 1}`
  }))

  const allImages = [...landscapeImages, ...portraitImages]

  const filteredImages = activeFilter === 'all'
    ? allImages
    : activeFilter === 'landscape'
      ? landscapeImages
      : portraitImages

  const handleImageClick = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <div className="photography-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Photography Portfolio</h1>
          <p className="page-subtitle">Capturing moments through the lens - landscapes and portraits</p>
        </div>

        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Photos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'landscape' ? 'active' : ''}`}
            onClick={() => setActiveFilter('landscape')}
          >
            Landscape
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'portrait' ? 'active' : ''}`}
            onClick={() => setActiveFilter('portrait')}
          >
            Portrait
          </button>
        </div>

        <div className="masonry-gallery">
          {filteredImages.map((image, index) => (
            <div key={index} className="gallery-item animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="image-wrapper" onClick={() => handleImageClick(index)}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
              <div className="image-info">
                <h4>{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={filteredImages}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
      />
    </div>
  )
}

export default Photography
