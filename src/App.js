import { useState } from 'react';
import TodoForm from './components/TodoForm';
import './index.css'
import TodoList from './components/TodoList';

function App() {
 
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos(currentTodos =>{ //in order to modify the data a new function has to be passed with a new variable to hold the new array. 
      return[
        ...currentTodos, // this will give a brand new array ...
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
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
   <TodoForm onSubmit={addTodo}/> 
   <h1 className='header'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
   </>
  );
}

export default App;
