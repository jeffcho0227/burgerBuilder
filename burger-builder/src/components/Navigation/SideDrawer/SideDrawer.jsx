import React from 'react';

import Logo from '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import style from './SideDrawer.css';

const SideDrawer = props => {

  return (
    <div className={style.SideDrawer}>
      <div className={style.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;