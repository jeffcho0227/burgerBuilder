import React from 'react';
import style from './Backdrop.css';

const Backdrop = (props) => {
  return (
    props.show ? <div className={style.Backdrop} onClick={props.modalClosed}></div> : null
  )
}

export default Backdrop