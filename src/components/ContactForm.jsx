import { useState } from 'react'
import { profile } from '../data/profile.js'

// Formulaire sans serveur : à l'envoi, il prépare un message déjà rédigé et ouvre
// WhatsApp ou l'application email du visiteur. Rien n'est stocké sur le site.

const fieldClass =
  'w-full box-border min-h-12 px-4 py-3 rounded-2xl bg-card border border-line text-text text-base ' +
  'placeholder:text-text-3 focus:outline-none focus:border-accent'
const labelClass = 'cap text-text-2'
const buttonClass =
  'min-h-12 px-6 rounded-full font-semibold text-base cursor-pointer inline-flex items-center justify-center'

function buildMessage({ name, need, message }) {
  return `Bonjour Martial, je suis ${name}.\nCe que je veux : ${need}.\n\n${message}`
}

export default function ContactForm() {
  // Un seul objet d'état pour les trois champs : chaque saisie met à jour sa clé
  const [form, setForm] = useState({ name: '', need: profile.contactNeeds[0], message: '' })
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  function handleSubmit(event) {
    event.preventDefault()
    const text = buildMessage(form)
    // `submitter` = le bouton cliqué : WhatsApp ou email
    if (event.nativeEvent.submitter?.value === 'whatsapp') {
      window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    } else {
      const subject = `${form.need} — message de ${form.name}`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 max-w-[760px]">
      <div className="grid gap-5 min-[701px]:grid-cols-2">
        <label className="flex flex-col gap-2.5">
          <span className={labelClass}>Votre nom</span>
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            autoComplete="name"
            placeholder="Ex. Aminata Ouédraogo"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelClass}>Ce que vous voulez</span>
          <select name="need" value={form.need} onChange={update} className={fieldClass}>
            {profile.contactNeeds.map((need) => (
              <option key={need}>{need}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2.5">
        <span className={labelClass}>Votre message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          required
          rows={5}
          placeholder="Décrivez votre projet ou votre demande en quelques lignes."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="flex flex-wrap gap-3">
        <button type="submit" value="whatsapp" className={`${buttonClass} bg-accent text-bg hover:brightness-110`}>
          Envoyer sur WhatsApp
        </button>
        <button
          type="submit"
          value="email"
          className={`${buttonClass} bg-transparent text-text border border-line hover:border-text-3`}
        >
          Envoyer par email
        </button>
      </div>
    </form>
  )
}
