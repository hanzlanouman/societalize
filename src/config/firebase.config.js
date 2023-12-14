import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8XPJdI9tQ7ctLtY5CTNAE9z9_I8upJ6A',
  authDomain: 'societalize-898d3.firebaseapp.com',
  projectId: 'societalize-898d3',
  storageBucket: 'societalize-898d3.appspot.com',
  messagingSenderId: '1038362371548',
  appId: '1:1038362371548:web:f854e53899a5268a189b19',
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

const storage = getStorage(app);

export { auth, firestore, storage };
