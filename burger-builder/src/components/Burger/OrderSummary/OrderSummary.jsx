import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.jsx';

export default class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillUpdate() {
    console.log('[OrderSummary will update]')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
                                    .map((igKey, i) => {
                                      return <li key={i}>
                                                <span style={{textTranform: 'capitalize'}}>{igKey}</span>
                                                : {this.props.ingredients[igKey]}
                                              </li>
                                    })
    return (
      <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{this.props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={this.props.modalClosed}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinueHandler}>CONTINUE</Button>
    </Aux>
    )
  }
};

