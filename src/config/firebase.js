import * as admin from 'firebase-admin';
import serviceAccount from '../../.env.firebase.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mealworm-api.firebaseio.com",
});

export const firestore = admin.firestore();

export const functions = admin.functions;