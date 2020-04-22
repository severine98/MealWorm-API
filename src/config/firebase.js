import * as firebase from 'firebase-admin';

firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: "https://mealworm-api.firebaseio.com",
});

export const firestore = firebase.firestore();