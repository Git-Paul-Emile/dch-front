import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { values, company, certifications } from '../lib/siteData.js'

export default function About() {
  return (
    <>
      <Seo
        title="À propos de DCH Nettoyage Multiservices"
        description="Découvrez DCH Nettoyage Multiservices, notre équipe, nos valeurs et notre zone d'intervention pour l'entretien de vos locaux professionnels."
        path="/a-propos"
      />

      <section className="bg-primary">
        <div className="container-content py-16 sm:py-20">
          <span className="eyebrow text-accent">À propos</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white max-w-2xl">
            Une équipe de terrain, au service de vos locaux
          </h1>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Notre histoire</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">DCH Nettoyage Multiservices</h2>
            <div className="space-y-4 text-ink/70 max-w-prose">
              <p>{company.description}</p>
              <p>
                Du nettoyage courant de bureaux à la remise en état après travaux, en passant par l'entretien
                d'établissements scolaires, de sites industriels et de zones de restauration, nous adaptons
                nos interventions à votre activité, vos horaires et vos contraintes.
              </p>
              <p>{company.training}.</p>
              <p className="text-ink/50 text-sm">
                [Section à compléter : date de création, effectif de l'équipe.]
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="card p-10 sm:p-14 w-full max-w-md flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo DCH Nettoyage Multiservices"
                className="w-full max-w-xs h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Ce qui guide chacune de nos interventions</h2>
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

      <section className="section bg-surface-muted">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Qualité & hygiène</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Certifications et formation</h2>
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

      <section className="section bg-surface">
        <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="card p-8">
            <h2 className="text-xl font-heading font-semibold text-primary mb-4">Zone d'intervention</h2>
            <p className="text-ink/70">{company.zone}</p>
            <p className="text-ink/50 text-sm mt-2">Basés au {company.address}.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-heading font-semibold text-primary mb-4">Suivez notre activité</h2>
            <p className="text-ink/70 mb-4">
              Retrouvez nos interventions et coulisses de chantier sur nos réseaux.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline">Instagram</a>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
              <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="btn-outline">Facebook</a>
              <a href={company.tiktok} target="_blank" rel="noopener noreferrer" className="btn-outline">TikTok</a>
              <a href={company.x} target="_blank" rel="noopener noreferrer" className="btn-outline">X</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-content py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg font-semibold text-center sm:text-left">
            Envie de travailler avec nous ? Discutons de votre projet.
          </p>
          <Link to="/contact" className="btn-primary">Demander un devis</Link>
        </div>
      </section>
    </>
  )
}
