import React from 'react';

import style from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.jsx'

const Burger = (props) => {
  return (
    <div className={style.Burger}>
      <BurgerIngredients type='bread-top'/>
      <BurgerIngredients type='cheese'/>
      <BurgerIngredients type='meat'/>
      <BurgerIngredients type='bread-bottom'/>
    </div>
  );
}

export default Burger;