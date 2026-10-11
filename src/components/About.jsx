// Mot mis en valeur : Instrument Serif italique, couleur accent
function Highlight({ children }) {
  return <span className="it text-accent">{children}</span>
}

export default function About() {
  return (
    <section className="wrap py-[140px]">
      <p className="m-0 max-w-[1100px] font-medium text-[clamp(30px,4.2vw,60px)] leading-[1.12] tracking-[-0.03em]">
        Je suis Martial. Je crée des applications <Highlight>utiles</Highlight>, solides et
        agréables à utiliser — pensées pour le quotidien des gens au{' '}
        <Highlight>Burkina Faso</Highlight>.
      </p>
    </section>
  )
}
