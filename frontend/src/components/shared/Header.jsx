import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass, FaBars, FaXmark, FaChevronDown } from 'react-icons/fa6'
import { logoImg } from '../../data/siteData'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const toggleDropdown = (idx) => {
    setDropdownOpen(dropdownOpen === idx ? null : idx)
  }

  const navItems = [
    { label: 'HOME', to: '/' },
    {
      label: 'ABOUT US',
      dropdown: [
        { label: 'Company Profile', to: '/company-profile' },
        { label: 'Mission & Vision', to: '/mission-vision' },
        { label: 'Why Choose Us', to: '/why-choose-us' },
      ],
    },
    {
      label: 'PRINTER',
      dropdown: [
        { label: 'Epson Digital Textile Printers', to: '/printers' },
        { label: 'Ricoh Gen6 Direct To Fabric', to: '/printers' },
        { label: 'Kyocera 16 Head Printers', to: '/printers' },
        { label: 'DTF Printing Machines', to: '/printers' },
        { label: 'Sublimation Printers', to: '/printers' },
      ],
    },
    { label: 'MAINTENANCE', to: '/maintenance' },
    { label: 'GALLERY', to: '/gallery' },
    { label: 'CONTACT US', to: '/contact' },
  ]

  return (
    <header className="main-header">
      <nav className="rudraNav-main">
        <Link to="/" className="rudraNav-logo">
          <img src={logoImg} alt="Rudra Enterprises Logo" className="rudraNav-logoImage" />
          <div className="rudraNav-logoContent">
            <span className="rudraNav-companyName">RUDRA ENTERPRISES</span>
            <span className="rudraNav-companyTagline">DIGITAL TEXTILE PRINTING SOLUTIONS</span>
          </div>
        </Link>

        <ul className={`rudraNav-menu ${mobileOpen ? 'active' : ''}`}>
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className={`rudraNav-menuItem ${item.dropdown ? 'rudraNav-dropdownItem' : ''} ${dropdownOpen === idx ? 'rudraNav-dropdownOpen' : ''}`}
            >
              {item.dropdown ? (
                <>
                  <button
                    className="rudraNav-menuButton"
                    onClick={() => toggleDropdown(idx)}
                  >
                    {item.label}
                    <FaChevronDown className="rudraNav-arrow" />
                  </button>
                  <ul className="rudraNav-dropdown">
                    {item.dropdown.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <Link
                          to={sub.to}
                          onClick={() => { setMobileOpen(false); setDropdownOpen(null) }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  className="rudraNav-menuLink"
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="rudraNav-quoteItem">
            <Link to="/request-quote" className="rudraNav-quoteButton" onClick={() => setMobileOpen(false)}>
              REQUEST QUOTE
            </Link>
          </li>
        </ul>

        <div className="rudraNav-right">
          <button className="rudraNav-search" aria-label="Search">
            <FaMagnifyingGlass />
          </button>
          <button
            className="rudraNav-mobileButton"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  )
}
