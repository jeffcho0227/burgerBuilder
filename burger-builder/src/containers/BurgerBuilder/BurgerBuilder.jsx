import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';

import Burger from '../../components/Burger/Burger.jsx';

class BurgerBuilder extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Aux>
        <Burger />
        <div>BUild Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder