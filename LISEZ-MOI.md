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
