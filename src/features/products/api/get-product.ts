import { useEffect, useState } from "react";
// import { useProductContext } from "../context/product-context";
import { db } from "../../../lib/firebase/firestore";
import type { Product } from "../context/product-context";

export const useGetPublicProducts = () => {
    // let products = useProductContext();
    const [ products, setProducts ] = useState<Product[] | null>();

    useEffect(() => {
        let unmounted = false;
        const getProducts = async () => {
            try {
                const response = await db.get<Product>("products");
                setProducts(response);
            } catch (error) {
                console.error(error);
            };
        };
        if (!unmounted) getProducts();

        return () => { unmounted = true };
    }, []);

    return products;
};
