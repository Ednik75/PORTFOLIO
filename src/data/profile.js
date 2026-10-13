// Toutes les infos personnelles au même endroit.
// Les valeurs entre [CROCHETS] sont des placeholders à remplacer avant la mise en ligne.
export const profile = {
  name: 'Martial Nitiema',
  email: 'nitiemamartial@gmail.com',
  whatsapp: '22667302716', // format international sans « + » : 226 (Burkina) + le numéro
  github: 'https://github.com/Ednik75',
  linkedin: '[LIEN LINKEDIN]',

  // Les trois blocs d'infos en bas du hero (chaque entrée = deux lignes)
  heroInfos: [
    ['Django / React / Flutter', 'Disponible · stage & freelance'],
    ['Basé à', 'Koudougou · Ouagadougou'],
    ['Étudiant', 'BIT · Licence informatique'],
  ],

  // Section « Outils & langages » : une ligne par catégorie, chaque outil en pastille.
  // Tout ce qui est listé ici apparaît dans au moins un de tes projets.
  toolbox: [
    { title: 'Langages', items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'] },
    { title: 'Backend', items: ['Django', 'Django REST Framework', 'NestJS', 'Node.js', 'Express'] },
    { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'PWA'] },
    { title: 'Mobile', items: ['Flutter', 'Riverpod', 'GoRouter'] },
    { title: 'Bases de données', items: ['PostgreSQL', 'SQLite', 'Supabase'] },
    { title: 'Outils & déploiement', items: ['Git', 'GitHub', 'Docker', 'Render', 'Vercel', 'Cloudflare'] },
  ],

  // Parcours, affiché à côté des outils
  journey: ['Licence informatique · BIT', 'Stage UJKZ', 'Prix Jeune Inventeur 2026'],

  // Choix proposés dans le formulaire de contact (« Ce que vous voulez »)
  contactNeeds: ['Un site web', 'Une application mobile', 'Un stage', 'Autre chose'],

  // Bandeau défilant : une techno sur deux s'affiche en italique doré
  techs: ['Django', 'React', 'Flutter', 'PostgreSQL', 'Next.js', 'NestJS', 'Tailwind', 'Riverpod'],
}
