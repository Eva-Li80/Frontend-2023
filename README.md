# Frontend 2023

## Kriterier
### [X] Er grupp har ett publikt repo och publikt designdokument
### [X] Ni har byggt en fungerande app där man kan göra val och få ut en kostnad för det man beställer
### [X] Användaren ska kunna beställa flera olika pizzor
### [X] Man ska kunna lägga till pizzor, ta bort och redigera pizzorna i sin beställning
### [X] Det finns ett antal alternativ man kan variera på respektive pizza (bestäm själva ifall detta innebär olika toppings, storlekar, ostsorter, degsort mm)
### [X] Ni använder Sass, React, Vite och Typescript. 
### [X] Ni skapar avgränsade väl designade komponenter. Vissa kommer att vara “generiska” komponenter där ni använder korrekta universella namn. Vissa komponenter kommer att vara specifika för er app.
### [X] Ni använder Prettier och korrekt namnstandard enl React och JS/TS
### [X] Strikt typad TS
### [X] Ni har en global state med beställningen byggd med useReducer och useContext


## För att starta Projeketet:
### npm install
### npm run dev


## Av: Lars, Johan.K, Isabella, Nathalie & Eva-Li


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
