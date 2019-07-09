import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';

import Burger from '../../components/Burger/Burger.jsx';

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1, 
        cheese: 2,
        meat: 2
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