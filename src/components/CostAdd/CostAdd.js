import React from 'react';

const CostAdd = props => {
    return (
        <div className="cost-add-form">
            <input onChange={props.inputTitle} type="text"/>
            <input onChange={props.inputPrice} type="number"/>
            <button onClick={props.addCost}>Add</button>
        </div>
    )
};

export default CostAdd;