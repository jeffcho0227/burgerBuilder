import React from 'react';

import style from './Auth.css';
import Input from '../../components/UI/Input/Input.jsx';
import Button from '../../components/UI/Button/Button.jsx';

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
      }  
    }
    this.checkValidity = this.checkValidity.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
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
                change={this.handleInputChange}
                
                />
    })

    

    return(
      <div className={style.Auth}>
        <form>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </div>
    )
  }
}

export default Auth;
