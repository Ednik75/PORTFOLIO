import { useEffect } from 'react'

// Met à jour le titre de l'onglet et les balises <meta> déjà présentes dans index.html
function setMeta(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content)
}

export default function Seo({ title, description }) {
  // useEffect : s'exécute après l'affichage, et de nouveau si le titre ou la description changent
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
  }, [title, description])

  return null
}
