import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { services, company, audiences } from '../lib/siteData.js'
import { SERVICE_ICONS } from '../components/Icons.jsx'

// Chaque service dispose de sa photo dédiée (frontend/public/images/services),
// optimisée pour le web (1600px, JPEG progressif).
const serviceImages = {
  'assistance-vie': '/images/services/assistance-vie.jpg',
  'nettoyage-desinfection': '/images/services/nettoyage-desinfection.jpg',
  debarras: '/images/services/debarras.jpg',
  'jardinage-bricolage': '/images/services/jardinage-bricolage.jpg',
  animaux: '/images/services/animaux.jpg',
  'import-export': '/images/services/import-export.jpg',
}

// Progressive disclosure : la carte n'affiche au premier regard que la photo,
// le titre et une phrase de résumé. La description complète et la liste des
// prestations restent accessibles derrière un bouton — rien n'est supprimé,
// mais la page respire et se scanne d'un coup d'œil.
function ServiceDetails({ service, expanded, onToggle }) {
  const panelId = `${service.slug}-details`
  return (
    <div className="flex-1">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-accent-600 hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 rounded"
      >
        {expanded ? 'Masquer le détail' : `Voir les ${service.points.length} prestations`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform duration-200 motion-reduce:transition-none ${expanded ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id={panelId} hidden={!expanded} className="pt-4">
        <p className="text-ink/70 text-sm mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-ink/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  // Un seul panneau ouvert à la fois : la page reste compacte et le visiteur
  // garde ses repères (comportement accordéon).
  const [openSlug, setOpenSlug] = useState(null)
  return (
    <>
      <Seo
        title="Services de nettoyage, désinfection, débarras et multiservices à Paris"
        description="Découvrez nos services de nettoyage de bureaux, nettoyage de locaux professionnels, nettoyage fin de chantier, désinfection, débarras, jardinage et assistance à domicile à Paris et en Île de France."
        keywords="services, nettoyage, Paris, bureaux, locaux, professionnels, fin de chantier, désinfection, débarras, jardinage, aide à domicile, nettoyage de bureaux, nettoyage locaux professionnels, nettoyage entreprises, désinfection locaux professionnels"
        path="/services"
      />

      <section className="bg-primary">
        <div className="container-content py-16 sm:py-20">
          <span className="eyebrow text-accent">Nos services</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white max-w-2xl">
            Services de nettoyage professionnel et multiservices à Paris et en Île de France
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Nettoyage de bureaux, nettoyage de locaux professionnels, nettoyage fin de chantier,
            désinfection, débarras, jardinage, assistance à domicile et garde d'animaux : des prestations
            réalisées par un personnel qualifié, dans le respect des normes d'hygiène, de sécurité et de confidentialité.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const FallbackIcon = SERVICE_ICONS[service.slug]
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="card group overflow-hidden flex flex-col scroll-mt-24 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                    {serviceImages[service.slug] ? (
                      <img
                        src={serviceImages[service.slug]}
                        alt={`Prestation ${service.title} réalisée par DCH Nettoyage Multiservices`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        {FallbackIcon && <FallbackIcon className="w-16 h-16 text-accent" />}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-4">
                    {/* Titre sous l'image (ratio d'image constant) : tous les titres
                        démarrent sur la même ligne ; le min-h réserve 2 lignes pour
                        que le texte suivant reste lui aussi aligné dans la plupart des cas. */}
                    <h2 className="text-lg font-heading font-semibold text-primary leading-snug min-h-[3.2rem]">
                      {service.title}
                    </h2>
                    <p className="text-ink/70 text-sm">{service.short}</p>
                    <ServiceDetails
                      service={service}
                      expanded={openSlug === service.slug}
                      onToggle={() => setOpenSlug(openSlug === service.slug ? null : service.slug)}
                    />
                    <Link to="/contact" className="btn-primary self-start">
                      Demander un devis
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Domaines d'intervention */}
      <section className="section bg-surface-muted">
        <div className="container-content">
          <div className="max-w-2xl mb-8">
            <span className="eyebrow">Nos domaines d'intervention</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Nous intervenons auprès des</h2>
          </div>
          <ul className="flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="px-4 py-2 rounded-full bg-white border border-primary/10 text-primary text-sm font-semibold shadow-sm"
              >
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-content py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg font-semibold text-center sm:text-left">
            Une prestation spécifique à demander ? Parlons de votre besoin.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <a href={company.phoneHref} className="btn text-white border-2 border-white/40 hover:bg-white/10">{company.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
