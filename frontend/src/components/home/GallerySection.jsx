import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import { galleryImages } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function Gallery() {
  const revealRef = useScrollReveal()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [popupActive, setPopupActive] = useState(false)
  const [popupImg, setPopupImg] = useState(null)

  const total = galleryImages.length
  const maxIndex = total - 1

  const goPrev = () => {
    setCurrent((prev) => {
      if (prev <= 0) {
        setDirection(1)
        return prev + 1
      }
      return prev - 1
    })
  }

  const goNext = () => {
    setCurrent((prev) => {
      if (prev >= maxIndex) {
        setDirection(-1)
        return prev - 1
      }
      return prev + 1
    })
  }

  const goToSlide = (idx) => setCurrent(idx)

  useEffect(() => {
    if (isPaused) return
    const atEnd = direction === 1 && current >= maxIndex
    const atStart = direction === -1 && current <= 0
    const delay = atEnd || atStart ? 800 : 4000
    const timer = setTimeout(() => {
      setCurrent((prev) => {
        if (direction === 1 && prev >= maxIndex) {
          setDirection(-1)
          return prev - 1
        }
        if (direction === -1 && prev <= 0) {
          setDirection(1)
          return prev + 1
        }
        return prev + direction
      })
    }, delay)
    return () => clearTimeout(timer)
  }, [current, direction, isPaused, maxIndex])

  const openPopup = (src) => {
    setPopupImg(src)
    setPopupActive(true)
  }

  const closePopup = () => {
    setPopupActive(false)
  }

  return (
    <>
      <section id="gallery" className="premium-gallery" ref={revealRef}>
        <div className="section-header-center" data-reveal="up">
          <span className="section-subtitle-tag">Visual Showcase</span>
          <h2>Gallery</h2>
          <p>Explore our textile printing machines, installations, customer sites and live production units.</p>
          <div className="divider-glow"></div>
        </div>

        <div
          className="gallery-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="gallery-arrow left" onClick={goPrev} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <button className="gallery-arrow right" onClick={goNext} aria-label="Next">
            <FaChevronRight />
          </button>
          <div
            className="gallery-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {galleryImages.map((img, idx) => (
              <div className="gallery-item" key={idx}>
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  onClick={() => openPopup(img)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-dots">
          {galleryImages.map((_, i) => (
            <span
              key={i}
              className={`gallery-dot ${i === current ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </section>

      {popupActive && (
        <div className="gallery-popup active" onClick={closePopup}>
          <span className="popup-close" onClick={closePopup}>
            <FaXmark />
          </span>
          <img src={popupImg} alt="Gallery popup" className="popup-image" />
        </div>
      )}
    </>
  )
}
