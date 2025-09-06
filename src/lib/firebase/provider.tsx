import type { FC, ReactNode } from "react";
import { firestore } from "./config";
import { FirebaseContext } from "./context";

export const FirebaseContextProvider: FC<{children: ReactNode}> = (
    {children}
) => {
    return (
        <FirebaseContext.Provider value={{firestore}}>
            {children}
        </FirebaseContext.Provider>
    );
};
