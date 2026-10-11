import { useRef, useState } from 'react'
import { projects } from '../data/projects.js'
import ArrowIcon from './ArrowIcon.jsx'
import Glows from './Glows.jsx'
import ProjectCard from './ProjectCard.jsx'

const GAP = 20 // doit correspondre au `gap` de .track (animations.css)
const LAST = projects.length - 1

const SECTION_GLOWS = [
  { name: 'g1', style: { top: '20%', right: '20%', opacity: 0.35 } },
  { name: 'g2', style: { bottom: 0, left: '30%', opacity: 0.3 } },
]

const roundButton =
  'size-14 rounded-full border border-text/40 bg-transparent text-text cursor-pointer flex items-center justify-center hover:text-accent hover:border-accent disabled:opacity-35 disabled:cursor-default disabled:hover:text-text disabled:hover:border-text/40'

export default function ProjectCarousel() {
  // useRef donne accès à l'élément DOM du rail pour lire/modifier son défilement
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  // Distance entre deux cartes = largeur d'une carte + l'espace entre elles
  function cardStep() {
    const firstCard = trackRef.current?.firstElementChild
    return firstCard ? firstCard.getBoundingClientRect().width + GAP : 460
  }

  function goTo(i) {
    const target = Math.max(0, Math.min(LAST, i))
    trackRef.current.scrollTo({ left: target * cardStep(), behavior: 'smooth' })
    setIndex(target)
  }

  // Appelé à chaque défilement (flèches, points, doigt ou trackpad) : on recalcule la carte visible
  function handleScroll() {
    const track = trackRef.current
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    // Sur grand écran plusieurs cartes sont visibles : arrivé au bout, on active le dernier point
    setIndex(atEnd ? LAST : Math.round(track.scrollLeft / cardStep()))
  }

  return (
    <section id="projets" className="stage pt-10 pb-[140px]">
      <Glows glows={SECTION_GLOWS} />
      <div className="wrap flex flex-col gap-10">
        <div className="flex justify-between items-end gap-6 flex-wrap">
          <h2 className="m-0 text-[clamp(44px,7vw,104px)] font-semibold tracking-[-0.05em] leading-[0.9]">
            Projets <span className="it text-accent">choisis</span>
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label="Projet précédent"
              className={roundButton}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === LAST}
              aria-label="Projet suivant"
              className={roundButton}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* scroll-snap (classe .track) : le swipe au doigt s'arrête toujours pile sur une carte */}
        <div ref={trackRef} onScroll={handleScroll} className="track">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} number={i + 1} />
          ))}
        </div>

        <div className="flex justify-center" role="group" aria-label="Choisir un projet">
          {projects.map((project, i) => {
            const active = i === index
            return (
              <button
                key={project.slug}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Projet ${i + 1} : ${project.title}`}
                aria-current={active || undefined}
                className="w-10 h-11 border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center"
              >
                <span
                  className={
                    active
                      ? 'size-2.5 rounded-full bg-accent'
                      : 'size-2 rounded-full border border-text/60'
                  }
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
