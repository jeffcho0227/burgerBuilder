import React from 'react';

import style from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.jsx'

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
          return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
          })
        })
  return (
    <div className={style.Burger}>
      <BurgerIngredients type='bread-top'/>
      {/* <BurgerIngredients type='cheese'/>
      <BurgerIngredients type='meat'/> */}
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom'/>
    </div>
  );
}

export default Burger;