import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MobileActionMenu from './MobileActionMenu.jsx'
import ScrollToTopButton from './ScrollToTopButton.jsx'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Actions flottantes : menu de contact (mobile uniquement) + remonter en haut */}
      <MobileActionMenu />
      <ScrollToTopButton />
    </div>
  )
}
