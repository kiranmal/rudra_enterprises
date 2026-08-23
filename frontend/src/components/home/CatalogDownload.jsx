import companyProfile from '../../assets/rudra-enterprises-company-profile.pdf'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function CatalogDownload() {
  const ref = useScrollReveal()

  return (
    <section className="catalog-download-section" ref={ref}>
      <div className="catalog-container" data-reveal="scale">
        <h2>Download Product Catalogue</h2>
        <p>
          Explore our complete range of Digital Textile Printers with detailed specifications, applications and technical features.
        </p>
        <a
          href={companyProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="catalog-btn btn-shine"
        >
          Download Catalogue
        </a>
        <div className="catalog-features">
          <span>Lucrative Total Cost of Ownership</span>
          <span>High Productivity</span>
          <span>Quality Print</span>
          <span>Easy to Use</span>
          <span>Vast Service Network</span>
          <span>Compact Design</span>
        </div>
      </div>
    </section>
  )
}
