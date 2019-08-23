import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.jsx'

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
          return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
          })
        })
        //concat the arrays using reduce
        .reduce((pre, cur) => {
          return pre.concat(cur)
        }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add ingredients</p>
    }
  return (
    <div className={style.Burger}>
      <BurgerIngredients type='bread-top'/>
        {transformedIngredients}
      <BurgerIngredients type='bread-bottom'/>
    </div>
  );
}



export default withRouter(Burger);