import { features } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function WhyChooseUs() {
  const ref = useScrollReveal()

  return (
    <section id="why-choose-us" className="dark-section" ref={ref}>
      <div className="section-header-center" data-reveal="up">
        <span className="section-subtitle-tag">Our Advantages</span>
        <h2>Why Choose Rudra Enterprises?</h2>
        <p>We deliver industry-leading digital textile printing solutions with unmatched quality and support.</p>
        <div className="divider-glow"></div>
      </div>
      <div className="features-grid-cards">
        {features.map((feature, idx) => (
          <div className="feature-card-glow" key={idx}>
            <span className="feature-card-top-bar"></span>
            <div className="feature-icon-circle">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
