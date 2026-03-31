// ── Assets ──────────────────────────────────────────────────
import mockupBack  from '../assets/Images/3_31_2026_21_19_6_contentcore.xyz 1.png'
import mockupFront from '../assets/Images/Android Compact - 10 1.png'

/**
 * FeaturesSection (Section 3 — Fitur)
 * Dark background section with heading, bordered card, overlapping
 * phone mockups, and feature description.
 */
const FeaturesSection = () => {
  return (
    <section id="fitur" className="features">

      {/* Section heading */}
      <h2 className="features__heading">
        Fitur Yang Membuat Kami Berbeda
      </h2>

      {/* Feature card */}
      <div className="features__card">

        {/* Left — Overlapping phone mockups */}
        <div className="features__mockup">
          <img
            src={mockupBack}
            alt="Tampilan utama aplikasi BudJet"
            className="features__mockup-back"
          />
          <img
            src={mockupFront}
            alt="Tampilan fitur Daily Smart Budgeting"
            className="features__mockup-front"
          />
        </div>

        {/* Right — Feature description */}
        <div className="features__content">
          <span className="features__tag">Unggulan</span>
          <h3 className="features__title">Daily Smart Budgeting</h3>
          <p className="features__desc">
            Fitur yang membantu mengelola keuangan secara cerdas dan terkontrol.
            Fitur ini secara otomatis mencatat, mengelompokkan, dan menganalisis
            pengeluaran anda.
          </p>
        </div>

      </div>
    </section>
  )
}

export default FeaturesSection
