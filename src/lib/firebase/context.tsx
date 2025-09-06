import type { Firestore } from "firebase/firestore"
import { createContext, useContext } from "react";
import { firestore } from "./config";

type FirebaseContextType = {
    firestore: Firestore;
};

export const FirebaseContext = createContext<FirebaseContextType>({
    firestore
});

export const useFirebase = () => useContext(FirebaseContext);
