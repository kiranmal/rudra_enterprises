import { useState } from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/shared/CTASection'
import useScrollReveal from '../hooks/useScrollReveal'
import { galleryImages, photo3, photo4, photo5, photo7, printer2, printer5, printer6, kyocera16h, printe7, digitalPrinter6 } from '../data/siteData'

export default function Gallery() {
  const ref = useScrollReveal()
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'Products', 'Installations', 'Maintenance', 'Projects']

  const galleryItems = [
    { img: kyocera16h, title: 'Kyocera 16 Head Printer', category: 'Products' },
    { img: printer5, title: 'Ricoh Gen6 16 Head Printer', category: 'Products' },
    { img: printer6, title: 'Ricoh Gen6 6 Head Printer', category: 'Products' },
    { img: printer2, title: 'Epson i3200 4 Head Printer', category: 'Products' },
    { img: printe7, title: 'Sublimation Printer 8 Head', category: 'Products' },
    { img: digitalPrinter6, title: 'DTF Printing Machine', category: 'Products' },
    { img: photo5, title: 'Digital Textile Printing Setup', category: 'Installations' },
    { img: photo7, title: 'Ricoh Gen6 Installation', category: 'Installations' },
    { img: photo3, title: 'DTF Printing Setup', category: 'Installations' },
    { img: photo4, title: 'Sublimation Printer Installation', category: 'Installations' },
    { img: galleryImages[0], title: 'Printer Maintenance Work', category: 'Maintenance' },
    { img: galleryImages[1], title: 'Technical Service Visit', category: 'Maintenance' },
    { img: galleryImages[2], title: 'Production Line Setup', category: 'Projects' },
    { img: galleryImages[3], title: 'Custom Printing Solution', category: 'Projects' },
    { img: galleryImages[4], title: 'Industrial Printing Project', category: 'Projects' },
    { img: galleryImages[5], title: 'Textile Printing Facility', category: 'Projects' },
  ]

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter)

  return (
    <>
      <Header />
      <PageHero
        title="Gallery"
        subtitle="Explore our collection of printers, installations, maintenance work, and successful projects"
        breadcrumb={[{ label: 'Gallery' }]}
      />

      <section className="gallery-page-section" ref={ref}>
        <div className="gallery-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`gallery-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="gallery-page-grid">
          {filtered.map((item, idx) => (
            <div className="gallery-page-item" key={idx}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-page-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Want to See More?"
        text="Contact us to schedule a visit to our facility or request a live demonstration of our printing solutions."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Request a Quote"
        secondaryTo="/request-quote"
      />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
