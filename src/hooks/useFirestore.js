import { firestore } from "../config/firebase.config";
import { getDoc, deleteDoc, getDocs, where, query, collection,  doc, setDoc} from "firebase/firestore";
const useFirestore = () => {

    const setUserProfile = async (user) => {
        const UserRef = doc(firestore, "users", user.email);
        await setDoc(UserRef, user);
    }

    const getUserProfile = async (user) => {
        const UserProfileRef = doc(firestore, 'users', user.email)
        const docsnap = await getDoc(UserProfileRef);
        return docsnap.exists() ? docsnap.data() : null;
    }

    const deleteUserProfile = async (user) => {
        const UserProfileRef = doc(firestore, 'users', user.email);
        await deleteDoc(UserProfileRef);
    }

    const queryUserProfile = async (fieldName, value) => {
        const q = query(collection(firestore, 'users'), where(fieldName, '==', value));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    }

    const emailExists = async (email) => {
        console.log('API HIT');
        const q = query(collection(firestore, 'users'), where('email', '==', email));
    
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.length > 0 ? true : false;
    };
    

    const userExsists = async (username) => {
        const q = query(collection(firestore, 'users'), where('username', '==', username));
        const querySnapshot = await getDocs(q);
        console.log('API HIT')
        return querySnapshot.docs.length > 0 ? true : false;
    };

    return {
        setUserProfile,
        getUserProfile,
        deleteUserProfile,
        queryUserProfile,
        emailExists,
        userExsists
    };

}

export default useFirestore;