import { profile } from '../data/profile.js'

// Lien d'en-tête : hauteur mini de 44px pour être facile à toucher au doigt.
const linkClass = 'no-underline min-h-11 inline-flex items-center'

export default function Header() {
  return (
    <header className="wrap cap flex justify-between items-center gap-4 py-7">
      <a href="#accueil" className={`${linkClass} font-bold`}>
        {profile.name}
      </a>
      {/* Menu simplifié sous 900px : on masque les liens du milieu */}
      <a href="#projets" className={`${linkClass} max-[900px]:hidden`}>
        Projets
      </a>
      <a href={profile.github} className={`${linkClass} max-[900px]:hidden`}>
        GitHub
      </a>
      <a href="#contact" className={linkClass}>
        Contact
      </a>
    </header>
  )
}
