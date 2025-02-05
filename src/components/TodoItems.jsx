import React from 'react'
import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import close from './Assets/close.png'
const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
      <div className="todoitemd-container">
        <img src={tick} alt="" />
        <div className="todoitems-text">
          {text}
        </div>
      </div>
      <img src={close} alt="" />
    </div>
  )
}

export default TodoItems