import { Link } from 'react-router-dom'
import { SERVICE_ICONS } from './Icons.jsx'

// Carte d'aperçu d'un service (page d'accueil). Ratio d'image constant,
// élévation au survol et zoom léger de la photo : un seul niveau
// d'interaction, feedback net, respect de prefers-reduced-motion.
export default function ServiceCard({ service, image }) {
  const FallbackIcon = SERVICE_ICONS[service.slug]

  return (
    <article
      id={service.slug}
      className="card group overflow-hidden flex flex-col scroll-mt-24 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-primary">
        {image ? (
          <img
            src={image}
            alt={`Prestation ${service.title} par DCH Nettoyage Multiservices`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            {FallbackIcon && <FallbackIcon className="w-14 h-14 text-accent" />}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-heading font-semibold text-primary mb-2">{service.title}</h3>
        <p className="text-ink/70 text-sm mb-5 flex-1">{service.short}</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-accent-600 hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 rounded mt-auto"
        >
          Demander un devis
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
