import type { FC } from "react";
export const Product: FC = () => {
    return (
        <div className="productCard">
            <div className="productName">test</div>
            <div className="url">http://~</div>
            <div className="productionPeriod">yyyy/mm/dd ~ yyyy/mm/dd</div>
            <div className="overview">hogehoge</div>
            <div className="technologyStack">hugahuga</div>
        </div>
    );
};
