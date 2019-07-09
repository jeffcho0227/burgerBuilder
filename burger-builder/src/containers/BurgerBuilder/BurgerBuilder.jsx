import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';

class BurgerBuilder extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>BUild Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder