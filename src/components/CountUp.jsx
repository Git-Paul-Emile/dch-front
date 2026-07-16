import { useEffect, useRef, useState } from 'react'

// Anime un nombre de 0 jusqu'à `end` lorsque le composant entre dans le
// viewport (IntersectionObserver), puis s'arrête (une seule animation par
// visite de page). Respecte prefers-reduced-motion en affichant directement
// la valeur finale pour les utilisateurs qui ont désactivé les animations.
export default function CountUp({ end, prefix = '', suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(end)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end])

  useEffect(() => {
    if (!started) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(end)
      return
    }

    let frame
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out cubic : démarre vite, ralentit en fin de course (plus naturel qu'une progression linéaire)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * end))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, end, duration])

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  )
}
