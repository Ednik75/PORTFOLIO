// Les projets du portfolio : ceux de la maquette (design/accueil-anime.html), complétés
// avec les infos réelles des dépôts GitHub (FasoMarket, Campus Manager, Tourism Platform, OptiLunette).
// - slug   : sert à l'adresse de la page étude de cas → /projets/<slug>
// - c1, c2 : couleurs des deux halos de la carte
// - image  : chemin d'une capture WebP dans public/images/projets/ (null = placeholder affiché)
// - caseStudy : contenu de la page /projets/<slug>. Absent = page remplie de placeholders
//   (voir getCaseStudy en bas du fichier).
// - caseStudy.codeApi : lien facultatif vers un second dépôt (backend séparé)
export const projects = [
  {
    slug: 'fasomarket',
    title: 'FasoMarket',
    kind: 'Web · Marketplace',
    c1: '#1F8A5B',
    c2: '#F0B93A',
    desc: 'Marketplace locale : clients, commerçants, admin, et paiement Orange Money, Moov Money, Wave.',
    stack: 'Node.js · Express · React',
    image: null,
    // Contenu tiré du dépôt github.com/Ednik75/faso_market (README)
    caseStudy: {
      label: 'Marketplace · Web',
      lead: 'Une marketplace locale qui connecte les commerçants de Ouagadougou à leurs clients : catalogue, commandes, stock, statistiques et paiement mobile money.',
      role: 'Développeur fullstack',
      status: 'En ligne · Render',
      demo: 'https://marketbf.onrender.com',
      code: 'https://github.com/Ednik75/faso_market',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — capture desktop + téléphone côte à côte]' },
      problem:
        '[À RÉDIGER : en 3–4 phrases, le problème des commerçants et des clients que tu as observé, et pourquoi les solutions existantes ne suffisaient pas.]',
      features: [
        {
          title: 'Trois espaces, une plateforme',
          text: 'Un parcours dédié au client, au commerçant et à l’administrateur, qui valide les boutiques avant leur mise en ligne.',
        },
        {
          title: 'Boutiques sur la carte',
          text: 'Boutiques géolocalisées sur une carte interactive Leaflet, avec avis clients (note et commentaire).',
        },
        {
          title: 'Commande et paiement local',
          text: 'Orange Money, Moov Money, Wave ou paiement à la livraison ; reçu par email à la commande et à la livraison.',
        },
        {
          title: 'Espace commerçant complet',
          text: 'Produits avec photos, stock avec seuils d’alerte et historique, statistiques de vente en graphiques.',
        },
        {
          title: 'Sécurité soignée',
          text: 'JWT, bcrypt, connexion Google, limitation de débit anti brute-force et décrément de stock transactionnel.',
        },
      ],
      architecture: [
        { label: 'Client', titles: ['Web React + Tailwind'], detail: 'Leaflet · Recharts' },
        { label: 'API', titles: ['Node.js · Express'], detail: 'JWT · rôles · paiements', highlight: true },
        { label: 'Données & services', titles: ['Turso (libSQL)'], detail: 'Cloudinary · emails' },
      ],
      numbers: [
        { value: '3', label: 'rôles utilisateurs' },
        { value: '4', label: 'modes de paiement' },
      ],
      shots: [
        { image: null, placeholder: '[CAPTURE — espace commerçant]' },
        { image: null, placeholder: '[CAPTURE — carte des boutiques]' },
        { image: null, placeholder: '[CAPTURE — paiement]' },
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
    stack: 'Next.js · Django REST · PostgreSQL',
    image: null,
    // Contenu tiré des dépôts Gestionnaire_emploi_de_temps (front) et _backDjango (API)
    caseStudy: {
      label: 'Université · Web (PWA)',
      lead: 'L’outil de gestion des emplois du temps de l’Université Joseph Ki-Zerbo : les scolarités planifient, les étudiants consultent leur programme sans compte.',
      role: 'Développeur fullstack · stage',
      status: 'En ligne · Cloudflare + Render',
      demo: 'https://campus-manager.nitiemamartial.workers.dev',
      code: 'https://github.com/Kevin23phx/Gestionnaire_emploi_de_temps',
      codeApi: 'https://github.com/Kevin23phx/Gestionnaire_emploi_de_temps_backDjango',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — grille d’emploi du temps]' },
      problem:
        '[À RÉDIGER : en 3–4 phrases, comment les emplois du temps étaient gérés à l’UJKZ avant, et ce qui posait problème.]',
      features: [
        {
          title: 'Consultation publique',
          text: 'Recherche du programme d’une promotion sans compte, abonnement iCalendar et alertes Web Push.',
        },
        {
          title: 'Moteur de conflits',
          text: 'Détection des doubles réservations de salles, garantie jusque dans PostgreSQL par une contrainte d’exclusion.',
        },
        {
          title: 'Programme semaine par semaine',
          text: 'Chaque séance porte une date réelle, comme le programme publié chaque fin de semaine à l’UJKZ.',
        },
        {
          title: 'Multi-établissements',
          text: 'Les 12 établissements de l’UJKZ, chaque scolarité cloisonnée à son périmètre, avec journal d’audit.',
        },
      ],
      architecture: [
        { label: 'Client', titles: ['PWA Next.js'], detail: 'Cloudflare Workers' },
        { label: 'API', titles: ['Django REST Framework'], detail: 'session · rôles · conflits', highlight: true },
        { label: 'Données & services', titles: ['PostgreSQL'], detail: 'iCalendar · Web Push' },
      ],
      numbers: [
        { value: '12', label: 'établissements' },
        { value: '53', label: 'départements' },
      ],
      shots: [
        { image: null, placeholder: '[CAPTURE — planning de la scolarité]' },
        { image: null, placeholder: '[ÉCRAN MOBILE — programme public]' },
        { image: null, placeholder: '[ÉCRAN MOBILE — alertes]' },
      ],
      learnings:
        '[À RÉDIGER : 2–3 apprentissages concrets — par exemple la migration du backend NestJS vers Django à contrat d’API identique.]',
    },
  },
  {
    slug: 'tourisme-burkina',
    title: 'Tourism Platform',
    kind: 'Web · Tourisme',
    c1: '#F0B93A',
    c2: '#1F8A5B',
    desc: 'Découverte et réservation de destinations touristiques au Burkina Faso, avec tableau de bord admin.',
    stack: 'Next.js · NestJS · Supabase',
    image: null,
    // Contenu tiré du dépôt github.com/tourismplatform/tourism-platform (projet d'équipe)
    caseStudy: {
      label: 'Tourisme · Web',
      lead: 'Une plateforme pour découvrir les destinations du Burkina Faso et les réserver en ligne, avec un tableau de bord pour l’administration.',
      role: '[Ton rôle dans l’équipe]',
      status: '[Statut]',
      demo: 'https://frontend-touriste.vercel.app',
      code: 'https://github.com/tourismplatform/tourism-platform',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — page d’accueil touriste]' },
      problem: '[À RÉDIGER : le problème que ce projet résout, en 3–4 phrases.]',
      features: [
        {
          title: 'Catalogue de destinations',
          text: 'Les touristes parcourent les destinations, consultent les avis et gèrent leur profil.',
        },
        {
          title: 'Réservation et paiement',
          text: 'Réservation en ligne, paiement (simulé pour l’instant) et suivi dans « Mes réservations ».',
        },
        {
          title: 'Tableau de bord admin',
          text: 'Une application séparée pour gérer les destinations et confirmer les réservations.',
        },
      ],
      architecture: [
        { label: 'Clients', titles: ['App touriste Next.js', 'Dashboard admin Next.js'] },
        { label: 'API', titles: ['NestJS'], detail: 'JWT · Swagger', highlight: true },
        { label: 'Données', titles: ['Supabase (PostgreSQL)'] },
      ],
    },
  },
  {
    slug: 'optilunette',
    title: 'OptiLunette',
    kind: 'Web · E-commerce',
    c1: '#E5533D',
    c2: '#2B4FD8',
    desc: 'Boutique de lunettes avec essayage virtuel et back-office pour opticiens.',
    stack: 'React · Django REST · PostgreSQL',
    image: null,
    // Contenu tiré du dépôt github.com/Ednik75/optilunette (README)
    caseStudy: {
      label: 'E-commerce · Web',
      lead: 'Une plateforme optique où les clients essaient et achètent leurs lunettes en ligne, et où les opticiens gèrent leur boutique.',
      role: 'Développeur fullstack',
      status: '[Statut]',
      demo: '[LIEN DÉMO]',
      code: 'https://github.com/Ednik75/optilunette',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — essayage virtuel]' },
      problem: '[À RÉDIGER : le problème que ce projet résout, en 3–4 phrases.]',
      features: [
        {
          title: 'Essayage virtuel',
          text: 'La monture se superpose au visage en temps réel via la caméra (MediaPipe + canvas), adaptée à sa forme.',
        },
        {
          title: 'Ordonnance lue par OCR',
          text: 'Upload d’une ordonnance (image ou PDF) et extraction automatique OD/OG avec Tesseract et OpenCV.',
        },
        {
          title: 'Commande de bout en bout',
          text: 'Assurance, codes promo, réductions famille, paiement Orange Money, Wave ou carte, suivi par statut et email.',
        },
        {
          title: 'Back-office opticien',
          text: 'Montures et stock avec alertes, commandes, statistiques et campagnes SMS marketing.',
        },
      ],
      architecture: [
        { label: 'Client', titles: ['React + TypeScript'], detail: 'Vite · Tailwind · MediaPipe' },
        { label: 'API', titles: ['Django REST Framework'], detail: 'JWT · OTP SMS · rôles', highlight: true },
        { label: 'Données & services', titles: ['PostgreSQL'], detail: 'Tesseract · OpenCV' },
      ],
      numbers: [{ value: '3', label: 'rôles utilisateurs' }],
    },
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
