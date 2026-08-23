import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import SectionHeading from '../components/shared/SectionHeading'
import CTASection from '../components/shared/CTASection'
import StatsCounter from '../components/shared/StatsCounter'
import useScrollReveal from '../hooks/useScrollReveal'
import { photo5, printer5 } from '../data/siteData'

export default function CompanyProfile() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  const expertise = [
    { icon: 'fa-solid fa-print', title: 'Printer Solutions', desc: 'Wide range of digital textile printers with Epson, Ricoh, and Kyocera printheads.' },
    { icon: 'fa-solid fa-screwdriver-wrench', title: 'Installation', desc: 'Expert on-site installation with precision alignment and calibration.' },
    { icon: 'fa-solid fa-shield-halved', title: 'Maintenance', desc: 'Comprehensive AMC plans and preventive maintenance services.' },
    { icon: 'fa-solid fa-headset', title: 'Technical Support', desc: '24/7 remote guidance and physical engineer visits across India.' },
    { icon: 'fa-solid fa-building', title: 'Commercial Solutions', desc: 'Tailored printing solutions for commercial and industrial applications.' },
    { icon: 'fa-solid fa-users', title: 'Customer Service', desc: 'Dedicated support team committed to complete customer satisfaction.' },
  ]

  return (
    <>
      <Header />
      <PageHero
        title="Company Profile"
        subtitle="Trusted provider of digital textile printing solutions across India"
        breadcrumb={[{ label: 'About Us' }, { label: 'Company Profile' }]}
      />

      <section className="content-section" ref={ref1}>
        <div className="content-two-col">
          <div className="content-text">
            <div className="accent-line"></div>
            <h2>Who We Are</h2>
            <p>Rudra Enterprises is a leading supplier of digital textile printing solutions in India. We specialize in providing high-performance digital textile printers, sublimation printers, and industrial printing machines designed to deliver exceptional print quality and productivity.</p>
            <p>With over 15 years of industry experience, we have established ourselves as a trusted partner for textile manufacturers, garment exporters, and printing businesses across the country. Our commitment to innovation, quality, and customer satisfaction sets us apart.</p>
            <ul>
              <li>15+ years of industry expertise</li>
              <li>500+ satisfied clients across India</li>
              <li>1200+ machines successfully installed</li>
              <li>PAN India service network coverage</li>
            </ul>
          </div>
          <div className="content-image">
            <img src={photo5} alt="Rudra Enterprises Digital Textile Printing" />
          </div>
        </div>
      </section>

      <section className="content-section-alt" ref={ref2}>
        <div className="content-two-col reverse">
          <div className="content-text">
            <div className="accent-line"></div>
            <h2>Our Story & Growth</h2>
            <p>Founded with a vision to make advanced digital textile printing technology accessible to manufacturers of all sizes, Rudra Enterprises has grown from a small startup to a nationally recognized supplier of premium printing solutions.</p>
            <p>Our journey has been marked by continuous innovation, strategic partnerships with leading printhead manufacturers like Epson, Ricoh, and Kyocera, and an unwavering focus on customer success. We have helped hundreds of businesses transition from traditional printing methods to efficient digital solutions.</p>
            <p>Today, we proudly serve clients across India with a comprehensive range of printers, inks, spare parts, and technical services — all backed by our commitment to excellence and long-term reliability.</p>
          </div>
          <div className="content-image">
            <img src={printer5} alt="Rudra Enterprises Industrial Printer" />
          </div>
        </div>
      </section>

      <section className="page-stats-section">
        <StatsCounter />
      </section>

      <section className="content-section" ref={ref3}>
        <SectionHeading tag="Our Expertise" title="What We Specialize In" text="Comprehensive digital textile printing solutions from supply to installation to ongoing support." />
        <div className="feature-grid feature-grid-3">
          {expertise.map((item, idx) => (
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
        title="Ready to Elevate Your Printing Business?"
        text="Contact us today for a free consultation and discover how our digital textile printing solutions can transform your production capabilities."
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
