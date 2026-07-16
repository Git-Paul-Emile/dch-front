import Seo from '../components/Seo.jsx'
import { company } from '../lib/siteData.js'

export default function Legal() {
  return (
    <>
      <Seo title="Mentions légales" description="Mentions légales de DCH Nettoyage Multiservices." path="/mentions-legales" />
      <section className="section bg-surface">
        <div className="container-content max-w-prose">
          <h1 className="text-2xl font-bold text-primary mb-8">Mentions légales</h1>

          <div className="space-y-6 text-ink/70">
            <div>
              <h2 className="font-heading font-semibold text-primary mb-2">Éditeur du site</h2>
              <p>{company.legalName}<br />
                {company.address}<br />
                SIRET : {company.siret}<br />
                Téléphone : {company.phone} · {company.phone2}<br />
                Email : {company.email}
              </p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-primary mb-2">Directeur de la publication</h2>
              <p>[Nom du représentant légal à compléter]</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-primary mb-2">Hébergement</h2>
              <p>[Nom, adresse et contact de l'hébergeur à compléter]</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-primary mb-2">Données personnelles</h2>
              <p>
                Les informations transmises via le formulaire de contact sont utilisées uniquement pour
                traiter votre demande de devis. Conformément au RGPD, vous disposez d'un droit d'accès, de
                rectification et de suppression de vos données en nous contactant à {company.email}.
              </p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-primary mb-2">Cookies</h2>
              <p>Ce site n'utilise pas de cookies de suivi publicitaire. [À adapter selon les outils réellement utilisés : analytics, etc.]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
