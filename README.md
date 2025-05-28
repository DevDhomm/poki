# 🔥 Pokify

<div align="center">

![Pokify Logo](https://img.shields.io/badge/🔥-Pokify-FF6B6B?style=for-the-badge&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

**Explorez l'univers Pokémon avec style ! 🌟**

[🚀 Demo Live](https://pokify.vercel.app) • [📖 Documentation](#documentation) • [🤝 Contribuer](#contribuer)

</div>

---

## ✨ Aperçu

Pokify est une application web moderne développée avec **Next.js 15** qui vous permet d'explorer l'univers Pokémon de manière interactive et visuelle. Découvrez les statistiques, évolutions, capacités et bien plus encore !

### 🎯 Fonctionnalités principales

- 🔍 **Recherche intelligente** - Trouvez n'importe quel Pokémon par son nom
- 📊 **Statistiques détaillées** - Visualisation interactive des stats avec barres de progression
- 🎨 **Design adaptatif** - Couleurs dynamiques basées sur les types de Pokémon
- 🔄 **Chaîne d'évolution** - Navigation facile entre les évolutions
- 💫 **Animations fluides** - Interface moderne avec transitions CSS
- 📱 **Responsive** - Optimisé pour tous les appareils
- ⚡ **Performance** - Chargement rapide avec Next.js

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18.0.0 ou plus récent
- npm ou yarn

### Installation

```bash
# Clonez le repository
git clone https://github.com/votre-username/pokify.git

# Naviguez dans le dossier
cd pokify

# Installez les dépendances
npm install

# Lancez le serveur de développement
npm run dev
```

🎉 Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application !

---

## 🛠️ Scripts disponibles

| Commande        | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | 🚀 Lance le serveur de développement avec Turbopack |
| `npm run build` | 📦 Build l'application pour la production           |
| `npm run start` | ▶️ Lance l'application en mode production           |
| `npm run lint`  | 🔍 Vérifie le code avec ESLint                      |

---

## 📁 Structure du projet

```
pokify/
├── 📁 public/                 # Assets statiques
│   ├── 🖼️ *.svg              # Icônes SVG
│   └── 📄 ...
├── 📁 src/
│   └── 📁 app/
│       ├── 🎨 globals.css     # Styles globaux
│       ├── 📄 layout.js       # Layout principal
│       ├── 🏠 page.js         # Page d'accueil
│       └── 📁 pages/
│           └── 📁 pokemon/
│               ├── 🔧 pokemon.jsx        # Composant principal
│               ├── 🎨 PokemonInfo.module.css
│               └── 🌈 typeColors.js      # Couleurs par type
├── 📄 package.json
├── 📄 README.md
└── 📄 .gitignore
```

---

## 🎨 Technologies utilisées

<div align="center">

| Frontend                                                                                      | Styling                                                                                         | Outils                                                                            |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)           | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)                     | ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)          |
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)                | ![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000?logo=css3&logoColor=white)        | ![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white)    |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) | ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?logo=google&logoColor=white) | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) |

</div>

### API externe

- 🌐 **PokéAPI** - Source de données officielle pour les informations Pokémon

---

## 🎯 Fonctionnalités détaillées

### 🔍 Recherche de Pokémon

- Saisie intuitive avec autocomplétion
- Mémorisation de la dernière recherche
- Gestion d'erreurs élégante

### 📊 Affichage des statistiques

- Barres de progression colorées par stat
- Couleurs adaptées au type de Pokémon
- Animation au chargement

### 🎨 Interface dynamique

- Couleurs qui s'adaptent aux types de Pokémon
- Animations CSS fluides
- Design moderne et épuré

### 🔄 Navigation des évolutions

- Clic pour naviguer entre les évolutions
- Images haute qualité des Pokémon
- Affichage de la chaîne complète

---

## 🌈 Personnalisation

### Couleurs des types

Les couleurs sont définies dans `src/app/pages/pokemon/typeColors.js` :

```javascript
export const TYPE_COLORS = {
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  // ... autres types
};
```

### Polices utilisées

- **Luckiest Guy** - Titres et éléments principaux
- **Baloo 2** - Corps de texte
- **Press Start 2P** - Éléments rétro (optionnel)

---

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Connectez votre repo GitHub à Vercel
# Le déploiement se fait automatiquement !
```

### Autres plateformes

```bash
# Build pour la production
npm run build

# Les fichiers sont dans le dossier .next/
```

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment procéder :

1. 🍴 **Fork** le projet
2. 🌟 **Créez** votre branche (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** vos changements (`git commit -m 'Add: Amazing Feature'`)
4. 📤 **Push** sur la branche (`git push origin feature/AmazingFeature`)
5. 🔄 **Ouvrez** une Pull Request

### 📋 Guidelines de contribution

- Respectez le style de code existant
- Ajoutez des tests si nécessaire
- Mettez à jour la documentation
- Utilisez des messages de commit clairs

---

## 🐛 Signaler un bug

Vous avez trouvé un bug ? Aidez-nous à l'améliorer !

1. 🔍 Vérifiez qu'il n'existe pas déjà une issue
2. 📝 Créez une nouvelle issue avec le template approprié
3. 📋 Décrivez le problème en détail
4. 🖼️ Ajoutez des captures d'écran si nécessaire

---

## 📜 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- 🎮 **The Pokémon Company** - Pour l'univers Pokémon
- 🌐 **PokéAPI** - Pour l'API gratuite et complète
- ⚡ **Vercel** - Pour l'hébergement gratuit
- 🎨 **Google Fonts** - Pour les polices utilisées

---

## 📞 Contact

<div align="center">

**Pokify Team**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevDhomm)
[![Website](https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=vercel&logoColor=white)](https://pokify.vercel.app)

</div>

---

<div align="center">

**⭐ N'oubliez pas de donner une étoile si ce projet vous plaît ! ⭐**

_Fait avec ❤️ et beaucoup de ☕_

</div>
