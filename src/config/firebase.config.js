import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQGrKeB7r4hEoD8bqYdOheXub4hD9RNrU',
  authDomain: 'societalize.firebaseapp.com',
  projectId: 'societalize',
  storageBucket: 'societalize.appspot.com',
  messagingSenderId: '706652832922',
  appId: '1:706652832922:web:58cebc7303b438d457cb23',
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the already initialized app
}

const firestore = getFirestore(app);

// Initialize Firebase Auth

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, firestore };
