// Halos colorés flous en arrière-plan d'une section (purement décoratifs).
// Par défaut : les 4 halos du hero. On peut passer une autre liste pour les autres sections,
// ex. [{ name: 'g1', style: { opacity: 0.35 } }].
const HERO_GLOWS = [{ name: 'g1' }, { name: 'g2' }, { name: 'g3' }, { name: 'g4' }]

export default function Glows({ glows = HERO_GLOWS }) {
  return (
    <div aria-hidden="true">
      {glows.map((glow, i) => (
        <div key={i} className={`glow ${glow.name}`} style={glow.style} />
      ))}
    </div>
  )
}
