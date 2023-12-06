import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/firebase.config";

const useFirestore = () => {
        const setUserProfile = async (user) => {
            const UserRef = doc(firestore, "users", user.email);
            await setDoc(UserRef, user); }
 return {setUserProfile};

}

export default useFirestore;