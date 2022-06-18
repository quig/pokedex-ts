# Pokedex

A simple pokedex made with React Native, FireBase, Google Cloud Vision and ❤️

## How it works

The app comes with a list of Pokemons and their description.

![Main Screen](/assets/home.png)

Upon submitting an image, we store it into firestore and launch the analysis on Google Cloud platform to get the best estimation of the pokemon submitted

![Image submitted](/assets/pikachu.png)

![Result](/assets/details.png)

Et voilà !

## Running the app

⚠️ Since Expo, firebase and React Native have evolved quite a bit, please consider updating the package.json accordingly and adapt the code.

-   add your firebase information into `./firebase.config.js`
-   `cd` into the `app` directory and run `npm i`
-   Then `npm start`
