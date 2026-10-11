import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import FaniStripe from '../components/FaniStripe.jsx'
import Hero from '../components/Hero.jsx'
import ProjectCarousel from '../components/ProjectCarousel.jsx'
import Skills from '../components/Skills.jsx'
import TechMarquee from '../components/TechMarquee.jsx'

export default function Home() {
  return (
    <>
      <main>
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
