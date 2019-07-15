import React from 'react';
import style from './Modal.css';
import Aux from '../../../hoc/Aux.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate () {
    console.log('[Modal] willUpdate')
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
};
