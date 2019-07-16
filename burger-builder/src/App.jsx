import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.jsx'
import Checkout from './containers/Checkout/Checkout.jsx'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Layout>
          {/* <BurgerBuilder />
          <Checkout /> */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;
