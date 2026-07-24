import { useState } from 'react'
import './GraphicDesign.css'
import ImageLightbox from '../components/ImageLightbox'

function GraphicDesign() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSection, setCurrentSection] = useState('logos')

  const logoImages = Array.from({ length: 17 }, (_, i) => ({
    src: `/Images/logo (${i + 1}).optimized.jpg`,
    alt: `Logo ${i + 1}`,
    title: `Logo ${i + 1}`
  }))

  const floorPlanImages = [
    { src: '/Images/Floor Plan (1).optimized.jpg', alt: 'Floor Plan 1', title: 'Floor Plan 1' },
    { src: '/Images/Floor Plan (3).optimized.jpg', alt: 'Floor Plan 3', title: 'Floor Plan 3' },
    { src: '/Images/Floor Plan (4).optimized.jpg', alt: 'Floor Plan 4', title: 'Floor Plan 4' },
    { src: '/Images/Floor Plan (5).optimized.jpg', alt: 'Floor Plan 5', title: 'Floor Plan 5' },
    { src: '/Images/Floor Plan (6).optimized.jpg', alt: 'Floor Plan 6', title: 'Floor Plan 6' },
    { src: '/Images/Floor Plan (7).optimized.jpg', alt: 'Floor Plan 7', title: 'Floor Plan 7' },
    { src: '/Images/Floor Plan (8).optimized.jpg', alt: 'Floor Plan 8', title: 'Floor Plan 8' },
    { src: '/Images/Floor Plan (9).optimized.jpg', alt: 'Floor Plan 9', title: 'Floor Plan 9' },
    { src: '/Images/Floor Plan (10).optimized.jpg', alt: 'Floor Plan 10', title: 'Floor Plan 10' },
    { src: '/Images/Floor Plan (11).optimized.jpg', alt: 'Floor Plan 11', title: 'Floor Plan 11' },
    { src: '/Images/Floor Plan (12).optimized.jpg', alt: 'Floor Plan 12', title: 'Floor Plan 12' },
    { src: '/Images/Floor Plan (13).optimized.jpg', alt: 'Floor Plan 13', title: 'Floor Plan 13' },
    { src: '/Images/Floor Plan (14).optimized.jpg', alt: 'Floor Plan 14', title: 'Floor Plan 14' }
  ]

  const flyerImages = Array.from({ length: 14 }, (_, i) => ({
    src: `/Images/flyers (${i + 1}).optimized.jpg`,
    alt: `Flyer ${i + 1}`,
    title: `Flyer ${i + 1}`
  }))

  const brochureImages = Array.from({ length: 24 }, (_, i) => ({
    src: `/Images/brochures (${i + 1}).optimized.jpg`,
    alt: `Brochure ${i + 1}`,
    title: `Brochure ${i + 1}`
  }))

  const bannerImages = [
    { src: '/Images/banners (1).optimized.jpg', alt: 'Banner 1', title: 'Banner 1' },
    { src: '/Images/banners (1).optimized.png', alt: 'Banner 1', title: 'Banner 1' },
    { src: '/Images/banners (2).optimized.png', alt: 'Banner 2', title: 'Banner 2' },
    { src: '/Images/banners (3).optimized.jpg', alt: 'Banner 3', title: 'Banner 3' },
    { src: '/Images/banners (3).optimized.png', alt: 'Banner 3', title: 'Banner 3' },
    { src: '/Images/banners (5).optimized.png', alt: 'Banner 5', title: 'Banner 5' },
    { src: '/Images/banners (6).optimized.jpg', alt: 'Banner 6', title: 'Banner 6' },
    { src: '/Images/banners (7).optimized.jpg', alt: 'Banner 7', title: 'Banner 7' },
    { src: '/Images/banners (8).optimized.jpg', alt: 'Banner 8', title: 'Banner 8' },
    { src: '/Images/banners.optimized.jpg', alt: 'Banner', title: 'Banner' }
  ]

  const menuImages = Array.from({ length: 79 }, (_, i) => ({
    src: `/Images/menus (${i + 1}).optimized.jpg`,
    alt: `Menu ${i + 1}`,
    title: `Menu ${i + 1}`
  }))

  const sectionImages = {
    logos: logoImages,
    floorPlans: floorPlanImages,
    flyers: flyerImages,
    brochures: brochureImages,
    banners: bannerImages,
    menus: menuImages
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
    <div className="graphic-design-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Graphic Design Portfolio</h1>
          <p className="page-subtitle">Brand identity, logos, flyers, and marketing materials</p>
        </div>

        <div className="section">
          <h2 className="section-title">Logos</h2>
          <div className="gallery">
            {logoImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'logos')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Floor Plans</h2>
          <div className="gallery">
            {floorPlanImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'floorPlans')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Flyers</h2>
          <div className="gallery">
            {flyerImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'flyers')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Brochures</h2>
          <div className="gallery">
            {brochureImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'brochures')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Banners</h2>
          <div className="gallery">
            {bannerImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'banners')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Menus</h2>
          <div className="gallery">
            {menuImages.map((image, index) => (
              <div key={index} className="gallery-item animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="image-container" onClick={() => handleImageClick(index, 'menus')}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="design-info">
          <div className="info-card animate-fade-in">
            <div className="info-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Design Excellence</h3>
            <p>
              Professional graphic design services including brand identity development,
              logo creation, marketing collateral, and promotional materials.
              Specializing in hospitality industry branding with modern, eye-catching designs.
            </p>
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

export default GraphicDesign
