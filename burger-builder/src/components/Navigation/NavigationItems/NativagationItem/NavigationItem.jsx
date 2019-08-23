import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavigationItem.css'

const NavigationItem = props => {
  return (
    <ul>
      <li className={style.NavigationItem}>
        <NavLink to={props.link} 
                 exact={props.exact}
                 activeClassName={style.active}>{props.children}</NavLink>
      </li>
    </ul>
  )
}

export default NavigationItem;