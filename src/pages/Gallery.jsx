import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Seo from '../components/Seo.jsx'

const beforeAfterProjects = [
  {
    title: 'Remise en \u00e9tat de circulation',
    before: '/images/avant1.jpeg',
    after: '/images/apr%C3%A8s1.jpeg',
  },
  {
    title: 'Nettoyage approfondi apr\u00e8s intervention',
    before: '/images/avant2.jpeg',
    after: '/images/apr%C3%A8s2.jpeg',
  },
  {
    title: 'Remise en propre de local',
    before: '/images/avant3.jpeg',
    after: '/images/apr%C3%A8s3.jpeg',
  },
  {
    title: 'Intervention de nettoyage complet',
    before: '/images/avant4.jpeg',
    after: '/images/apr%C3%A8s4.jpeg',
  },
  {
    title: 'Finition et remise au propre',
    before: '/images/avant5.jpeg',
    after: '/images/apr%C3%A8s5.jpeg',
  },
]

const photos = [
  { src: '/images/salle-reunion-1.jpeg', caption: 'Salle de r\u00e9union, entretien courant des locaux' },
  { src: '/images/salle-reunion-2.jpeg', caption: 'Salle de conf\u00e9rence, nettoyage tertiaire' },
  { src: '/images/salon-accueil.jpeg', caption: "Espace d'accueil, entretien courant" },
  { src: '/images/cantine-collectivite.jpeg', caption: "Restauration collective, nettoyage d'\u00e9tablissement scolaire" },
  { src: '/images/chambre-hotel.jpeg', caption: 'Chambre, entretien de r\u00e9sidence' },
  { src: '/images/exterieur-escalier.jpeg', caption: "Parties communes ext\u00e9rieures, entretien d'immeuble" },
  { src: '/images/WhatsApp Image 2026-08-04 at 09.01.22.jpeg', caption: 'Intervention de nettoyage, r\u00e9alisation r\u00e9cente' },
  { src: '/images/WhatsApp Image 2026-08-04 at 09.01.23.jpeg', caption: 'Remise en \u00e9tat, chantier r\u00e9cent' },
  { src: '/images/WhatsApp Image 2026-08-04 at 09.01.35.jpeg', caption: 'Nettoyage de surface, r\u00e9sultat final' },
  { src: '/images/WhatsApp Imagel 2026-08-04 at 09.01.35.jpeg', caption: 'D\u00e9tail de r\u00e9alisation apr\u00e8s intervention' },
  { src: '/images/WhatsApp Image 2026-0l8-04 at 09.01.35.jpeg', caption: 'Prestation de propret\u00e9, r\u00e9alisation compl\u00e9mentaire' },
]

function useColumnCount(getColumns) {
  const [columns, setColumns] = useState(() => getColumns())

  useEffect(() => {
    const updateColumns = () => setColumns(getColumns())

    updateColumns()
    window.addEventListener('resize', updateColumns)

    return () => window.removeEventListener('resize', updateColumns)
  }, [getColumns])

  return columns
}

export default function Gallery() {
  const [showAllBeforeAfter, setShowAllBeforeAfter] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const beforeAfterColumns = useColumnCount(() => (window.innerWidth >= 1024 ? 2 : 1))
  const photoColumns = useColumnCount(() => {
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 640) return 2
    return 1
  })
  const beforeAfterVisibleCount = beforeAfterColumns * 2
  const photoVisibleCount = photoColumns * 2
  const visibleBeforeAfterProjects = showAllBeforeAfter
    ? beforeAfterProjects
    : beforeAfterProjects.slice(0, beforeAfterVisibleCount)
  const visiblePhotos = showAllPhotos ? photos : photos.slice(0, photoVisibleCount)

  return (
    <>
      <Seo
        title={'Nos r\u00e9alisations'}
        description={"D\u00e9couvrez en images les interventions de DCH Nettoyage Multiservices : bureaux, \u00e9coles, r\u00e9sidences, immeubles et remises en \u00e9tat avant/apr\u00e8s."}
        path="/realisations"
      />

      <section className="bg-primary">
        <div className="container-content py-16 sm:py-20">
          <span className="eyebrow text-accent">R&eacute;alisations</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white max-w-2xl">
            Nos interventions en images
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Un aper&ccedil;u r&eacute;el de nos chantiers, sans mise en sc&egrave;ne : bureaux, &eacute;coles,
            r&eacute;sidences, remises en &eacute;tat et immeubles entretenus par nos &eacute;quipes.
          </p>
        </div>
      </section>

      <section className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14 bg-surface-muted">
        <div className="container-content">
          <div className="max-w-prose">
            <span className="eyebrow">Avant / Apr&egrave;s</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary">
              Des remises en &eacute;tat visibles
            </h2>
            <p className="mt-3 text-ink/70">
              Chaque paire montre l&apos;&eacute;tat initial puis le r&eacute;sultat obtenu apr&egrave;s
              l&apos;intervention de nos &eacute;quipes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visibleBeforeAfterProjects.map((project) => (
              <article key={project.title} className="card overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <figure className="relative">
                    <span className="absolute left-3 top-3 rounded bg-primary px-3 py-1 text-xs font-bold uppercase text-white">
                      Avant
                    </span>
                    <img
                      src={project.before}
                      alt={`${project.title} avant intervention`}
                      className="h-72 w-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="relative border-t border-surface-border sm:border-l sm:border-t-0">
                    <span className="absolute left-3 top-3 rounded bg-accent px-3 py-1 text-xs font-bold uppercase text-primary">
                      Apr&egrave;s
                    </span>
                    <img
                      src={project.after}
                      alt={`${project.title} apr\u00e8s intervention`}
                      className="h-72 w-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-heading font-bold text-primary">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {beforeAfterProjects.length > beforeAfterVisibleCount && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="btn-outline"
                onClick={() => setShowAllBeforeAfter((current) => !current)}
              >
                {showAllBeforeAfter ? 'Voir moins' : 'Voir plus'}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 bg-surface">
        <div className="container-content">
          <div className="max-w-prose">
            <span className="eyebrow">Chantiers r&eacute;alis&eacute;s</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-primary md:whitespace-nowrap">
              Nos r&eacute;alisations compl&eacute;mentaires
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePhotos.map((photo) => (
              <figure key={photo.src} className="card overflow-hidden">
                <img src={photo.src} alt={photo.caption} className="w-full h-64 object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm font-medium text-primary">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>

          {photos.length > photoVisibleCount && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="btn-outline"
                onClick={() => setShowAllPhotos((current) => !current)}
              >
                {showAllPhotos ? 'Voir moins' : 'Voir plus'}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-content py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg font-semibold text-center sm:text-left">
            Votre prochain chantier pourrait &ecirc;tre ici.
          </p>
          <Link to="/contact" className="btn-primary">Demander un devis</Link>
        </div>
      </section>
    </>
  )
}
