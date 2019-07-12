import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';

import Burger from '../../components/Burger/Burger.jsx';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.jsx'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.3,
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
      purchasable: false,
      purchasing: false
    }
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    this.updatePurchaseStatus = this.updatePurchaseStatus.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.modalClosed = this.modalClosed.bind(this);
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
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

  purchaseContinueHandler() {
    alert('continue');
  }

  //handle show modal
  handlePurchase() {
    this.setState({
      purchasing: true
    })
  }

  //handle close modal when click on backdrop
  modalClosed() {
    this.setState({
      purchasing: false
    })
  }

  render() {
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.modalClosed}>
          <OrderSummary ingredients={this.state.ingredients}
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        modalClosed={this.modalClosed}
                        price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
                price={this.state.totalPrice}
                handleAddIngredient={this.handleAddIngredient}
                handleRemoveIngredient={this.handleRemoveIngredient}
                handlePurchase={this.handlePurchase}
                purchasable={this.state.purchasable} 
                />
      </Aux>
    );
  }
}

export default BurgerBuilder