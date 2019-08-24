import React from 'react';

import style from './Order.css';

const Order = (props) => {
  console.log(props)
  let ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      Name: ingredientName,
      Amount: props.ingredients[ingredientName]
    })
  }

  const ingredientOutput = ingredients.map((ig, idx) => {
    return <span className={style.IndivIngre} key={idx}>{ig.Name} ({ig.Amount})</span>
  })
  return(
    <div className={style.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default Order;