import { services } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="services" className="dark-section bg-light-surface" ref={ref}>
      <div className="section-header-center" data-reveal="up">
        <span className="section-subtitle-tag">What We Offer</span>
        <h2>Our Engineering Services</h2>
        <p>Complete support from installation to maintenance for your printing machines.</p>
        <div className="divider-glow"></div>
      </div>
      <div className="features-grid-cards">
        {services.map((service, idx) => (
          <div className="feature-card-glow" key={idx}>
            <div className="feature-icon-circle">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
