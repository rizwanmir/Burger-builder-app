import React, {Component} from 'react';
import Aux from '../../HOC/AuxFolder/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
    salad: 5,
    cheese: 7,
    bacon: 10,
    meat: 12
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 20,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients)  {
        const sum = Object.keys(ingredients)
        .map(igkeys => {
            return ingredients[igkeys];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingredients
        };
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingredients
        };
        updatedIngridients[type] = updatedCount;
        const priceDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinue = () => {
        alert('You continue!');
    }

render() {
    const disabledInfo = {
        ...this.state.ingredients
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinue}/>
                </Modal>
            <Burger ingredients = {this.state.ingredients} />
            <BuildControls
            ingredientAdded = {this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredientHandler}
            disabled={disabledInfo}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}/>
        </Aux>

        );
}

}

export default BurgerBuilder;