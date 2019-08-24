import React from 'react';
import style from './Input.css';

const Input = ( props ) => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input className={style.InputElement} 
                            {...props.elementConfig} 
                            value={props.value}
                            onChange={(e) => props.change(e, props.id)}/>;
      break;
    case ('textArea'):
      inputElement = <textarea className={style.InputElement}
                               {...props.elementConfig} 
                               value={props.value}
                               onChange={(e) => props.change(e, props.id)}/>
      break;
    case('select'):
      inputElement = (
        <select className={style.InputElement}
                value={props.value}
                onChange={(e) => props.change(e, props.id)}>
                {props.elementConfig.options.map((option, idx) => {
            return (
                <option key={idx} value={option.value}>{option.displayValue}</option>
              )
            })}
        </select>
      )
      break;
    default: 
      inputElement = <input className={style.InputElement} 
                            {...props.elemengtConfig} 
                            value={props.value}
                            onChange={(e) => props.change(e, props.id)}/>
  }

  return( 
    <div className={style.Input}>
      <label className={style.Label}>{ props.label }</label>
      {inputElement}
    </div>
  )
}

export default Input;