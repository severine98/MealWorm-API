import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://mealworm-api.firebaseio.com",
});

export const firestore = admin.firestore();

export const functions = admin.functions;