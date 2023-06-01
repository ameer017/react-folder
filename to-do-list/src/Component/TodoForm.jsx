import React, { useState } from 'react'
import './Todo.css'

export default function TodoForm() {
    const [value, setValue] = useState('')
  return (

    <div className="container">

        <h2>To-Do-List App</h2>

        <form className='toDoForm'>
            <input type='text' placeholder='what is next to do?' className='forText' onChange={(e) => {console.log(e.target.value)}}/>

            <button type='submit' className='toDoBtn'>Add Task</button>
        </form>
    </div>
  )
}
