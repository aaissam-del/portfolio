# Portfolio Astro

Portfolio personnel construit avec Astro et déployé sur Vercel.

## Structure

```text
/
├── astro.config.mjs
├── vercel.json
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── public/
```

Le contenu du site est centralisé dans `src/data/profile.ts`. Modifier ce fichier suffit pour mettre à jour le portfolio, la navigation et le chatbot.

## Commandes

```sh
npm install
npm run dev
npm run build
npm run preview
vercel --yes --prod
```

## Déploiement

Le site est configuré pour un déploiement statique sur Vercel. L’URL finale attendue est :

https://portfolio-aymane-aissam.vercel.app

## Contenu

Les sections du site s’affichent uniquement lorsqu’elles contiennent des données réelles dans le fichier de données unique. Les sections vides restent absentes de la page et de la navigation.
