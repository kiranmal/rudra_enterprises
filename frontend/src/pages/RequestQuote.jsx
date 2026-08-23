import { useState } from 'react'
import { FaPaperPlane, FaBolt, FaUserTie, FaSliders, FaHeadset } from 'react-icons/fa6'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { productSelectOptions } from '../data/siteData'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function RequestQuote() {
  const ref = useScrollReveal()
  const [status, setStatus] = useState({ submitted: false, submitting: false, message: '', error: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitted: false, submitting: true, message: '', error: '' })

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch(`${API_URL}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()

      if (res.ok && result.success) {
        setStatus({ submitted: true, submitting: false, message: result.message, error: '' })
        e.target.reset()
        setTimeout(() => setStatus(s => ({ ...s, submitted: false, message: '' })), 6000)
      } else {
        setStatus({ submitted: false, submitting: false, message: '', error: result.message || 'Something went wrong.' })
      }
    } catch (err) {
      setStatus({ submitted: false, submitting: false, message: '', error: 'Failed to send. Please try again later.' })
    }
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
            {status.submitted && (
              <div className="form-success-msg show">
                <i className="fa-solid fa-circle-check"></i>
                {status.message}
              </div>
            )}
            {status.error && (
              <div className="form-error-msg show">
                <i className="fa-solid fa-circle-exclamation"></i>
                {status.error}
              </div>
            )}
            <h3>Get Your Custom Quote</h3>
            <p className="quote-form-subtitle">Fill in the details below and we'll prepare a personalized quote for you.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
                <div className="form-group">
                  <input name="name" type="text" className="form-input-styled" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input name="company" type="text" className="form-input-styled" placeholder="Company Name" />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
                <div className="form-group">
                  <input name="email" type="email" className="form-input-styled" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input name="phone" type="tel" className="form-input-styled" placeholder="Phone Number" required />
                </div>
              </div>
              <div className="form-group">
                <select name="product" className="form-input-styled" required>
                  <option value="" disabled selected>Product / Service Required</option>
                  {productSelectOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select name="category" className="form-input-styled">
                  <option value="" disabled selected>Select Category (Optional)</option>
                  <option value="New Printer Purchase">New Printer Purchase</option>
                  <option value="Maintenance / AMC">Maintenance / AMC</option>
                  <option value="Spare Parts / Inks">Spare Parts / Inks</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <input name="budget" type="text" className="form-input-styled" placeholder="Estimated Requirement / Budget Range" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-input-styled" rows="4" placeholder="Message / Detailed Requirements..." required></textarea>
              </div>
              <button type="submit" className="contact-btn btn-shine" style={{ width: '100%', borderRadius: '8px' }} disabled={status.submitting}>
                <FaPaperPlane />
                {status.submitting ? 'Sending...' : 'Submit Quote Request'}
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
