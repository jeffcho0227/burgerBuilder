import React from 'react';
import style from './Modal.css';
import Aux from '../../../hoc/Aux.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Aux>
      <Backdrop show={this.props.show} modalClosed={this.props.modalClosed}/>
      <div className={style.Modal}
            style={{
              transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: this.props.show ? '1' : '0.5'
            }}>
        {this.props.children}
      </div>
    </Aux>
    )
  }
}
