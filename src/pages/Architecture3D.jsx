import { useState } from 'react'
import './Architecture3D.css'
import ImageLightbox from '../components/ImageLightbox'

function Architecture3D() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSection, setCurrentSection] = useState('blender')

  const blenderImages = Array.from({ length: 21 }, (_, i) => ({
    src: `/Images/Blender_Image_(${i + 1}).jpg`,
    alt: `Blender Project ${i + 1}`,
    title: `Blender Project ${i + 1}`
  }))

  const sketchUpImages = [
    { src: '/Images/Blender_Image_(1).jpg', alt: 'SketchUp Project 1', title: 'SketchUp Project 1' },
    { src: '/Images/Blender_Image_(2).jpg', alt: 'SketchUp Project 2', title: 'SketchUp Project 2' },
    { src: '/Images/Blender_Image_(3).jpg', alt: 'SketchUp Project 3', title: 'SketchUp Project 3' },
    { src: '/Images/Blender_Image_(4).jpg', alt: 'SketchUp Project 4', title: 'SketchUp Project 4' }
  ]

  const corelDrawImages = [
    { src: '/Images/Floor_Plan_(1).png', alt: 'Floor Plan 1', title: 'Floor Plan 1' },
    { src: '/Images/Floor_Plan_(3).jpg', alt: 'Floor Plan 3', title: 'Floor Plan 3' },
    { src: '/Images/Floor_Plan_(4).JPG', alt: 'Floor Plan 4', title: 'Floor Plan 4' },
    { src: '/Images/Floor_Plan_(5).jpg', alt: 'Floor Plan 5', title: 'Floor Plan 5' },
    { src: '/Images/Floor_Plan_(6).jpg', alt: 'Floor Plan 6', title: 'Floor Plan 6' },
    { src: '/Images/Floor_Plan_(7).jpg', alt: 'Floor Plan 7', title: 'Floor Plan 7' },
    { src: '/Images/Floor_Plan_(8).jpg', alt: 'Floor Plan 8', title: 'Floor Plan 8' },
    { src: '/Images/Floor_Plan_(9).jpg', alt: 'Floor Plan 9', title: 'Floor Plan 9' },
    { src: '/Images/Floor_Plan_(10).jpg', alt: 'Floor Plan 10', title: 'Floor Plan 10' },
    { src: '/Images/Floor_Plan_(11).jpg', alt: 'Floor Plan 11', title: 'Floor Plan 11' },
    { src: '/Images/Floor_Plan_(12).jpg', alt: 'Floor Plan 12', title: 'Floor Plan 12' },
    { src: '/Images/Floor_Plan_(13).jpg', alt: 'Floor Plan 13', title: 'Floor Plan 13' },
    { src: '/Images/Floor_Plan_(14).jpg', alt: 'Floor Plan 14', title: 'Floor Plan 14' }
  ]

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
