import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Remonte en haut de page à chaque changement de route (comportement attendu par l'utilisateur)
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window.HTMLElement.prototype ? 'instant' : 'auto' })
  }, [pathname])
  return null
}
