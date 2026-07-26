import { useState, useEffect, useCallback } from 'react'
import './ImageLightbox.css'

function ImageLightbox({ images, initialIndex = 0, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setCurrentIndex(initialIndex)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }, [initialIndex, isOpen])

  const handleNext = useCallback(() => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const handlePrevious = useCallback(() => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom((prev) => Math.max(prev - 0.5, 1))
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleWheel = (e) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    switch (e.key) {
      case 'ArrowRight':
        handleNext()
        break
      case 'ArrowLeft':
        handlePrevious()
        break
      case 'Escape':
        onClose()
        break
      case '+':
      case '=':
        handleZoomIn()
        break
      case '-':
        handleZoomOut()
        break
      default:
        break
    }
  }, [isOpen, handleNext, handlePrevious, onClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !images.length) return null

  const currentImage = images[currentIndex]

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>

        <button 
          className="lightbox-nav lightbox-prev" 
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button 
          className="lightbox-nav lightbox-next" 
          onClick={handleNext}
          aria-label="Next image"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="lightbox-image-container">
          <img
            src={currentImage.src}
            alt={currentImage.alt || currentImage.title}
            className="lightbox-image"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            draggable={false}
          />
        </div>

        <div className="lightbox-controls">
          <button 
            className="lightbox-zoom-btn" 
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            aria-label="Zoom out"
          >
            <i className="fas fa-minus"></i>
          </button>
          <span className="lightbox-zoom-level">{Math.round(zoom * 100)}%</span>
          <button 
            className="lightbox-zoom-btn" 
            onClick={handleZoomIn}
            disabled={zoom >= 4}
            aria-label="Zoom in"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="lightbox-info">
          <h3>{currentImage.title || currentImage.alt}</h3>
          <p>{currentIndex + 1} / {images.length}</p>
        </div>

        <div className="lightbox-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`lightbox-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index)
                setZoom(1)
                setPosition({ x: 0, y: 0 })
              }}
              aria-label={`Go to image ${index + 1}`}
            >
              <img src={image.src} alt={image.alt || image.title} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageLightbox
