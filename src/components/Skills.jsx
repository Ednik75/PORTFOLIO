import { profile } from '../data/profile.js'

// Une catégorie d'outils : son nom à gauche, ses outils en pastilles à droite
function ToolRow({ title, items }) {
  return (
    <div className="grid gap-4 py-6 border-t border-line min-[901px]:grid-cols-[220px_1fr] min-[901px]:gap-8">
      <h3 className="cap m-0 font-normal text-accent min-[901px]:pt-2.5">{title}</h3>
      <ul className="m-0 p-0 list-none flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item} className="px-4 py-2 rounded-full border border-line bg-card text-[15px] text-text-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="competences" className="wrap py-[120px]" aria-labelledby="competences-titre">
      <h2
        id="competences-titre"
        className="m-0 mb-14 text-[clamp(44px,7vw,104px)] font-semibold tracking-[-0.05em] leading-[0.9]"
      >
        Outils <span className="it text-accent">&amp;</span> langages
      </h2>

      <div className="border-b border-line">
        {profile.toolbox.map((group) => (
          <ToolRow key={group.title} title={group.title} items={group.items} />
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-3.5">
        <h3 className="cap m-0 font-normal text-accent">Parcours</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap gap-x-8 gap-y-2 text-[17px] text-text-2">
          {profile.journey.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
