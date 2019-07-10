import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';

import Burger from '../../components/Burger/Burger.jsx';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.jsx';

const INGREDIENT_PRICES = {
  salad: 0.5,
  chees: 0.3,
  meat: 1.3,
  bacon: 1
}

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0, 
        cheese: 0,
        meat: 0
      },
      totalPrice: 3,
      purchasable: false
    }
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    this.updatePurchaseStatus = this.updatePurchaseStatus.bind(this);
  }

  updatePurchaseStatus(ingredients) {

    const sum = Object.keys(ingredients)
                .map(igKey => {
                  return ingredients[igKey]
                })
                .reduce((pre, cur) => {
                  return pre + cur;
                }, 0);
    this.setState({
      purchasable: sum > 0
    }, () => {
      console.log(this.state);
    });
  }

  handleAddIngredient(type) {
    console.log(type)
    let oldCount = this.state.ingredients[type];
    let updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = oldCount + 1;
    let priceAddition = INGREDIENT_PRICES[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice, 
      ingredients: updatedIngredients
    })
    this.updatePurchaseStatus(updatedIngredients);
  }

  handleRemoveIngredient(type) {
    let oldCount = this.state.ingredients[type];
    let updatedIngredients = {
      ...this.state.ingredients
    };
    if (updatedIngredients[type] > 0) {
      updatedIngredients[type] = oldCount - 1;
    }
    let priceSubtraction = INGREDIENT_PRICES[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - priceSubtraction;
    this.setState({
      totalPriceL: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseStatus(updatedIngredients);
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
                price={this.state.totalPrice}
                handleAddIngredient={this.handleAddIngredient}
                handleRemoveIngredient={this.handleRemoveIngredient}
                purchasable={this.state.purchasable} />
      </Aux>
    );
  }
}

export default BurgerBuilder