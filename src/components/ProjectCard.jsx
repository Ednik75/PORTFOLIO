import { Link } from 'react-router'
import ArrowIcon from './ArrowIcon.jsx'

// Zone visuelle de la carte : la capture si elle existe, sinon un placeholder « [Capture …] »
function Shot({ project }) {
  return (
    <div className="shot relative h-[260px] rounded-2xl overflow-hidden bg-[#12151D] flex items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute size-[260px] rounded-full blur-[60px] opacity-70 -top-10 -left-[30px]"
        style={{ background: project.c1 }}
      />
      <div
        aria-hidden="true"
        className="absolute size-[220px] rounded-full blur-[60px] opacity-60 -bottom-[60px] -right-5"
        style={{ background: project.c2 }}
      />
      {project.image ? (
        <img
          src={project.image}
          alt={`Capture d'écran de ${project.title}`}
          width="384"
          height="260"
          loading="lazy"
          className="relative size-full object-cover"
        />
      ) : (
        <span className="cap relative text-text text-center px-4">[Capture {project.title}]</span>
      )}
    </div>
  )
}

export default function ProjectCard({ project, number }) {
  return (
    <article className="slide rounded-[22px] bg-card border border-line p-7 box-border flex flex-col gap-[22px] overflow-hidden">
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <span className="cap text-text-2">
            {String(number).padStart(2, '0')} · {project.kind}
          </span>
          <h3 className="m-0 text-[30px] font-semibold tracking-[-0.03em] uppercase">
            {project.title}
          </h3>
        </div>
        <Link
          to={`/projets/${project.slug}`}
          aria-label={`Voir le projet ${project.title}`}
          className="shrink-0 size-12 rounded-full border border-text/45 flex items-center justify-center no-underline"
        >
          <ArrowIcon size={18} />
        </Link>
      </div>
      <Shot project={project} />
      <p className="m-0 text-[15px] leading-[1.55] text-text-2">{project.desc}</p>
      <span className="cap text-text-3">{project.stack}</span>
    </article>
  )
}
