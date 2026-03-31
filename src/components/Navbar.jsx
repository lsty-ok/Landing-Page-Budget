import { useState } from 'react'

// ── Assets ──────────────────────────────────────────────────
import logoSvg from '../assets/Icons/Group 2 2-1.svg'

/**
 * Navbar
 * Sticky pill-shaped navigation bar with mobile hamburger toggle.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang',  href: '#tentang'  },
    { label: 'Fitur',    href: '#fitur'    },
    { label: 'Ulasan',   href: '#ulasan'   },
  ]

  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#beranda" aria-label="BudJet — kembali ke atas">
          <img
            src={logoSvg}
            alt="BudJet logo"
            className="navbar__logo"
          />
        </a>

        {/* Desktop links */}
        <ul
          className={`navbar__links ${menuOpen ? 'open' : ''}`}
          role="list"
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="navbar__toggle"
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
