import { Link } from 'react-router'
import ArrowIcon from '../components/ArrowIcon.jsx'
import FaniStripe from '../components/FaniStripe.jsx'
import Seo from '../components/Seo.jsx'
import Glows from '../components/Glows.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable — Martial Nitiema" description="Cette adresse ne correspond à aucune page du portfolio." />
      <main id="contenu" className="stage min-h-svh flex flex-col justify-center">
        <Glows />
        <div className="wrap flex flex-col gap-8 py-20">
          <span className="cap text-text-2">Erreur 404</span>
          <h1 className="mega m-0">
            Page <span className="it text-accent">introuvable</span>
          </h1>
          <p className="m-0 text-lg leading-[1.65] text-text-2 max-w-[560px]">
            Cette adresse ne correspond à aucune page du portfolio.
          </p>
          <Link to="/" className="cap self-start min-h-11 inline-flex items-center gap-2.5 no-underline">
            <ArrowIcon direction="left" size={18} />
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <FaniStripe />
    </>
  )
}
