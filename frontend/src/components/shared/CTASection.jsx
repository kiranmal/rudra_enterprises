import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function CTASection({ title, text, primaryLabel, primaryTo, secondaryLabel, secondaryTo }) {
  const ref = useScrollReveal()

  return (
    <section className="dark-section cta-section" ref={ref}>
      <div className="cta-container" data-reveal="scale">
        <h2>{title || 'Ready to Elevate Your Printing Business?'}</h2>
        <p>{text || 'Contact us today for a free consultation and discover how our digital textile printing solutions can transform your production capabilities.'}</p>
        <div className="cta-buttons">
          <Link to={primaryTo || '/contact'} className="btn-cta btn-shine">
            {primaryLabel || 'Request a Quote'}
            <FaArrowRight />
          </Link>
          {secondaryLabel && (
            <Link to={secondaryTo || '/contact'} className="btn-cta-outline">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
