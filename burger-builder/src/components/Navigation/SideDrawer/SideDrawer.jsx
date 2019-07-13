import React from 'react';

import Logo from '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import style from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/Aux.jsx';

const SideDrawer = (props) => {
  let attachedStyle = [style.SideDrawer, style.Close];
  if (props.show) {
    attachedStyle = [style.SideDrawer, style.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.show} 
                modalClosed={props.handleSideDrawerClose}
                />
      <div className={attachedStyle.join(' ')}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;