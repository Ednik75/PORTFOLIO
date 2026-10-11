import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Quand on change de page, React Router ne touche pas au défilement.
// Ce composant remonte en haut, ou descend jusqu'à l'ancre (#projets…) si l'adresse en a une.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
