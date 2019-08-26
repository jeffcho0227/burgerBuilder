import React from 'react';
import style from './NavigationItems.css';
import NavigationItem from './NativagationItem/NavigationItem.jsx';

const NavigationItems = props => {
  return (
    <ul className={style.NavigationItems}>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/auth'>Authenitcate</NavigationItem>
    </ul> 
  )
}

export default NavigationItems;