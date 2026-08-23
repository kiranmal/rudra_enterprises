import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { heroSlides } from '../../data/siteData'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goPrev = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const goNext = () => setCurrent((prev) => (prev + 1) % heroSlides.length)

  return (
    <section id="home-hero">
      <div
        className="hero-slider-track"
        ref={trackRef}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroSlides.map((slide, idx) => (
          <div className="hero-slide" key={idx}>
            <img src={slide.src} alt={slide.alt} className="hero-slide-bg" />
          </div>
        ))}
      </div>

      <button className="slider-control-btn control-prev" onClick={goPrev} aria-label="Previous slide">
        <FaChevronLeft />
      </button>
      <button className="slider-control-btn control-next" onClick={goNext} aria-label="Next slide">
        <FaChevronRight />
      </button>
    </section>
  )
}
