import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal.jsx';
import Aux from '../Aux.jsx';

// import axios from '../../axios-order.js';


const withErrorHandling = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      }
      this.errorConfirmHandler = this.errorConfirmHandler.bind(this);
    }

    componentDidMount() {
      console.log('withErrorHandling')
      axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      })

      axios.interceptors.response.use(null, error => {
        this.setState({
          error: error
        });

      });
    }

    errorConfirmHandler() {
      this.setState({
        error: null
      })
    }

    render () {
      return (
        <Aux> 
          <Modal show={this.state.error}
                modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
            
          </Modal> 
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandling