import React from 'react';
import Aux from '../../../HOC/AuxFolder/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingkey => {
            return <li key={ingkey}> {ingkey}: {props.ingredients[ingkey]} </li>
        }
        );

    return (
    <Aux>
        <h2>Your Order</h2>
        <p>Here is your selected items for your order</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)} SEK </strong></p>
        <p>Please confirm your order to checkout</p>
        <Button btnType ="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType ="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
    );
}

export default orderSummary;
