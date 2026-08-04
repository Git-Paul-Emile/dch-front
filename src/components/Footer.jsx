import { Link } from 'react-router-dom'
import { company, navLinks, services } from '../lib/siteData.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-white">
      <div className="container-content py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/logo.png" alt="Logo DCH Nettoyage Multiservices" className="h-14 w-auto object-contain bg-white rounded-lg p-2 mb-4" />
          <p className="text-primary-100 text-sm max-w-xs">
            Entreprise multiservices : nettoyage et désinfection, assistance de vie, débarras, jardinage, animaux de compagnie et import-export.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DCH Nettoyage sur Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DCH Nettoyage sur LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
              </svg>
            </a>
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DCH Nettoyage sur Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V14h2.8v8h3.4z" />
              </svg>
            </a>
            <a
              href={company.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DCH Nettoyage sur TikTok"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.7 3c.4 2.5 1.8 4 4.3 4.2v3.1c-1.5.1-2.9-.4-4.2-1.2v6.2c0 4-2.6 6.7-6.4 6.7-3.5 0-6.3-2.7-6.3-6.2 0-3.9 3.3-6.8 7.2-6.1v3.3c-1.9-.6-3.9.8-3.9 2.8 0 1.6 1.3 2.9 2.9 2.9 1.8 0 3-1.2 3-3.5V3h3.4z" />
              </svg>
            </a>
            <a
              href={company.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DCH Nettoyage sur X"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14.2 10.2 22.8 0h-2l-7.5 8.8L7.4 0H.5l9 13.2L.5 24h2l7.9-9.4 6.3 9.4h6.9l-9.4-13.8zm-2.8 3.3-.9-1.3L3.2 1.5h3.2l5.8 8.5.9 1.3 7.7 11.3h-3.2l-6.2-9.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-white font-heading font-semibold text-base mb-4">Navigation</h2>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-100 hover:text-accent text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-heading font-semibold text-base mb-4">Nos services</h2>
          <ul className="space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`} className="text-primary-100 hover:text-accent text-sm">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-heading font-semibold text-base mb-4">Contact</h2>
          <ul className="space-y-2.5 text-sm text-primary-100">
            <li>{company.address}</li>
            <li>{company.zone}</li>
            <li>
              <a href={company.phoneHref} className="hover:text-accent">{company.phone}</a>
              {' · '}
              <a href={company.phone2Href} className="hover:text-accent">{company.phone2}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-accent break-all">{company.email}</a>
            </li>
            <li>{company.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-200">
          <p>© {year} {company.name}. Tous droits réservés.</p>
          <Link to="/mentions-legales" className="hover:text-accent">Mentions légales</Link>
        </div>
      </div>
    </footer>
  )
}
