import React from 'react';
import style from './Logo.css';

import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = props => {
  return (
    <div className={style.Logo} style={{height: props.height}}>
      <img src={burgerLogo} alt="burger-logo"/>
    </div>
  )
}

export default Logo;