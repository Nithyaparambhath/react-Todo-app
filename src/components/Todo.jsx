import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems'

let count = 0

const Todo = () => {
  const [todos,setTodos] =useState([])
  const inputRef = useRef(null)

  const addTodo = ()=>{
    setTodos([...todos,{no:count++,text:inputRef.current.value, display:""}])
   
    inputRef.current.value = ""
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
  },[])

  useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
    }, 100);
  },[todos])
  
  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input type="text" ref={inputRef} placeholder='Add Your Task' className='todo-input' />
        <div onClick={()=>{addTodo()}} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item,index)=>(
          <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Todo