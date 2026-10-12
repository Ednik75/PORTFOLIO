import { Link, useParams } from 'react-router'
import { getCaseStudy, projects } from '../data/projects.js'
import { profile } from '../data/profile.js'
import ArrowIcon from '../components/ArrowIcon.jsx'
import Seo from '../components/Seo.jsx'
import FaniStripe from '../components/FaniStripe.jsx'
import Architecture from '../components/case-study/Architecture.jsx'
import CaseSection, { CaseText } from '../components/case-study/CaseSection.jsx'
import NextProject from '../components/case-study/NextProject.jsx'
import Visual from '../components/case-study/Visual.jsx'
import NotFound from './NotFound.jsx'

const pad = (n) => String(n).padStart(2, '0')

function MetaItem({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="cap text-text-3">{label}</span>
      <span className="text-[17px] font-semibold">{children}</span>
    </div>
  )
}

export default function CaseStudy() {
  // useParams lit la partie variable de l'adresse : /projets/:slug
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = projects[index]
  const study = getCaseStudy(project)
  // Le modulo fait boucler : après le dernier projet, on revient au premier
  const nextProject = projects[(index + 1) % projects.length]
  const hasArchitecture = study.architecture.length > 0
  let section = 0
  const nextNumber = () => pad(++section)

  return (
    <>
      <Seo title={`${project.title} — Étude de cas · ${profile.name}`} description={project.desc} />
      <div className="fani-lg" aria-hidden="true" />

      <header className="wrap flex items-center justify-between gap-4 py-6">
        <Link to="/#projets" className="min-h-11 inline-flex items-center gap-2.5 no-underline font-semibold">
          <ArrowIcon direction="left" size={18} />
          Tous les projets
        </Link>
        <span className="cap text-text-3">
          Étude de cas · {pad(index + 1)} / {pad(projects.length)}
        </span>
      </header>

      <main id="contenu">
        <section className="wrap py-14 flex flex-col gap-7">
          <span className="cap text-accent">{study.label}</span>
          <h1 className="m-0 font-bold text-[56px] min-[901px]:text-[96px] leading-[0.95] tracking-[-0.04em]">
            {project.title}
          </h1>
          <p className="m-0 text-2xl leading-[1.45] text-text-2 max-w-[820px]">{study.lead}</p>
          <div className="grid grid-cols-2 min-[901px]:grid-cols-4 gap-6 pt-7 border-t border-line">
            <MetaItem label="Rôle">{study.role}</MetaItem>
            <MetaItem label="Stack">{project.stack}</MetaItem>
            <MetaItem label="Statut">{study.status}</MetaItem>
            <MetaItem label="Liens">
              <span className="flex gap-4 -my-2.5">
                <a href={study.demo} className="min-h-11 inline-flex items-center">Démo</a>
                <a href={study.code} className="min-h-11 inline-flex items-center">Code</a>
                {/* Second dépôt quand le backend vit à part (ex. Campus Manager) */}
                {study.codeApi && (
                  <a href={study.codeApi} className="min-h-11 inline-flex items-center">API</a>
                )}
              </span>
            </MetaItem>
          </div>
        </section>

        <section className="wrap pb-24">
          <Visual visual={study.heroVisual} className="h-[320px] min-[901px]:h-[560px]" rounded="rounded-[28px]" width="1136" height="560">
            <div className="fani-thin absolute inset-x-0 top-0" aria-hidden="true" />
          </Visual>
        </section>

        <CaseSection number={nextNumber()} label="Contexte" title="Le problème">
          <CaseText>{study.problem}</CaseText>
        </CaseSection>

        <CaseSection number={nextNumber()} label="Solution" title="Ce que j'ai construit">
          {study.features.length > 0 ? (
            <ul className="m-0 mt-2 p-0 list-none border-b border-line">
              {study.features.map((feature) => (
                <li key={feature.title} className="py-5 border-t border-line flex flex-col gap-1.5">
                  <strong className="text-xl font-semibold">{feature.title}</strong>
                  <span className="text-base leading-[1.6] text-text-2">{feature.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <CaseText>[À RÉDIGER : les 3–4 fonctionnalités clés, une phrase chacune.]</CaseText>
          )}
        </CaseSection>

        {hasArchitecture && <Architecture number={nextNumber()} blocks={study.architecture} />}

        {study.numbers.length > 0 && (
          <section className="wrap py-[88px]">
            <ul className="m-0 p-0 list-none grid grid-cols-2 min-[901px]:grid-cols-4 gap-5">
              {study.numbers.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex flex-col gap-1.5 pt-5 border-t-2 ${i === 0 ? 'border-accent' : 'border-[#3A4540]'}`}
                >
                  <strong className="text-[56px] font-bold leading-none">{item.value}</strong>
                  <span className="cap text-text-3">{item.label}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className={`wrap pb-[88px] ${study.numbers.length > 0 ? '' : 'pt-[88px]'}`}>
          <div className="grid gap-4 min-[901px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] min-[901px]:gap-5">
            {study.shots.map((shot, i) => (
              <Visual key={i} visual={shot} className="h-[420px]" width="560" height="420" />
            ))}
          </div>
        </section>

        <CaseSection number={nextNumber()} label="Bilan" title="Ce que j'ai appris">
          <CaseText>{study.learnings}</CaseText>
        </CaseSection>

        <NextProject project={nextProject} />
      </main>

      <footer className="wrap cap pb-10 flex flex-wrap justify-between gap-3 text-text-3">
        <span>© 2026 {profile.name}</span>
        <span>Conçu et codé à Koudougou, Burkina Faso</span>
      </footer>
      <FaniStripe />
    </>
  )
}
