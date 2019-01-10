import React from 'react';
import Cost from "./Cost/Cost";

const CostList = props => {
    return (
        <div className="cost-list">
            {props.list.map((cost) => (
                <Cost
                    key={cost.id}
                    title={cost.title}
                    price={cost.price}
                    remove={() => props.remove(cost.id)}
                />
            ))}
        </div>
    )
};

export default CostList;