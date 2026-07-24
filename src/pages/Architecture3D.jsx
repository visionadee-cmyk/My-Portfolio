import { useState } from 'react'
import './Architecture3D.css'
import ImageLightbox from '../components/ImageLightbox'

function Architecture3D() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSection, setCurrentSection] = useState('blender')

  const blenderImages = Array.from({ length: 21 }, (_, i) => ({
    src: `/Images/Blender Image (${i + 1}).optimized.jpg`,
    alt: `Blender Project ${i + 1}`,
    title: `Blender Project ${i + 1}`
  }))

  const sketchUpImages = Array.from({ length: 19 }, (_, i) => ({
    src: `/Images/sketch image (${i + 1}).optimized.jpg`,
    alt: `SketchUp Project ${i + 1}`,
    title: `SketchUp Project ${i + 1}`
  }))

  const corelDrawImages = Array.from({ length: 13 }, (_, i) => ({
    src: `/Images/Floor Plan (${i + 1}).optimized.jpg`,
    alt: `Floor Plan ${i + 1}`,
    title: `Floor Plan ${i + 1}`
  }))

  const sectionImages = {
    blender: blenderImages,
    sketchUp: sketchUpImages,
    corelDraw: corelDrawImages
  }

  const handleImageClick = (index, section) => {
    setCurrentImageIndex(index)
    setCurrentSection(section)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <div className="architecture-3d-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">3D Architecture Projects</h1>
          <p className="page-subtitle">Architectural visualizations and 3D designs using Blender, SketchUp, and CorelDRAW</p>
        </div>

        <div className="section">
          <h2 className="section-title">Blender Projects</h2>
          <div className="gallery">
            <div className="video-container animate-fade-in">
              <div className="video-wrapper">
                <video controls>
                  <source src="/video/New Normal dining.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="video-info">
                <h3>New Normal Dining</h3>
                <p>3D architectural visualization for post-COVID dining concepts</p>
              </div>
            </div>
            {blenderImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'blender')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Google SketchUp Projects</h2>
          <div className="gallery">
            {sketchUpImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'sketchUp')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">CorelDRAW Floor Plans</h2>
          <div className="gallery">
            {corelDrawImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'corelDraw')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        images={sectionImages[currentSection]}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
      />
    </div>
  )
}

export default Architecture3D
