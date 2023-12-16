import { useState, useEffect } from 'react';
import { db, storage } from '../config/firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const uploadIdCardImage = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const fileRef = ref(storage, `idCardImages/${new Date().getTime()}`); // Use a unique name for the file
      await uploadBytes(fileRef, blob);
      const downloadUrl = await getDownloadURL(fileRef);
      // Save the URL to Firestore in a separate function if needed
      return downloadUrl;
    } catch (err) {
      console.error('Error uploading file: ', err);
      setError(err);
      return null;
    }
  };

  const uploadProfilePicture = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const fileRef = ref(storage, `profilePictures/${new Date().getTime()}`); // Use a unique name for the file
      await uploadBytes(fileRef, blob);
      const downloadUrl = await getDownloadURL(fileRef);
      // Save the URL to Firestore in a separate function if needed
      return downloadUrl;
    } catch (err) {
      console.error('Error uploading file: ', err);
      setError(err);
      return null;
    }
  };

  const uploadPostPicture = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const fileRef = ref(storage, `postPictures/${new Date().getTime()}`); // Use a unique name for the file
      await uploadBytes(fileRef, blob);
      const downloadUrl = await getDownloadURL(fileRef);
      // Save the URL to Firestore in a separate function if needed
      return downloadUrl;
    } catch (err) {
      console.error('Error uploading file: ', err);
      setError(err);
      return null;
    }
  };
  return {
    progress,
    url,
    error,
    uploadIdCardImage,
    uploadProfilePicture,
    uploadPostPicture,
  };
};

export default useStorage;
