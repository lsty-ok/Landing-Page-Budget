import { useState, useEffect } from 'react'

// ── Assets ──────────────────────────────────────────────────
import logoSvg from '../assets/Icons/Group 2 2-1.svg'

/**
 * Navbar
 * Sticky pill-shaped navigation bar with mobile hamburger toggle.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#beranda')

  const links = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang',  href: '#tentang'  },
    { label: 'Fitur',    href: '#fitur'    },
    { label: 'Ulasan',   href: '#ulasan'   },
  ]

  // Update active state based on scroll position (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      // Posisi scroll + sedikit offset untuk deteksi
      const scrollPosition = window.scrollY + 200

      for (const { href } of links) {
        const sectionId = href.substring(1)
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(href)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // trigger sekali di awal

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className="navbar__inner">
        {/* Logo */}
        <a 
          href="#beranda" 
          aria-label="BudJet — kembali ke atas"
          onClick={() => setActiveLink('#beranda')}
        >
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
                className={activeLink === href ? 'active' : ''}
                onClick={() => {
                  setActiveLink(href)
                  setMenuOpen(false)
                }}
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
