// Les 8 projets, repris à l'identique de la maquette (design/accueil-anime.html).
// - slug   : sert à l'adresse de la page étude de cas → /projets/<slug>
// - c1, c2 : couleurs des deux halos de la carte
// - image  : chemin d'une capture WebP dans public/images/projets/ (null = placeholder affiché)
// - caseStudy : contenu de la page /projets/<slug>. Absent = page remplie de placeholders
//   (voir getCaseStudy en bas du fichier).
export const projects = [
  {
    slug: 'fasomarket',
    title: 'FasoMarket',
    kind: 'Web + Mobile',
    c1: '#1F8A5B',
    c2: '#F0B93A',
    desc: 'Marketplace locale : clients, commerçants, admin, et paiement Orange Money, Moov Money, Wave.',
    stack: 'Django REST · React · Flutter',
    image: null,
    caseStudy: {
      label: 'Marketplace · Web + Mobile',
      lead: 'Une marketplace locale où les commerçants burkinabè vendent en ligne et où les clients paient avec le mobile money qu’ils utilisent déjà.',
      role: 'Développeur fullstack',
      status: 'En ligne · Railway',
      demo: '[LIEN DÉMO]',
      code: 'https://github.com/Ednik75/faso_market',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — capture desktop + téléphone côte à côte]' },
      problem:
        '[À RÉDIGER : en 3–4 phrases, le problème des commerçants et des clients que tu as observé, et pourquoi les solutions existantes ne suffisaient pas.]',
      features: [
        {
          title: 'Trois espaces, une plateforme',
          text: 'Un parcours dédié au client, au commerçant et à l’administrateur, avec authentification JWT.',
        },
        {
          title: 'Paiement mobile money',
          text: 'Orange Money, Moov Money et Wave intégrés au tunnel de commande.',
        },
        {
          title: 'Une app mobile complète',
          text: '17 écrans Flutter, état géré avec Riverpod et navigation GoRouter.',
        },
        {
          title: 'Qualité et déploiement',
          text: '48 tests automatisés (pytest, factory-boy) et mise en production sur Railway.',
        },
      ],
      // Schéma en 3 blocs ; `highlight` = bloc central encadré en doré
      architecture: [
        { label: 'Clients', titles: ['App Flutter', 'Web React + Tailwind'] },
        { label: 'API', titles: ['Django REST Framework'], detail: 'JWT · rôles · paiements', highlight: true },
        { label: 'Données & services', titles: ['PostgreSQL'], detail: 'Orange Money · Moov · Wave' },
      ],
      numbers: [
        { value: '17', label: 'écrans mobiles' },
        { value: '48', label: 'tests automatisés' },
        { value: '3', label: 'rôles utilisateurs' },
        { value: '3', label: 'mobile money' },
      ],
      shots: [
        { image: null, placeholder: '[CAPTURE — espace commerçant]' },
        { image: null, placeholder: '[ÉCRAN MOBILE — catalogue]' },
        { image: null, placeholder: '[ÉCRAN MOBILE — paiement]' },
      ],
      learnings:
        '[À RÉDIGER : 2–3 apprentissages concrets — un défi technique résolu, une décision d’architecture, ce que tu ferais autrement.]',
    },
  },
  {
    slug: 'lafisira',
    title: 'LAFISIRA',
    kind: 'Mobile · Santé',
    c1: '#8A1F6E',
    c2: '#1F8A5B',
    desc: 'Diagnostic vocal par IA hors-ligne, pharmacopée traditionnelle et éco-alertes. Prix du Jeune Inventeur 2026.',
    stack: 'Flutter · FastAPI · SQLite',
    image: null,
  },
  {
    slug: 'campus-manager',
    title: 'Campus Manager',
    kind: 'Web · Stage UJKZ',
    c1: '#2B4FD8',
    c2: '#8A1F6E',
    desc: 'Emplois du temps universitaires en temps réel, avec détection automatique des conflits.',
    stack: 'Next.js · NestJS · PostgreSQL',
    image: null,
  },
  {
    slug: 'optilunette',
    title: 'OptiLunette',
    kind: 'Web · E-commerce',
    c1: '#E5533D',
    c2: '#2B4FD8',
    desc: 'Boutique de lunettes avec essayage virtuel et back-office pour opticiens.',
    stack: '[Ta stack]',
    image: null,
  },
  {
    slug: 'mdconvert',
    title: 'MDConvert',
    kind: 'Web · Outil',
    c1: '#F0B93A',
    c2: '#2B4FD8',
    desc: 'Convertit n’importe quel fichier en Markdown pour économiser les tokens des IA.',
    stack: 'Application web',
    image: null,
  },
  {
    slug: 'sotraco-track',
    title: 'SOTRACO Track',
    kind: 'Mobile · Transport',
    c1: '#1F8A5B',
    c2: '#2B4FD8',
    desc: 'Suivi des bus SOTRACO à Ouagadougou en temps réel.',
    stack: 'Flutter · Django Channels · Redis',
    image: null,
  },
  {
    slug: 'resto-vitrine',
    title: 'Resto vitrine',
    kind: 'Web · Restauration',
    c1: '#E5533D',
    c2: '#F0B93A',
    desc: 'Site vitrine de restaurant avec commande directe via WhatsApp.',
    stack: 'React · Tailwind CSS',
    image: null,
  },
  {
    slug: 'droplink',
    title: 'DropLink',
    kind: 'Web / Mobile · Outil',
    c1: '#2B4FD8',
    c2: '#1F8A5B',
    desc: 'Transfert de fichiers PC ↔ téléphone sans câble, par scan de QR code.',
    stack: 'Multi-plateforme',
    image: null,
  },
]

// Contenu de l'étude de cas d'un projet : ce qui est renseigné dans `caseStudy`,
// complété par des placeholders visibles pour tout ce qui manque encore.
export function getCaseStudy(project) {
  return {
    label: project.kind,
    lead: project.desc,
    role: '[Ton rôle]',
    status: '[Statut]',
    demo: '[LIEN DÉMO]',
    code: '[LIEN CODE]',
    heroVisual: { image: null, placeholder: `[VISUEL PRINCIPAL — ${project.title}]` },
    problem: '[À RÉDIGER : le problème que ce projet résout, en 3–4 phrases.]',
    features: [],
    architecture: [], // vide = section masquée
    numbers: [], // vide = section masquée
    shots: [
      { image: null, placeholder: '[CAPTURE 1]' },
      { image: null, placeholder: '[CAPTURE 2]' },
      { image: null, placeholder: '[CAPTURE 3]' },
    ],
    learnings: '[À RÉDIGER : 2–3 apprentissages concrets tirés de ce projet.]',
    ...project.caseStudy,
  }
}
