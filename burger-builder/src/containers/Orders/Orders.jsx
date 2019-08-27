import React from 'react';
import Order from '../../components/Order/Order.jsx';
import axios from '../../axios-order.js';
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandling.jsx';
import * as actions from '../../store/actions/index.js';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner.jsx';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      loading: true
    }
  }

  componentDidMount() {
    this.props.onFetchOrders();
    // axios
    //   .get('/orders.json')
    //   .then(({ data }) => {

    //     let fetchOrders = [];
    //     for (let key in data) {
    //       fetchOrders.push({...data[key], id: key})
    //     }

    //     this.setState({
    //       loading: false,
    //       orders: fetchOrders
    //     })
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       loading: false
    //     })
    //   })
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map( order => (
        <Order 
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}/>
      ))
    }
    return(
      <div>
        {orders}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));