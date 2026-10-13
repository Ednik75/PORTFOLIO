// Les projets du portfolio, un par dépôt GitHub sélectionné :
// FasoMarket, Campus Manager (front + API), Tourism Platform, OptiLunette.
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
    kind: 'Web · Projet universitaire',
    c1: '#1F8A5B',
    c2: '#F0B93A',
    desc: 'Marketplace locale : clients, commerçants, admin, et paiement Orange Money, Moov Money, Wave.',
    stack: 'Node.js · Express · React',
    image: null,
    // Contenu tiré du dépôt github.com/Ednik75/faso_market (README)
    caseStudy: {
      label: 'Marketplace · Projet universitaire',
      lead: 'Une marketplace locale qui connecte les commerçants de Ouagadougou à leurs clients : catalogue, commandes, stock, statistiques et paiement mobile money.',
      role: 'Développeur fullstack · solo',
      status: 'En ligne · Render',
      demo: 'https://marketbf.onrender.com',
      code: 'https://github.com/Ednik75/faso_market',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — capture desktop + téléphone côte à côte]' },
      problem:
        'Pour acheter un article, on doit souvent faire le tour de plusieurs boutiques, sans être sûr de le trouver. FasoMarket a été créé pour faciliter la vie de la population : depuis son téléphone ou son ordinateur, on trouve les boutiques proches de sa position et on vérifie si elles ont ce qu’on cherche. Ensuite, on commande et on se fait livrer, ou on se rend directement dans la bonne boutique, sans déplacement inutile.',
      features: [
        {
          title: 'Trois espaces, une plateforme',
          text: 'Un parcours dédié au client, au commerçant et à l’administrateur, qui valide les boutiques avant leur mise en ligne.',
        },
        {
          title: 'Boutiques sur la carte',
          text: 'Le client voit les boutiques proches de lui sur une carte, et peut leur laisser une note et un avis.',
        },
        {
          title: 'Commande et paiement local',
          text: 'Le client paie avec Orange Money, Moov Money, Wave ou à la livraison, et reçoit un reçu par email.',
        },
        {
          title: 'Espace commerçant complet',
          text: 'Le commerçant ajoute ses produits avec photos, suit son stock (alerte quand il baisse) et voit ses ventes en graphiques.',
        },
        {
          title: 'Sécurisé',
          text: 'Mots de passe chiffrés, connexion avec Google, protection contre les tentatives de piratage, et jamais deux clients pour le dernier article en stock.',
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
    },
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
        'À l’université, nous avons souvent constaté que plusieurs promotions étaient programmées dans le même amphithéâtre au même moment, ce qui créait des conflits. Les emplois du temps arrivaient aussi souvent tard, et les étudiants découvraient leur programme au dernier moment. D’où l’idée de Campus Manager : un outil où chaque UFR programme ses cours sans risque de chevauchement, et où les étudiants consultent leur emploi du temps sans même créer de compte.',
      features: [
        {
          title: 'Ouvert à tous les étudiants',
          text: 'Un étudiant trouve l’emploi du temps de sa classe sans créer de compte, l’ajoute à l’agenda de son téléphone et reçoit une notification quand il change.',
        },
        {
          title: 'Zéro conflit de salle',
          text: 'L’application refuse de mettre deux cours dans la même salle au même moment : le conflit est signalé tout de suite.',
        },
        {
          title: 'Programme semaine par semaine',
          text: 'À l’UJKZ, l’emploi du temps est publié chaque fin de semaine pour la semaine suivante : l’application fonctionne de la même façon.',
        },
        {
          title: 'Toute l’université',
          text: 'Les 12 établissements de l’université utilisent le même outil ; chaque scolarité ne gère que le sien, et chaque modification est enregistrée.',
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
    },
  },
  {
    slug: 'tourisme-burkina',
    title: 'Tourism Platform',
    kind: 'Web · Projet universitaire',
    c1: '#F0B93A',
    c2: '#1F8A5B',
    desc: 'Découverte et réservation de destinations touristiques au Burkina Faso, avec tableau de bord admin.',
    stack: 'Next.js · NestJS · Supabase',
    image: null,
    // Contenu tiré du dépôt github.com/tourismplatform/tourism-platform (projet d'équipe)
    caseStudy: {
      label: 'Tourisme · Projet universitaire',
      lead: 'Une plateforme pour découvrir les destinations du Burkina Faso et les réserver en ligne, avec un tableau de bord pour l’administration.',
      role: 'Développeur backend · en équipe',
      status: '[Statut]',
      demo: 'https://frontend-touriste.vercel.app',
      code: 'https://github.com/tourismplatform/tourism-platform',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — page d’accueil touriste]' },
      problem:
        'Tourism Platform est née d’une idée simple : promouvoir le tourisme au Burkina Faso. Après avoir créé un compte, le visiteur découvre les différents sites touristiques du pays et réserve sa visite directement sur la plateforme, au même endroit.',
      features: [
        {
          title: 'Catalogue de destinations',
          text: 'Le touriste découvre les sites à visiter au Burkina Faso et lit les avis des autres visiteurs.',
        },
        {
          title: 'Réservation et paiement',
          text: 'Il réserve sa visite en ligne et la retrouve dans « Mes réservations ». Le paiement est simulé pour l’instant.',
        },
        {
          title: 'Tableau de bord admin',
          text: 'Un espace réservé à l’administration pour ajouter des destinations et confirmer les réservations.',
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
    kind: 'Web · Projet perso',
    c1: '#E5533D',
    c2: '#2B4FD8',
    desc: 'Boutique de lunettes avec essayage virtuel et back-office pour opticiens.',
    stack: 'React · Django REST · PostgreSQL',
    image: null,
    // Contenu tiré du dépôt github.com/Ednik75/optilunette (README)
    caseStudy: {
      label: 'E-commerce · Projet perso',
      lead: 'Une plateforme optique où les clients essaient et achètent leurs lunettes en ligne, et où les opticiens gèrent leur boutique.',
      role: 'Développeur fullstack',
      status: '[Statut]',
      demo: '[LIEN DÉMO]',
      code: 'https://github.com/Ednik75/optilunette',
      heroVisual: { image: null, placeholder: '[VISUEL PRINCIPAL — essayage virtuel]' },
      problem:
        'Pour se procurer des lunettes, surtout des verres médicaux, il faut souvent passer d’une boutique à l’autre, essayer plusieurs montures, et ne rien trouver qui plaise. OptiLunette évite tous ces déplacements : depuis chez soi, on parcourt les boutiques, on essaie virtuellement les montures, et on envoie son ordonnance, lue automatiquement. L’opticien prépare la monture et la fait livrer à domicile.',
      features: [
        {
          title: 'Essayage virtuel',
          text: 'Le client allume sa caméra et voit les lunettes directement sur son visage avant de les acheter.',
        },
        {
          title: 'Ordonnance lue automatiquement',
          text: 'Le client envoie une photo de son ordonnance : l’application lit toute seule les corrections de chaque œil.',
        },
        {
          title: 'Commande de bout en bout',
          text: 'Assurance, codes promo, réductions pour la famille, paiement Orange Money, Wave ou carte, et suivi de la commande par email.',
        },
        {
          title: 'Espace opticien',
          text: 'L’opticien gère ses lunettes et son stock, traite les commandes, suit ses ventes et envoie des SMS à ses clients.',
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
    learnings: null, // null = section « Ce que j'ai appris » masquée
    ...project.caseStudy,
  }
}
