import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import SectionHeading from '../components/shared/SectionHeading'
import CTASection from '../components/shared/CTASection'
import useScrollReveal from '../hooks/useScrollReveal'
import { photo3, photo7 } from '../data/siteData'

export default function MissionVision() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()

  const coreValues = [
    { icon: 'fa-solid fa-award', title: 'Quality', desc: 'We deliver only the highest quality printing solutions, ensuring superior print results and long-lasting performance.' },
    { icon: 'fa-solid fa-lightbulb', title: 'Innovation', desc: 'Continuously embracing the latest printing technologies to provide cutting-edge solutions to our clients.' },
    { icon: 'fa-solid fa-handshake', title: 'Integrity', desc: 'Building trust through transparent business practices and honest recommendations for every customer.' },
    { icon: 'fa-solid fa-shield-halved', title: 'Reliability', desc: 'Dependable products and services that businesses can count on for uninterrupted production.' },
    { icon: 'fa-solid fa-users', title: 'Customer Focus', desc: 'Every decision we make is centered around delivering exceptional value and satisfaction to our clients.' },
    { icon: 'fa-solid fa-arrow-up', title: 'Continuous Improvement', desc: 'Constantly evolving our processes, skills, and offerings to serve our customers better every day.' },
  ]

  const commitments = [
    { icon: 'fa-solid fa-headset', title: '24/7 Support', desc: 'Round-the-clock technical assistance for uninterrupted production.' },
    { icon: 'fa-solid fa-truck-fast', title: 'Fast Service', desc: 'Quick response times with PAN India service network coverage.' },
    { icon: 'fa-solid fa-handshake-angle', title: 'Long-term Partnership', desc: 'Building lasting relationships through consistent quality and trust.' },
  ]

  return (
    <>
      <Header />
      <PageHero
        title="Mission & Vision"
        subtitle="Driving innovation in digital textile printing with a clear purpose and forward-thinking approach"
        breadcrumb={[{ label: 'About Us' }, { label: 'Mission & Vision' }]}
      />

      <section className="content-section" ref={ref1}>
        <div className="content-two-col">
          <div className="content-text">
            <div className="accent-line"></div>
            <h2>Our Mission</h2>
            <p>To empower textile businesses across India with cutting-edge digital printing technology that delivers superior print quality, maximum productivity, and long-term reliability.</p>
            <p>We strive to make advanced textile printing accessible and affordable for manufacturers of all sizes — from small garment units to large-scale industrial textile factories. Our mission is to bridge the technology gap and help Indian textile manufacturers compete globally.</p>
            <ul>
              <li>Provide advanced digital printing technology</li>
              <li>Ensure superior print quality and productivity</li>
              <li>Make technology accessible for all business sizes</li>
              <li>Support the growth of Indian textile industry</li>
            </ul>
          </div>
          <div className="content-image">
            <img src={photo3} alt="Our Mission - Digital Textile Printing" />
          </div>
        </div>
      </section>

      <section className="content-section-alt" ref={ref2}>
        <div className="content-two-col reverse">
          <div className="content-text">
            <div className="accent-line"></div>
            <h2>Our Vision</h2>
            <p>To become India's most trusted and preferred supplier of digital textile printing solutions, recognized for innovation, customer satisfaction, and technical excellence.</p>
            <p>We envision a future where every textile manufacturer has access to world-class printing technology — enabling them to produce vibrant, high-quality prints efficiently and cost-effectively. We aim to be the driving force behind India's digital textile printing revolution.</p>
            <ul>
              <li>Become India's most trusted printing solutions provider</li>
              <li>Lead innovation in digital textile printing</li>
              <li>Enable global competitiveness for Indian manufacturers</li>
              <li>Set industry benchmarks for service excellence</li>
            </ul>
          </div>
          <div className="content-image">
            <img src={photo7} alt="Our Vision - Future of Textile Printing" />
          </div>
        </div>
      </section>

      <section className="content-section" ref={ref3}>
        <SectionHeading tag="What We Stand For" title="Our Core Values" text="The principles that guide every decision we make and every relationship we build." />
        <div className="values-grid">
          {coreValues.map((value, idx) => (
            <div className="value-card" key={idx}>
              <div className="value-icon">
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="commitment-section" ref={ref4}>
        <div className="commitment-content">
          <h2>Our Commitment</h2>
          <p>We are committed to building long-term relationships with our customers by consistently delivering value, quality, and exceptional service. Our success is measured by the success of our clients.</p>
          <div className="commitment-features">
            {commitments.map((item, idx) => (
              <div className="commitment-feature" key={idx}>
                <i className={item.icon}></i>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build the Future Together"
        text="Join hundreds of satisfied clients who trust Rudra Enterprises for their digital textile printing needs."
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
