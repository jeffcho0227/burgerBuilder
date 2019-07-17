import React from 'react';

import Burger from '../../Burger/Burger.jsx';
import Button from '../../UI/Button/Button.jsx';
import style from './CheckoutSummary.css';

const CheckoutSummary = props => {
  return (
    <div className={style.CheckoutSummary}>
      <h1>We hope if taste well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger"
              clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success"
              clicked={props.chceckoutContinue}>CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummary;