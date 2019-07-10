import React from 'react';
import style from './BuildControl.css';

const BuildControl = (props) => {
  return (
    <div className={style.BuildControl}>
      <div className={style.Label}>{props.label}</div>
      <button className={style.Less}
              onClick={() => props.handleRemoveIngredient(props.type)}>Less</button>
      <button className={style.More}
              onClick={() => props.handleAddIngredient(props.type)}>More</button>
    </div>
  )
}

export default BuildControl;