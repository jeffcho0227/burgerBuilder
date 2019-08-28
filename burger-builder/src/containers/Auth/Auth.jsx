import React from 'react';

import style from './Auth.css';
import Input from '../../components/UI/Input/Input.jsx';
import Button from '../../components/UI/Button/Button.jsx';
import * as actions from '../../store/actions/index.js';
import { connect } from 'react-redux';


class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Mail Address'
          },
          value: '',
          validation: {
            required: true,
            isEmail: true
          }, 
          valid: false,
          touched: false
        }, 
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password'
          },
          value: '',
          validation: {
            required: true,
            minLength: 6
          },  
          valid: false,
          touched: false
        }
      },
      isSignup: true  
    }
    this.checkValidity = this.checkValidity.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.switchAuthModeHandler = this.switchAuthModeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
  }

  switchAuthModeHandler() {
    this.setState(prevState => {
      return {isSignup: !prevState.isSignup}
    })
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


  inputChangedHandler(event, controlName) {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName])
      }
    }
    this.setState({
      controls: updatedControls
    })
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    const form = formElementsArray.map(formElement => {
      return <Input 
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                id={formElement.id}
                shouldValidate={formElement.config.validation}
                invalid={!formElement.config.valid}
                change={this.inputChangedHandler}
                
                />
    })

    

    return(
      <div className={style.Auth}>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
        <Button 
          clicked={this.switchAuthModeHandler}
          btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
      </div>
    )
  };
};

// const mapStateToProps = state => {
//   return {
    
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(null, mapDispatchToProps)(Auth);
