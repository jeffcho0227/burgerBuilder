import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';
import { connect } from 'react-redux';
import axios from '../../axios-order.js';

import Burger from '../../components/Burger/Burger.jsx';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.jsx'
import Spinner from '../../components/UI/Spinner/Spinner.jsx';
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling.jsx';
import * as burgerBuilderActions from '../../store/actions/index.js';

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      purchasing: false,
      loading: false
    }
    this.updatePurchaseStatus = this.updatePurchaseStatus.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.modalClosed = this.modalClosed.bind(this);
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
  }

  componentDidMount() {
    this.props.onInitIngredients();
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

  purchaseContinueHandler() {
    const queryParams = [];
    for (let i in this.props.ings) {
      console.log(encodeURIComponent(i), 'encode')
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
    price: state.totalPrice,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandling(BurgerBuilder, axios));  