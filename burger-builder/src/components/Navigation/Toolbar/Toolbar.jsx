import React from 'react';

import style from './Toolbar.css';
import Logo from '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.jsx';

const Toolbar = props => {
  return (
  <header className={style.Toolbar}>
    <DrawerToggle drawerToggleClicked={props.drawerToggleClicked}/>
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