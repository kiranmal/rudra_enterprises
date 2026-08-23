import { useState } from 'react'
import { FaPaperPlane, FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/shared/CTASection'
import useScrollReveal from '../hooks/useScrollReveal'
import { contactInfo, productSelectOptions } from '../data/siteData'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const ref = useScrollReveal()
  const [status, setStatus] = useState({ submitted: false, submitting: false, message: '', error: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitted: false, submitting: true, message: '', error: '' })

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
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

  const infoCards = [
    { icon: <FaLocationDot />, title: 'Office Address', text: contactInfo.address },
    { icon: <FaPhone />, title: 'Phone Number', text: contactInfo.phones },
    { icon: <FaEnvelope />, title: 'Email Address', text: contactInfo.email },
    { icon: <FaClock />, title: 'Working Hours', text: 'Mon - Sat: 9:00 AM - 7:00 PM' },
  ]

  return (
    <>
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, support, or to request a quote"
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="content-section">
        <div className="contact-info-grid">
          {infoCards.map((card, idx) => (
            <div className="contact-info-card" key={idx}>
              <div className="contact-info-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section-alt" ref={ref}>
        <div className="contact-page-layout">
          <div className="contact-page-aside">
            <h3>Get In Touch</h3>
            <p>Whether you're looking for a new printer, need maintenance support, or want to learn more about our digital textile printing solutions — we're here to help. Fill out the form and our team will get back to you within 24 hours.</p>
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><FaLocationDot /></div>
              <div className="contact-detail-text">
                <strong>Address</strong>
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><FaPhone /></div>
              <div className="contact-detail-text">
                <strong>Phone</strong>
                <span>{contactInfo.phones}</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><FaEnvelope /></div>
              <div className="contact-detail-text">
                <strong>Email</strong>
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><FaClock /></div>
              <div className="contact-detail-text">
                <strong>Working Hours</strong>
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          <div className="contact-page-form">
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
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
                <div className="form-group">
                  <input name="name" type="text" className="form-input-styled" placeholder="Your Full Name" required />
                </div>
                <div className="form-group">
                  <input name="phone" type="tel" className="form-input-styled" placeholder="Mobile Number" required />
                </div>
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-input-styled" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select name="product" className="form-input-styled" required>
                  <option value="" disabled selected>Select Subject</option>
                  {productSelectOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" className="form-input-styled" rows="5" placeholder="Your Message..." required></textarea>
              </div>
              <button type="submit" className="contact-btn btn-shine" style={{ width: '100%', borderRadius: '8px' }} disabled={status.submitting}>
                <FaPaperPlane />
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.076!2d77.332!3d28.628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d1!2sSector%2010%20Noida!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rudra Enterprises Location"
          ></iframe>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        text="Request a personalized quote for your printing requirements today."
        primaryLabel="Request a Quote"
        primaryTo="/request-quote"
      />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
