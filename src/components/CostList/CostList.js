import React from 'react';
import Cost from "./Cost/Cost";

const CostList = props => {
    return (
        <div className="cost-list">
            {props.list.map((cost, index) => (
                <Cost
                    key={index}
                    title={cost.title}
                    price={cost.price}
                />
            ))}
        </div>
    )
};

export default CostList;