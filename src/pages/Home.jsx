import About from '../components/About.jsx'
import Hero from '../components/Hero.jsx'
import TechMarquee from '../components/TechMarquee.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* Le carrousel de projets viendra ici (étape 4) */}
      <TechMarquee />
    </main>
  )
}
