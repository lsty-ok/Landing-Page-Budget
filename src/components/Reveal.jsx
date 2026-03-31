import { useEffect, useRef, useState } from 'react'

/**
 * Reveal Component
 * Membungkus elemen dan memberikannya efek animasi "Fade In Up" 
 * hanya saat elemen tersebut masuk ke dalam layar (di-scroll).
 */
const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(currentRef) // Animasi hanya berjalan 1x
        }
      },
      {
        threshold: 0.15, // Muncul saat 15% elemen terlihat
        rootMargin: '0px 0px -50px 0px', // Aktif sedikit sebelum elemen mencapai tengah layar
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform', // Optimasi performa render
      }}
    >
      {children}
    </div>
  )
}

export default Reveal
