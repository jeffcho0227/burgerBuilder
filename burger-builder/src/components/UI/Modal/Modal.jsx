import React from 'react';
import style from './Modal.css';
import Aux from '../../../hoc/Aux.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';

const Modal = props => {
  console.log(props.children, 'this is props.children from modal')
  return (
    <Aux>
      <Backdrop show={props.show} modalClosed={props.modalClosed}/>
      <div className={style.Modal}
            style={{
              transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: props.show ? '1' : '0.5'
            }}>
        {props.children}
      </div>
    </Aux>
  )
}

export default Modal;