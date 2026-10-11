import { profile } from '../data/profile.js'

export default function Skills() {
  return (
    <section className="wrap py-[120px]" aria-labelledby="competences">
      {/* Titre invisible à l'écran mais annoncé par les lecteurs d'écran */}
      <h2 id="competences" className="sr-only">
        Compétences et parcours
      </h2>
      <div className="grid gap-8 grid-cols-2 min-[901px]:grid-cols-4">
        {profile.skills.map((column) => (
          <div key={column.title} className="flex flex-col gap-3.5">
            <h3 className="cap m-0 font-normal text-accent">{column.title}</h3>
            <ul className="m-0 p-0 list-none text-[17px] leading-[1.9] text-text-2">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
