// Bibliothèque d'icônes SVG inline (pas de dépendance externe), utilisées pour
// les valeurs de l'entreprise et comme illustration de secours pour les
// services sans photo réelle en haute définition.

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  'aria-hidden': true,
}

export function ClockIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function BoltIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13l1-8.5z" />
    </svg>
  )
}

export function CertificateIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function SparklesIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

export function BuildingIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a1 1 0 011-1h5a1 1 0 011 1v16M15 21v-9a1 1 0 011-1h3a1 1 0 011 1v9M8 7h1m-1 3h1m-1 3h1m4-6h1m-1 3h1m-1 3h1" />
    </svg>
  )
}

export function GraduationCapIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.44 60.44 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147L12 14.25l7.74-4.103M4.26 10.147a59.77 59.77 0 00-.213-3.348L12 3l8.213 3.799a59.9 59.9 0 00-.213 3.348" />
    </svg>
  )
}

export function HammerIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
    </svg>
  )
}

export function FactoryIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V9.75l6-3.375V9.75m0 0l6-3.375V9.75m0 0l3-1.688V21M9.75 9.75v3m6-3v3M6.75 21v-3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75V21" />
    </svg>
  )
}

export function UtensilsIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v6a2 2 0 002 2v10M7 3a2 2 0 00-2 2v4a2 2 0 002 2m0-8v8m10-8v18m0-18a3 3 0 013 3v4a3 3 0 01-3 3" />
    </svg>
  )
}

export function WindowIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM3 12h18M12 3v18" />
    </svg>
  )
}

export function ShieldCheckIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l1.5 1.5 4.5-4.5M12 3l7.5 3v5.25c0 4.62-3.11 8.86-7.5 9.99-4.39-1.13-7.5-5.37-7.5-9.99V6L12 3z" />
    </svg>
  )
}

export function HeartIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

export function TruckIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V6.75c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v10.875m0 0a1.5 1.5 0 003 0m-3 0a1.5 1.5 0 013 0m3.75 0h.375c.621 0 1.125-.504 1.125-1.125v-3.026c0-.251-.084-.495-.24-.693l-2.7-3.447a1.125 1.125 0 00-.885-.431H14.25m5.25 8.722a1.5 1.5 0 00-3 0" />
    </svg>
  )
}

export function LeafIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97 0-9-4.03-9-9 0-4.632 3.5-8.447 8-8.945V3a9 9 0 019 9c0 .341-.019.678-.056 1.009C19.5 12.5 17 12 15 13c-2.5 1.25-3 4-3 8zM12 21c0-6 2-9 9-9" />
    </svg>
  )
}

export function PawIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="9.5" r="1.75" />
      <circle cx="10" cy="5.5" r="1.75" />
      <circle cx="14" cy="5.5" r="1.75" />
      <circle cx="18" cy="9.5" r="1.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-2.5 0-5.5 3.2-5.5 5.5 0 1.5 1.2 2.5 2.6 2.5 1.1 0 1.9-.5 2.9-.5s1.8.5 2.9.5c1.4 0 2.6-1 2.6-2.5C17.5 14.2 14.5 11 12 11z" />
    </svg>
  )
}

export function GlobeIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a13.5 13.5 0 000 18M12 3a13.5 13.5 0 010 18" />
    </svg>
  )
}

// Table de correspondance utilisée par les sections "valeurs" (Home, About)
export const VALUE_ICONS = {
  clock: ClockIcon,
  bolt: BoltIcon,
  certificate: CertificateIcon,
  sparkles: SparklesIcon,
}

// Table de correspondance utilisée par ServiceCard quand aucune photo haute
// définition n'est disponible pour un service donné.
export const SERVICE_ICONS = {
  'assistance-vie': HeartIcon,
  'nettoyage-desinfection': BuildingIcon,
  debarras: TruckIcon,
  'jardinage-bricolage': LeafIcon,
  animaux: PawIcon,
  'import-export': GlobeIcon,
}
