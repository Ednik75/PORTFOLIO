import { profile } from '../data/profile.js'

// Une copie de la liste. Le `pr-14` (= le gap) rend les deux copies exactement identiques :
// quand l'animation arrive à -50 %, la 2e copie est pile à la place de la 1re → boucle sans saut.
function TechList({ hidden = false }) {
  return (
    <div className="flex gap-14 pr-14" aria-hidden={hidden || undefined}>
      {profile.techs.map((tech, i) => (
        <span key={tech} className={i % 2 === 1 ? 'it text-accent' : undefined}>
          {tech}
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies"
      className="border-y border-[#1A1D26] overflow-hidden py-7"
    >
      <div className="marquee text-[44px] font-medium tracking-[-0.03em] whitespace-nowrap">
        <TechList />
        {/* Doublon purement visuel : ignoré par les lecteurs d'écran */}
        <TechList hidden />
      </div>
    </section>
  )
}
