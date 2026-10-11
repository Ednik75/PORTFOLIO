# Portfolio de Martial Nitiema — instructions pour Claude Code

Tu construis le site portfolio de Martial, développeur fullstack & mobile (Django, React, Flutter),
étudiant au Burkina Institute of Technology (BIT, Koudougou). Le design est déjà fait : ton travail
est de le **reproduire fidèlement en code de production**.

## Règles de travail

- Réponds et commente en **français**.
- Martial veut **apprendre** : à la fin de chaque étape, explique en 3–5 lignes ce que tu as fait et
  pourquoi (choix techniques, concepts React/CSS utilisés). Pas de pavé.
- Avance **étape par étape** (voir « Plan de construction ») et **arrête-toi après chaque étape**
  pour que Martial vérifie dans le navigateur avant de continuer.
- N'invente **aucun contenu** (chiffres, dates, liens, textes). Tout ce qui est entre crochets
  `[COMME ÇA]` reste un placeholder visible, regroupé dans `src/data/` pour être rempli facilement.
- Fais un commit Git propre à la fin de chaque étape (message en français, impératif).

## Les maquettes de référence (dossier `design/`)

Ce sont des maquettes HTML écrites dans un format de prototypage (balises `<x-dc>`, `<sc-for>`,
`<sc-if>`, variables `{{...}}`, classe `Component extends DCLogic`). **Ne copie pas ce format** :
lis-les comme une spécification visuelle (couleurs, tailles, espacements, textes, animations CSS)
et traduis-les en composants React.

- `design/accueil-anime.html` → **page d'accueil à construire (version retenue)**
- `design/etude-de-cas-fasomarket.html` → **page étude de cas** (modèle pour chaque projet)
- `design/accueil-v1-grille-filtrable.html` → ancienne version ; n'en reprendre que le **filtre
  Tous / Web / Mobile** si Martial le demande

Le CSS des animations (`@keyframes drift`, `lens`, `rise`, `cue`, `slide`) se trouve dans la balise
`<style>` de chaque maquette : reprends-le tel quel.

## Stack

- **Vite + React** (JavaScript, pas TypeScript)
- **Tailwind CSS** pour la mise en page ; les animations et effets complexes dans un fichier CSS dédié
- **React Router** pour `/` et `/projets/:slug`
- Aucune librairie d'animation : tout est en CSS (léger, rapide sur les connexions mobiles du Burkina)
- Polices Google Fonts : **Schibsted Grotesk** (400/500/600/700) et **Instrument Serif** (italique)

## Design tokens

| Rôle | Valeur |
|---|---|
| Fond | `#06070B` |
| Carte | `#0C0E14`, bordure `#22252F` |
| Texte principal | `#F2F2EE` |
| Texte secondaire | `#C3C6CF` |
| Texte tertiaire | `#9095A1` |
| Accent (or) | `#F0B93A` |
| Halos | bleu `#2B4FD8`, magenta `#8A1F6E`, vert `#1F8A5B`, or `#F0B93A`, rouge `#E5533D` |

- Titres : Schibsted Grotesk 600, interlettrage très serré (`-0.055em`), taille fluide avec `clamp()`
- Mots mis en valeur : Instrument Serif italique, couleur accent
- Petits libellés : 11px, MAJUSCULES, `letter-spacing: .08em`
- Signature : la bande **Faso Dan Fani** (`.fani`, rayures or/vert/rouge) en bas de page

## Structure des fichiers

```
src/
  data/projects.js       ← les 8 projets (titre, slug, type, desc, stack, couleurs, liens, étude de cas)
  data/profile.js        ← nom, email, WhatsApp, GitHub, LinkedIn, compétences, parcours
  components/
    Header.jsx  Hero.jsx  Lens.jsx  Glows.jsx  About.jsx
    ProjectCarousel.jsx  ProjectCard.jsx  TechMarquee.jsx
    Skills.jsx  Contact.jsx  FaniStripe.jsx
  pages/Home.jsx  pages/CaseStudy.jsx  pages/NotFound.jsx
  styles/animations.css
public/images/projets/   ← captures d'écran (placeholders tant qu'elles manquent)
```

Les 8 projets et leurs textes sont dans le `renderVals()` de `design/accueil-anime.html` :
reprends-les à l'identique dans `src/data/projects.js`.

## Plan de construction (une étape = un arrêt)

1. **Initialisation** : projet Vite + React, Tailwind, React Router, polices, tokens de couleur,
   `animations.css`, fond noir global. Vérif : `npm run dev` affiche une page noire avec la bonne police.
2. **Header + Hero** : halos animés (`Glows`), titre géant « Fullstack / *web & mobile* /
   développeur » avec animation `rise`, loupe animée (`Lens`, `backdrop-filter`), infos du bas et
   indicateur de défilement.
3. **À propos + bandeau de technologies** défilant (`TechMarquee`, contenu dupliqué pour une boucle sans saut).
4. **Carrousel de projets** : `scroll-snap`, flèches précédent/suivant, points de pagination
   synchronisés avec le défilement (`useRef` + événement `scroll`), swipe natif au doigt.
5. **Compétences + Contact + pied de page** avec la bande Faso Dan Fani.
6. **Page étude de cas** `/projets/:slug` d'après `design/etude-de-cas-fasomarket.html`,
   alimentée par `projects.js` ; lien « Projet suivant ». Page 404.
7. **Finitions** : responsive (tester à 375px, 768px, 1440px), accessibilité (voir ci-dessous),
   balises `<title>`/meta description/Open Graph par page, favicon « MN », Lighthouse ≥ 90.
8. **Déploiement** : build et mise en ligne (Vercel ou Netlify, ou GitHub Pages) ; explique les commandes.

## Exigences non négociables

- **Mobile d'abord** : la plupart des visiteurs viendront d'un téléphone. Pas de défilement horizontal
  de la page, zones cliquables ≥ 44px, menu simplifié sous 900px.
- **`prefers-reduced-motion`** : toutes les animations s'arrêtent (règle déjà dans les maquettes).
- **Accessibilité** : vrais `<button>` et `<a href>`, `aria-label` sur les boutons-icônes, décor
  (`Glows`, `Lens`, doublons du bandeau) en `aria-hidden="true"`, contraste du texte ≥ 4.5:1.
- **Performance** : images en WebP avec `loading="lazy"` et dimensions fixées ; polices en `display=swap`.
- Code lisible : composants courts, noms clairs, commentaires seulement là où c'est utile pour apprendre.
