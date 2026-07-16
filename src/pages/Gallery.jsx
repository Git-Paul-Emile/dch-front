import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

const photos = [
  { src: '/images/salle-reunion-1.jpeg', caption: "Salle de réunion, entretien courant des locaux" },
  { src: '/images/salle-reunion-2.jpeg', caption: 'Salle de conférence, nettoyage tertiaire' },
  { src: '/images/salon-accueil.jpeg', caption: "Espace d'accueil, entretien courant" },
  { src: '/images/cantine-collectivite.jpeg', caption: "Restauration collective, nettoyage d'établissement scolaire" },
  { src: '/images/chambre-hotel.jpeg', caption: 'Chambre, entretien de résidence' },
  { src: '/images/exterieur-escalier.jpeg', caption: "Parties communes extérieures, entretien d'immeuble" },
]

export default function Gallery() {
  return (
    <>
      <Seo
        title="Nos réalisations"
        description="Découvrez en images les interventions de DCH Nettoyage Multiservices : bureaux, écoles, résidences et immeubles."
        path="/realisations"
      />

      <section className="bg-primary">
        <div className="container-content py-16 sm:py-20">
          <span className="eyebrow text-accent">Réalisations</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white max-w-2xl">
            Nos interventions en images
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Un aperçu réel de nos chantiers, sans mise en scène : bureaux, écoles, résidences et immeubles
            entretenus par nos équipes.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <figure key={photo.src} className="card overflow-hidden">
                <img src={photo.src} alt={photo.caption} className="w-full h-64 object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm font-medium text-primary">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-content py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg font-semibold text-center sm:text-left">
            Votre prochain chantier pourrait être ici.
          </p>
          <Link to="/contact" className="btn-primary">Demander un devis</Link>
        </div>
      </section>
    </>
  )
}
