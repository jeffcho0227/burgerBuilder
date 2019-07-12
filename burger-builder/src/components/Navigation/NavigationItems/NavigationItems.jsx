import React from 'react';
import style from './NavigationItems.css';
import NavigationItem from './NativagationItem/NavigationItem.jsx';

const NavigationItems = props => {
  return (
    <ul className={style.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul> 
  )
}

export default NavigationItems;