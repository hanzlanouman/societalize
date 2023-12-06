import { useState, useEffect } from 'react';
import { auth } from '../config/firebase.config';
import useFirestore from './useFirestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const { setUserProfile } = useFirestore();
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 

        setLoading(false);
      } else {
        setUser(undefined);

        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email, password) => {
    console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password);
    
    await setUserProfile({email, password});
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null); // Forcefully update user state to null after signing out
    } catch (error) {
      console.error('Error signing out: ', error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  return { user, loading, signIn, signUp, signOutUser };
};

export default useAuth;
