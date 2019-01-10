import React, {Component} from 'react';
import CostAdd from "../../components/CostAdd/CostAdd";
import CostList from "../../components/CostList/CostList";

class CostsManager extends Component {
    state = {
        costTitle: '',
        costPrice: '',
        costList: [
            {id: '2019-01-10T11:30:17.725Z', title: 'qwefwqef', price: 20}
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
            this.setState({costPrice: ''})
        }

    };

    addCost = () => {
        if (this.state.costTitle && this.state.costPrice) {
            const date = new Date();
            const costList = [...this.state.costList];
            const newConst = {
                id: date.toISOString(),
                title: this.state.costTitle,
                price: this.state.costPrice
            };

            costList.push(newConst);

            this.setState({
                costList,
                costTitle: '',
                costPrice: ''
            });
        } else {
            alert('All fields required!');
        }
    };

    removeCost = id => {
        const costList = [...this.state.costList];
        const costIndex = costList.findIndex(cost => cost.id === id);

        costList.splice(costIndex, 1);
        this.setState({costList});
    };

    render() {
        return (
            <div className="container">
                <CostAdd
                    currentTitle={this.state.costTitle}
                    currentPrice={this.state.costPrice}
                    onInputTitle={(event) => this.inputCostTitle(event)}
                    onInputPrice={(event) => this.inputCostPrice(event)}
                    addCost={this.addCost}
                />
                <CostList
                    list={this.state.costList}
                    remove={this.removeCost}
                />
            </div>
        )
    }
}

export default CostsManager;
