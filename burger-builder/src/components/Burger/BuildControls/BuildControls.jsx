import React from 'react';
import style from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.jsx';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meet'}
]

const BuildControls = props => {
  return (
    <div className={style.BuildControls}>
      {controls.map( control => {
        return <BuildControl key={control.label} label={control.label} />
      })};
    </div>
  )
}

export default BuildControls;