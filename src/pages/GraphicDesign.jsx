import { useState } from 'react'
import './GraphicDesign.css'
import ImageLightbox from '../components/ImageLightbox'

function GraphicDesign() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSection, setCurrentSection] = useState('logos')

  const logoImages = Array.from({ length: 17 }, (_, i) => ({
    src: `/Images/logo_(${i + 1}).jpg`,
    alt: `Logo ${i + 1}`,
    title: `Logo ${i + 1}`
  }))

  const floorPlanImages = [
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

  const flyerImages = Array.from({ length: 14 }, (_, i) => ({
    src: `/Images/flyers_(${i + 1}).jpg`,
    alt: `Flyer ${i + 1}`,
    title: `Flyer ${i + 1}`
  }))

  const brochureImages = Array.from({ length: 24 }, (_, i) => ({
    src: `/Images/brochures_(${i + 1}).jpg`,
    alt: `Brochure ${i + 1}`,
    title: `Brochure ${i + 1}`
  }))

  const bannerImages = [
    { src: '/Images/banners.jpg', alt: 'Banner', title: 'Banner' }
  ]

  const menuImages = Array.from({ length: 79 }, (_, i) => ({
    src: `/Images/menus_(${i + 1}).jpg`,
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
