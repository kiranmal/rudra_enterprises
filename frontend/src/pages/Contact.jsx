import { useState } from 'react'
import { FaPaperPlane, FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/shared/CTASection'
import useScrollReveal from '../hooks/useScrollReveal'
import { contactInfo, productSelectOptions } from '../data/siteData'

export default function Contact() {
  const ref = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 5000)
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
            {submitted && (
              <div className="form-success-msg show">
                <i className="fa-solid fa-circle-check"></i>
                Thank you! Your message has been sent. We'll get back to you within 24 hours.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
                <div className="form-group">
                  <input type="text" className="form-input-styled" placeholder="Your Full Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-input-styled" placeholder="Mobile Number" required />
                </div>
              </div>
              <div className="form-group">
                <input type="email" className="form-input-styled" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select className="form-input-styled" required>
                  <option value="" disabled selected>Select Subject</option>
                  {productSelectOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <textarea className="form-input-styled" rows="5" placeholder="Your Message..." required></textarea>
              </div>
              <button type="submit" className="contact-btn btn-shine" style={{ width: '100%', borderRadius: '8px' }}>
                <FaPaperPlane />
                Send Message
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
