import { missionVision } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function MissionVision() {
  const ref = useScrollReveal()

  return (
    <section id="mission-vision" className="dark-section bg-light-surface" ref={ref}>
      <div className="section-header-center" data-reveal="up">
        <span className="section-subtitle-tag">Trusted Technology Partner</span>
        <h2>Rudra Enterprises</h2>
        <div className="divider-glow"></div>
        <p className="mv-intro">
          Rudra Enterprises is a premier supplier of high-speed Digital Textile Printing Machines and industrial printing equipment in India.
          We cater to garment exporters, fashion brands, home furnishing manufacturers, and commercial print shops. Offering equipment
          supported by Epson, Ricoh Gen6, and Kyocera technologies, we combine advanced machinery with installation, NeoStampa RIP
          calibration, and full technical maintenance.
        </p>
      </div>
      <div className="mission-vision-grid">
        {missionVision.map((item, idx) => (
          <div className="mv-card" key={idx}>
            <div className="mv-icon-wrap">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
