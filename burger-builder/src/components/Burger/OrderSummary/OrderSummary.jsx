import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.jsx';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
                                  .map((igKey, i) => {
                                    return <li key={i}>
                                              <span style={{textTranform: 'capitalize'}}>{igKey}</span>
                                              : {props.ingredients[igKey]}
                                            </li>
                                  })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.modalClosed}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
    </Aux>
  )
};

export default OrderSummary;