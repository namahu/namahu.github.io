import type { FC } from "react";
import { useGetPublicProducts } from "../api/get-product";

import style from "../style/product.module.css";

export const Product: FC = () => {
    const products = useGetPublicProducts();
    console.log({products});
    return (
        <div className={style.productsContainer}>
            { products?.map(product => {
                return (
                    <div key={product.id} className={style.productCard}>
                        <div className={style.cardItem}>
                            <span className={style.itemTitle}>名前</span>
                            <span>{product.name}</span>
                        </div>
                        <div className={style.cardItem}>
                            <span className={style.itemTitle}>URL</span>
                            <a href={product.url} target="_brank">{product.url}</a>
                        </div>
                        <div className={style.cardItem}>
                            <span className={style.itemTitle}>制作期間</span>
                            <span>{product.productionPeriod.start} ~ {product.productionPeriod.end}</span>
                        </div>
                        <div className={style.cardItem}>
                            <span className={style.itemTitle}>概要</span>
                            <span>{product.overview}</span>
                        </div>
                        <div className={style.cardItem}>
                            <span className={style.itemTitle}>使用した技術・ツール</span>
                            <ul>
                                {product.technologyStack.map((technology, index) => {
                                    return (
                                        <li 
                                            key={product.id + index}
                                            className={style.technologyStack}
                                        >
                                            {technology}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
