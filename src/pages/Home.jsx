import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import StatBlock from '../components/StatBlock.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import { services, stats, values, testimonials, company, certifications } from '../lib/siteData.js'

const heroImage = '/images/salle-reunion-1.jpeg'
// Chaque service dispose de sa photo dédiée (frontend/public/images/services).
const serviceImages = {
  'assistance-vie': '/images/services/assistance-vie.jpg',
  'nettoyage-desinfection': '/images/services/nettoyage-desinfection.jpg',
  debarras: '/images/services/debarras.jpg',
  'jardinage-bricolage': '/images/services/jardinage-bricolage.jpg',
  animaux: '/images/services/animaux.jpg',
  'import-export': '/images/services/import-export.jpg',
}

export default function Home() {
  return (
    <>
      <Seo
        title="Entreprise de nettoyage Paris et Île-de-France | Nettoyage bureaux, locaux professionnels et désinfection"
        description="DCH Nettoyage Multiservices est votre entreprise de nettoyage Paris et Île-de-France : nettoyage de bureaux, nettoyage de locaux professionnels, nettoyage fin de chantier, désinfection et débarras. Devis gratuit et réponse sous 24h."
        keywords="entreprise, nettoyage, Paris, Île-de-France, bureaux, locaux, professionnels, désinfection, débarras, entreprise de nettoyage, société de nettoyage, nettoyage professionnel, nettoyage et désinfection, services de nettoyage, entreprise de propreté"
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <img
          src={heroImage}
          alt="Salle de réunion entretenue par les équipes DCH Nettoyage Multiservices"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" aria-hidden="true" />
        <div className="relative container-content py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent">Nettoyage multiservices</span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
              Entreprise de nettoyage à Paris et en Île-de-France
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              DCH Nettoyage Multiservices accompagne les entreprises, commerces, bureaux et particuliers
              avec un service de nettoyage professionnel Paris, nettoyage de bureaux Paris, nettoyage de locaux
              professionnels, désinfection des espaces et remise en état après travaux. Une équipe qualifiée,
              des interventions fiables et un devis gratuit sous 24h.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Demander un devis gratuit
              </Link>
              <Link to="/services" className="btn text-white border-2 border-white/40 hover:bg-white/10">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-700">
        <div className="container-content py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatBlock key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Aperçu services */}
      <section className="section bg-surface">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Nos prestations</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Nettoyage de bureaux, locaux professionnels, fin de chantier et désinfection</h2>
            <p className="mt-4 text-ink/70">
              De l'assistance de vie à domicile au nettoyage professionnel Paris et en Île-de-France, en passant par
              le débarras, le jardinage et le petit bricolage : chaque besoin a ses contraintes, nous adaptons nos équipes
              en conséquence pour une qualité de service constante.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} image={serviceImages[service.slug]} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="section bg-surface-muted">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Pourquoi DCH Nettoyage</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Ce qui nous distingue au quotidien</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 border-t-4 border-accent">
                <h3 className="font-heading font-semibold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-ink/70">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="section bg-white">
        <div className="container-content max-w-3xl text-center">
          <p className="font-accent text-3xl sm:text-4xl text-primary leading-snug">
            « La propreté n'est pas un détail, c'est la première image que vous donnez de votre entreprise. »
          </p>
          <p className="mt-4 text-sm font-semibold text-ink/60 uppercase tracking-wide">L'équipe DCH Nettoyage</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-surface py-12 sm:py-14">
        <div className="container-content">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Qualité & hygiène</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Des équipes formées, des méthodes certifiées</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div key={c.name} className="card p-6 flex items-start gap-4">
                {c.badge ? (
                  <img src={c.badge} alt={c.name} className="w-14 h-14 object-contain shrink-0" loading="lazy" />
                ) : (
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-1">{c.name}</h3>
                  <p className="text-sm text-ink/70">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section bg-surface-muted">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Avis clients</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Ce qu'en disent nos clients</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.quote} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary">
        <div className="container-content py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Prêt à confier vos locaux à une équipe fiable ?</h2>
            <p className="mt-2 text-white/80">Réponse sous 24h · Devis gratuit et sans engagement</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Demander un devis
            </Link>
            <a href={company.phoneHref} className="btn text-white border-2 border-white/40 hover:bg-white/10">
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
