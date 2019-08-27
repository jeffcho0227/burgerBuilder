import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.jsx';
import ContactData from './ContactData/ContactData.jsx';
import * as actions from '../../store/actions/index.js';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //   ingredients: null,
    //   price: 0
    // }
    this.checkoutCancelledHandler = this.checkoutCancelledHandler.bind(this);
    this.checkoutContinuedHandler = this.checkoutContinuedHandler.bind(this);
  }

  //before rendering the child, already have access the props
  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search)
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] =+ param[1];
  //     }
  //   }
  //   this.setState({
  //     ingredients: ingredients,
  //     totalPrice: price
  //   })
  // }

  componentDidMount () {
    this.props.onInitPurchase();
  }


  checkoutCancelledHandler() {
    this.props.history.goBack();
  }

  checkoutContinuedHandler() {
    //replace the current route with this route
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to="/"/>
    if (this.props.ings) {
      console.log(this.props.purcahsed, 'in if statement');
      const purchasedRedirect = this.props.purchased ? <Redirect to="/auth" /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary ingredients={this.props.ings}
                            checkoutCancelled={this.checkoutCancelledHandler}
                            chceckoutContinue={this.checkoutContinuedHandler}/>
          <Route path={this.props.match.url + '/contact-data'} 
                  //redner method in the route can pass the ingredients to contactData Component
                //  render={(props) => {return <ContactData ingredients={this.props.ings} price={this.props.totalPrice} {...props}/>}}
                component={ContactData}/>

        </div>
      )
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purcahsed: state.order.purchased
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);