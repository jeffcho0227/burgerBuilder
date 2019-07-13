import React from 'react';
import style from './DrawerToggle.css';


const DrawerToggle = props => {
  return(
    <div className={style.DrawerToggle} onClick={props.drawerToggleClicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle;