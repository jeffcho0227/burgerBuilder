import React from 'react';

import style from './Toolbar.css';
import Logo from '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx'

const Toolbar = props => {
  return (
  <header className={style.Toolbar}>
    <div>MENU</div>
    <div className={style.Logo}>
      <Logo />
    </div>
    <nav className={style.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
  )
};

export default Toolbar;