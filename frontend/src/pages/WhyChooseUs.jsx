import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import SectionHeading from '../components/shared/SectionHeading'
import CTASection from '../components/shared/CTASection'
import useScrollReveal from '../hooks/useScrollReveal'

export default function WhyChooseUs() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  const features = [
    { icon: 'fa-solid fa-user-gear', title: 'Experienced Professionals', desc: 'Our team brings 15+ years of hands-on experience in digital textile printing technology.' },
    { icon: 'fa-solid fa-medal', title: 'Quality Products', desc: 'We supply only premium printers with genuine Epson, Ricoh, and Kyocera printheads.' },
    { icon: 'fa-solid fa-microchip', title: 'Advanced Technology', desc: 'Latest generation printing technology with superior speed, precision, and color accuracy.' },
    { icon: 'fa-solid fa-headset', title: 'Reliable Support', desc: '24/7 technical support with remote guidance and on-site engineer visits.' },
    { icon: 'fa-solid fa-bolt', title: 'Fast Service', desc: 'Quick response times and PAN India service network for minimal downtime.' },
    { icon: 'fa-solid fa-sliders', title: 'Customized Solutions', desc: 'Tailored printing solutions matched to your specific fabric type and production needs.' },
    { icon: 'fa-solid fa-tags', title: 'Affordable Pricing', desc: 'Competitive pricing without compromising on quality or after-sales service.' },
    { icon: 'fa-solid fa-heart', title: 'Customer Satisfaction', desc: '500+ happy clients across India trust us for their printing technology needs.' },
  ]

  const process = [
    { num: '01', title: 'Understand Your Requirement', desc: 'We analyze your fabric type, production volume, and quality needs to recommend the best solution.' },
    { num: '02', title: 'Recommend the Right Solution', desc: 'Our experts suggest the ideal printer model, ink type, and configuration for your specific use case.' },
    { num: '03', title: 'Installation & Implementation', desc: 'On-site installation with precision alignment, calibration, and hands-on operator training.' },
    { num: '04', title: 'Ongoing Support', desc: 'Continuous technical support, maintenance services, and genuine spare parts supply.' },
  ]

  return (
    <>
      <Header />
      <PageHero
        title="Why Choose Us"
        subtitle="Discover what makes Rudra Enterprises the preferred choice for digital textile printing solutions"
        breadcrumb={[{ label: 'About Us' }, { label: 'Why Choose Us' }]}
      />

      <section className="content-section" ref={ref1}>
        <SectionHeading tag="Why Choose Rudra Enterprises" title="The Rudra Advantage" text="We combine industry expertise, premium products, and exceptional service to deliver complete printing solutions that drive your business forward." />
        <div className="feature-grid">
          {features.map((item, idx) => (
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

      <section className="difference-section" ref={ref2}>
        <SectionHeading tag="The Difference" title="Why We Are Different" text="See what sets us apart from typical printing equipment suppliers." />
        <div className="difference-grid">
          <div className="difference-card good">
            <h3><i className="fa-solid fa-circle-check"></i> With Rudra Enterprises</h3>
            <ul>
              <li>Genuine printers with original printheads</li>
              <li>Expert on-site installation and training</li>
              <li>24/7 technical support across India</li>
              <li>Comprehensive AMC and maintenance plans</li>
              <li>Genuine inks and spare parts supply</li>
              <li>Customized solutions for your needs</li>
              <li>15+ years of proven industry experience</li>
            </ul>
          </div>
          <div className="difference-card bad">
            <h3><i className="fa-solid fa-circle-xmark"></i> Typical Suppliers</h3>
            <ul>
              <li>Generic equipment with unclear specifications</li>
              <li>Self-installation with no professional guidance</li>
              <li>Limited or no after-sales support</li>
              <li>No maintenance contracts available</li>
              <li>Unreliable ink and parts supply chain</li>
              <li>One-size-fits-all approach</li>
              <li>Limited industry experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-section" ref={ref3}>
        <SectionHeading tag="How We Work" title="Our Process" text="A structured approach to ensure you get the right printing solution and ongoing support." />
        <div className="process-grid">
          {process.map((step, idx) => (
            <div className="process-step" key={idx}>
              <div className="process-step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Experience the Rudra Difference"
        text="Let us help you find the perfect printing solution for your business needs."
        primaryLabel="Request a Quote"
        primaryTo="/request-quote"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
