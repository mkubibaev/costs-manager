import React, {Component} from 'react';
import CostAdd from "../../components/CostAdd/CostAdd";
import CostList from "../../components/CostList/CostList";

class CostsManager extends Component {
    state = {
        costTitle: '',
        costPrice: 0,
        costList: [
            {title: 'qwefwqef', price: 20},
            {title: 'dfqwefwqef', price: 40}
        ]
    };

    inputCostTitle = event => {
        this.setState({costTitle: event.target.value});
    };

    inputCostPrice = event => {
        const costPriceStr = event.target.value;
        const costPriceNum = +costPriceStr;

        if (costPriceNum) {
            this.setState({costPrice: costPriceNum});
        } else {
            this.setState({costPrice: 0})
        }

    };

    addCost = () => {
        if (this.state.costTitle && this.state.costPrice > 0) {
            const costList = [...this.state.costList];
            const newConst = {
                title: this.state.costTitle,
                price: this.state.costPrice
            };

            costList.push(newConst);

            this.setState({
                costList,
                costTitle: '',
                costPrice: 0
            });
        } else {
            alert('All fields required!');
        }



    };

    render() {
        return (
            <div className="container">
                <CostAdd
                    inputTitle={(event) => this.inputCostTitle(event)}
                    inputPrice={(event) => this.inputCostPrice(event)}
                    addCost={this.addCost}
                />
                <CostList list={this.state.costList}/>
            </div>
        )
    }
}

export default CostsManager;
