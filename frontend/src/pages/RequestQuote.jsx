import { useState } from 'react'
import { FaPaperPlane, FaBolt, FaUserTie, FaSliders, FaHeadset } from 'react-icons/fa6'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { productSelectOptions } from '../data/siteData'

export default function RequestQuote() {
  const ref = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const benefits = [
    { icon: <FaBolt />, title: 'Quick Response', desc: 'Get a detailed quote within 24 hours of your request.' },
    { icon: <FaUserTie />, title: 'Professional Consultation', desc: 'Expert advice on the best printing solution for your needs.' },
    { icon: <FaSliders />, title: 'Customized Solution', desc: 'Tailored recommendations based on your fabric and volume.' },
    { icon: <FaHeadset />, title: 'Expert Support', desc: 'Full technical support from selection to installation and beyond.' },
  ]

  return (
    <>
      <Header />
      <PageHero
        title="Request a Quote"
        subtitle="Fill out the form below and our team will provide you with a customized quote for your printing requirements"
        breadcrumb={[{ label: 'Request Quote' }]}
      />

      <section className="quote-page-section" ref={ref}>
        <div className="quote-page-layout">
          <div className="quote-aside">
            <h3>Why Request a Quote from Us?</h3>
            <p>We understand that every printing business has unique requirements. By requesting a quote, you'll receive a personalized proposal that matches your specific needs, budget, and production goals.</p>
            {benefits.map((item, idx) => (
              <div className="quote-benefit-item" key={idx}>
                <div className="quote-benefit-icon">{item.icon}</div>
                <div className="quote-benefit-text">
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="quote-form-card">
            {submitted && (
              <div className="form-success-msg show">
                <i className="fa-solid fa-circle-check"></i>
                Thank you! Your quote request has been submitted. Our team will contact you within 24 hours.
              </div>
            )}
            <h3>Get Your Custom Quote</h3>
            <p className="quote-form-subtitle">Fill in the details below and we'll prepare a personalized quote for you.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
                <div className="form-group">
                  <input type="text" className="form-input-styled" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-input-styled" placeholder="Company Name" />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
                <div className="form-group">
                  <input type="email" className="form-input-styled" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-input-styled" placeholder="Phone Number" required />
                </div>
              </div>
              <div className="form-group">
                <select className="form-input-styled" required>
                  <option value="" disabled selected>Product / Service Required</option>
                  {productSelectOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select className="form-input-styled">
                  <option value="" disabled selected>Select Category (Optional)</option>
                  <option>New Printer Purchase</option>
                  <option>Maintenance / AMC</option>
                  <option>Spare Parts / Inks</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" className="form-input-styled" placeholder="Estimated Requirement / Budget Range" />
              </div>
              <div className="form-group">
                <textarea className="form-input-styled" rows="4" placeholder="Message / Detailed Requirements..." required></textarea>
              </div>
              <button type="submit" className="contact-btn btn-shine" style={{ width: '100%', borderRadius: '8px' }}>
                <FaPaperPlane />
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
