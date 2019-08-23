import React from 'react';
import Button from '../../../components/UI/Button/Button.jsx';
import style from './ContactData.css';
import axios from '../../../axios-order.js';
import Spinner from '../../../components/UI/Spinner/Spinner.jsx';

class ContactData extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      address: {
        street: '',
        postalCode: ''
      },
      loading: false
    };
    this.orderHandler = this.orderHandler.bind(this);
  }

  orderHandler (e) {
    e.preventDefault();
    console.log(this.props.ingredients);
    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Jeff C',
        address: {
          street: '123 testtest',
          zipCode: '48823',
          country: 'USA'
        },
        email: 'test@gmail.com'
      },
      delieverMethod: 'fastest'
    };

    axios
      .post('/orders.json', order)
      .then( data => {
        this.setState({
          loading: false
        })
        this.props.history.push('/');
      } )
      .catch( err => {
        this.setState({
          loading: false
        })
      });
  }

  render() {
    let form = (
        <form>
          <input className={style.Input} type="text" name="name" placeholder="Name"/>
          <input className={style.Input} type="email" name="email" placeholder="email"/>
          <input className={style.Input} type="text" name="street" placeholder="Street"/>
          <input className={style.Input} type="text" name="postalCode" placeholder="postalCode"/>
          <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
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

export default ContactData;