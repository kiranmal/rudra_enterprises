import { FaLocationDot, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa6'
import { contactInfo, productSelectOptions } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting Rudra Enterprises! Our specialist will call you shortly.')
  }

  return (
    <section id="contact" className="dark-section" ref={ref}>
      <div className="section-header-center" data-reveal="up">
        <span className="section-subtitle-tag">Get In Touch</span>
        <h2>Contact Our Team</h2>
        <div className="divider-glow"></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '35px', maxWidth: '1200px', margin: '0 auto' }}>
        <div data-reveal="left">
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Grow Your Business With Rudra Enterprises
          </h3>
          <p style={{ color: '#94a3b8', marginBottom: '25px', fontSize: '14.5px' }}>
            Contact us today to schedule a live machine demo, receive technical specification brochures, or get custom pricing for your facility.
          </p>

          <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(56,189,248,0.08)', color: '#38bdf8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
              <FaLocationDot />
            </div>
            <div>
              <strong style={{ color: '#fff', fontSize: '13.5px' }}>Office Address:</strong>
              <p style={{ color: '#94a3b8', fontSize: '13px' }}>{contactInfo.address}</p>
            </div>
          </div>

          <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(56,189,248,0.08)', color: '#38bdf8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
              <FaPhone />
            </div>
            <div>
              <strong style={{ color: '#fff', fontSize: '13.5px' }}>Contact Numbers:</strong>
              <p style={{ color: '#94a3b8', fontSize: '13px' }}>{contactInfo.phones}</p>
            </div>
          </div>

          <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(56,189,248,0.08)', color: '#38bdf8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
              <FaEnvelope />
            </div>
            <div>
              <strong style={{ color: '#fff', fontSize: '13.5px' }}>Email Inquiry:</strong>
              <p style={{ color: '#94a3b8', fontSize: '13px' }}>{contactInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="contact-glass-card" data-reveal="right" data-delay="2">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
              <div className="form-group">
                <input type="text" className="form-input-styled" placeholder="Your Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-input-styled" placeholder="Mobile Number" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input-styled" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select className="form-input-styled">
                  {productSelectOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-input-styled" rows="5" placeholder="Mention your fabric type or production requirements..."></textarea>
            </div>
            <button type="submit" className="contact-btn btn-shine" style={{ width: '100%', borderRadius: '8px' }}>
              <FaPaperPlane />
              Submit Requirement
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
