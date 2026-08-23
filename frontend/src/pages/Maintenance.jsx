import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import SectionHeading from '../components/shared/SectionHeading'
import CTASection from '../components/shared/CTASection'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Maintenance() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  const services = [
    { icon: 'fa-solid fa-screwdriver-wrench', title: 'Preventive Maintenance', desc: 'Scheduled maintenance visits to keep your printers running at peak performance.' },
    { icon: 'fa-solid fa-wrench', title: 'Printer Repair', desc: 'Fast and reliable repair services for all types of printing issues and breakdowns.' },
    { icon: 'fa-solid fa-file-contract', title: 'Annual Maintenance Contracts', desc: 'Comprehensive AMC plans for year-round peace of mind and priority service.' },
    { icon: 'fa-solid fa-truck-medical', title: 'Emergency Support', desc: 'Rapid response emergency support to minimize production downtime.' },
    { icon: 'fa-solid fa-house-laptop', title: 'On-Site Service', desc: 'Physical engineer visits across India for hands-on troubleshooting and repair.' },
    { icon: 'fa-solid fa-gears', title: 'Spare Parts Replacement', desc: 'Genuine spare parts and printhead replacement with quick turnaround times.' },
  ]

  const timeline = [
    { num: '01', title: 'Request Service', desc: 'Contact us via phone, email, or WhatsApp to raise a service request.' },
    { num: '02', title: 'Technical Inspection', desc: 'Our engineer diagnoses the issue through remote guidance or on-site inspection.' },
    { num: '03', title: 'Repair / Maintenance', desc: 'Professional repair or maintenance work carried out using genuine parts.' },
    { num: '04', title: 'Testing & Quality Check', desc: 'Thorough testing and quality verification to ensure optimal print performance.' },
    { num: '05', title: 'Service Completion', desc: 'Service completed with detailed report and recommendations for ongoing care.' },
  ]

  const benefits = [
    { icon: 'fa-solid fa-clock', title: 'Reduce Downtime', desc: 'Minimize production interruptions with proactive maintenance.' },
    { icon: 'fa-solid fa-gauge-high', title: 'Improve Performance', desc: 'Keep your printers operating at maximum speed and quality.' },
    { icon: 'fa-solid fa-arrows-rotate', title: 'Extend Equipment Life', desc: 'Prolong the lifespan of your printing machines with regular care.' },
    { icon: 'fa-solid fa-money-bill-trend-up', title: 'Reduce Repair Costs', desc: 'Prevent costly breakdowns with scheduled preventive maintenance.' },
  ]

  return (
    <>
      <Header />
      <PageHero
        title="Maintenance & Support"
        subtitle="Professional maintenance services and technical support to keep your printing operations running smoothly"
        breadcrumb={[{ label: 'Maintenance' }]}
      />

      <section className="content-section" ref={ref1}>
        <SectionHeading tag="Our Services" title="Maintenance Services" text="Comprehensive maintenance and support solutions designed to maximize your printer uptime and performance." />
        <div className="feature-grid feature-grid-3">
          {services.map((item, idx) => (
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

      <section className="timeline-section" ref={ref2}>
        <SectionHeading tag="Service Process" title="How Our Service Works" text="A structured service process designed to get your printers back up and running as quickly as possible." />
        <div className="timeline">
          {timeline.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot">{item.num}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section-alt" ref={ref3}>
        <SectionHeading tag="Why It Matters" title="Benefits of Regular Maintenance" text="Regular maintenance is an investment that pays off through improved performance, reduced costs, and longer equipment life." />
        <div className="feature-grid feature-grid-2">
          {benefits.map((item, idx) => (
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
        title="Need Maintenance or Support?"
        text="Don't let printer issues slow down your production. Contact us today for fast, reliable service."
        primaryLabel="Book a Service"
        primaryTo="/contact"
        secondaryLabel="Request Support"
        secondaryTo="/request-quote"
      />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
