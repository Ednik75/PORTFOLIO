import { profile } from '../data/profile.js'
import Glows from './Glows.jsx'
import Header from './Header.jsx'
import Lens from './Lens.jsx'

export default function Hero() {
  return (
    <section className="stage min-h-[860px] flex flex-col">
      <Glows />
      <Header />

      <div id="accueil" className="wrap grow flex flex-col justify-center py-10">
        <div className="relative">
          <Lens />
          <h1 className="mega m-0">
            {/* rise + d1/d2/d3 : chaque ligne apparaît avec un léger décalage */}
            <span className="rise d1 block">Fullstack</span>
            <span className="rise d2 flex flex-col items-end text-right">
              <span className="it text-accent text-[0.42em] leading-none mr-[0.15em]">
                web &amp; mobile
              </span>
              <span>développeur</span>
            </span>
          </h1>
        </div>
      </div>

      <div className="wrap rise d3 pb-9">
        <div className="grid gap-8 items-end grid-cols-2 min-[901px]:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
          {profile.heroInfos.map(([line1, line2]) => (
            <p key={line1} className="cap m-0 text-text-2">
              {line1}
              <br />
              {line2}
            </p>
          ))}
          <div className="scrollcue" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}
