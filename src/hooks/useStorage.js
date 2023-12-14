import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const uploadFile = async (file) => {
    const storageRef = ref(storage, 'image1');
    const collectionRef = collection(db, 'images');
    console.log(file);
    console.log('UPLOAD FILE');
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      const createdAt = serverTimestamp();
      await addDoc(collectionRef, { url, createdAt });
      setUrl(url);
    } catch (err) {
      setError(err);
    }
  };
  return { progress, url, error, uploadFile };
};

export default useStorage;
