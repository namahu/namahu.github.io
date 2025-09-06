import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./config";

export const db = {
    get: async (collectionName: string) => {
        const q = query(collection(firestore, collectionName), where("public", "==", true));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => doc.data);
    }
};
