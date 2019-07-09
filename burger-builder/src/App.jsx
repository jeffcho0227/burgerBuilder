import React, { Component } from 'react';

import Layout from './components/layout/Layout.jsx'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.jsx'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
