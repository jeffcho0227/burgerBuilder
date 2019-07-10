import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';

import Burger from '../../components/Burger/Burger.jsx';

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0, 
        cheese: 0,
        meat: 0
      }
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>BUild Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder