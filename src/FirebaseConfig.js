import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_STORAGE_ID,
  appId: process.env.FIREBASE_APP_ID
};

export const FirebaseApp = firebase.initializeApp(firebaseConfig);
export const storage = FirebaseApp.storage()
