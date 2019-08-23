import React from 'react';
import Order from '../../components/Order/Order.jsx';
import axios from '../../axios-order.js';
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandling.jsx';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      loading: true
    }
  }

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(({ data }) => {

        let fetchOrders = [];
        for (let key in data) {
          fetchOrders.push({...data[key], id: key})
        }

        this.setState({
          loading: false,
          orders: fetchOrders
        })
      })
      .catch((err) => {
        this.setState({
          loading: false
        })
      })
  }

  render() {
    return(
      <div>
        { this.state.orders.map((order) => {
            return <Order 
                      key={order.id}
                      ingredients={order.ingredients}
                      price={order.price}/>
          }) }
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);