// Import required functions and libraries
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
