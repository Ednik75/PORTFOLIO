// Toutes les infos personnelles au même endroit.
// Les valeurs entre [CROCHETS] sont des placeholders à remplacer avant la mise en ligne.
export const profile = {
  name: 'Martial Nitiema',
  email: '[TON EMAIL]',
  whatsapp: '[TON NUMÉRO]', // format international sans « + », ex. 226XXXXXXXX
  github: 'https://github.com/Ednik75',
  linkedin: '[LIEN LINKEDIN]',

  // Les trois blocs d'infos en bas du hero (chaque entrée = deux lignes)
  heroInfos: [
    ['Django / React / Flutter', 'Disponible · stage & freelance'],
    ['Basé à', 'Koudougou · Ouagadougou'],
    ['Étudiant', 'BIT · Licence informatique'],
  ],

  // Colonnes de la section Compétences (dernière colonne = parcours)
  skills: [
    { title: 'Backend', items: ['Python · Django / DRF', 'NestJS', 'PostgreSQL · JWT'] },
    { title: 'Frontend', items: ['React · Next.js', 'Tailwind · shadcn/ui', 'PWA'] },
    { title: 'Mobile', items: ['Flutter', 'Riverpod · GoRouter', 'Android / iOS'] },
    { title: 'Parcours', items: ['Licence info · BIT', 'Stage UJKZ', 'Prix Jeune Inventeur 2026'] },
  ],

  // Bandeau défilant : une techno sur deux s'affiche en italique doré
  techs: ['Django', 'React', 'Flutter', 'PostgreSQL', 'Next.js', 'NestJS', 'Tailwind', 'Riverpod'],
}
