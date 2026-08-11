// Centralise toutes les informations de l'entreprise et le contenu éditorial.
// Coordonnées et éléments ci-dessous proviennent des supports de communication
// officiels de l'entreprise (flyers DCH, dépliant « Services à la personne »).
// Les champs marqués [À COMPLÉTER] restent à préciser avant mise en ligne définitive.

export const company = {
  name: 'DCH Nettoyage Multiservices',
  legalName: 'DCH Nettoyage Multi-Services',
  claim: 'Des locaux impeccables, une équipe de confiance.',
  description:
    "Créée le 1 septembre 2022, DCH Nettoyage est une entreprise multiservices basée à Paris 10e, nous travaillons pour le bien-être de nos clients : nettoyage, désinfection et entretien de locaux, assistance de vie aux familles et aux personnes âgées, débarras, jardinage et petit bricolage, soins et promenade d'animaux de compagnie, import-export de produits non réglementés. Nos prestations sont réalisées par un personnel qualifié, dans le respect des normes d'hygiène, de sécurité et de confidentialité.",
  phone: '06 05 96 96 52',
  phoneHref: 'tel:+33605969652',
  phone2: '07 53 93 43 45',
  phone2Href: 'tel:+33753934345',
  email: 'dch.multiservice@yahoo.com',
  address: '155 rue du Faubourg Saint-Denis, 75010 Paris',
  zone: 'Paris et Île de France',
  hours: 'Lun–Sam : 7h–18h',
  siret: '919 603 480 00014',
  training: "Techniciens formés par l'IFEH (Institut de Formation Européen d'Hygiène)",
  instagram: 'https://www.instagram.com/dchnm01',
  linkedin: 'https://www.linkedin.com/in/dch-nettoyage-multi-services-67a62a289',
  facebook: 'https://www.facebook.com/share/19Wy76Mkxp/',
  tiktok: 'https://www.tiktok.com/@dchnm.com?_r=1&_t=ZS-98XyaHR69ll',
  x: 'https://x.com/DCH061392619080',
}

// Certifications et labels affichés sur les supports officiels de l'entreprise.
export const certifications = [
  {
    name: 'Certifié HACCP',
    description: 'Protocoles de nettoyage et désinfection conformes aux normes HACCP, adaptés à la restauration et à l\'agroalimentaire.',
    badge: '/images/badges/haccp.png',
  },
  {
    name: 'EU Ecolabel',
    description: 'Engagement pour des produits et méthodes de nettoyage respectueux de l\'environnement.',
    badge: '/images/badges/ecolabel.png',
  },
  {
    name: 'Techniciens IFEH',
    description: "Équipe formée par l'Institut de Formation Européen d'Hygiène (IFEH).",
    badge: null,
  },
]

// Les 6 domaines d'activité de l'entreprise (contenu officiel + dépliant
// « Services à la personne »).
export const services = [
  {
    slug: 'assistance-vie',
    title: 'Assistance de vie aux familles et aux personnes âgées',
    short:
      "Accompagnement à domicile des personnes âgées, malades, en situation de handicap ou en perte d'autonomie, des familles et des enfants de plus de 3 ans.",
    description:
      "Nous accompagnons les personnes âgées, dépendantes ou en perte d'autonomie ainsi que les familles dans les actes essentiels de la vie quotidienne, afin de favoriser leur bien-être et leur maintien à domicile. Véritable accompagnateur au jour le jour, nous aidons et participons au quotidien des personnes âgées, malades ou en situation de handicap et des enfants de plus de 3 ans.",
    points: [
      'Aide aux gestes de la vie quotidienne et entretien du cadre de vie',
      'Entretien de la maison et travaux ménagers',
      'Préparation des repas à domicile (temps passé aux courses inclus)',
      'Livraison de repas et de courses à domicile',
      'Accompagnement aux courses, sorties et rendez-vous',
      "Garde d'enfants de plus de 3 ans à domicile",
      'Soutien scolaire et cours à domicile',
      "Accompagnement des enfants de plus de 3 ans dans leurs déplacements",
      'Collecte et livraison à domicile de linge repassé',
      'Assistance administrative et informatique à domicile',
      'Téléassistance et visio-assistance',
      'Maintenance et vigilance temporaire de résidence',
      'Soins esthétiques à domicile pour personnes dépendantes',
    ],
  },
  {
    slug: 'nettoyage-desinfection',
    title: 'Entretien, nettoyage et désinfection',
    short:
      'Particuliers et professionnels : entretien courant, nettoyage industriel, remise en état après chantier et désinfection.',
    description:
      "Spécialistes de la propreté, certifiés et forts d'une longue expérience dans le nettoyage, nous proposons des prestations adaptées aux particuliers comme aux professionnels : bureaux, résidences, maisons et appartements, magasins et commerces, immeubles, chantiers et locaux professionnels.",
    points: [
      'Entretien courant et travaux ménagers (bureaux, résidences, maisons et appartements)',
      'Nettoyage de magasins, commerces, immeubles et locaux professionnels',
      'Nettoyage de fin de chantier et après travaux',
      'Nettoyage industriel et zones de restauration (normes HACCP)',
      'Établissements scolaires et bâtiments communaux',
      'Vitrerie : vitrines, baies vitrées, vitres en hauteur',
      'Nettoyage en profondeur et désinfection des locaux',
      'Désinsectisation : cafards, punaises, etc.',
      "Nettoyage et désinfection après décès (dans le respect des normes d'hygiène et de sécurité)",
    ],
  },
  {
    slug: 'debarras',
    title: 'Débarras',
    short:
      'Débarras de tous types de locaux, avec évacuation des encombrants dans le respect des réglementations en vigueur.',
    description:
      "Nous assurons le débarras de tous types de locaux : maisons, appartements, bureaux, caves, garages et locaux professionnels. Les encombrants sont évacués dans le respect des réglementations en vigueur.",
    points: [
      'Maisons et appartements',
      'Caves et garages',
      'Bureaux et locaux professionnels',
      'Évacuation des encombrants conforme à la réglementation',
    ],
  },
  {
    slug: 'jardinage-bricolage',
    title: 'Jardinage et petit bricolage',
    short: "Petits travaux d'entretien intérieur et extérieur : espaces verts, montage, fixation et réparations.",
    description:
      "Nous réalisons les petits travaux d'entretien intérieur et extérieur, pour garder votre logement et vos espaces verts en bon état toute l'année.",
    points: [
      'Tonte de pelouse et désherbage',
      'Taille des haies et arbustes',
      'Arrosage et entretien des espaces verts',
      'Montage de meubles',
      "Fixation d'étagères et d'accessoires",
      'Petites réparations domestiques',
    ],
  },
  {
    slug: 'animaux',
    title: "Soins et promenade d'animaux de compagnie",
    short:
      'Un service destiné aux personnes dépendantes qui ne peuvent plus assurer seules l\'entretien de leur animal.',
    description:
      "Nous proposons un service destiné aux personnes dépendantes qui ne peuvent plus assurer seules l'entretien de leurs animaux de compagnie. Le toilettage et les soins vétérinaires ne font pas partie de nos prestations.",
    points: [
      'Promenade des animaux',
      'Préparation et distribution de la nourriture',
      'Changement de la litière',
      'Brossage',
      "Présence et accompagnement de l'animal",
    ],
  },
  {
    slug: 'import-export',
    title: 'Import-Export',
    short:
      "Importation et exportation de produits non réglementés, dans le respect des réglementations nationales et internationales.",
    description:
      "Nous assurons l'importation et l'exportation de produits non réglementés dans le respect des réglementations nationales et internationales, avec un accompagnement de bout en bout.",
    points: [
      'Import et export de produits non réglementés',
      'Recherche de fournisseurs',
      'Approvisionnement',
      'Gestion logistique',
      'Suivi des expéditions',
    ],
  },
]

// Publics auprès desquels l'entreprise intervient (« Nos domaines d'intervention »).
export const audiences = [
  'Particuliers',
  'Entreprises',
  'Commerces',
  'Collectivités',
  'Syndics de copropriété',
  'Résidences',
  'Immeubles',
  'Chantiers',
  'Associations',
]

// end : valeur numérique finale utilisée pour l'animation du compteur (CountUp).
export const stats = [
  { end: 6, suffix: 'j/7', label: 'Du lundi au samedi, 7h–18h' },
  { end: 24, prefix: '< ', suffix: 'h', label: 'Délai de réponse à vos demandes' },
  { end: 100, suffix: '%', label: 'Techniciens formés IFEH' },
  { end: 6, suffix: '', label: 'Domaines de prestations multiservices' },
]

// icon : identifiant utilisé par Icons.jsx pour afficher un pictogramme dédié
// (voir frontend/src/components/Icons.jsx et la table VALUE_ICONS).
export const values = [
  {
    title: 'Respect des délais',
    icon: 'clock',
    description: "Nous nous engageons sur des délais et les tenons, quel que soit le type de chantier.",
  },
  {
    title: 'Dynamisme',
    icon: 'bolt',
    description: "Une équipe jeune et réactive, disponible pour s'adapter à vos besoins et imprévus.",
  },
  {
    title: 'Savoir-faire',
    icon: 'certificate',
    description: "Des techniciens formés par l'IFEH, des protocoles adaptés à chaque secteur d'activité.",
  },
  {
    title: 'Culture du travail bien fait',
    icon: 'sparkles',
    description: "Le souci du détail à chaque intervention, sans compromis sur la qualité.",
  },
]

// NB : témoignages illustratifs (noms fictifs) — à remplacer par de vrais avis
// clients (Google, Instagram…) dès que possible.
export const testimonials = [
  {
    quote: "Une équipe sérieuse et ponctuelle. Nos bureaux sont impeccables chaque matin, on ne s'en occupe plus.",
    author: 'Sandrine M.',
    role: 'Office manager, cabinet comptable · Paris 10ᵉ',
  },
  {
    quote: "Intervention rapide après nos travaux, tout était nickel avant l'ouverture. Je recommande.",
    author: 'Julien T.',
    role: 'Gérant de boutique · Paris',
  },
  {
    quote: "Réactifs, propres sur eux, et toujours à l'écoute de nos remarques. Exactement ce qu'on cherchait.",
    author: 'Isabelle R.',
    role: 'Gestionnaire de copropriété · Île de France',
  },
]

export const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
]
