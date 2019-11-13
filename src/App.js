import React, { useState } from 'react'
import uuidv4 from 'uuid/v4'
import './App.css'
import { id } from 'postcss-selector-parser'

const App = () => {
  const [todo, setTodo] = useState('')
  const [done, setDone] = useState(false)
  const [todoList, setTodoList] = useState([])

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (!todo) return
    setTodoList([...todoList, { todo, done, id: uuidv4() }])
    setTodo('')
  }

  const markTodo = (itemTodo, index) => {
    // const obj = todoList.find((item) => item.id === itemTodo.id)
    todoList[index].done = !todoList[index].done

    setTodoList([...todoList])
  }

  return (

    <div>
      <h1>V1</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type='text'
          value={todo}
          placeholder='Digite ToDo here...'
          onChange={e => setTodo(e.target.value)}
        />
        <button>Add </button>
        <br />
        <label htmlFor='Done' style={{ cursor: 'pointer' }}>
          <input type='checkbox' onChange={e => setDone(e.target.checked)} id='Done' />
          Done
        </label>
      </form>

      <ul>
        {
          todoList.map((e, i) => (
            <li key={e.id}>
              <a href='#' onClick={() => markTodo(e, i)}>
                {!e.done ? <span>{e.todo}</span> : <strike>{e.todo}</strike>}
              </a> <span>x</span>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default App
