import { profile } from '../data/profile.js'
import ContactForm from './ContactForm.jsx'
import Glows from './Glows.jsx'

const CONTACT_GLOWS = [
  { name: 'g1', style: { top: '10%', left: '10%', right: 'auto', opacity: 0.45 } },
  { name: 'g3', style: { top: '40%', right: '15%', opacity: 0.25 } },
]

const linkClass = 'min-h-11 inline-flex items-center'

export default function Contact() {
  const mailto = `mailto:${profile.email}`
  const links = [
    { label: profile.email, href: mailto },
    { label: 'WhatsApp', href: `https://wa.me/${profile.whatsapp}` },
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
  ]

  return (
    <section id="contact" className="stage pt-[140px] pb-20">
      <Glows glows={CONTACT_GLOWS} />
      <div className="wrap flex flex-col gap-12">
        <h2 className="cap m-0 font-normal text-text-2">Un projet, un stage, une idée ?</h2>
        <p className="m-0 font-semibold text-[clamp(60px,12vw,190px)] tracking-[-0.055em] leading-[0.9]">
          Parlons<span className="it text-accent">-en</span>
        </p>

        <ContactForm />

        <footer className="flex flex-wrap justify-between gap-6 pt-7 border-t border-line">
          <ul className="cap m-0 p-0 list-none flex flex-wrap gap-x-7">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className={`cap text-text-3 ${linkClass}`}>
            © 2026 {profile.name} · Burkina Faso
          </span>
        </footer>
      </div>
    </section>
  )
}
