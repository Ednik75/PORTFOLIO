import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import FaniStripe from '../components/FaniStripe.jsx'
import Hero from '../components/Hero.jsx'
import Seo from '../components/Seo.jsx'
import ProjectCarousel from '../components/ProjectCarousel.jsx'
import Skills from '../components/Skills.jsx'
import TechMarquee from '../components/TechMarquee.jsx'

export default function Home() {
  return (
    <>
      <Seo
        title="Martial Nitiema — Développeur fullstack web & mobile"
        description="Portfolio de Martial Nitiema, développeur fullstack web & mobile (Django, React, Flutter) basé au Burkina Faso."
      />
      <main id="contenu">
        <Hero />
        <About />
        <ProjectCarousel />
        <TechMarquee />
        <Skills />
        <Contact />
      </main>
      <FaniStripe />
    </>
  )
}
