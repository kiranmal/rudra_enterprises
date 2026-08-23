import { useRef, useState, useCallback, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaXmark, FaExpand } from 'react-icons/fa6'
import { premiumProducts } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function PremiumProducts() {
  const trackRef = useRef(null)
  const revealRef = useScrollReveal()
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [direction, setDirection] = useState(1)

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768 ? 1 : 4
    }
    return 4
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())
  const totalCards = premiumProducts.length
  const maxIndex = Math.max(0, totalCards - visibleCount)

  const goToSlide = (idx) => {
    setCurrentIdx(Math.max(0, Math.min(idx, maxIndex)))
  }

  const nextSlide = () => {
    setCurrentIdx((prev) => {
      if (prev >= maxIndex) {
        setDirection(-1)
        return prev - 1
      }
      return prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIdx((prev) => {
      if (prev <= 0) {
        setDirection(1)
        return prev + 1
      }
      return prev - 1
    })
  }

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount()
      setVisibleCount(newCount)
      setCurrentIdx(prev => Math.min(prev, Math.max(0, totalCards - newCount)))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [totalCards])

  useEffect(() => {
    if (isPaused) return
    const atLastSlide = direction === 1 && currentIdx >= maxIndex
    const delay = atLastSlide ? 600 : 3000
    const timer = setTimeout(() => {
      setCurrentIdx((prev) => {
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
  }, [currentIdx, direction, isPaused, maxIndex])

  const openLightbox = (idx) => setLightboxIdx(idx)
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])

  const showPrev = useCallback(() => {
    setLightboxIdx((prev) => (prev === null ? null : (prev - 1 + premiumProducts.length) % premiumProducts.length))
  }, [])

  const showNext = useCallback(() => {
    setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % premiumProducts.length))
  }, [])

  return (
    <section id="premium-products" className="dark-section" style={{ background: '#0f172a' }} ref={revealRef}>
      <div className="section-header-center" data-reveal="up">
        <span className="section-subtitle-tag">Premium Quality</span>
        <h2>Our Premium Products</h2>
        <p>High-quality inks, spare parts and accessories for your printing machines.</p>
        <div className="divider-glow"></div>
      </div>

      <div className="product-slider-wrap">
        <div
          className="product-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next">
            <FaChevronRight />
          </button>
          <div className="product-carousel-viewport">
            <div
              className="product-carousel-track"
              ref={trackRef}
              style={{
                transform: `translateX(calc(-${currentIdx} * (var(--card-w, 300px) + var(--card-gap, 20px))))`,
                transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {premiumProducts.map((product, idx) => (
                <div className="card" key={idx}>
                  <div className="product-img-wrap" onClick={() => openLightbox(idx)}>
                    <img src={product.images[0]} alt={product.title} className="product-img" />
                    <div className="product-img-overlay">
                      <FaExpand />
                    </div>
                  </div>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <div className="rating">{product.rating}</div>
                  <a
                    href="https://wa.me/919910208858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    Enquiry Now
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <span
                key={i}
                className={`carousel-dot ${i === currentIdx ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxIdx !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <FaXmark />
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrev() }} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={premiumProducts[lightboxIdx].images[0]} alt={premiumProducts[lightboxIdx].title} className="lightbox-img" />
            <h3 className="lightbox-title">{premiumProducts[lightboxIdx].title}</h3>
            <p className="lightbox-desc">{premiumProducts[lightboxIdx].desc}</p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); showNext() }} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}
