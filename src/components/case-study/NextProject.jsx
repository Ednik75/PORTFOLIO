import { Link } from 'react-router'
import ArrowIcon from '../ArrowIcon.jsx'

export default function NextProject({ project }) {
  return (
    <section className="wrap pb-16">
      <Link
        to={`/projets/${project.slug}`}
        className="no-underline text-bg rounded-[28px] p-8 min-[901px]:p-10 bg-accent flex flex-wrap items-center justify-between gap-4 hover:brightness-110"
      >
        <span className="flex flex-col gap-1.5">
          <span className="cap">Projet suivant</span>
          <strong className="text-[36px] font-bold tracking-[-0.02em]">{project.title}</strong>
        </span>
        <ArrowIcon size={40} />
      </Link>
    </section>
  )
}
