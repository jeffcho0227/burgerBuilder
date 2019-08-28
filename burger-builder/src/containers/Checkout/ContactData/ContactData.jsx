import React from 'react';
import Button from '../../../components/UI/Button/Button.jsx';
import style from './ContactData.css';
import axios from '../../../axios-order.js';
import Spinner from '../../../components/UI/Spinner/Spinner.jsx';
import Input from '../../../components/UI/Input/Input.jsx';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandling/withErrorHandling.jsx';
import * as actions from '../../../store/actions/index.js';

class ContactData extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      orderForm: {
          name: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Name'
            }, 
            value: '',
            validation: {
              require: true
            }, 
            valid: false
          },
          street: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Street'
            }, 
            value: '',
            validation: {
              require: true
            },
            valid: false
          },
          zipCode: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Zip Code'
            }, 
            value: '',
            validation: {
              require: true,
              minLen: 5
            },
            valid: false
          },
          country: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Country'
            }, 
            value: '',
            validation: {
              require: true
            },
            valid: false
          },
          email: {
            elementType: 'input',
            elementConfig: {
              type: 'email',
              placeholder: 'Email'
            }, 
            value: '',
            validation: {
              require: true
            },
            valid: false
          },
          delieverMethod: {
            elementType: 'select',
            elementConfig: {
              options: [
                {value: 'fatest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
              ]
            },
            validation: {},
            value: 'fatest'
          }

      },
    };
    this.orderHandler = this.orderHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
  }

  checkValidity(value, rules) {
    let isValid = true;
    
    if (rules.require) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLen) { 
      isValid = value.length >= rules.minLen && isValid;
    }

    return isValid;
  }

  handleInputChange(e, id) {
    let updatedForm = {
      ...this.state.orderForm
    };

    let updatedFormTarget = {
      ...updatedForm[id]
    };

    updatedFormTarget.value = e.target.value;
    updatedFormTarget.valid = this.checkValidity(updatedFormTarget.value, updatedFormTarget.validation)
    updatedForm[id] = updatedFormTarget;

    this.setState({
      orderForm: updatedForm
    })
  }

  orderHandler (e) {
    e.preventDefault();

    let formData = {};

    for (let formDataId in this.state.orderForm) {
      formData[formDataId] = this.state.orderForm[formDataId].value
    }

    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData
    };

    this.props.onOrderBurger(order);
  }

  render() {
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }


    let form = (
        <form onSubmit={this.orderHandler}>
          {formElementsArray.map((formElement) => {
            return <Input elementType={formElement.config.elementType} 
                          elementConfig={formElement.config.elementConfig}
                          value={formElement.config.value}
                          key={formElement.id}
                          id={formElement.id}
                          shouldValidate={formElement.config.validation}
                          invalid={!formElement.config.valid}
                          change={this.handleInputChange}/>
          })}
          <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />
    }
    return(
      <div className={style.ContactData}>
        <h4>Enter your contact</h4>
        {form}
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(withErrorHandler(ContactData, axios));