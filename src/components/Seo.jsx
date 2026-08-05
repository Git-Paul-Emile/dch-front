import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description, path = '', keywords = '' }) {
  const fullTitle = `${title} | DCH Nettoyage Multiservices`
  const url = `https://www.dch-nettoyage.fr${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index,follow" />
      <meta name="language" content="fr" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DCH Nettoyage Multiservices" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
