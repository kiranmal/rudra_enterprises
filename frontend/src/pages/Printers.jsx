import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import SectionHeading from '../components/shared/SectionHeading'
import CTASection from '../components/shared/CTASection'
import useScrollReveal from '../hooks/useScrollReveal'
import { kyocera16h, printer5, printer6, printer2, printe7, digitalPrinter6 } from '../data/siteData'

export default function Printers() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  const categories = [
    { img: kyocera16h, title: 'Kyocera 16 Head Printers', desc: 'Ultra-high-speed digital textile printers with Kyocera printheads for maximum productivity.' },
    { img: printer5, title: 'Ricoh Gen6 Printers', desc: 'High-speed direct-to-fabric printers with Ricoh Gen6 printheads for superior quality.' },
    { img: printer6, title: 'Ricoh 6 Head Printers', desc: 'Versatile digital textile printers with 6-head Ricoh Gen6 configuration for medium production.' },
    { img: printer2, title: 'Epson i3200 Printers', desc: 'Reliable 4-head Epson i3200 digital textile printers for everyday printing needs.' },
    { img: printe7, title: 'Sublimation Printers', desc: 'High-speed digital sublimation printers with 8-head Epson i3200 for transfer printing.' },
    { img: digitalPrinter6, title: 'DTF Printing Machines', desc: 'Direct-to-film printing machines with 2/4 Epson i3200 heads for vibrant DTF prints.' },
  ]

  const advantages = [
    { icon: 'fa-solid fa-gauge-high', title: 'High Speed', desc: 'Print speeds up to 324 m²/h for maximum production efficiency.' },
    { icon: 'fa-solid fa-palette', title: 'Vibrant Colors', desc: '8-color printing with reactive, disperse, and pigment inks for stunning results.' },
    { icon: 'fa-solid fa-ruler', title: 'Wide Format', desc: 'Printing widths up to 2.6 meters for large-scale textile production.' },
    { icon: 'fa-solid fa-microchip', title: 'Latest Technology', desc: 'Equipped with original Epson, Ricoh, and Kyocera printheads.' },
    { icon: 'fa-solid fa-shield-halved', title: 'Reliable Performance', desc: 'Heavy-duty construction with magnetic linear rails for long-term operation.' },
    { icon: 'fa-solid fa-headset', title: 'Full Support', desc: 'Complete installation, training, and ongoing technical support included.' },
  ]

  return (
    <>
      <Header />
      <PageHero
        title="Printer Solutions"
        subtitle="Explore our comprehensive range of digital textile printers, sublimation printers, and DTF machines"
        breadcrumb={[{ label: 'Printer Solutions' }]}
      />

      <section className="content-section" ref={ref1}>
        <SectionHeading tag="Our Product Range" title="Printer Categories" text="From high-speed industrial printers to versatile sublimation machines — find the perfect printing solution for your business." />
        <div className="feature-grid feature-grid-3">
          {categories.map((cat, idx) => (
            <div className="printer-category-card" key={idx}>
              <div className="printer-category-img">
                <img src={cat.img} alt={cat.title} />
              </div>
              <div className="printer-category-body">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <Link to="/request-quote" className="btn-cta btn-shine" style={{ padding: '12px 28px', fontSize: '14px' }}>
                  Request Quote
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section-alt" ref={ref2}>
        <SectionHeading tag="Why Choose Our Printers" title="Built for Performance" text="Our printers are engineered to deliver exceptional print quality, high-speed production, and reliable long-term performance." />
        <div className="feature-grid feature-grid-3">
          {advantages.map((item, idx) => (
            <div className="feature-card-glow" key={idx}>
              <div className="feature-card-top-bar"></div>
              <div className="feature-icon-circle">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Printer Is Right for You?"
        text="Our experts will help you choose the perfect printing solution based on your fabric type, production volume, and quality requirements."
        primaryLabel="Talk to an Expert"
        primaryTo="/contact"
        secondaryLabel="Request a Quote"
        secondaryTo="/request-quote"
      />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
