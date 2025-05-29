# 🔥 **Pokify** ⚡

<div align="center">

![Pokemon Logo](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)

**Une application Pokédex moderne et interactive construite avec React & PrimeReact**

[![React](https://img.shields.io/badge/React-18+-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![PrimeReact](https://img.shields.io/badge/PrimeReact-10+-007ad9?style=for-the-badge&logo=primereact&logoColor=white)](https://primereact.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)

---

### 🎮 **[Démo Live](https://pokify.vercel.app)** | 📖 **[Documentation](#documentation)**

</div>

---

## ✨ **Aperçu**

Découvrez l'univers Pokémon comme jamais auparavant ! Cette application moderne vous permet d'explorer plus de **1000 Pokémon** avec une interface intuitive et des animations fluides.

### 🎯 **Fonctionnalités Principales**

|       🔍 **Recherche Intelligente**       |               📊 **Statistiques Détaillées**                |       🎨 **Interface Moderne**        |
| :---------------------------------------: | :---------------------------------------------------------: | :-----------------------------------: |
| Recherchez n'importe quel Pokémon par nom | Visualisez les stats avec des barres de progression animées | Design responsive avec animations CSS |

|      🔄 **Chaînes d'Évolution**      |       🏷️ **Système de Types**       |      📱 **Mobile-First**      |
| :----------------------------------: | :---------------------------------: | :---------------------------: |
| Explorez les évolutions interactives | Couleurs dynamiques selon les types | Optimisé pour tous les écrans |

---

## 🚀 **Installation Rapide**

### Prérequis

- Node.js 18+
- npm ou yarn

### Étapes

```bash
# 1️⃣ Cloner le projet
git clone https://github.com/DevDhomm/poki.git
cd pokedex-react

# 2️⃣ Installer les dépendances
npm install

# 3️⃣ Lancer le serveur de développement
npm run dev

# 🎉 Votre app est prête sur http://localhost:5173
```

---

## 🎮 **Guide d'Utilisation**

### 🔍 **Mode Recherche**

1. **Saisissez** le nom d'un Pokémon dans la barre de recherche
2. **Cliquez** sur le bouton de recherche ou appuyez sur Entrée
3. **Explorez** les informations détaillées qui s'affichent

### 📋 **Mode Liste**

1. **Basculez** vers le mode liste avec le bouton "View list"
2. **Parcourez** les 1000+ Pokémon disponibles
3. **Filtrez** avec la barre de recherche intégrée
4. **Chargez** plus de Pokémon avec le système de pagination

### 🔄 **Navigation dans les Évolutions**

- **Cliquez** sur n'importe quelle évolution pour l'explorer
- **Découvrez** automatiquement toute la chaîne d'évolution
- **Naviguez** facilement entre les formes

---

## 🛠️ **Technologies Utilisées**

<div align="center">

|                                             Frontend                                              |                                                      UI/UX                                                       |                                                   API                                                   |                                             Outils                                             |
| :-----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| ![React](https://img.shields.io/badge/-React-61dafb?style=flat-square&logo=react&logoColor=white) | ![PrimeReact](https://img.shields.io/badge/-PrimeReact-007ad9?style=flat-square&logo=primereact&logoColor=white) | ![PokeAPI](https://img.shields.io/badge/-PokéAPI-ffcb05?style=flat-square&logo=pokemon&logoColor=black) | ![Vite](https://img.shields.io/badge/-Vite-646cff?style=flat-square&logo=vite&logoColor=white) |
|                                            React Hooks                                            |                                                    PrimeFlex                                                     |                                               RESTful API                                               |                                           Hot Reload                                           |
|                                         State Management                                          |                                                 Responsive Grid                                                  |                                                JSON Data                                                |                                           Fast Build                                           |

</div>

---

## 📁 **Structure du Projet**

```
src/
├── 📂 pages/
│   ├── 🔍 pokemon/           # Composant détail Pokémon
│   │   ├── pokemon.jsx       # Logique principale
│   │   ├── PokemonInfo.module.css
│   │   └── typeColors.js     # Couleurs des types
│   └── 📋 pokemonList/       # Composant liste
│       ├── pokemonList.jsx
│       └── list.css
├── 🎨 assets/               # Images et assets
├── 📄 App.jsx              # Composant racine
├── 🎨 page.module.css      # Styles globaux
└── 🚀 main.jsx            # Point d'entrée
```

---

## 🎨 **Captures d'Écran**

<div align="center">

### 🖥️ **Vue Desktop**

![Desktop View](https://via.placeholder.com/800x500/61dafb/white?text=Desktop+Pokemon+View)

### 📱 **Vue Mobile**

<img src="https://via.placeholder.com/300x600/61dafb/white?text=Mobile+Pokemon+View" width="300">

### 📋 **Liste des Pokémon**

![Pokemon List](https://via.placeholder.com/800x500/007ad9/white?text=Pokemon+List+View)

</div>

---

## ⚡ **Optimisations Performances**

- ⚡ **Lazy Loading** : Images chargées uniquement quand nécessaire
- 🔄 **Mise en Cache** : LocalStorage pour la persistance
- 📦 **Code Splitting** : Composants optimisés
- 🎯 **Recherche Intelligente** : Filtrage en temps réel optimisé

---

## 🤝 **Contribution**

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. **Créez** votre branche (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

---

## 📝 **Licence**

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 **Remerciements**

- 🎮 **[PokéAPI](https://pokeapi.co/)** pour l'API fantastique
- ⚛️ **[React Team](https://reactjs.org/)** pour le framework
- 🎨 **[PrimeReact](https://primereact.org/)** pour les composants UI
- 🎯 **[Pokémon Company](https://www.pokemon.com/)** pour l'univers inspirant

---

<div align="center">

**⭐ N'oubliez pas de donner une étoile si ce projet vous plaît ! ⭐**

![Pokemon Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)

**Fait avec ❤️ et beaucoup de ☕**

</div>

---

## 📞 **Contact**

- **GitHub** : [@votre-username](https://github.com/DevDhomm)
- **Email** : aquilas06awoudja@gmail.com
- **LinkedIn** : [Votre Profil](https://linkedin.com/in/aquilasawoudja)

---

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/DevDhomm/poki?style=social)
![GitHub forks](https://img.shields.io/github/forks/DevDhomm/poki?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/DevDhomm/poki?style=social)

</div>
