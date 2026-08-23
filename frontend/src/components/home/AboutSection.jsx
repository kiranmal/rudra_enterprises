import { aboutCards } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="dark-section" ref={ref}>
      <div className="section-header-center" data-reveal="up">
        <span className="section-subtitle-tag">Why Choose Us</span>
        <h2>About Rudra Enterprises</h2>
        <p>We provide innovative digital printing solutions with unmatched quality, reliability and customer satisfaction.</p>
      </div>
      <div className="about-grid">
        {aboutCards.map((card, idx) => (
          <div className={`about-card ${card.featured ? 'about-card-featured' : ''}`} key={idx}>
            {card.featured && <span className="corner-fold"></span>}
            <div className="about-card-icon">
              <i className={card.icon}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
