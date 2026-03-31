import './style.css'

import Navbar          from './components/Navbar'
import HeroSection     from './components/HeroSection'
import AboutSection    from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import ReviewSection   from './components/ReviewSection'
import Footer          from './components/Footer'
import Reveal          from './components/Reveal'

/**
 * App — Root component
 *
 * Page structure (4 sections):
 *   1. HeroSection    — #beranda  (white bg)
 *   2. AboutSection   — #tentang  (white bg, card with shadow)
 *   3. FeaturesSection — #fitur   (dark bg)
 *   4. ReviewSection  — #ulasan   (lime bg)
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Reveal><AboutSection /></Reveal>
        <Reveal><FeaturesSection /></Reveal>
        <Reveal><ReviewSection /></Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
