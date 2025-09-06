import { createContext, useContext } from "react";

export type Product = {
    id: string;
    name: string;
    url: string;
    productionPeriod: {
        start: string;
        end: string | null
    };
    overview: string;
    technologyStack: string;
    public: boolean;
};

export const ProductContext = createContext<Product[] | null>(null);
export const useProductContext = () => useContext(ProductContext);
