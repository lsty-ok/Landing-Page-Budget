// ── Assets ──────────────────────────────────────────────────
import phoneImg        from '../assets/Images/iPhone 13 Pro - Double Top.png'
import arrowIcon       from '../assets/Icons/boxicons_skip-next-filled.svg'
import logoInline      from '../assets/Icons/Group 2 2.svg'

/**
 * HeroSection (Section 1 — Beranda)
 * Full-height hero with headline, subtext, CTA button, and floating phone mockup.
 */
const HeroSection = () => {
  return (
    <section id="beranda" className="hero">
      <div className="hero__inner">

        {/* Left — Phone mockup */}
        <div className="hero__image-wrapper">
          <img
            src={phoneImg}
            alt="Tampilan aplikasi BudJet di iPhone"
            className="hero__image"
          />
        </div>

        {/* Right — Copy + CTA */}
        <div className="hero__content">
          <h1 className="hero__headline">
            Budget smarter,<br />live better
          </h1>

          <p className="hero__subtext">
            Capai potensi pengelolaan keuangan dengan{' '}
            <img src={logoInline} alt="BudJet" style={{ display: 'inline-block', height: '1em', verticalAlign: 'middle', margin: '0 4px', transform: 'translateY(2px)' }} />
            , cara pintar mengelola uang
          </p>

          <a
            href="#tentang"
            className="hero__cta"
            id="hero-try-now-btn"
          >
            Try Now
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
