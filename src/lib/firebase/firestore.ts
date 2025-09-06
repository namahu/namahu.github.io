import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./config";

export const db = {
    get: async <T>(collectionName: string) => {
        const q = query(collection(firestore, collectionName), where("public", "==", true));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data() as T
            };
        });
    }
};
