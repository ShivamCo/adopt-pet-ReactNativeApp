
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/FirebaseConfit';

const GetFavList = async (user) => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) return null;

    const docRef = doc(db, 'UserFavPet', email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        const defaultData = {
            email,
            favorites: [],
        };

        await setDoc(docRef, defaultData);
        return defaultData;
    }
};

const UpdateFav = async (user, favorites) => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) return;

    const docRef = doc(db, 'UserFavPet', email);
    try {
        await updateDoc(docRef, {
            favorites,
        });
    } catch (e) {
        console.error('Error updating favorites:', e);
    }
};

const RemoveFav = async (user, petId) => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email || !petId) return;

    const docRef = doc(db, 'UserFavPet', email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const currentFavorites = docSnap.data().favorites || [];
        const updatedFavorites = currentFavorites.filter((id) => id !== petId);

        try {
            await updateDoc(docRef, {
                favorites: updatedFavorites,
            });
        } catch (e) {
            console.error('Error removing favorite:', e);
        }
    }
};

export default {
    GetFavList,
    UpdateFav,
    RemoveFav,
};
