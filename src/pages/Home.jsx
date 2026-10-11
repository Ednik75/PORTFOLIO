import About from '../components/About.jsx'
import Hero from '../components/Hero.jsx'
import ProjectCarousel from '../components/ProjectCarousel.jsx'
import TechMarquee from '../components/TechMarquee.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectCarousel />
      <TechMarquee />
    </main>
  )
}
