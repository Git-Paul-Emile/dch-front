# DCH Nettoyage Multiservices : site web

Site vitrine + formulaire de devis pour DCH Nettoyage Multiservices.

- **Frontend** : React 18 + Vite + React Router + Tailwind CSS (`/frontend`)
- **Backend** : Node.js + Express, API REST pour le formulaire de contact (`/backend`)

## ⚠️ À faire avant mise en ligne

Le contenu a été rédigé de façon réaliste à partir des photos et réseaux sociaux disponibles, mais
certaines informations sont volontairement des placeholders. Cherchez `[À COMPLÉTER]` / `[...]` dans
le code (principalement dans `frontend/src/lib/siteData.js`) et remplacez :

- Numéro SIRET (`siteData.js`) : téléphone, email et adresse sont déjà les vraies coordonnées de l'entreprise
- Témoignages clients (actuellement des exemples, à remplacer par de vrais avis)
- Texte de la page « À propos » (date de création, effectif de l'équipe)
- Mentions légales (`frontend/src/pages/Legal.jsx`) : hébergeur, représentant légal
- Les dossiers `frontend/node_modules` et `backend/node_modules` ont été partiellement (et
  incorrectement) générés pendant les tests de build dans cet environnement. **Supprimez-les avant
  votre premier `npm install`** : `rmdir /s /q frontend\node_modules backend\node_modules` (Windows)
  puis relancez l'installation normalement.

## Structure du projet

```
dch/
├── frontend/           # Application React (Vite)
│   ├── src/
│   │   ├── components/ # Header, Footer, Layout, ServiceCard, Seo...
│   │   ├── pages/       # Home, Services, About, Gallery, Contact, Legal, NotFound
│   │   ├── lib/         # siteData.js (contenu éditorial), api.js (client HTTP)
│   │   └── index.css    # Design system Tailwind (couleurs, typographie, composants)
│   └── public/
│       ├── logo.png
│       └── images/      # Photos réelles des chantiers + badges
│           └── services/ # 1 photo dédiée par service (optimisées web, 1600px)

```

## Lancer en développement

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`. En développement, les appels à `/api/...` sont
automatiquement redirigés vers le backend (`vite.config.js`, section `server.proxy`).

## Build de production

```bash
cd frontend && npm run build
```

Génère un dossier `frontend/dist/` contenant les fichiers statiques (HTML/CSS/JS) prêts à être
servis par n'importe quel serveur web, y compris Apache (XAMPP).

## Déploiement sous XAMPP / Apache

Le frontend (statique) et le backend (Node) se déploient séparément :

1. **Frontend** : copiez le contenu de `frontend/dist/` dans le `DocumentRoot` Apache de votre choix
   (ex. `C:\xampp\htdocs\dch-nettoyage`). Apache sert directement ces fichiers.

## Accessibilité et bonnes pratiques appliquées

- Navigation clavier complète, focus visible, HTML sémantique (`header`, `nav`, `main`, `footer`)
- Contrastes conformes WCAG AA (texte marine sur fond orange, jamais blanc sur orange : ratio insuffisant)
- Formulaire : labels visibles, validation inline au blur, messages d'erreur spécifiques, `autocomplete`
- Cibles tactiles ≥ 44px, design mobile-first
