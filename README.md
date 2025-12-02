# Atomic Clean Architecture - Frontend Demo

Une démo d'architecture frontend propre utilisant React, Three.js et une structure atomique (Atomic Design). Le projet est maintenant frontend-only, avec un système d'API configurable pour communiquer avec des services REST externes.

## Fonctionnalités

- **Architecture Atomique** : Composants organisés en atoms, molecules, organisms, pages.
- **3D avec Three.js** : Intégration de scènes 3D (cubes, personnages, Terre).
- **État Global** : Gestion d'état avec Redux Toolkit.
- **API REST** : Système flexible pour communiquer avec des APIs externes (configurable via `.env`).
- **Docker** : Modes dev et build pour faciliter le développement et le déploiement.
- **Tailwind CSS** : Styles utilitaires pour une UI moderne.

## Technologies

- **React 19** avec Vite
- **Three.js** et React Three Fiber/Drei
- **Redux Toolkit** pour la gestion d'état
- **Tailwind CSS** pour les styles
- **Docker** pour la conteneurisation
- **ESLint** pour le linting

## Structure du Projet

```
```
code/
├── index.html
├── package.json
├── src/               # Code source React
│   ├── index.jsx
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── lib/
│   └── styles/
├── public/
├── .env
├── Dockerfile
├── Dockerfile.dev
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
```
```

## Installation

### Avec Docker (recommandé)
1. Clone le repo :
   ```bash
   git clone https://github.com/Kataman7/atomic-clean-architecture.git
   cd atomic-clean-architecture
   ```

2. Lance les services :
   ```bash
   docker-compose up --build
   ```
   - Mode dev : `http://localhost:5173`
   - Mode build : `http://localhost:80`

## Utilisation

### Commandes Docker
- `docker-compose up` : Lance dev et build
- `docker-compose up dev` : Mode dev seulement
- `docker-compose up build` : Mode build seulement
- `docker-compose build` : Construit les images
- `docker-compose down` : Arrête tout

### Configuration API
Modifie `src/.env` pour changer l'URL de l'API :
```
VITE_API_URL=http://votre-api.com
```

### Utilisation des Services API
## Exemples dans le Code

Le projet contient plusieurs exemples pratiques de React, Three.js, Redux et API. Voici un aperçu :

### Gestion d'État avec Redux et useState
- **Store Redux** (`src/lib/store/store.js`) : Configuration centralisée avec `configureStore`.
- **Slice Redux** (`src/lib/store/slices/counterSlice.js`) : Définition d'un état compteur avec `createSlice`, actions `increment`, `decrement`, `setValue`.
- **Utilisation dans un composant** (`src/pages/PagCounters.jsx`) :
  - `useSelector` pour lire l'état global.
  - `useDispatch` pour dispatcher des actions.
  - `useState` pour un état local alternatif.
  - `useEffect` pour synchroniser avec les params d'URL (`useParams`).
  - `useState` et `useEffect` pour gérer un compteur local.

### Composants Atomiques (Atomic Design)
- **Atom Button** (`src/components/atoms/AtmButton.jsx`) : Bouton simple avec props `label`, `onClick`, styles Tailwind.
- **Molécule Counter** (`src/components/molecules/MolCounter.jsx`) : Combine des atoms, utilise `useDispatch` pour Redux.

### Three.js et Animations 3D
- **Scène 3D** (`src/components/organisms/ThreeOrgScene.jsx`) : Utilise `<Canvas>` de React Three Fiber, lumières (`ambientLight`, `directionalLight`), contrôles (`OrbitControls`).
- **Cube Interactif** (`src/components/atoms/ThreeAtmCube.jsx`) :
  - `useRef` pour référencer le mesh.
  - `useState` pour états `hovered` et `active`.
  - `useFrame` pour animation de rotation continue.
  - Événements : `onClick`, `onPointerOver/Out` pour interactions.
  - Props : position, couleur, taille, wireframe.
- **Page Cubes** (`src/pages/PagCubes.jsx`) : Montre plusieurs cubes dans une scène, avec instructions utilisateur.

### Routage avec React Router
- **Routes** (`src/routes/routes.jsx`) : Définition des routes avec `<Routes>` et `<Route>`, params dynamiques (`:value?`), route 404.

### Communication API
- **API Générique** (`src/services/products/api.js`) : Fonction `API()` utilisant `fetch`, configurable via `.env`, gestion d'erreurs, sérialisation JSON automatique.
- **Queries/Mutations** (`src/services/products/queries.js`, `mutations.js`) : Fonctions pour GET/POST/PUT/DELETE, prêtes à l'emploi.

### Hooks React
- `useState` : Gestion d'états locaux (compteurs, hover).
- `useEffect` : Effets secondaires (sync URL, fetch potentiel).
- `useRef` : Références DOM/Three.js.
- `useFrame` : Animations Three.js.

Ces exemples montrent comment combiner React moderne, 3D, état global et API dans une architecture propre.

## Architecture

### Atomic Design
- **Atoms** : Composants de base (boutons, inputs, modèles 3D)
- **Molecules** : Combinaisons d'atoms (compteurs, etc.)
- **Organisms** : Sections complexes (scènes 3D)
- **Pages** : Pages complètes avec logique

### État Global
Utilise Redux pour l'état partagé (ex. : compteur).

### API
Système générique pour les appels REST, avec gestion d'erreurs et sérialisation automatique.

## Déploiement

Pour déployer en production :
1. Construit l'image : `docker-compose build build`
2. Pousse vers un registry ou déploie le conteneur
3. Les fichiers statiques sont servis par Nginx

## Contribution

1. Fork le repo
2. Crée une branche : `git checkout -b feature/nouvelle-fonction`
3. Commit tes changements : `git commit -am 'Ajoute nouvelle fonction'`
4. Push : `git push origin feature/nouvelle-fonction`
5. Ouvre une PR

## Licence

ISC

## Fonts

If you want to use the custom fonts included with this project (PixelifySans and Chillax), drop the font files into `public/resources/font` and name them accordingly:

- `PixelifySans.woff2`, `PixelifySans.woff`, `PixelifySans.ttf`
- `Chillax.woff2`, `Chillax.woff`, `Chillax.ttf`

The app looks for those files at `/resources/font/...` (served from the `public` folder). If the files are missing, the site gracefully falls back to system fonts.