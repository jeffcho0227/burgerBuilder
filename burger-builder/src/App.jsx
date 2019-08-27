import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.jsx'
import Checkout from './containers/Checkout/Checkout.jsx'
import Orders from './containers/Orders/Orders.jsx';
import Auth from './containers/Auth/Auth.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;
