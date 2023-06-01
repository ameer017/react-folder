import { useState } from 'react'
import './App.css'
import Todo from './Component/Todo'
import TodoWrapper from './Component/TodoWrapper'

function App() {

  return (
    <div className="app">
      <Todo />
      <TodoWrapper />
    </div>
  )
}

export default App
