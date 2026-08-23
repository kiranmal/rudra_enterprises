import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay"></div>
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumb && breadcrumb.map((item, idx) => (
            <span key={idx} style={{ display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
              <span className="breadcrumb-sep">/</span>
              {item.to ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </span>
          ))}
          {!breadcrumb && (
            <>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{title}</span>
            </>
          )}
        </nav>
      </div>
    </section>
  )
}
