import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { products } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function Products() {
  const ref = useScrollReveal()

  return (
    <section id="products" className="dark-section bg-light-surface" ref={ref}>
      <div className="section-header-center" data-reveal="up">
        <span className="section-subtitle-tag">Our Machinery</span>
        <h2>Our Machinery Portfolio</h2>
        <p>Explore our range of high-performance digital textile printing machines.</p>
        <div className="divider-glow"></div>
      </div>
      <div className="products-grid-detailed">
        {products.map((product, idx) => (
          <div className="product-card-premium" key={idx}>
            <div className="product-image-wrap">
              <span className="product-badge-head">{product.badge}</span>
              <img src={product.img} alt={product.title} />
            </div>
            <div className="product-info-content">
              <h3>{product.title}</h3>
              <span className="product-model-code">{product.model}</span>
              <table className="specs-table-mini">
                <tbody>
                  {product.specs.map((spec, sIdx) => (
                    <tr key={sIdx}>
                      <td><strong>{spec.label}</strong></td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link to="/request-quote" className="btn-cta btn-shine">
                Get Quote & Spec Sheet
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
