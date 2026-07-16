import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../lib/siteData.js'

// Numéro international sans le "+" ni espaces, requis par le format wa.me
const whatsappNumber = company.phoneHref.replace('tel:+', '')
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Bonjour, je souhaiterais un devis pour une prestation de nettoyage.',
)}`

// Menu d'actions flottant, visible uniquement sur mobile (le header desktop a
// déjà un accès direct au téléphone et au devis). Laisse le choix à
// l'utilisateur entre appel classique, WhatsApp ou formulaire de devis, plutôt
// que d'imposer une seule action par défaut.
export default function MobileActionMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const actions = [
    {
      key: 'devis',
      label: 'Demander un devis',
      href: '/contact',
      internal: true,
      className: 'bg-primary text-white',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
      ),
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      href: whatsappHref,
      external: true,
      className: 'bg-[#25D366] text-white',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 1.99.88 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.64-.14.26.1 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
        </svg>
      ),
    },
    {
      key: 'call',
      label: `Appeler${company.phone ? ` (${company.phone})` : ''}`,
      href: company.phoneHref,
      external: true,
      className: 'bg-accent text-primary',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ]

  return (
    <div ref={containerRef} className="lg:hidden fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
      {open && (
        <ul className="flex flex-col items-end gap-3" role="menu" aria-label="Nous contacter">
          {actions.map((action) => (
            <li key={action.key} role="none" className="flex items-center gap-3">
              <span className="bg-primary text-white text-sm font-semibold px-3 py-1.5 rounded-lg shadow whitespace-nowrap">
                {action.label}
              </span>
              {action.internal ? (
                <Link
                  role="menuitem"
                  to={action.href}
                  onClick={() => setOpen(false)}
                  className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center ${action.className}`}
                  aria-label={action.label}
                >
                  {action.icon}
                </Link>
              ) : (
                <a
                  role="menuitem"
                  href={action.href}
                  target={action.key === 'whatsapp' ? '_blank' : undefined}
                  rel={action.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  onClick={() => setOpen(false)}
                  className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center ${action.className}`}
                  aria-label={action.label}
                >
                  {action.icon}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Fermer le menu de contact' : 'Ouvrir le menu de contact'}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 ${
          open ? 'bg-primary text-white rotate-45' : 'bg-accent text-primary'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}
