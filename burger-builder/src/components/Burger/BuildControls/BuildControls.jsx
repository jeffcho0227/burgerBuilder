import React from 'react';
import style from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.jsx';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
  return (
    <div className={style.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(control => {
        return <BuildControl 
                key={control.label} label={control.label} type={control.type} 
                handleAddIngredient={props.handleAddIngredient}
                handleRemoveIngredient={props.handleRemoveIngredient}/>
      })};
      <button 
          className={style.OrderButton}
          disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls;