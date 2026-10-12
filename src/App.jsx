import { Routes, Route } from 'react-router'
import ScrollManager from './components/ScrollManager.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      {/* Invisible jusqu'à ce qu'on appuie sur Tab : permet de sauter directement au contenu */}
      <a href="#contenu" className="skip-link cap">
        Aller au contenu
      </a>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:slug" element={<CaseStudy />} />
        {/* « * » attrape toutes les adresses inconnues */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
