import { useState } from 'react';
import './index.css'

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault()   //prevents page refresh in the Form 


    setTodos(currentTodos =>{ //in order to modify the data a new function has to be passed with a new variable to hold the new array. 
      return[
        ...currentTodos, // this will give a brand new array ...
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })

    setNewItem('')
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    }
      )
  }
   function deleteTodo(id){
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id) // filtering the todos and if the todo that we are calling is not the same one as the id we keep it otherwise we delete it. 
      } )
    }

  return (
    <>
   <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label><br/>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/><br/>
        <button className='btn'>Add</button>
      </div>
      
   </form>
   <h1 className='header'>Todo List</h1>
   <ul>
    {todos.map(todo =>{
      return(
        <li key={todo.id}>
        <label>
          <input type='checkbox' checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
          {todo.title}
        </label>
        <button className='btn danger-delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
        {/* make sure we set a fuction to call the function deleteTodo if not it wil just delete itself.  */}
      </li>
      )
    })}
     
   </ul>
   </>
  );
}

export default App;
