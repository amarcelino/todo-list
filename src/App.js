import React, { useState } from 'react'
import uuidv4 from 'uuid/v4'
import './App.css'
// import TodoList from './components/todolist'

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
  return (

    <div>
      {console.log(todoList)}
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type='text'
          value={todo}
          placeholder='Digite ToDo here...'
          onChange={e => setTodo(e.target.value)}
        />
        <button>Add </button>
      </form>

      <ul>
        {
          todoList.map(e => (
            <li key={e.id}>{e.todo}</li>
          ))
        }
      </ul>

    </div>
  )
}

export default App
