import { Link } from 'react-router-dom'
import { footerLogo } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function Footer() {
  const ref = useScrollReveal()

  return (
    <footer ref={ref}>
      <div className="footer-grid-layout">
        <div className="footer-col-item" data-reveal="up" data-delay="1">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img src={footerLogo} alt="Rudra Enterprises Footer Logo" style={{ height: '36px', background: '#fff', padding: '2px', borderRadius: '4px' }} />
            <h3 style={{ color: '#fff', fontSize: '15px', fontWeight: 800 }}>RUDRA ENTERPRISES</h3>
          </div>
          <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.6 }}>
            Rudra Enterprises is a trusted name in the digital textile printing industry, delivering advanced printing solutions for businesses across India. We specialize in high-performance Digital Textile Printers, Sublimation Printers, and Industrial Textile Printing Machines designed to provide exceptional print quality, high-speed production, and long-lasting reliability. With a strong commitment to innovation, customer satisfaction, and technical excellence, we help textile manufacturers, garment exporters, and printing businesses achieve superior productivity and vibrant print results. Our experienced team ensures complete support, from machine selection and installation to after-sales service, making Rudra Enterprises your reliable partner for modern textile printing solutions.
          </p>
        </div>

        <div className="footer-col-item" data-reveal="up" data-delay="2">
          <h4>Quick Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/company-profile">About Us</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/printers">Products Spec</Link></li>
            <li><Link to="/maintenance">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-col-item" data-reveal="up" data-delay="3">
          <h4>Machinery Range</h4>
          <ul>
            <li><Link to="/printers">Epson i3200 Digital Textile Printers</Link></li>
            <li><Link to="/printers">Ricoh Gen6 Direct To Fabric Printers</Link></li>
            <li><Link to="/printers">Kyocera 16 Head Reactive Printers</Link></li>
            <li><Link to="/printers">DTF Printers &amp; Powder Shakers</Link></li>
            <li><Link to="/printers">Digital Sublimation Printers</Link></li>
          </ul>
        </div>
      </div>

      <div className="copyright-text">
        &copy; 2026 Rudra Enterprises. All Rights Reserved. Digital Textile Printing Solutions Noida.
      </div>
    </footer>
  )
}
