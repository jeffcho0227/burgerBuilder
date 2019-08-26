import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger.jsx';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.jsx'
import axios from '../../axios-order.js';
import Spinner from '../../components/UI/Spinner/Spinner.jsx';
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling.jsx';
import * as actionTypes from '../../store/action.js';

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      // ingredients: null,
      // totalPrice: 3,
      // purchasable: false,
      purchasing: false,
      loading: false
    }
    // this.handleAddIngredient = this.handleAddIngredient.bind(this);
    // this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    this.updatePurchaseStatus = this.updatePurchaseStatus.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.modalClosed = this.modalClosed.bind(this);
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
  }

  componentDidMount() {
    // axios
    // .get('https://react-burgerbuilder-app-7d0f6.firebaseio.com/Ingredients.json')
    // .then( ({data}) => {
    //   console.log(data)
    //   this.setState({
    //     ingredients: data
    //   })
    // })
    // .catch(err => console.error(err));
  }

  updatePurchaseStatus(ingredients) {

    const sum = Object.keys(ingredients)
                .map(igKey => {
                  return ingredients[igKey]
                })
                .reduce((pre, cur) => {
                  return pre + cur;
                }, 0);
    return sum > 0;
  }

  // handleAddIngredient(type) {

  //   let oldCount = this.props.ings[type];
  //   let updatedIngredients = {
  //     ...this.props.ings
  //   };
  //   updatedIngredients[type] = oldCount + 1;
  //   let priceAddition = INGREDIENT_PRICES[type];
  //   let oldPrice = this.state.totalPrice;
  //   let newPrice = oldPrice + priceAddition;
  //   this.setState({
  //     totalPrice: newPrice, 
  //     ingredients: updatedIngredients
  //   })
  //   this.updatePurchaseStatus(updatedIngredients);
  // }

  // handleRemoveIngredient(type) {
  //   let oldCount = this.props.ings[type];
  //   let updatedIngredients = {
  //     ...this.props.ings
  //   };
  //   if (updatedIngredients[type] > 0) {
  //     updatedIngredients[type] = oldCount - 1;
  //   }
  //   let priceSubtraction = INGREDIENT_PRICES[type];
  //   let oldPrice = this.state.totalPrice;
  //   let newPrice = oldPrice - priceSubtraction;
  //   this.setState({
  //     totalPriceL: newPrice,
  //     ingredients: updatedIngredients
  //   })
  //   this.updatePurchaseStatus(updatedIngredients);
  // }

  purchaseContinueHandler() {
    const queryParams = [];
    for (let i in this.props.ings) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]));
    }

    queryParams.push('price=' + this.state.totalPrice);
    
    const queryString = queryParams.join('&');
    console.log(queryString);
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })

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
    const disabledInfo = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    let burger = <Spinner />
    console.log(this.props, 'here')
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings}/>
          <BuildControls 
                  price={this.props.price}
                  handleAddIngredient={this.props.onIngredientAdded}
                  handleRemoveIngredient={this.props.onIngredientRemoved}
                  handlePurchase={this.handlePurchase}
                  purchasable={this.updatePurchaseStatus(this.props.ings)} 
                  />
        </Aux>
      );

      orderSummary = <OrderSummary ingredients={this.props.ings}
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        modalClosed={this.modalClosed}
                        price={this.props.price}/>
    }
    console.log(this.props)
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.modalClosed}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandling(BurgerBuilder, axios));  