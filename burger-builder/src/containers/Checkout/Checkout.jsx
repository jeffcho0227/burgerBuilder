import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.jsx';
import ContactData from './ContactData/ContactData.jsx';

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


  checkoutCancelledHandler() {
    this.props.history.goBack();
  }

  checkoutContinuedHandler() {
    //replace the current route with this route
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    console.log(this.props)
    return(
      <div>
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
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    // price: state.totalPrice
  }
} 

export default connect(mapStateToProps)(Checkout);