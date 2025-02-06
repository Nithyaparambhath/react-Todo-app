import React from 'react'
import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import close from './Assets/close.png'
import nottick from './Assets/not-tick.png'

const TodoItems = ({no,display,text,setTodos}) => {

  const toggle = (i)=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    for(i=0;i<data.length;i++)
    {
      if(data[i].no === no){
        if(data[i].display===""){
          data[i].display = "line-through"
        }else{
          data[i].display = ""
        }
        break;
      }
    }
    setTodos(data)
  }

  const deleteBtn = (no)=>{
    console.log(no);
    
   let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((item)=>item.no!==no)
    setTodos(data)

    
  }
  return (
    <div className='todoitems'>
      <div className="todoitemd-container" onClick={()=>{toggle(no)}}>
      {display===""?<img src={nottick} alt=""/>:<img src={tick} alt="" /> }
        <div className="todoitems-text">
          {text}
        </div>
      </div>
      <img onClick={()=>{deleteBtn(no)}} src={close} alt="" />
    </div>
  )
}

export default TodoItems