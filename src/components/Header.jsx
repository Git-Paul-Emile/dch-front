import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks, company } from '../lib/siteData.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Ferme le menu mobile à chaque changement de taille d'écran (évite un menu ouvert bloqué)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-surface-border">
      <div className="container-content flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="DCH Nettoyage Multiservices, accueil">
          <img src="/logo.png" alt="Logo DCH Nettoyage Multiservices" className="h-14 w-auto object-contain" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-base font-semibold transition-colors duration-200 ${
                  isActive ? 'text-accent-600' : 'text-primary hover:text-accent-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={company.phoneHref} className="text-base font-semibold text-primary hover:text-accent-600 transition-colors duration-200">
            {company.phone}
          </a>
          <Link to="/contact" className="btn-primary">
            Devis gratuit
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-primary hover:bg-surface-muted"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="lg:hidden border-t border-surface-border bg-white px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-3 rounded-lg text-lg font-semibold min-h-[44px] flex items-center ${
                      isActive ? 'text-accent-600 bg-surface-muted' : 'text-primary hover:bg-surface-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full mt-4">
            Devis gratuit
          </Link>
        </nav>
      )}
    </header>
  )
}
