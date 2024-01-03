import React from 'react'

const TodoItem = (completed, id, title, toggleTodo, deleteTodo) => {
  return (
    <li>
    <label>
      <input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
      {title}
    </label>
    <button className='btn danger-delete' onClick={() => deleteTodo(id)}>Delete</button>
    {/* make sure we set a fuction to call the function deleteTodo if not it wil just delete itself.  */}
  </li>
  )
}

export default TodoItem