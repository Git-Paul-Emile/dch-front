import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" description="La page demandée n'existe pas." path="/404" />
      <section className="section bg-surface min-h-[60vh] flex items-center">
        <div className="container-content text-center">
          <p className="text-accent font-heading font-extrabold text-6xl mb-4">404</p>
          <h1 className="text-2xl font-bold text-primary mb-3">Page introuvable</h1>
          <p className="text-ink/70 mb-8">La page que vous cherchez n'existe pas ou a été déplacée.</p>
          <Link to="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </section>
    </>
  )
}
