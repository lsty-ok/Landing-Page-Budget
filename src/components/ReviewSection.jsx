// ── Assets ──────────────────────────────────────────────────
import starIcon   from '../assets/Icons/material-symbols-light_star.svg'
import userIcon   from '../assets/Icons/ei_user.svg'

/** @type {{ name: string; role: string; quote: string }[]} */
const TESTIMONIALS = [
  {
    id: 'review-1',
    name: 'Om Amar',
    role: 'Mahasiswa, PENS',
    quote: 'Bagus banget jadi bisa beli Rumah gara-gara ini',
  },
  {
    id: 'review-2',
    name: 'Abah Farki',
    role: 'Mahasiswa, UNSOED',
    quote: 'Pengeluaran jadi lebih terkontrol tiap bulannya',
  },
  {
    id: 'review-3',
    name: 'Resty Eonni',
    role: 'Mahasiswa, PENS',
    quote: 'Aplikasinya simpel tapi powerful banget buat budgeting',
  },
  {
    id: 'review-4',
    name: 'Koko Abdul',
    role: 'Mahasiswa, UNAIR',
    quote: 'Sekarang nggak perlu takut lagi kehabisan uang di akhir bulan',
  },
]

/* ── Sub-components ─────────────────────────────────────── */

/** Five yellow stars */
const Stars = () => (
  <div className="review-card__stars" aria-label="5 bintang">
    {Array.from({ length: 5 }).map((_, i) => (
      <img key={i} src={starIcon} alt="" aria-hidden="true" />
    ))}
  </div>
)

/** Single testimonial card */
const ReviewCard = ({ id, name, role, quote }) => (
  <article className="review-card" id={id}>
    <Stars />
    <p className="review-card__quote">"{quote}"</p>
    <hr className="review-card__divider" />
    <div className="review-card__user">
      <div className="review-card__avatar">
        <img src={userIcon} alt="" aria-hidden="true" />
      </div>
      <div className="review-card__info">
        <span className="review-card__name">{name}</span>
        <span className="review-card__role">{role}</span>
      </div>
    </div>
  </article>
)

/**
 * ReviewSection (Section 4 — Ulasan)
 * Lime-green background with a bordered card containing a staggered
 * 2-column grid of testimonial cards.
 */
const ReviewSection = () => {
  // Split into two columns for the staggered layout
  const leftCol  = TESTIMONIALS.filter((_, i) => i % 2 === 0)
  const rightCol = TESTIMONIALS.filter((_, i) => i % 2 !== 0)

  return (
    <section id="ulasan" className="reviews">
      <div className="reviews__inner">

        {/* Left — Heading + subtext */}
        <div className="reviews__left">
          <h2 className="reviews__heading">Apa Kata Mereka?</h2>
          <p className="reviews__subtext">
            Jangan hanya percaya kata kami. Lihat apa yang dikatakan
            oleh pengguna Budjet.
          </p>
        </div>

        {/* Right — Staggered card grid with Animation Tracks */}
        <div className="reviews__grid">
          
          {/* Track 1: Kiri (Turun) */}
          <div className="review-track">
            <div className="review-col review-col--down">
              {[...leftCol, ...leftCol, ...leftCol, ...leftCol].map((t, idx) => (
                <ReviewCard key={`left-${t.id}-${idx}`} {...t} />
              ))}
            </div>
          </div>

          {/* Track 2: Kanan (Naik) */}
          <div className="review-track">
            <div className="review-col review-col--up">
              {[...rightCol, ...rightCol, ...rightCol, ...rightCol].map((t, idx) => (
                <ReviewCard key={`right-${t.id}-${idx}`} {...t} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ReviewSection
