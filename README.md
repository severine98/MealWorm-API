# Mealworm API

## Introdution

This is a Node.js server application built using ES6 and Express.js. It is intended to be used to teach the _nology 12 week bootcamp, and is designed to allow favouriting functionality to the Mealworm React app.

## Getting it started

To host the app locally and get developing, run the following commands:

```bash
npm install
npm start
```

There is also a watch command using `nodemon` for automatic updates:

```bash
npm run watch
```

And the app can be built separately if required using the command:

```bash
npm run build
```

## Documentation

The app is documented using swagger to describe the endpoints. These docs can be found by going to the `/docs` endpoint.

## Build info

The project builds into two directories - `dist` for local development and testing, and `functions` for deployment using firebase functions. Scripts are defined separately to allow for this.

## Branches

1. Simple express app that returns response from /api - they build a route that adds /api/recipes + docker setup
2. Add router and controller function for simple routes
3. Add data file and allow controller to pull from array of stock recipes /api/recipes and /api/recipes/:id
4. Add firebase and full crud routes from the controller
5. Add data model for a recipe and enable proper methods
6. Error handling and status codes
7. Add firebase functions deployment
8. Add swagger
9. BIG LAB - add their own route for favourites that allows a user to add their own stuff
