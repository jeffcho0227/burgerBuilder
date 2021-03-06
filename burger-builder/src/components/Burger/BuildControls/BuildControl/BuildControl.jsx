import React from 'react';
import style from './BuildControl.css';

const BuildControl = (props) => {
  return (
    <div className={style.BuildControl}>
      <div className={style.Label}>{props.label}</div>
      <button className={style.Less}
              onClick={() => props.handleRemoveIngredient(props.type)}><strong>-</strong></button>
      <button className={style.More}
              onClick={() => props.handleAddIngredient(props.type)}><strong>+</strong></button>
    </div>
  )
}

export default BuildControl;