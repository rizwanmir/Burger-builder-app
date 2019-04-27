import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transforedingredient = Object.keys(props.ingredients).map(ingkey => {
        return [...Array(props.ingredients[ingkey])].map((_, i) => {
            return <BurgerIngredient key={ingkey + i} type={ingkey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    
if(transforedingredient.length === 0) {
transforedingredient = <p>Please add ingredients into your burger</p>
}
    return (
        <div className = {classes.Burger} >
        <BurgerIngredient type="bread-top" />
        {transforedingredient}
        <BurgerIngredient type="bread-bottom" />
        

        </div>
    );
};

export default burger;