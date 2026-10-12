# Comment lancer Claude Code sur ce projet

1. Dézippe ce dossier, par exemple dans `~/Projets/portfolio-martial`.
2. Ouvre-le dans VS Code : `code ~/Projets/portfolio-martial`
3. Ouvre Claude Code (extension VS Code ou terminal intégré avec la commande `claude`).
4. Colle ce message :

```
Lis CLAUDE.md et les maquettes du dossier design/.
Construis le portfolio en suivant le plan de construction, en commençant par l'étape 1.
Arrête-toi après chaque étape pour que je vérifie dans le navigateur.
```

5. Après chaque étape, lance `npm run dev`, regarde le résultat, puis réponds « étape suivante »
   ou décris ce qui ne va pas (une capture d'écran aide beaucoup).

Avant le déploiement, remplis tes vraies infos dans `src/data/profile.js` et `src/data/projects.js`
(email, WhatsApp, LinkedIn, captures d'écran, textes de l'étude de cas).

---

# Mettre le site en ligne

## 0. Prérequis (une seule fois)

Node.js n'est pas installé sur ton PC. Sur Fedora, dans un terminal du système (pas celui de VS Code
Flatpak) :

```
sudo dnf install nodejs
cd ~/portfolio/portfolio-martial
npm install
npm run dev        # site en local sur http://localhost:5173
npm run build      # version optimisée dans dist/
npm run preview    # vérifie cette version sur http://localhost:4173
```

## 1. Mettre le code sur GitHub

Crée un dépôt vide `portfolio` sur https://github.com/new (sans README), puis :

```
git remote add origin https://github.com/Ednik75/portfolio.git
git push -u origin main
```

## 2. Déployer sur Vercel (recommandé)

1. Va sur https://vercel.com et connecte-toi avec GitHub.
2. « Add New… → Project », choisis le dépôt `portfolio`.
3. Vercel détecte Vite tout seul (build : `npm run build`, dossier : `dist`). Clique « Deploy ».
4. Ton site est en ligne sur `https://<nom>.vercel.app`. Chaque `git push` le redéploie.

Le fichier `vercel.json` renvoie toutes les adresses vers `index.html` : sans lui, ouvrir directement
`/projets/fasomarket` donnerait une erreur 404 du serveur (c'est React Router, dans le navigateur,
qui gère ces adresses).

**Alternative Netlify** : même démarche sur https://app.netlify.com (« Add new site → Import from
Git »). Le fichier `public/_redirects` y joue le même rôle que `vercel.json`.

## 3. Après la mise en ligne

- Ajoute l'adresse finale dans `index.html` : `<meta property="og:url" content="https://…" />`
- Ajoute une image d'aperçu 1200×630 dans `public/og.png` et la balise
  `<meta property="og:image" content="https://…/og.png" />` (aperçu WhatsApp / LinkedIn).
- Remplis les placeholders `[…]` dans `src/data/profile.js` et `src/data/projects.js`, et dépose
  les captures en WebP dans `public/images/projets/` (champ `image` de chaque projet).
